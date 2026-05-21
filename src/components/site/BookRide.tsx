import { useMemo, useState } from "react";
import { Calculator, Send, Info } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";

const ADMIN_WA = "918078633912";

function calcFare(km: number) {
  if (!km || km <= 0) return 0;
  let fare = km <= 5 ? km * 10 : 5 * 10 + (km - 5) * 8;
  if (fare < 50) fare = 50;
  return Math.round(fare);
}

const inputCls = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/70">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

export function BookRide() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [km, setKm] = useState<string>("");
  const [fare, setFare] = useState<string>("");

  const kmNum = parseFloat(km) || 0;
  const minFare = useMemo(() => calcFare(kmNum), [kmNum]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !pickup || !drop || !kmNum) {
      toast.error(t.book.reqName);
      return;
    }
    if (mobile.length < 10) { toast.error("Mobile number invalid"); return; }
    const finalFare = parseInt(fare) || minFare;
    if (finalFare < minFare) {
      toast.error(`${t.book.fareErr}${minFare}`);
      return;
    }
    const msg =
      `New Ride Request 🚴‍♂️\n\n` +
      `Name: ${name}\n` +
      `Mobile: ${mobile}\n` +
      `Distance: ${kmNum} km\n` +
      `Fare: ₹${finalFare}\n\n` +
      `Pickup: ${pickup}\n` +
      `Drop: ${drop}`;
    window.open(`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="book" className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.book.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">{t.book.title}</h2>
          <div className="mt-8 rounded-3xl bg-gradient-brand text-primary-foreground p-6 shadow-lift">
            <div className="flex items-center gap-3">
              <Calculator className="size-6" />
              <div className="text-sm font-semibold opacity-90">{t.book.calculated}</div>
            </div>
            <div className="mt-3 text-5xl font-extrabold">₹{minFare}</div>
            <div className="mt-2 text-xs opacity-80">≤ 5km × ₹10 · then ₹8/km · min ₹50</div>
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-7 rounded-3xl bg-card border border-border p-6 md:p-8 shadow-lift">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={t.book.name}>
              <input className={inputCls} placeholder={t.book.namePh} value={name} onChange={(e) => setName(e.target.value)} />
            </Field>
            <Field label={t.book.mobile}>
              <input type="tel" maxLength={10} className={inputCls} placeholder={t.book.mobilePh} value={mobile} onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))} />
            </Field>
            <Field label={t.book.pickup}>
              <input className={inputCls} placeholder={t.book.pickupPh} value={pickup} onChange={(e) => setPickup(e.target.value)} />
            </Field>
            <Field label={t.book.drop}>
              <input className={inputCls} placeholder={t.book.dropPh} value={drop} onChange={(e) => setDrop(e.target.value)} />
            </Field>
            <div className="sm:col-span-2">
              <Field label={t.book.distance}>
                <input type="number" min={0} step="0.1" className={inputCls} placeholder={t.book.distancePh} value={km} onChange={(e) => setKm(e.target.value)} />
              </Field>
              <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5"><Info className="size-3.5" />{t.book.hint}</p>
            </div>
            <div className="sm:col-span-2">
              <Field label={`${t.book.yourFare} (min ₹${minFare || 50})`}>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                  <input
                    type="number"
                    className={inputCls + " pl-8"}
                    placeholder={t.book.farePh}
                    value={fare}
                    onChange={(e) => setFare(e.target.value)}
                  />
                </div>
              </Field>
              {fare && parseInt(fare) < minFare && (
                <p className="mt-2 text-xs text-destructive font-semibold">{t.book.fareErr}{minFare}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-brand text-primary-foreground font-bold text-base shadow-lift hover:scale-[1.01] active:scale-[0.99] transition"
          >
            <Send className="size-4" /> {t.book.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { toast } from "sonner";

const ADMIN_WA = "918078633912";

export function Contact() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) { toast.error("Please fill all fields"); return; }
    const text = `Hello Bike Seva 👋\n\nName: ${name}\nMessage: ${message}`;
    window.open(`https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputCls = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">{t.contact.kicker}</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">{t.contact.title}</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md">{t.contact.desc}</p>

          <div className="mt-8 space-y-3">
            <a href={`tel:+91${ADMIN_WA.slice(2)}`} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card hover:border-primary transition">
              <span className="size-12 rounded-xl bg-primary/10 text-primary grid place-items-center"><Phone className="size-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">{t.contact.call}</div>
                <div className="font-bold">+91 80786 33912</div>
              </div>
            </a>
            <a href={`https://wa.me/${ADMIN_WA}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-card hover:border-primary transition">
              <span className="size-12 rounded-xl bg-whatsapp/15 text-whatsapp grid place-items-center"><MessageCircle className="size-5" /></span>
              <div>
                <div className="text-xs text-muted-foreground">{t.contact.whatsapp}</div>
                <div className="font-bold">+91 80786 33912</div>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-lift space-y-4">
          <label className="block">
            <span className="text-xs font-semibold text-foreground/70">{t.contact.name}</span>
            <input className={inputCls + " mt-1.5"} placeholder={t.contact.namePh} value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-foreground/70">{t.contact.message}</span>
            <textarea className={inputCls + " mt-1.5 min-h-32 resize-none"} placeholder={t.contact.messagePh} value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-brand text-primary-foreground font-bold shadow-lift hover:scale-[1.01] transition">
            <Send className="size-4" /> {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
}

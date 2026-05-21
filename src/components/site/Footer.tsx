import { Bike } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-bold">
          <span className="size-8 rounded-lg bg-gradient-brand text-primary-foreground grid place-items-center">
            <Bike className="size-4" />
          </span>
          Bike<span className="text-primary">Seva</span>
        </div>
        <a
          href="https://techrhym.com/"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground hover:text-primary transition"
        >
          {t.footer.dev}
        </a>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Bike Seva</div>
      </div>
    </footer>
  );
}

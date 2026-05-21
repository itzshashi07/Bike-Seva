import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/lib/i18n";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { BookRide } from "@/components/site/BookRide";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bike Seva — Book Bike Rides in Your Village" },
      { name: "description", content: "Fast, affordable & local bike ride booking service for rural India. Book trusted local captains in minutes." },
      { property: "og:title", content: "Bike Seva — Rural Bike Booking" },
      { property: "og:description", content: "Fast, affordable & local transport service for villages across India." },
    ],
  }),
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <About />
          <BookRide />
          <Services />
          <Contact />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </I18nProvider>
  );
}

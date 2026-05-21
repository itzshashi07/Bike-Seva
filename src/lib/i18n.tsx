import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

const dict = {
  en: {
    nav: { home: "Home", about: "About", book: "Book Now", contact: "Contact", services: "Explore Services" },
    hero: {
      tag: "Trusted by villages across India",
      title: "Book Bike Rides in Your Village 🚴‍♂️",
      subtitle: "Fast, Affordable & Local Transport Service",
      cta1: "Book Ride",
      cta2: "Become a Captain",
      stat1: "Local Captains",
      stat2: "Villages Served",
      stat3: "Min. Fare",
    },
    about: {
      kicker: "About Bike Seva",
      title: "Built for Bharat, powered by your neighbours",
      desc: "Bike Seva brings reliable two-wheeler transport to rural India. We connect riders with verified local captains so you can reach the market, school, or station in minutes — at a fair, honest price.",
      f1t: "Affordable Rides", f1d: "Starting at just ₹50. No surge, no surprises.",
      f2t: "Fast Service", f2d: "Captains arrive within minutes from your own village.",
      f3t: "Local Captains", f3d: "Earnings stay in your community. We empower locals.",
    },
    book: {
      kicker: "Book a Ride",
      title: "Tell us your trip — we'll handle the rest",
      name: "Full Name", namePh: "Shashi Kumar",
      mobile: "Mobile Number", mobilePh: "10-digit mobile",
      pickup: "Pickup Location", pickupPh: "e.g. Dangwar",
      drop: "Drop Location", dropPh: "e.g. Japla",
      distance: "Distance (km)", distancePh: "Enter distance (check via Google Maps)",
      hint: "Check distance from Google Maps and enter KM",
      calculated: "Calculated Fare",
      yourFare: "Your Fare",
      farePh: "Enter genuine price to get ride",
      fareErr: "Fare must be at least ₹",
      submit: "Book Now on WhatsApp",
      reqName: "Please enter all required details.",
    },
    services: {
      kicker: "More from Bike Seva",
      title: "Explore other services",
      items: [
        { t: "Food Delivery Online", d: "Hot meals delivered to your door." },
        { t: "Medicine Online", d: "Essential medicines, same-day delivery." },
        { t: "Store Online", d: "Order groceries from local kirana stores." },
        { t: "Website Banwaye", d: "Get a professional website for your business." },
        { t: "Automation Bot Services", d: "WhatsApp & business automation bots." },
      ],
    },
    contact: {
      kicker: "Contact Us",
      title: "We're here to help",
      desc: "Reach out anytime — our team responds on WhatsApp within minutes.",
      call: "Call us",
      whatsapp: "Chat on WhatsApp",
      name: "Your Name", namePh: "Your full name",
      message: "Message", messagePh: "How can we help?",
      send: "Send via WhatsApp",
    },
    footer: { dev: "Developed by @Shashi Kumar" },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", book: "बुक करें", contact: "संपर्क", services: "अन्य सेवाएं" },
    hero: {
      tag: "भारत के गाँवों का भरोसा",
      title: "अपने गाँव में बाइक राइड बुक करें 🚴‍♂️",
      subtitle: "तेज़, सस्ती और लोकल परिवहन सेवा",
      cta1: "राइड बुक करें",
      cta2: "कैप्टन बनें",
      stat1: "लोकल कैप्टन",
      stat2: "गाँवों में सेवा",
      stat3: "न्यूनतम किराया",
    },
    about: {
      kicker: "बाइक सेवा के बारे में",
      title: "भारत के लिए बना, आपके पड़ोसियों द्वारा संचालित",
      desc: "बाइक सेवा ग्रामीण भारत में भरोसेमंद टू-व्हीलर परिवहन लाता है। हम सत्यापित लोकल कैप्टनों से जोड़ते हैं ताकि आप कुछ ही मिनटों में बाज़ार, स्कूल या स्टेशन पहुँच सकें — एक ईमानदार दाम पर।",
      f1t: "सस्ती राइड्स", f1d: "केवल ₹50 से शुरू। कोई सर्ज नहीं।",
      f2t: "तेज़ सेवा", f2d: "आपके गाँव से कुछ ही मिनटों में कैप्टन।",
      f3t: "लोकल कैप्टन", f3d: "कमाई आपके समुदाय में रहती है।",
    },
    book: {
      kicker: "राइड बुक करें",
      title: "अपनी यात्रा बताइए — बाकी हम संभालेंगे",
      name: "पूरा नाम", namePh: "शशि कुमार",
      mobile: "मोबाइल नंबर", mobilePh: "10 अंकों का नंबर",
      pickup: "पिकअप गाँव", pickupPh: "जैसे दंगवार",
      drop: "ड्रॉप गाँव", dropPh: "जैसे जपला",
      distance: "दूरी (किमी)", distancePh: "दूरी दर्ज करें (Google Maps से देखें)",
      hint: "Google Maps से दूरी देखकर KM दर्ज करें",
      calculated: "गणना किया गया किराया",
      yourFare: "आपका किराया",
      farePh: "राइड पाने के लिए उचित दाम दर्ज करें",
      fareErr: "किराया कम से कम ₹ होना चाहिए ",
      submit: "व्हाट्सएप पर बुक करें",
      reqName: "कृपया सभी विवरण भरें।",
    },
    services: {
      kicker: "बाइक सेवा से और अधिक",
      title: "अन्य सेवाएं देखें",
      items: [
        { t: "ऑनलाइन फूड डिलीवरी", d: "गरम खाना आपके दरवाज़े पर।" },
        { t: "ऑनलाइन दवाई", d: "ज़रूरी दवाइयाँ, उसी दिन।" },
        { t: "ऑनलाइन स्टोर", d: "लोकल किराना से ऑर्डर करें।" },
        { t: "वेबसाइट बनवायें", d: "अपने व्यवसाय के लिए वेबसाइट।" },
        { t: "ऑटोमेशन बॉट सेवा", d: "व्हाट्सएप व बिज़नेस ऑटोमेशन।" },
      ],
    },
    contact: {
      kicker: "संपर्क करें",
      title: "हम मदद के लिए तैयार हैं",
      desc: "कभी भी संपर्क करें — हमारी टीम व्हाट्सएप पर तुरंत जवाब देती है।",
      call: "कॉल करें",
      whatsapp: "व्हाट्सएप पर चैट",
      name: "आपका नाम", namePh: "पूरा नाम",
      message: "संदेश", messagePh: "हम कैसे मदद कर सकते हैं?",
      send: "व्हाट्सएप पर भेजें",
    },
    footer: { dev: "Developed by @Shashi Kumar" },
  },
};

type Dict = (typeof dict)["en"];

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: dict.en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);

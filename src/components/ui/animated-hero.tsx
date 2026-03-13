import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorldMap } from "@/components/ui/map";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "fast", "modern", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 py-0 lg:py-4 items-center justify-center flex-col relative">
          <div className="w-full max-w-3xl mx-auto -mb-16 md:-mb-24 opacity-90 pointer-events-none">
            <WorldMap
              lineColor="#0A66C2"
              dots={[
                {
                  start: { lat: 28.6139, lng: 77.209, label: "Your Business" },
                  end: { lat: 51.5074, lng: -0.1278, label: "Global CDN" },
                },
                {
                  start: { lat: 28.6139, lng: 77.209, label: "Your Business" },
                  end: { lat: 40.7128, lng: -74.0060, label: "High-Speed Servers" },
                },
                {
                  start: { lat: 28.6139, lng: 77.209, label: "Your Business" },
                  end: { lat: -33.8688, lng: 151.2093, label: "24/7 Uptime" },
                },
                {
                  start: { lat: 28.6139, lng: 77.209, label: "Your Business" },
                  end: { lat: 35.6762, lng: 139.6503, label: "SEO Optimized" },
                },
                {
                  start: { lat: 28.6139, lng: 77.209, label: "Your Business" },
                  end: { lat: -1.2921, lng: 36.8219, label: "Mobile Ready" },
                },
              ]}
            />
          </div>
          <div className="flex gap-4 flex-col relative z-10">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-slate-900 font-bold">I build digital storefronts that are</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-4 md:pb-8 pt-1 md:pt-2">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-bold text-action-blue"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-600 max-w-2xl text-center mx-auto mt-2 md:mt-4">
              Professional web development for local businesses. High-speed, mobile-ready, and Google Maps optimized.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 md:mt-6 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <Button size="lg" className="gap-4 rounded-full w-full sm:w-auto hover:scale-105 active:scale-95 transition-transform font-bold hover:bg-slate-50" variant="outline" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work <MoveRight className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 rounded-full bg-action-blue text-white hover:bg-blue-700 w-full sm:w-auto hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-transform font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Your Free Demo <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };

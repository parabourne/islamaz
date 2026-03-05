"use client";
import { useState, useEffect } from "react";
import { Clock, BellRing, MapPin } from "lucide-react";

export default function PrayerClient({ timings, labels }: { timings: any, labels: any }) {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  // Cari vaxtı "HH:mm" formatına salaq
  const timeString = currentTime.toLocaleTimeString('az-AZ', { hour12: false, hour: '2-digit', minute: '2-digit' });

  return (
    <div className="grid grid-cols-1 gap-4">
      {Object.entries(labels).map(([key, label]) => {
        const prayerTime = timings[key];
        const isActive = timeString >= prayerTime && (key !== "Isha" || timeString <= "23:59");

        return (
          <div 
            key={key} 
            className={`group relative flex justify-between items-center p-6 rounded-[2.5rem] transition-all duration-500 border-2 ${
              isActive 
              ? "bg-zinc-900 border-zinc-900 dark:bg-white dark:border-white text-white dark:text-zinc-900 scale-[1.03] shadow-2xl" 
              : "bg-white dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800 hover:border-red-600/30 shadow-sm"
            }`}
          >
            <div className="flex items-center gap-5">
              <div className={`p-3 rounded-2xl ${isActive ? "bg-red-600 text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 group-hover:text-red-600 transition-colors"}`}>
                {isActive ? <BellRing className="w-5 h-5 animate-bounce" /> : <Clock className="w-5 h-5" />}
              </div>
              <div className="flex flex-col">
                <span className={`text-xs uppercase tracking-[0.2em] font-black ${isActive ? "opacity-70" : "text-zinc-400"}`}>
                  {isActive ? "Cari Namaz" : "VaxT"}
                </span>
                <span className="text-xl font-black uppercase tracking-tight">
                  {label as string}
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <span className={`font-mono text-3xl font-black tracking-tighter ${isActive ? "" : "text-red-600"}`}>
                {prayerTime}
              </span>
            </div>

            {/* Arxa fon dekoru */}
            {isActive && (
              <div className="absolute inset-0 bg-red-600/5 dark:bg-red-600/10 rounded-[2.5rem] pointer-events-none"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
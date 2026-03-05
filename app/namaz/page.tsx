import PrayerClient from "./PrayerClient";
import { MapPin, CalendarDays } from "lucide-react";

async function getPrayerTimes() {
  const res = await fetch(
    'http://api.aladhan.com/v1/timingsByCity?city=Baku&country=Azerbaijan&method=3', // Method 3: Muslim World League
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error('Məlumat yüklənmədi');
  return res.json();
}

export default async function NamazPage() {
  const data = await getPrayerTimes();
  const timings = data.data.timings;
  const dateInfo = data.data.date;

  const labels = {
    Fajr: "Sübh",
    Sunrise: "Günçıxan",
    Dhuhr: "Zöhr",
    Asr: "Əsr",
    Maghrib: "Məğrib",
    Isha: "İşa"
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Üst Panel: Lokasiya və Tarix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 flex items-center gap-6 shadow-sm">
            <div className="h-14 w-14 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
              <MapPin className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-sm font-black text-red-600 uppercase tracking-widest mb-1">Məkan</h2>
              <p className="text-2xl font-black dark:text-white tracking-tighter">Bakı, Azərbaycan</p>
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-8 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 flex items-center gap-6 shadow-sm">
            <div className="h-14 w-14 bg-zinc-900 dark:bg-zinc-100 rounded-2xl flex items-center justify-center text-white dark:text-zinc-900 shadow-lg">
              <CalendarDays className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-1">Təqvim</h2>
              <p className="text-lg font-bold dark:text-white leading-tight">
                {dateInfo.hijri.day} {dateInfo.hijri.month.ar} {dateInfo.hijri.year} AH
              </p>
            </div>
          </div>
        </div>

        {/* Namaz Vaxtları Listi */}
        <div className="mb-12">
          <header className="flex items-center justify-between mb-8 px-4">
            <h1 className="text-3xl font-black dark:text-white tracking-tighter uppercase italic">Gündəlik Vaxtlar</h1>
            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full">
              Metod: MWL
            </span>
          </header>
          
          <PrayerClient timings={timings} labels={labels} />
        </div>

        {/* Bilgi Kartı */}
        <div className="bg-zinc-900 rounded-[3rem] p-10 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-red-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Ayə</p>
            <p className="text-xl md:text-2xl font-serif text-white italic leading-relaxed mb-6">
              "Həqiqətən, namaz möminlərə müəyyən olunmuş vaxtlarda vacib edilmişdir."
            </p>
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Nisa Surəsi, 103</span>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-all group-hover:bg-red-600/20"></div>
        </div>

      </div>
    </div>
  );
}
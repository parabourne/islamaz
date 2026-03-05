// app/namaz/page.tsx

async function getPrayerTimes() {
  // Bakı vaxtı üçün API çağırışı
  const res = await fetch(
    'http://api.aladhan.com/v1/timingsByCity?city=Baku&country=Azerbaijan&method=2',
    { next: { revalidate: 3600 } } 
  );

  if (!res.ok) throw new Error('Məlumat yüklənmədi');
  return res.json();
}

export default async function NamazPage() {
  const data = await getPrayerTimes();
  const timings = data.data.timings;
  const dateInfo = data.data.date;

  // Namaz adlarının Azərbaycan dilinə tərcüməsi
  const labels: Record<string, string> = {
    Fajr: "Sübh",
    Sunrise: "Günçıxan",
    Dhuhr: "Zöhr",
    Asr: "Əsr",
    Maghrib: "Məğrib",
    Isha: "İşa"
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Üst Başlıq və Tarix */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tighter">
            Namaz Vaxtları
          </h1>
          <div className="flex flex-col items-center gap-2">
            <span className="px-4 py-1.5 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg shadow-red-600/20 uppercase tracking-widest">
              Bakı, Azərbaycan
            </span>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-2">
              {dateInfo.readable} • {dateInfo.hijri.day} {dateInfo.hijri.month.ar} {dateInfo.hijri.year} (Hicri)
            </p>
          </div>
        </div>

        {/* Vaxtlar Paneli */}
        <div className="bg-white dark:bg-zinc-900 rounded-[3.5rem] p-4 md:p-10 shadow-2xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800">
          <div className="grid grid-cols-1 gap-3">
            {Object.entries(labels).map(([key, label]) => {
              // Sadə bir "cari vaxt" məntiqi (Real layihədə bunu Client Component ilə dinamik etmək olar)
              const isActive = key === "Maghrib"; // Nümunə üçün Məğribi aktiv edirik

              return (
                <div 
                  key={key} 
                  className={`flex justify-between items-center p-6 rounded-[2rem] transition-all duration-300 border-2 ${
                    isActive 
                    ? "bg-red-600 border-red-600 text-white scale-[1.02] shadow-xl shadow-red-600/30" 
                    : "bg-zinc-50 dark:bg-zinc-800/50 border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`h-2 w-2 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-zinc-300 dark:bg-zinc-600"}`}></div>
                    <span className={`text-xl font-bold ${isActive ? "text-white" : "text-zinc-700 dark:text-zinc-200"}`}>
                      {label}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className={`font-mono text-3xl font-black ${isActive ? "text-white" : "text-red-600"}`}>
                      {timings[key]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Əlavə Məlumat */}
          <div className="mt-10 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 font-medium italic uppercase tracking-widest">
            <p>Hesablama: Diyanət İşləri (18°/17°)</p>
            <p>Mənbə: Aladhan API</p>
          </div>
        </div>

        {/* Alt Çağırış */}
        <div className="mt-12 text-center">
          <p className="text-zinc-500 dark:text-zinc-400 text-sm italic mb-6">
            "Namaz, həqiqətən, möminlərə müəyyən olunmuş vaxtlarda vacib edilmişdir." (Nisa, 103)
          </p>
        </div>
      </div>
    </div>
  );
}
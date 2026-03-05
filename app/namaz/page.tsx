// app/namaz/page.tsx

// 1. Funksiyanı tərif edirik (və ya başqa fayldan import etməlisiniz)
async function getPrayerTimes() {
  const res = await fetch(
    'http://api.aladhan.com/v1/timingsByCity?city=Baku&country=Azerbaijan&method=2',
    { next: { revalidate: 3600 } } // Məlumatı 1 saat keşləyir
  );

  if (!res.ok) {
    throw new Error('Namaz vaxtlarını gətirmək mümkün olmadı');
  }

  return res.json();
}

export default async function NamazPage() {
  // 2. İndi funksiyanı çağıra bilərik
  const data = await getPrayerTimes();
  const timings = data.data.timings;

  const labels: Record<string, string> = {
    Fajr: "Sübh",
    Sunrise: "Günçıxan",
    Dhuhr: "Zöhr",
    Asr: "Əsr",
    Maghrib: "Məğrib",
    Isha: "İşa"
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-[3rem] p-10 shadow-xl border border-zinc-100 dark:border-zinc-800">
        <h1 className="text-3xl font-black text-center mb-8 dark:text-white">
          Bakı Üçün Namaz Vaxtları
        </h1>
        
        <div className="space-y-4">
          {Object.entries(labels).map(([key, label]) => (
            <div 
              key={key} 
              className="flex justify-between items-center p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors border border-transparent hover:border-red-200"
            >
              <span className="font-bold text-lg dark:text-zinc-200">{label}</span>
              <span className="font-mono text-2xl text-red-600 font-black">
                {timings[key]}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-400 italic">
          Mənbə: Aladhan API • Metod: Diyanət İşləri
        </p>
      </div>
    </div>
  );
}
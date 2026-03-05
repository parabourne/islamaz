import { ShieldCheck, Target, Heart, Search } from "lucide-react";
import Link from "next/link";

export default function HaqqimizdaPage() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Səhih Mənbə",
      desc: "Bütün paylaşımlarımız yalnız Quran, Səhih Sünnə və Sələfin (ilk üç nəslin) fəhmi əsasındadır."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Xalis Tövhid",
      desc: "Əsas qayəmiz insanları tək olan Allaha ibadətə çağırmaq və şirkin hər növündən çəkindirməkdir."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Xurafatsız Din",
      desc: "Dində sonradan uydurulmuş bidətləri və xalq adətlərini deyil, dinin saf halını təbliğ edirik."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Səmimi Dəvət",
      desc: "Dəvətimizdə səmimiyyəti, yumşaqlığı və hikməti əsas götürürük."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Giriş Bölməsi */}
        <section className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-full text-xs font-black uppercase tracking-widest">
            Biz Kimik?
          </div>
          <h1 className="text-5xl md:text-7xl font-black dark:text-white tracking-tighter mb-8 leading-none">
            Haqqı Tanımaq Üçün <br /> <span className="text-red-600">Bir Yol.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            İslam Azərbaycan platforması, ölkəmizdə yaşayan hər bir kəsin İslam dinini ən saf və səhih mənbələrdən öyrənməsi üçün yaradılmış onlayn təbliğat mərkəzidir.
          </p>
        </section>

        {/* Missiya və Vizyon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-12 bg-white dark:bg-zinc-900 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
            <h2 className="text-3xl font-black mb-6 dark:text-white tracking-tight">Missiyamız</h2>
            <p className="text-zinc-500 leading-relaxed text-lg italic">
              "İnsanları cəhalətdən elmə, xurafatlardan isə həqiqi tövhidə yönləndirmək, hər bir evin İslamın nuru ilə aydınlanmasına vəsilə olmaqdır."
            </p>
          </div>
          <div className="p-12 bg-zinc-900 rounded-[3.5rem] text-white shadow-xl shadow-zinc-200/50 dark:shadow-none">
            <h2 className="text-3xl font-black mb-6 tracking-tight text-red-600">Vizyonumuz</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Azərbaycan dilində ən etibarlı və geniş əhatəli İslami resurs mərkəzi olmaq, cəmiyyətimizdə elmi əsaslara dayanan sağlam bir dini mühit formalaşdırmaqdır.
            </p>
          </div>
        </div>

        {/* Dəyərlərimiz */}
        <section className="mb-24">
          <h2 className="text-4xl font-black mb-16 dark:text-white text-center tracking-tighter uppercase">Dəyərlərimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 transition-all hover:scale-[1.02]">
                <div className="h-14 w-14 bg-red-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
                  {val.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 dark:text-white">{val.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Çağırış Blok-u */}
        <div className="p-12 md:p-16 bg-red-600 rounded-[4rem] text-white text-center shadow-2xl shadow-red-600/30">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase italic">Həqiqətə addım atın</h2>
          <p className="text-red-50 text-lg mb-10 max-w-xl mx-auto font-medium">
            Dinimizi kəşf etmək üçün məqalələrimizi oxumağa və ya kitabxanamızdan faydalanmağa elə indi başlayın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/meqaleler" className="px-10 py-4 bg-white text-red-600 rounded-2xl font-black hover:bg-zinc-100 transition-all active:scale-95">
              Məqalələri Oxu
            </Link>
            <Link href="/elaqe" className="px-10 py-4 bg-zinc-900 text-white rounded-2xl font-black hover:bg-black transition-all active:scale-95">
              Bizə Yazın
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
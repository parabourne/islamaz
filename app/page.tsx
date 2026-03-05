"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Hikmətli sözlər bazası
const hikmetler = [
  { text: "Həqiqətən, çətinliklə bərabər bir asanlıq da vardır!", source: "İnşirah Surəsi, 5-ci ayə" },
  { text: "Sizin ən xeyirliniz Quranı öyrənən və öyrədəndir.", source: "Hədis (Buxari)" },
  { text: "Dua möminin silahıdır.", source: "Hədis (Hakim)" },
  { text: "Allah sizin surətinizə deyil, qəlbinizə və əməllərinizə baxar.", source: "Hədis (Müslim)" },
  { text: "Güclü o kəs deyil ki, güləşdə qalib gəlsin, güclü odur ki, qəzəblənəndə özünü ələ alsın.", source: "Hədis (Buxari)" },
  { text: "Yalnız Allaha təvəkkül et!", source: "Talaq Surəsi, 3-cü ayə" },
  { text: "Rəbbin səni tərk etmədi və sənə qəzəblənmədi.", source: "Duha Surəsi, 3-cü ayə" }
];

export default function Home() {
  const [quote, setQuote] = useState(hikmetler[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Səhifə brauzerdə yükləndikdən sonra işə düşür
    setMounted(true);
    const randomQuote = hikmetler[Math.floor(Math.random() * hikmetler.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="flex flex-col font-sans">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative flex flex-col items-center justify-center px-6 pt-12 pb-16 md:pt-20 md:pb-24 text-center overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-50/40 via-transparent to-transparent dark:from-red-900/5 z-0"></div>
          
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              Lə İlahə İllallah
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-50 mb-6 leading-[0.95] tracking-tighter">
              İslam Azərbaycan <br />
              <span className="text-red-600">Tövhid</span> Yolu
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              Qayəmiz həmvətənlərimizi tək olan Allaha ibadət etməyə çağırmaq və dinimizi xurafatlardan təmizləməkdir.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/meqaleler" className="px-10 py-4 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 transition-all hover:scale-105 shadow-xl shadow-red-600/20">
                Məqalələri Oxu
              </Link>
              <Link href="/haqqimizda" className="px-10 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl font-bold text-lg hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all hover:scale-105">
                Missiyamız
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Dəyərlərimiz */}
        <section className="px-6 py-12 bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Səhih Mənbə", val: "Quran və Sünnə" },
              { label: "Məqsəd", val: "Xalis Tövhid" },
              { label: "Mübarizə", val: "Bidət və Şirk" },
              { label: "Metod", val: "Sələfin Fəhmi" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-3xl text-center hover:border-red-600/30 transition-colors">
                <p className="text-[10px] uppercase tracking-widest text-red-600 font-black mb-2">{item.label}</p>
                <p className="text-lg font-bold dark:text-white">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Tövhidin Əsasları */}
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black mb-4 dark:text-white tracking-tighter uppercase">Tövhidin Üç Qismi</h2>
              <p className="text-zinc-500">İslamın əsasını təşkil edən tövhid anlayışını düzgün öyrənək.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Rububiyyə", desc: "Allahın yaratmaqda, ruzi verməkdə və idarə etməkdə tək olduğunu qəbul etmək." },
                { title: "Uluhiyyə", desc: "İbadətin hər bir növünün (dua, qurban, nəzir və s.) yalnız Allaha aid edilməsi." },
                { title: "Əsma və Sifət", desc: "Allahın Özünü vəsf etdiyi ad və sifətləri təhrif etmədən qəbul etmək." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-red-600 font-black text-4xl mb-6">0{i+1}</div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Ayə və Namaz Paneli */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 p-10 md:p-14 bg-zinc-900 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl group">
            <div className="relative z-10">
              <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-xs mb-8">Günün Ayəsi</h2>
              <blockquote className="text-3xl md:text-5xl font-serif leading-tight mb-10 group-hover:text-red-50 transition-colors">
                "De: «Mənim namazım da, ibadətim də, həyatım və ölümüm də aləmlərin Rəbbi Allah üçündür!»"
              </blockquote>
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl font-black -rotate-3 group-hover:rotate-0 transition-transform">6</div>
                <div>
                  <p className="font-bold text-xl leading-none">Ənam surəsi</p>
                  <p className="text-zinc-500 mt-1">Ayə 162</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:col-span-5 p-10 md:p-14 bg-red-600 rounded-[3.5rem] text-white shadow-2xl shadow-red-600/40">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-black uppercase tracking-widest text-sm italic">Bakı Vaxtı</h2>
              <div className="px-4 py-1 bg-black/10 rounded-full text-xs font-bold backdrop-blur-md">
                {/* Hydration xətasının həlli burada */}
                {mounted ? new Date().toLocaleDateString('az-AZ', { day: 'numeric', month: 'long' }) : "---"}
              </div>
            </div>
            <div className="space-y-3">
              {[
                { n: 'Sübh', v: '05:42' },
                { n: 'Zöhr', v: '12:44' },
                { n: 'Əsr', v: '16:48' },
                { n: 'Məğrib', v: '18:42', active: true },
                { n: 'İşa', v: '20:05' }
              ].map((time) => (
                <div key={time.n} className={`flex justify-between items-center p-4 rounded-2xl transition-all ${time.active ? 'bg-white text-red-600 scale-105 shadow-lg' : 'hover:bg-white/10'}`}>
                  <span className="font-bold text-lg">{time.n}</span>
                  <span className="font-mono text-2xl font-black">{time.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Günün Hikməti (Dinamik Bölmə) */}
        <section className="py-20 px-6 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 md:p-16 bg-zinc-50 dark:bg-zinc-900/50 rounded-[4rem] border border-zinc-100 dark:border-zinc-800 text-center overflow-hidden group shadow-sm">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors"></div>
              
              <div className="relative z-10 animate-in fade-in zoom-in duration-700">
                <span className="inline-block px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                  Günün Hikməti
                </span>
                
                <i className="block text-2xl md:text-4xl font-serif text-zinc-800 dark:text-zinc-200 leading-tight mb-10 italic">
                  {/* Dinamik hikmət yalnız mounted olduqdan sonra göstərilir */}
                  "{mounted ? quote.text : "..."}"
                </i>
                
                <div className="flex flex-col items-center">
                  <div className="h-px w-12 bg-red-600 mb-4"></div>
                  <p className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-sm">
                    {mounted ? quote.source : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Kitabxana Bölməsi */}
        <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-xl text-left">
                <h2 className="text-4xl font-black mb-4 dark:text-white tracking-tighter uppercase">Seçilmiş Kitablar</h2>
                <p className="text-zinc-500 text-lg">İslam elmlərini öyrənmək üçün səhih mənbələr və tövsiyə olunan əsərlər.</p>
              </div>
              <Link href="/kitabxana" className="text-red-600 font-bold hover:underline py-2 px-4 bg-red-50 dark:bg-red-900/10 rounded-xl transition-all">Hamısına bax →</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Üç Əsas", author: "Məhəmməd b. Əbdülvəhhab", color: "bg-blue-600" },
                { title: "Tövhid Kitabı", author: "Şeyxulİslam", color: "bg-emerald-600" },
                { title: "Dörd Qayda", author: "Məhəmməd b. Əbdülvəhhab", color: "bg-amber-600" },
                { title: "Vasıtiyyə", author: "İbn Teymiyyə", color: "bg-rose-600" }
              ].map((book, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className={`aspect-[3/4] ${book.color} rounded-[2rem] mb-4 p-6 flex flex-col justify-end text-white transition-all group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                    <h4 className="font-bold text-lg leading-tight">{book.title}</h4>
                    <p className="text-xs opacity-80 mt-2 font-medium">{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Mühüm Suallar (FAQ) */}
        <section className="py-24 bg-white dark:bg-black">
          <div className="max-w-4xl mx-auto px-6 text-left">
            <h2 className="text-4xl font-black mb-16 dark:text-white border-l-8 border-red-600 pl-8 tracking-tighter uppercase">Mühüm Suallar</h2>
            <div className="space-y-12">
              {[
                { q: "Şirk nədir?", a: "Şirk - Allahın uluhiyyətində, rububiyyətində və ya ad və sifətlərində Ona ortaq qoşmaqdır. Bu, İslamdan çıxaran və tövbəsiz bağışlanmayan ən böyük günahdır." },
                { q: "Bidət nədir?", a: "Peyğəmbərin (s.a.s) və onun səhabələrinin etmədiyi, dində sonradan uydurulmuş və ibadət niyyəti ilə edilən hər bir əməldir." },
                { q: "Sələf kimdir?", a: "Sələf - Peyğəmbərimizin (s.a.s) ən xeyirli nəsillər olaraq vəsf etdiyi ilk üç nəsil və onların yolunu izləyən haqq əhlidir." }
              ].map((faq, i) => (
                <div key={i} className="group border-b border-zinc-200 dark:border-zinc-800 pb-10">
                  <h4 className="text-xl font-bold mb-4 dark:text-zinc-100 group-hover:text-red-600 transition-colors flex gap-4">
                    <span className="text-red-600 font-black">?</span> {faq.q}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Sual-Cavab Çağırışı */}
        <section className="px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto p-12 md:p-20 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[4rem] shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white tracking-tighter uppercase">Bir Sualınız Var?</h2>
              <p className="text-zinc-500 mb-12 text-lg md:text-xl max-w-xl mx-auto">İslam dini, tövhid və ya gündəlik ibadətlərlə bağlı sizi maraqlandıran sualları bizə ünvanlaya bilərsiniz.</p>
              <Link href="/elaqe" className="inline-block px-12 py-5 bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 text-white rounded-2xl font-bold text-lg hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all shadow-xl active:scale-95">
                Sualını Göndər
              </Link>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
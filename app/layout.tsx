import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Saytın Meta Məlumatları (Google və Sosial Media üçün)
export const metadata: Metadata = {
  title: "İslam Azərbaycan | Səhih İslam və Tövhid Yolu",
  description: "Azərbaycanda xurafatlardan uzaq, Quran və Sünnəyə uyğun səhih İslamın təbliği platforması.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950`}
      >
        {/* HEADER / NAVİQASİYA */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="flex items-center gap-3 group transition-all">
            {/* Loqo yerinə rəqəmsal ikon elementi */}
            <div className="h-10 w-10 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 -rotate-3 group-hover:rotate-0 transition-transform duration-300">
              <span className="text-white font-black text-xl italic uppercase">İ</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-black leading-none tracking-tighter text-zinc-900 dark:text-zinc-50 uppercase">
                İslam Azərbaycan
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-black">
                Tövhid Yolu
              </span>
            </div>
          </Link>

          {/* Əsas Menyu Linkləri - Desktop */}
          <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-900 dark:text-zinc-50">
            <Link href="/" className="hover:text-red-600 transition-colors">Ana Səhifə</Link>
            <Link href="/meqaleler" className="hover:text-red-600 transition-colors">Məqalələr</Link>
            <Link href="/rehber" className="hover:text-red-600 transition-colors">Bələdçi</Link>
            <Link href="/kitabxana" className="hover:text-red-600 transition-colors">Kitabxana</Link> 
            <Link href="/namaz" className="hover:text-red-600 transition-colors">Namaz Vaxtları</Link>
            <Link href="/elaqe" className="hover:text-red-600 transition-colors">Əlaqə</Link>
          </div>

          {/* Sual Göndər Düyməsi */}
          <Link href="/elaqe" className="bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 text-white px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-tighter transition-all hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white shadow-xl active:scale-95">
            Sual Göndər
          </Link>
        </nav>

        {/* Səhifənin Əsas Məzmunu */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 pt-20 pb-10 px-6 mt-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Footer Vizualı */}
            <div className="inline-flex items-center gap-3 mb-8">
               <div className="h-8 w-8 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-sm italic">İ</div>
               <h3 className="text-2xl font-black dark:text-white uppercase tracking-tighter">İslam Azərbaycan</h3>
            </div>
            
            <p className="text-zinc-500 text-sm max-w-md mx-auto mb-10 leading-relaxed font-medium italic">
              "Həmvətənlərimizi tək olan Allaha ibadət etməyə çağırmaq və dinimizi səhih mənbələrdən öyrətmək qayəmizdir."
            </p>
            
            {/* Footer Naviqasiya */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-[11px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-50">
              <Link href="/haqqimizda" className="hover:text-red-600 transition-colors">Haqqımızda</Link>
              <Link href="/rehber" className="hover:text-red-600 transition-colors">İslami Bələdçi</Link>
              <Link href="/kitabxana" className="hover:text-red-600 transition-colors">Kitabxana</Link>
              <Link href="/elaqe" className="hover:text-red-600 transition-colors">Əlaqə</Link>
              <Link href="/gizlilik" className="hover:text-red-600 transition-colors opacity-50">Gizlilik Siyasəti</Link>
            </div>
            
            {/* Müəllif Hüquqları */}
            <p className="text-[10px] text-zinc-400 font-bold tracking-[0.3em] border-t border-zinc-100 dark:border-zinc-900 pt-10 uppercase">
              © {new Date().getFullYear()} İslam Azərbaycan | Allahın izni ilə hazırlanıb
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
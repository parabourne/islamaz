import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEBLİĞ | Səhih İslam və Tövhid Yolu",
  description: "Xurafatlardan uzaq, yalnız Allaha ibadətə çağırış və İslam dininin təbliği platforması.",
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
        {/* HEADER */}
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-red-600 shadow-sm">
              <Image src="/loqo.jpg" alt="TZ Logo" width={40} height={40} className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tighter text-zinc-900 dark:text-zinc-50">TEBLİĞ</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-600 font-bold">Tövhid Yolu</span>
            </div>
          </Link>

          {/* Naviqasiya Linkləri */}
          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
            <Link href="/" className="hover:text-red-600 transition-colors">Ana Səhifə</Link>
            <Link href="/meqaleler" className="hover:text-red-600 transition-colors">Məqalələr</Link>
            {/* YENİ ƏLAVƏ: Bələdçi */}
            <Link href="/rehber" className="hover:text-red-600 transition-colors text-red-600/90">Bələdçi</Link> 
            <Link href="/namaz" className="hover:text-red-600 transition-colors">Namaz Vaxtları</Link>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-md">
            DƏSTƏK
          </button>
        </nav>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-xl font-black mb-4 dark:text-white uppercase tracking-tighter">TEBLİĞ PLATFORMASI</h3>
            <p className="text-zinc-500 text-sm max-w-md mx-auto mb-8">
              Həmvətənlərimizi tək olan Allaha ibadət etməyə çağırmaq və İslamı səhih mənbələrdən öyrətmək qayəmizdir.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
              <Link href="/haqqimizda" className="hover:text-red-600">Haqqımızda</Link>
              {/* FOOTER-DƏ DƏ ƏLAVƏ EDİLDİ */}
              <Link href="/rehber" className="hover:text-red-600 font-bold">İslami Bələdçi</Link>
              <Link href="/elaqe" className="hover:text-red-600">Əlaqə</Link>
              <Link href="/gizlilik" className="hover:text-red-600">Gizlilik siyasəti</Link>
            </div>
            
            <p className="text-[10px] text-zinc-400 font-bold tracking-widest border-t border-zinc-100 dark:border-zinc-900 pt-8">
              © {new Date().getFullYear()} TEBLİĞ | ALLAHIN İZNİ İLƏ
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
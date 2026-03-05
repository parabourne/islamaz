import { Mail, MessageCircle, Share2, MapPin, Facebook, Youtube, Instagram } from "lucide-react";

export default function ElaqePage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Başlıq Bölməsi */}
        <header className="mb-16 border-l-8 border-red-600 pl-8">
          <h1 className="text-5xl font-black dark:text-white tracking-tighter mb-4 uppercase">Bizimlə Əlaqə</h1>
          <p className="text-zinc-500 text-lg max-w-2xl font-medium">
            Sualınız, təklifiniz və ya elmi məsələlərlə bağlı müraciətiniz varsa, bizə yazmaqdan çəkinməyin.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Əlaqə Məlumatları (4 sütun) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="h-12 w-12 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">E-poçt</h3>
              <p className="text-zinc-500 text-sm mb-4">Rəsmi müraciətlər üçün:</p>
              <a href="mailto:info@teblig.az" className="text-red-600 font-bold hover:underline">info@teblig.az</a>
            </div>

            <div className="p-8 bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="h-12 w-12 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2 dark:text-white">WhatsApp / Telegram</h3>
              <p className="text-zinc-500 text-sm mb-4">Sürətli sual-cavab üçün:</p>
              <a href="https://wa.me/994555556963" className="text-green-600 font-bold hover:underline">+994 (55) 555 69 63</a>
            </div>

            <div className="p-8 bg-zinc-900 rounded-[2.5rem] text-white overflow-hidden relative group">
              <div className="relative z-10">
                <Share2 size={24} className="text-red-500 mb-6" />
                <h3 className="font-bold text-lg mb-4">Sosial Media</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/parabournex" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                    title="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                    title="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer"
                    title="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            </div>
          </div>

          {/* Əlaqə Formu (8 sütun) */}
          <div className="lg:col-span-8 p-10 md:p-14 bg-white dark:bg-zinc-900 rounded-[3.5rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
            <h2 className="text-3xl font-black mb-8 dark:text-white tracking-tighter">Mesaj Göndərin</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Adınız</label>
                  <input 
                    type="text" 
                    placeholder="Məs: Əli"
                    className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">E-poçt Ünvanınız</label>
                  <input 
                    type="email" 
                    placeholder="Məs: ali@example.com"
                    className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Mövzu</label>
                <input 
                  type="text" 
                  placeholder="Məqalə təklifi, sual və s."
                  className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-2">Mesajınız</label>
                <textarea 
                  rows={5}
                  placeholder="Bura yazın..."
                  className="w-full px-6 py-4 bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl focus:ring-2 focus:ring-red-600 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="w-full md:w-auto px-12 py-5 bg-red-600 text-white rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-600/30 active:scale-95">
                Göndər
              </button>
            </form>
          </div>
        </div>

        {/* Xəritə/Məkan üçün Placeholder */}
        <div className="mt-16 h-64 bg-zinc-200 dark:bg-zinc-800 rounded-[3rem] flex items-center justify-center text-zinc-400 gap-2 overflow-hidden relative">
            <MapPin size={24} />
            <span className="font-bold uppercase tracking-widest text-xs">Onlayn Platforma - Bütün Azərbaycan</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
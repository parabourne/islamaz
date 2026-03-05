import Link from "next/link";

export default function KitabxanaPage() {
  const books = [
    { 
      id: 1,
      title: "Üç Əsas", 
      author: "Məhəmməd b. Əbdülvəhhab", 
      desc: "Hər bir müsəlmanın bilməli olduğu üç əsas: Rəbbini, dinini və Peyğəmbərini tanımaq.",
      color: "bg-blue-600",
      category: "Tövhid",
      downloadUrl: "#"
    },
    { 
      id: 2,
      title: "Tövhid Kitabı", 
      author: "Şeyxulİslam", 
      desc: "Şirkin növləri və ondan qorunma yolları haqqında ən mötəbər əsərlərdən biri.",
      color: "bg-emerald-600",
      category: "Əqidə",
      downloadUrl: "#"
    },
    { 
      id: 3,
      title: "Dörd Qayda", 
      author: "Məhəmməd b. Əbdülvəhhab", 
      desc: "Müşriklərin şirki ilə müasir dövrdəki yanlış inancların fərqini izah edən qısa risalə.",
      color: "bg-amber-600",
      category: "Tövhid",
      downloadUrl: "#"
    },
    { 
      id: 4,
      title: "Vasıtiyyə Əqidəsi", 
      author: "İbn Teymiyyə", 
      desc: "Əhli-Sünnə vəl-Camaatın əqidə prinsiplərini ehtiva edən fundamental əsər.",
      color: "bg-rose-600",
      category: "Əqidə",
      downloadUrl: "#"
    },
    { 
      id: 5,
      title: "Namazın Sifəti", 
      author: "Şeyx Albanı", 
      desc: "Peyğəmbərin (s.a.s) namaz qılma qaydasını dəlillərlə izah edən məşhur əsər.",
      color: "bg-indigo-600",
      category: "Fiqh",
      downloadUrl: "#"
    },
    { 
      id: 6,
      title: "Hicab haqqında", 
      author: "Elmi Heyət", 
      desc: "Müsəlman qadının geyim ədəbi və hicabın vacibliyi haqqında Quran və Sünnədən dəlillər.",
      color: "bg-purple-600",
      category: "Əxlaq",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Başlıq Bölməsi */}
        <header className="mb-16 border-l-8 border-red-600 pl-8">
          <h1 className="text-5xl font-black dark:text-white tracking-tighter mb-4 uppercase">Elmi Kitabxana</h1>
          <p className="text-zinc-500 text-lg max-w-2xl font-medium">
            Səhih İslam elmlərini öyrənmək üçün seçilmiş elektron kitablar, risalələr və tərcümələr.
          </p>
        </header>

        {/* Kitablar Siyahısı */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <div key={book.id} className="group flex flex-col bg-white dark:bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-500">
              
              {/* Kitabın "Üz Qabığı" Vizualı */}
              <div className={`h-64 ${book.color} relative flex items-center justify-center p-12 transition-transform duration-500 group-hover:scale-105`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                <h2 className="text-white text-3xl font-black text-center leading-tight drop-shadow-md relative z-10">
                  {book.title}
                </h2>
                <div className="absolute bottom-4 left-6 text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] z-10">
                  {book.category}
                </div>
              </div>

              {/* Kitab Məlumatları */}
              <div className="p-8 flex flex-col flex-1">
                <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-3">Müəllif: {book.author}</span>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-10 flex-1 italic">
                  "{book.desc}"
                </p>

                {/* Əməliyyat Düymələri */}
                <div className="flex gap-3">
                  <Link 
                    href={book.downloadUrl} 
                    className="flex-1 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-2xl font-bold text-center text-xs uppercase tracking-widest hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all active:scale-95"
                  >
                    Yüklə (PDF)
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bilgiləndirmə Blokları */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-10 bg-zinc-100 dark:bg-zinc-900/50 rounded-[3rem] border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl mb-4 dark:text-white">Kitablar Necə Seçilir?</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Kitabxanamızdakı bütün əsərlər Quran və Sünnəyə, həmçinin sələfin fəhminə uyğunluq baxımından yoxlanılır. Məqsədimiz oxucunu xurafatlardan uzaq tutan səhih qaynaqlarla təmin etməkdir.
            </p>
          </div>
          <div className="p-10 bg-red-600 text-white rounded-[3rem] shadow-xl shadow-red-600/20">
            <h3 className="font-bold text-xl mb-4">Yeni Kitabınız Var?</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Əgər səhih mənbələrə əsaslanan və tərcümə edilmiş elmi risalələriniz varsa, kitabxanamıza əlavə edilməsi üçün bizə göndərə bilərsiniz.
            </p>
            <Link href="/elaqe" className="inline-block px-8 py-3 bg-white text-red-600 rounded-xl font-bold text-sm hover:opacity-90">
              Bizimlə əlaqə
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
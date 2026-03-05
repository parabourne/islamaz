import Link from "next/link";

export default function RehberPage() {
  const categories = [
    {
      title: "Namaz Qılma Qaydası",
      items: [
        { name: "Dəstəmazın alınması", link: "#" },
        { name: "Kişilər üçün namaz", link: "#" },
        { name: "Qadınlar üçün namaz", link: "#" },
        { name: "Namazı pozan amillər", link: "#" }
      ],
      color: "border-red-600"
    },
    {
      title: "Geyim və Zahir (Kişi)",
      items: [
        { name: "Saqqalın hökmü və ədəbi", link: "#" },
        { name: "İslamda kişi geyimi", link: "#" },
        { name: "Qızıl və ipək haramı", link: "#" }
      ],
      color: "border-zinc-800"
    },
    {
      title: "Geyim və Hicab (Qadın)",
      items: [
        { name: "Hicabın şərtləri", link: "#" },
        { name: "Məhrəm və naməhrəm", link: "#" },
        { name: "Zinət əşyalarından istifadə", link: "#" }
      ],
      color: "border-zinc-400"
    },
    {
      title: "Ailə və Tərbiyə",
      items: [
        { name: "Ailədə namazın təşkili", link: "#" },
        { name: "Uşaqlara namazın sevdirilməsi", link: "#" },
        { name: "Valideynlərin haqları", link: "#" }
      ],
      color: "border-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-left border-l-8 border-red-600 pl-8">
          <h1 className="text-5xl font-black dark:text-white tracking-tighter mb-4">İslami Həyat Bələdçisi</h1>
          <p className="text-zinc-500 text-lg max-w-2xl">
            Gündəlik həyatımızı Quran və Sünnəyə uyğun tənzimləmək üçün praktik məlumatlar və qaydalar.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className={`p-10 bg-white dark:bg-zinc-900 rounded-[3rem] border-t-8 ${cat.color} shadow-sm`}>
              <h2 className="text-2xl font-black mb-6 dark:text-white uppercase tracking-tight">{cat.title}</h2>
              <ul className="space-y-4">
                {cat.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-red-600 transition-colors group">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
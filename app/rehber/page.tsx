import Link from "next/link";
import { 
  BookOpen, 
  User, 
  Heart, 
  Users, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

export default function RehberPage() {
  const categories = [
    {
      title: "Namaz Qılma Qaydası",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        { name: "Dəstəmazın alınması", link: "#" },
        { name: "Kişilər üçün namaz", link: "#" },
        { name: "Qadınlar üçün namaz", link: "#" },
        { name: "Namazı pozan amillər", link: "#" }
      ],
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/10",
      borderColor: "border-red-600"
    },
    {
      title: "Geyim və Zahir (Kişi)",
      icon: <User className="w-6 h-6" />,
      items: [
        { name: "Saqqalın hökmü və ədəbi", link: "#" },
        { name: "İslamda kişi geyimi", link: "#" },
        { name: "Qızıl və ipək haramı", link: "#" }
      ],
      color: "text-zinc-800 dark:text-zinc-200",
      bgColor: "bg-zinc-100 dark:bg-zinc-800",
      borderColor: "border-zinc-800 dark:border-zinc-200"
    },
    {
      title: "Geyim və Hicab (Qadın)",
      icon: <Heart className="w-6 h-6" />,
      items: [
        { name: "Hicabın şərtləri", link: "#" },
        { name: "Məhrəm və naməhrəm", link: "#" },
        { name: "Zinət əşyalarından istifadə", link: "#" }
      ],
      color: "text-zinc-500",
      bgColor: "bg-zinc-50 dark:bg-zinc-900",
      borderColor: "border-zinc-400"
    },
    {
      title: "Ailə və Tərbiyə",
      icon: <Users className="w-6 h-6" />,
      items: [
        { name: "Ailədə namazın təşkili", link: "#" },
        { name: "Uşaqlara namazın sevdirilməsi", link: "#" },
        { name: "Valideynlərin haqları", link: "#" }
      ],
      color: "text-red-400",
      bgColor: "bg-red-50/50 dark:bg-red-900/5",
      borderColor: "border-red-400"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Üst Başlıq */}
        <header className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1 w-12 bg-red-600 rounded-full"></div>
            <span className="text-red-600 font-black uppercase tracking-[0.3em] text-xs">Əməli Rəhbər</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black dark:text-white tracking-tighter mb-6 leading-none">
            İslami Həyat <br /> <span className="text-zinc-400">Bələdçisi</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
            Gündəlik həyatımızı Quran və Sünnəyə, sələfin fəhminə uyğun tənzimləmək üçün praktik məlumatlar.
          </p>
        </header>

        {/* Kateqoriyalar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`group p-8 md:p-10 bg-white dark:bg-zinc-900 rounded-[3.5rem] border-t-[10px] ${cat.borderColor} shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl ${cat.bgColor} ${cat.color}`}>
                  {cat.icon}
                </div>
                <span className="text-zinc-300 dark:text-zinc-700 text-5xl font-black">0{i + 1}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black mb-8 dark:text-white tracking-tight uppercase">
                {cat.title}
              </h2>

              <ul className="space-y-3">
                {cat.items.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.link} 
                      className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group/item border border-transparent hover:border-zinc-100 dark:hover:border-zinc-700"
                    >
                      <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 font-bold group-hover/item:text-red-600 transition-colors">
                        <CheckCircle2 className="w-4 h-4 opacity-40 group-hover/item:opacity-100" />
                        {item.name}
                      </div>
                      <ArrowRight className="w-4 h-4 -translate-x-2 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-red-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Bilgi */}
        <div className="mt-20 p-10 bg-zinc-900 rounded-[3rem] text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-white text-2xl font-bold mb-4">Səhih Elmin Əhəmiyyəti</h3>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
              İbadətlərimizin qəbul olunması üçün iki şərt vacibdir: İxlas (yalnız Allah üçün etmək) və 
              Mütabiə (Peyğəmbərin s.a.s sünnəsinə uyğun etmək).
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-600/10 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
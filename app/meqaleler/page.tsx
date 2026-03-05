"use client";
import { useState } from "react";

export default function MeqalelerPage() {
  const posts = [
    { 
      id: 1, 
      title: "Tövhidin Əhəmiyyəti və Onu Pozan Amillər", 
      date: "05 Mart 2026",
      category: "İnanc",
      desc: "İbadətin yalnız Allaha aid olması və müasir dövrdə şirkin gizli formalarından qorunma yolları.",
      content: `Tövhid İslam dininin təməl sütunudur. Bütün peyğəmbərlərin göndərilmə qayəsi insanları tək olan Allaha ibadət etməyə çağırmaq olmuşdur. Tövhid yalnız "Allah birdir" demək deyil, həm də ibadətin hər bir növünü - istər dua, istər qurban, istərsə də kömək diləməyi - yalnız Ona aid etməkdir.

Müasir dövrdə tövhid anlayışı tez-tez xurafatlarla qarışdırılır. İnsanların qəbirlərdən kömək istəməsi, ağaclara bez bağlaması və ya falçılara inanması birbaşa tövhidə zidd olan əməllərdir. Quran bizə öyrədir ki, Allah bizə şah damarımızdan daha yaxındır və vasitəçisiz duaları eşidəndir.

Həqiqi qurtuluş, qəlbi məxluqatın asılılığından təmizləyib, yalnız Xaliqə yönəlməkdədir. Bu, həm fərdi, həm də ictimai mənada insanın izzətini qoruyan yeganə yoldur.`
    },
    { 
      id: 2, 
      title: "Xurafatlardan Qorunmaq: Səhih İslamın Meyarı", 
      date: "01 Mart 2026",
      category: "Sünnə",
      desc: "Dində sonradan uydurulan bidətlər və xalq adətlərinin dini hökm kimi qəbul edilməsinin təhlükələri.",
      content: `İslam dini tamamlanmış bir dindir. Allah Rəsulu (s.a.s) vida xütbəsində dinin kamil olduğunu bəyan etmişdir. Buna baxmayaraq, əsrlər boyu müxtəlif coğrafiyalarda yerli adətlər dinin bir parçası kimi qəbul edilməyə başlanmışdır.

Bidət - dində əsli olmayan yeni bir əməl uydurmaqdır. Bu, zahirən gözəl görünsə də, əslində dinin saflığını pozur. Məsələn, müəyyən günlərdə xüsusi rituallar keçirmək və ya şəriətdə buyurulmayan zikrlər ixtira etmək müsəlmanı səhih sünnədən uzaqlaşdırır.

Xurafatlardan qorunmağın tək yolu elmdir. Hər bir əməlin Quran və ya Səhih Hədislərdə bir dəlilinin olub-olmadığını araşdırmaq hər bir müsəlmanın vəzifəsidir. Sələfin (ilk nəsillərin) yolu bizə bu məsələdə ən doğru tərəzini təqdim edir.` 
    },
    { 
      id: 3, 
      title: "Səhih Sünnənin Dindəki Mövqeyi", 
      date: "25 Fevral 2026",
      category: "Elm",
      desc: "Quranı anlamaqda hədislərin rolu və Sünnəni inkar edənlərin yanılma nöqtələri.",
      content: `Sünnə Quranın canlı tətbiqidir. Quran bizə namaz qılmağı əmr edir, lakin namazın neçə rükət olduğunu və necə qılınacağını biz Sünnədən öyrənirik. Peyğəmbərin (s.a.s) yolu olmadan İslamı yaşamaq mümkün deyildir.

Son zamanlar yayılan "yalnız Quran" ideologiyası əslində Quranın özünə ziddir. Çünki Qurani-Kərim dəfələrlə "Allaha və Rəsula itaət edin" buyurur. Peyğəmbərə itaət, onun gətirdiyi səhih hədisləri qəbul etmək və həyatımıza tətbiq etmək deməkdir.

Hədis elmi İslam ümmətinə məxsus olan unikal bir sahədir. Ravi zəncirlərinin araşdırılması bizə hansı sözün Peyğəmbərə aid olub-olmadığını dəqiqliklə müəyyən etməyə imkan verir. Bu mirası qorumaq, dini qorumaq deməkdir.` 
    },
    { 
      id: 4, 
      title: "İslami Geyim və İffət", 
      date: "20 Fevral 2026",
      category: "Əxlaq",
      desc: "Həm kişilər, həm də qadınlar üçün geyim ədəbi və zahiri görünüşün daxili imanla əlaqəsi.",
      content: `İslamda geyim yalnız bədəni örtmək üçün deyil, həm də təqvanın bir göstəricisidir. Allah Quranda buyurur: "Ey Adəm övladları! Biz sizə ayıb yerlərinizi örtəcək bir geyim və bəzək-düzək nazil etdik. Lakin təqva libası daha xeyirlidir."

Kişilər üçün geyimdə əsas prinsip övrət yerlərinin örtülməsi və qeyri-müsəlmanlara bənzəməməkdir. Həmçinin saqqal saxlamaq Peyğəmbərin (s.a.s) bir sünnəsi və kişi üçün bir zinətdir.

Qadınlar üçün hicab isə bir azadlıq və qorunma vasitəsidir. Hicab yalnız baş örtüyü deyil, həm də davranışda və danışıqda olan iffətdir. Geyim dar olmamalı və diqqəti cəlb edəcək dərəcədə bəzəkli olmamalıdır. Zahiri görünüşümüz qəlbimizdəki imanın aynasıdır.` 
    },
  ];

  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 min-h-screen">
      {!selectedPost ? (
        <>
          <div className="mb-16">
            <h1 className="text-5xl font-black mb-4 dark:text-white border-l-8 border-red-600 pl-6 tracking-tighter">
              Elmi Məqalələr
            </h1>
            <p className="text-zinc-500 text-lg">Haqqı tanımaq və xurafatlardan arınmaq üçün səhih mənbə.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div 
                key={post.id} 
                onClick={() => setSelectedPost(post)}
                className="flex flex-col p-10 bg-white dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 hover:border-red-600 transition-all cursor-pointer group shadow-sm hover:shadow-2xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="px-4 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-full tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">{post.date}</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 dark:text-zinc-100 group-hover:text-red-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-zinc-500 text-base leading-relaxed mb-8 line-clamp-2">
                  {post.desc}
                </p>
                
                <div className="mt-auto flex items-center gap-2 text-red-600 font-black text-sm uppercase tracking-widest">
                  Məqaləni tam oxu 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          <button 
            onClick={() => setSelectedPost(null)}
            className="mb-12 flex items-center gap-3 text-zinc-400 hover:text-red-600 transition-all font-bold text-xs uppercase tracking-[0.2em]"
          >
            <span className="text-xl">←</span> Siyahıya qayıt
          </button>
          
          <article>
            <header className="mb-12">
              <span className="text-red-600 font-black uppercase tracking-[0.4em] text-xs">
                {selectedPost.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 dark:text-white leading-[1.1] tracking-tighter">
                {selectedPost.title}
              </h1>
              <div className="flex items-center gap-4 py-6 border-y border-zinc-100 dark:border-zinc-800">
                <div className="h-12 w-12 rounded-2xl bg-red-600 flex items-center justify-center font-bold text-white shadow-lg shadow-red-600/20">T</div>
                <div>
                  <p className="text-sm font-bold dark:text-white uppercase tracking-wider">Təbliğ Platforması</p>
                  <p className="text-xs text-zinc-500 font-medium">{selectedPost.date}</p>
                </div>
              </div>
            </header>
            
            <div className="text-zinc-800 dark:text-zinc-200 leading-[2] text-xl font-medium space-y-10 font-serif">
              {selectedPost.content.split('\n\n').map((para, i) => (
                <p key={i} className="first-letter:text-4xl first-letter:font-black first-letter:text-red-600 first-letter:mr-1">
                  {para}
                </p>
              ))}
            </div>
          </article>

          <div className="mt-24 p-12 bg-zinc-900 rounded-[4rem] text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 bg-red-600 opacity-5"></div>
             <h3 className="text-2xl font-bold mb-4 relative z-10">Məqalə haqqında nə düşünürsünüz?</h3>
             <p className="text-zinc-400 mb-8 relative z-10">Daha çox insana çatması üçün bu yazını yaxınlarınızla paylaşın.</p>
             <div className="flex justify-center gap-4 relative z-10">
                <button className="px-10 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all active:scale-95">
                  İndi Paylaş
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}
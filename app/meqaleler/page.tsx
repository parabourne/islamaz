export default function MeqalelerPage() {
  const posts = [
    { id: 1, title: "Tövhidin Əhəmiyyəti", desc: "İbadəti Allaha xas qılmaq..." },
    { id: 2, title: "Xurafatlardan Qorunmaq", desc: "Dində sonradan uydurulanlar..." },
    { id: 3, title: "Səhih Sünnənin Yeri", desc: "Peyğəmbərin (s.a.s) yolu..." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-black mb-12 dark:text-white border-l-4 border-red-600 pl-4">Elmi Məqalələr</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-red-600 transition-all cursor-pointer group">
            <h2 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">{post.title}</h2>
            <p className="text-zinc-500">{post.desc}</p>
            <div className="mt-4 text-red-600 font-bold text-sm uppercase tracking-tighter">Davamını oxu →</div>
          </div>
        ))}
      </div>
    </div>
  );
}
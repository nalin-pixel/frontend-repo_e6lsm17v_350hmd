const colorClasses = {
  rose: "from-rose-200 to-rose-100",
  fuchsia: "from-fuchsia-200 to-fuchsia-100",
  amber: "from-amber-200 to-amber-100",
  emerald: "from-emerald-200 to-emerald-100",
  sky: "from-sky-200 to-sky-100",
  violet: "from-violet-200 to-violet-100",
};

export default function Catalog() {
  const products = [
    { name: "Riviera Triangle Set", tag: "Best seller", color: "rose", price: "$18.50" },
    { name: "Monaco One-Piece", tag: "New", color: "fuchsia", price: "$21.00" },
    { name: "Laguna Sport Top", tag: "OEM", color: "amber", price: "$12.90" },
    { name: "Bali High-Waist", tag: "Eco", color: "emerald", price: "$10.40" },
    { name: "Havana Bandeau", tag: "MOQ 200", color: "sky", price: "$13.70" },
    { name: "Tulum Crochet", tag: "Handmade", color: "violet", price: "$24.60" },
  ];

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Export Catalog</h2>
            <p className="mt-2 text-gray-600">Private label ready styles. Colors, prints and fabrics customizable.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-gray-300">Request full line sheet</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${colorClasses[p.color]} flex items-center justify-center text-5xl`}>
                👙
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{p.name}</h3>
                  <p className="text-xs text-gray-500">{p.tag}</p>
                </div>
                <span className="text-sm font-semibold text-rose-600">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

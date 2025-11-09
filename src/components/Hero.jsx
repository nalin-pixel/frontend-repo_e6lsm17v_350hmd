import { ArrowRight, Globe, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] rounded-full bg-rose-200 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] rounded-full bg-rose-100 blur-3xl" />
      </div>

      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="font-semibold text-rose-600 tracking-tight">BikiniExport Co.</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#catalog" className="hover:text-rose-600">Catalog</a>
          <a href="#process" className="hover:text-rose-600">Process</a>
          <a href="#contact" className="hover:text-rose-600">Contact</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-4 py-2 text-white text-sm shadow-sm hover:bg-rose-700"
        >
          Get a Quote <ArrowRight size={16} />
        </a>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-16 pt-6 md:pt-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-rose-700">
              <Globe size={14} /> Trusted Global Export Partner
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Premium Bikini & Swimwear Exporter
            </h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We design, manufacture, and export fashion-forward swimwear with consistent quality
              and on-time delivery. Private label and OEM services available with low MOQs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-white shadow-sm hover:bg-rose-700">
                Explore Catalog <ArrowRight size={18} />
              </a>
              <a href="#process" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-gray-700 hover:border-gray-300">
                How We Work
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield size={16} className="text-rose-600"/> Quality Control</div>
              <div className="flex items-center gap-2"><Globe size={16} className="text-rose-600"/> Worldwide Shipping</div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card color="bg-rose-100" title="Bikini Set" subtitle="Trendy cuts" emoji="👙" />
              <Card color="bg-orange-100" title="One-Piece" subtitle="Classic lines" emoji="🧜‍♀️" />
              <Card color="bg-pink-100" title="Active Swim" subtitle="Sport fit" emoji="🏄‍♀️" />
              <Card color="bg-amber-100" title="Eco Line" subtitle="Recycled" emoji="♻️" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ color, title, subtitle, emoji }) {
  return (
    <div className={`rounded-2xl ${color} p-5 shadow-sm border border-white/60`}> 
      <div className="text-4xl">{emoji}</div>
      <div className="mt-3 font-medium text-gray-900">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
    </div>
  );
}

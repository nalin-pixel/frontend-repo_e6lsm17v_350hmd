import { Package, Factory, Ship, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Factory, title: "Design & Sourcing", desc: "Fabric selection, trims and tech packs finalized with your brand team." },
  { icon: Package, title: "Sampling", desc: "Fit samples and colorways produced within 7-10 days for approval." },
  { icon: CheckCircle2, title: "Production", desc: "Bulk manufacturing with strict QC at each stage and AQL final checks." },
  { icon: Ship, title: "Logistics", desc: "Export documentation, customs and sea/air freight to your destination." },
];

export default function Process() {
  return (
    <section id="process" className="py-16 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">How We Work</h2>
        <p className="mt-2 text-gray-600">A clear, reliable path from idea to shipment.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-5 shadow-sm border border-rose-100">
              <div className="inline-flex items-center justify-center rounded-full bg-rose-100 text-rose-700 w-10 h-10">
                <s.icon size={20} />
              </div>
              <h3 className="mt-3 font-medium text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

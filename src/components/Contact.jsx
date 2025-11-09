import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-rose-50 p-8 border border-rose-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Request a Quote</h2>
              <p className="mt-2 text-gray-600">Share your styles, quantities and destination. Our export team will respond within 24 hours.</p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-center gap-2"><Mail size={16} className="text-rose-600"/> sales@bikiniexport.co</div>
                <div className="flex items-center gap-2"><Phone size={16} className="text-rose-600"/> +62 812-3456-7890</div>
              </div>
            </div>
            <form className="bg-white rounded-2xl p-6 shadow-sm border border-rose-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Name" />
                <input className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200" placeholder="Company" />
                <input type="email" className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200 sm:col-span-2" placeholder="Email" />
                <textarea rows="3" className="rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-200 sm:col-span-2" placeholder="Your requirements (styles, qty, destination)"></textarea>
              </div>
              <button type="button" className="mt-4 inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2.5 text-white hover:bg-rose-700">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Hero />
      <Catalog />
      <Process />
      <Contact />
      <footer className="py-10 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} BikiniExport Co. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#catalog" className="hover:text-gray-800">Catalog</a>
            <a href="#process" className="hover:text-gray-800">Process</a>
            <a href="#contact" className="hover:text-gray-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

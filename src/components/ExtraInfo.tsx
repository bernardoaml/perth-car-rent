import { FaWhatsapp } from "react-icons/fa6";

// src/components/ExtraInfo.tsx
function ExtraInfo() {
  return (
    <section className="bg-brand-navy text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* 1. Designed for Real Life */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-orange">
            Real Life Time Management for Busy People
          </h2>
          <ul className="space-y-4 text-lg leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              Taking long to get to school or work ?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              Tired of scammers on Marketplace and Gumtree?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              New to the city? Greater Perth is 4x bigger (area) than London.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              Not sure if stay permanently in Perth? Want freedom?
            </li>
          </ul>
        </div>

        {/* 2. Book Now */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-orange">
            GET SOME WHEELS TODAY
          </h2>
          <button className="bg-brand-orange px-5 py-2 text-white font-bold rounded-md hover:brightness-110 lg:ml-56 md:ml-56 sm:ml-4 lg:w-1/2 ">
            BOOK NOW
          </button>

        </div>

        {/* 3. Call to Action + WhatsApp */}
        <div className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-orange">
            Need help or have any questions?
          </h2>
          <p className="text-lg">
            Chat with us via WhatsApp
          </p>
          <a
            href="https://wa.me/5531999999999" // substituir número 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-bold shadow-md transition"
          >
             <FaWhatsapp className="inline mr-2" />WHATS APP US NOW
          </a>

          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-orange">
              Don’t waste your precious time on public transport 
            </h2>
            <p className="mt-2 text-lg">
              Choose freedom, choose affordability, choose Move.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExtraInfo;

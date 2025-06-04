import { FaWhatsapp } from "react-icons/fa6";

// src/components/ExtraInfo.tsx
function ExtraInfo() {
  return (
    <section className="bg-brand-navy text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* 1. Designed for Real Life */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-orange">
            Designed for Real Life
          </h2>
          <ul className="space-y-4 text-lg leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              Need a car to get to school or work?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              New to the city? Greater Perth is 4x bigger (area) than London. You will need a car.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              Staying a few months and don’t want to buy a car?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              Tired of scammers on Marketplace and Gumtree?
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 text-xl">✔️</span>
              Working more hours on second job? Apps?
            </li>
          </ul>
          <p className="text-lg font-semibold mt-6 text-white">
            New to Perth and time efficient? Freedom?{" "}
            <span className="text-brand-orange">Get some wheels with us.</span>
          </p>
        </div>

        {/* 2. Book Now */}
        <div className="bg-white text-brand-navy rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-orange">
            Book Now – It’s Fast & Easy
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">📝</span>
              Fill in your details
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-500 text-xl">⏱️</span>
              Get approval within 24h
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-500 text-xl">🚗</span>
              Pick up your car and go!
            </li>
          </ul>
        </div>

        {/* 3. Call to Action + WhatsApp */}
        <div className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-orange">
            Need help or have questions?
          </h2>
          <p className="text-lg">
            Chat with us via WhatsApp or send us a message below.
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
              Don’t Let Transport Hold You Back
            </h2>
            <p className="mt-2 text-lg">
              Choose freedom, choose Move Technologies. <br />
              Get from point A to B without breaking the bank.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ExtraInfo;

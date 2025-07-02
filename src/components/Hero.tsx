import { FaWhatsapp } from "react-icons/fa6";
function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTEÚDO SOBRE O OVERLAY */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row  lg:justify-between px-6 md:px-20 pt-10 md:pt-20 gap-8">
        {/* Left Text */}
        <div className="text-white max-w-xl space-y-6 text-center lg:text-left mt-24">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            MOVE TECHNOLOGIES
          </h1>
          <p className="text-xl md:text-3xl font-extrabold leading-tight">
            Doorstep Vehicle Delivery with a single click.*</p>

          <a
            href="https://wa.me/5531994286016"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-bold shadow-md transition"
            >
             WHATSAPP US NOW
          </a>
          <p className="italic text-xs mt-72 md:relative -bottom-1/2 -right-1">*Subject to rentall duration</p>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-md bg-white text-black rounded-md shadow-xl p-6 self-center">
          <h2 className="bg-brand-orange text-white px-4 py-2 font-bold text-lg rounded-t-md text-center">
            Get a Quote
          </h2>
          <form className="lg:space-y-4 my-4 text-sm">
            <div>
              <label>Pick up Location</label>
              <select className="w-full border p-2 rounded">
                <option>31 Lynton Street, Doubleview. 6018</option>
                <option>2 Maquire Road, Hillarys. 6020</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label>Pick up Date</label>
                <input type="date" className="w-full border p-2 rounded" />
              </div>
              <div className="flex-1">
                <label>Pick up Time</label>
                <input type="time" className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label>Drop off Location</label>
              <select className="w-full border p-2 rounded">
                <option>31 Lynton Street, Doubleview. 6018</option>
                <option>2 Maquire Road, Hillarys. 6020</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label>Drop off Date</label>
                <input type="date" className="w-full border p-2 rounded" />
              </div>
              <div className="flex-1">
                <label>Drop off Time</label>
                <input type="time" className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label>Driver Age</label>
              <select className="w-full border p-2 rounded">
                {[...Array(10)].map((_, i) => (
                  <option key={i}>{21 + i}</option>
                ))}
                <option>30+</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:brightness-110"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;

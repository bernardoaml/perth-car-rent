import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6"
import { IoChevronUp } from "react-icons/io5"

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-brand-navy text-white pt-12 pb-6 px-6 md:px-20">
      {/* SETINHA */}

      <button
        onClick={scrollToTop}
        className=" bg-white text-brand-navy p-2 rounded-full shadow-lg hover:scale-110 transition"
        aria-label="Scroll to top"
      >
        <IoChevronUp size={20} />
      </button>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
        {/* LOGO E FRASE */}
        <div className="flex flex-col items-start gap-4 max-w-md">
          <img src="/logo-move1.png" alt="Company Logo" className="h-24 w-auto" />
          <p className="text-gray-300 text-sm">
            Budget-friendly solutions going from A to B. 
          </p>
        </div>

        {/* CONTATO */}
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="text-white font-semibold text-lg mb-2">Contact Us</h4>
          <p><span className="font-bold">Phone</span> – 7777 777 777</p>
          <p><span className="font-bold">Email</span> – info@move.au</p>
          <p><span className="font-bold">Address</span> – 31 Lynton Street,<br />Doubleview, Perth - Australia, 6018</p>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* RODAPÉ INFERIOR */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Move Technologies Ltd.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaWhatsapp /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

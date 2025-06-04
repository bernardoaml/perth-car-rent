function Header() {
  return (
    <header className="w-full z-50 bg-transparent text-black shadow-md">
      <div className="max-w-screen-2xl mx-auto py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <img
            src="/logo-move2.png"
            alt="Perth Rent a Car Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* MENU */}
        <nav className="flex-1 hidden lg:flex justify-end gap-8 text-sm font-semibold tracking-wide">
          <a href="#" className="hover:text-brand-orange">HOME</a>
          <a href="#">WHY CHOOSE US</a>
          <a href="#">FAQ</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* BOTÃO */}
        <div className="ml-8">
          <button className="bg-brand-orange px-5 py-2 text-white font-bold rounded-md hover:brightness-110">
            BOOK NOW
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header

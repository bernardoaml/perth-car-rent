function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      {/* OVERLAY ESCURO */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* CONTEÚDO SOBRE O OVERLAY */}
      <div className="relative z-10 w-full h-full flex items-center justify-between px-6 md:px-20 pt-20">
        {/* Left Text */}
        <div className="text-white max-w-xl space-y-6">
          <h3 className="text-brand-orange text-sm font-bold">BEAT ANY PRICE</h3>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            MOVE TECHNOLOGIES
          </h1>
          <p className="text-lg text-white font-semibold p-2 rounded">
            Living in Perth might be expensive, but your mobility doesn’t have to be.<br />
            Working/Holiday, student, workers, rideshare drivers & travellers – all welcome
          </p>
          <div className="flex gap-4">
            <button className="bg-brand-orange px-6 py-3 font-semibold rounded-md">
              BROWSE CARS
            </button>
            <button className="bg-white text-brand-navy px-6 py-3 font-semibold rounded-md">
              CALL NOW
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="hidden lg:block bg-white text-black rounded-md shadow-xl p-6 w-[350px]">
          <h2 className="bg-brand-orange text-white px-4 py-2 font-bold text-lg rounded-t-md">
            Quote or Book Now
          </h2>
          <form className="space-y-4 mt-4 text-sm">
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
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30+</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:brightness-110">
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Hero;

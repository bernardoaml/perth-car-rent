function AboutUs() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-brand-navy">
      {/* Comparison Box */}
      <div className="mt-12 bg-white border border-brand-orange rounded-xl shadow-md overflow-hidden">
        <h3 className="bg-brand-orange text-white px-6 py-3 text-2xl font-bold">
          What Makes Us Different?
        </h3>
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Move Technologies */}
          <div className="p-6 space-y-4">
            <h4 className="text-xl font-bold text-brand-navy">
              ✅ Move Technologies
            </h4>
            <ul className="list-disc list-inside space-y-2 text-brand-navy text-base">
              <li>Average $150–170 / week</li>
              <li>$300–400 bond</li>
              <li>Stress-free and fair paperwork</li>
              <li>100% digital booking</li>
              <li>Local business - Perth born and bred</li>
            </ul>
          </div>

          {/* Traditional Rentals */}
          <div className="p-6 space-y-4 bg-brand-navy/5">
            <h4 className="text-xl font-bold text-brand-navy">
              ❌ Traditional Rentals
            </h4>
            <ul className="list-disc list-inside space-y-2 text-brand-navy text-base">
              <li>Average $300–400 / week</li>
              <li>$700–1000 bond</li>
              <li>Aggressive rental agreements</li>
              <li>In-person forms</li>
              <li>Multinational</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-24 space-y-8 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-orange mb-6">
          Why Move Technologies?
        </h2>

        {/* <div className="space-y-4 text-lg leading-relaxed">
          <p>
            Need to go from <strong>A to B</strong>? <br />
            We offer the quickest and most affordable way to go from one place to another.
          </p>
          <p>
            <strong>Transforming the way people move.</strong><br />
            Affordable weekly rates. No paperwork. No stress.
          </p>
          <p>
            At Move Technologies, we believe that going from and to different places should be a
            pleasant and affordable journey.
          </p>
        </div> */}

        <div className="mt-12 bg-brand-navy/5 p-6 md:p-10 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-brand-orange mb-4">
            Suitable for:
          </h3>

          <ul className="list-disc list-inside space-y-1 text-base pl-2">
            <li>Working-Holiday makers</li>
            <li>Students/Workers</li>
            <li>Rideshare apps (Uber, DiDi, etc.)</li>
            <li>Permanent Residents</li>
          </ul>
          <p className="mt-4 font-semibold">
            Budget-friendly rates{" "}
            <span className="text-brand-orange">$150–170 per week</span>, you're
            ready to roll.
          </p>
        </div>
        {/* Where We Are
<div className="mt-12 space-y-4">
  <h3 className="text-3xl font-bold text-brand-navy flex items-center gap-2">
     Where We Are
  </h3>
  <p className="text-lg text-gray-700">
    Perth & Darwin – and growing! <br />
    Pick-up and drive with freedom wherever you go. Your journey should be safe, affordable and fun — this is our goal.
  </p>
</div> */}

        {/* Our Fleet */}
        {/* <div className="mt-12 space-y-4">
  <h3 className="text-3xl font-bold text-brand-navy flex items-center gap-2">
     Our Fleet
  </h3>
  <p className="text-lg text-gray-700">
    <strong>Compact</strong> | <strong>Sedan</strong> | <strong>Hatchback</strong> / <strong>Campervans</strong>
  </p>
  <p className="text-lg text-gray-700">
    Vehicles professionally cleaned, reliable, and ready for your next job or adventure.
  </p>
</div> */}
      </div>
    </section>
  );
}

export default AboutUs;

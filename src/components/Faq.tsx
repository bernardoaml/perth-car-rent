import { useState } from "react"
import { IoChevronDown, IoChevronUp } from "react-icons/io5"

const faqs = [
  {
    question: "Is there a bond required? How much is it?",
    answer:
      "Yes, there is. A bond will vary between $300-400, accordingly to your driver license, age etc.",
  },
  {
    question: "Can I reduce my liabilities for accidents when renting a vehicle?",
    answer: "Yes, we offer different types of insurance - third party is mandatory.",
  },
  {
    question: "Can I use a foreign driver’s license?",
    answer: "Yes, but if not in English a translation and passport are required.",
  },
  {
    question: "Is it limited KMs?",
    answer: "No, you can drive as much as you want.",
  },
]

function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="bg-brand-orange text-black py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-brand-navy">
          Frequently Asked Questions
        </h2>

        {faqs.map((item, index) => (
          <div
            key={index}
            className="mb-4 border-b-4 border-brand-navy bg-white shadow"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-4 font-semibold text-left"
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                <IoChevronUp className="text-lg" />
              ) : (
                <IoChevronDown className="text-lg" />
              )}
            </button>

            {activeIndex === index && (
              <div className="bg-blue-100 text-sm px-4 py-3 text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq

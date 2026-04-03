"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SmoothReveal from "./SmoothReveal";

const faqs = [
  {
    question: "Who owns the code after the project is complete?",
    answer: "You do. Once the final payment is made, full ownership of the source code, assets, and deployment infrastructure is transferred to you. I believe in zero vendor lock-in."
  },
  {
    question: "How do you ensure the site is SEO-friendly?",
    answer: "I build with Next.js and high-performance server-side rendering (SSR) by default. This ensures sub-second load times and semantic HTML that search engines love to rank."
  },
  {
    question: "What happens after the site is live?",
    answer: "I provide a 30-day post-launch support window for any bugs or minor tweaks. I also offer ongoing maintenance packages for businesses that want continuous optimization."
  },
  {
    question: "Do you handle the design as well as the coding?",
    answer: "Yes. I offer end-to-end solutions from high-fidelity strategy and design to final engineering and launch, ensuring a seamless and high-quality result."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <SmoothReveal>
          <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-16 text-center">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </SmoothReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-purple-400 transition-colors"
              >
                <span className="text-xl md:text-2xl font-display font-bold">{faq.question}</span>
                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="pb-8 text-neutral-400 font-sans leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

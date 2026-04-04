"use client";

import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import SmoothReveal from "./SmoothReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-6 md:px-12 bg-black overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        <div className="lg:w-1/2">
          <SmoothReveal>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-8">
              Let&apos;s Scale Your <span className="text-gradient">Business</span>
            </h2>
          </SmoothReveal>
          <p className="text-xl text-neutral-400 font-sans leading-relaxed mb-12 max-w-lg">
            Ready to strip away complexity and drive measurable growth? Fill out the brief below and let&apos;s engineer your next digital advantage.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-neutral-300">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Send size={20} className="text-purple-400" />
              </div>
              <span className="text-lg font-display">hello@abdullahkashif.com</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:p-12 rounded-[40px] bg-neutral-900/40 border border-white/5 backdrop-blur-md"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-4">Your Name</label>
              <input type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 transition-colors" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-4">Business Email</label>
              <input type="email" placeholder="john@company.com" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 transition-colors" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-4">Current Website (Optional)</label>
              <input type="url" placeholder="https://www.yourbusiness.com" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 transition-colors" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-4">Your Primary Goal</label>
              <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 transition-colors appearance-none">
                <option value="landing-page">Landing Page Sprint</option>
                <option value="corporate-site">Corporate Authority Site</option>
                <option value="automation">Automation & Custom Apps</option>
                <option value="other">Other Growth Need</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-4">Approximate Budget</label>
              <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-purple-500/50 transition-colors appearance-none">
                <option value="1500-3000">$1,500 - $3,000</option>
                <option value="3000-5000">$3,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000+">$10,000+</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-4">
              <MagneticButton>
                <button className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-white text-black font-display font-bold uppercase tracking-widest rounded-2xl hover:bg-purple-500 hover:text-white transition-all duration-500 group">
                  Send Project Brief <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>
            </div>
          </motion.form>
        </div>

      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: 'What subjects do you offer online tutoring for?',
    answer: 'We offer tutoring in a wide range of subjects including O Level, A Level, IGCSE, GCSE, Mathematics, Sciences, English, Business Studies, and more.',
  },
  {
    question: 'Are the tutoring sessions one-to-one or group based?',
    answer: 'We primarily offer one-to-one sessions to ensure personalized attention, but small group sessions can be arranged upon request.',
  },
  {
    question: 'How are classes conducted online?',
    answer: 'Classes are conducted via secure, interactive video conferencing platforms equipped with digital whiteboards and screen sharing capabilities.',
  },
  {
    question: 'Who are your tutors?',
    answer: 'Our tutors are highly qualified professionals with strong academic backgrounds and extensive teaching experience in their respective subjects.',
  },
  {
    question: 'Can I choose my tutor?',
    answer: 'Yes, we try our best to match you with a tutor that fits your learning style, and you can request a change if you feel it is not the right fit.',
  },
  {
    question: 'Do you offer trial classes?',
    answer: 'Yes, we offer a 2-day free trial so you can experience our teaching methodology before making a commitment.',
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="max-w-4xl mx-auto border border-[#E2E8F0] rounded-xl bg-white overflow-hidden shadow-sm">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border-b border-[#E2E8F0] last:border-b-0 transition-colors ${
            openIndex === index ? 'bg-[#F8FAFC]' : ''
          }`}
        >
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
          >
            <span className="font-bold text-[#0F172A] text-sm md:text-base pr-4">
              {faq.question}
            </span>
            <span className="text-[#2563EB] shrink-0 group-hover:scale-110 transition-transform">
              {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
            </span>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-[#64748B] text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

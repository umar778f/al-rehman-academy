import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white text-[#64748B] py-12 md:py-16 border-t border-[#E2E8F0]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-[#64748B] text-sm leading-relaxed max-w-md">
              <span className="font-bold text-[#2563EB] mr-2">A</span> AL REHMAN ACADEMY Offers Expert Home and
              Online Tutoring Services Across Pakistan. We
              connect Students with Qualified Tutors for all
              Subjects and Grades, Providing Personalized
              support to boost Academic Performance.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-[#F1F5F9] text-[#64748B] rounded flex items-center justify-center hover:text-[#2563EB] hover:bg-white hover:border-[#E2E8F0] border border-transparent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#F1F5F9] text-[#64748B] rounded flex items-center justify-center hover:text-[#2563EB] hover:bg-white hover:border-[#E2E8F0] border border-transparent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#F1F5F9] text-[#64748B] rounded flex items-center justify-center hover:text-[#2563EB] hover:bg-white hover:border-[#E2E8F0] border border-transparent transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-[11px] font-bold mb-6 tracking-widest uppercase text-[#1E293B]">INFORMATION</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm font-medium hover:text-[#2563EB] transition-colors">
                  Terms & Condition for Parents /Students
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium hover:text-[#2563EB] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923154485676?text=Hello%20AL%20REHMAN%20ACADEMY%2C%20I%20need%20tutoring%20information"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm font-medium hover:text-[#2563EB] transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

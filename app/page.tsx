import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FaqAccordion } from '@/components/faq-accordion';
import { 
  User, 
  GraduationCap, 
  Home, 
  LineChart, 
  Clock, 
  DollarSign,
  BookOpen,
  Laptop,
  Book,
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen font-sans bg-[#F8FAFC] text-[#1E293B]">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#c8dbd0] pt-32 pb-16 md:pt-40 md:pb-28 border-b border-[#b5c7bc]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-bold text-[10px] uppercase tracking-widest mb-4">Empowering Students Nationwide</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0F172A] leading-[1.1] mb-6 tracking-tight">
              Home & Online <span className="text-[#2563EB]">Tuition Services</span>
            </h1>
            <p className="text-lg text-[#64748B] mb-8 max-w-2xl leading-relaxed">
              AL REHMAN ACADEMY connects students with a wide network of qualified tutors
              across the country. We provide both home and online tuition, delivering personalized
              learning support designed to match individual goals.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#C06B6B] hover:bg-[#A85A5A] text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-red-200 transition-all"
            >
              BOOK 2 DAYS FREE TRIAL
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] text-center">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">
          <p className="text-[#2563EB] font-bold text-[10px] uppercase tracking-widest mb-4">Our Mission</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#0F172A] tracking-tight">Who We Are</h2>
          <p className="text-[#64748B] text-lg leading-relaxed">
            Warmly welcome to AL REHMAN ACADEMY, a trusted home tuition service based in Jeddah. Our mission is to deliver quality education tailored to each student&apos;s individuality and needs, igniting a love for learning. Recognizing each student&apos;s uniqueness, we provide personalized one-on-one sessions, embracing every learner&apos;s diversity. The experienced and qualified tutors at AL REHMAN ACADEMY strive to cultivate academic growth and spark curiosity in our students. We aim to foster a supportive environment where learning is enjoyable, and learners feel comfortable asking questions, sharing ideas, and excelling academically. Another AL REHMAN ACADEMY branch operates in Lahore, providing the same dedicated tutoring services.
          </p>
        </div>
      </section>

      {/* Advantages and Features */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-[#0F172A] tracking-tight">Advantages and Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col group cursor-pointer border border-[#E2E8F0] p-8 rounded-xl hover:border-[#2563EB] transition-colors">
              <div className="w-32 h-32 mb-6 group-hover:scale-105 transition-transform overflow-hidden rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                <img src="/feature-1.png" alt="Personalized Learning" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Personalized Learning</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We believe every learner is unique with distinct needs. We adapt our teaching to fit each individual, delivering tailored instruction and pacing lessons to student requirements. This approach makes learning more engaging and effective.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col group cursor-pointer border border-[#E2E8F0] p-8 rounded-xl hover:border-[#2563EB] transition-colors">
              <div className="w-32 h-32 mb-6 group-hover:scale-105 transition-transform overflow-hidden rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                <img src="/feature-2.png" alt="Experienced Tutors" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Experienced Tutors</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Our tutors are highly educated and experienced, with a strong command of their subjects. They build meaningful connections with students, understanding their needs and boosting confidence, while helping develop skills beyond academic knowledge.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col group cursor-pointer border border-[#E2E8F0] p-8 rounded-xl hover:border-[#2563EB] transition-colors">
              <div className="w-32 h-32 mb-6 group-hover:scale-105 transition-transform overflow-hidden rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                <img src="/feature-3.png" alt="Home Based Learning" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Home Based Learning</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                AL REHMAN ACADEMY facilitates online services, which is a great benefit for the learners and parents. We provide convenience by bringing knowledge to students in their homes. This will eliminate the need for a commute, saving the time of the learners and bringing flexibility in learning hours according to the learners&apos; accommodation. It also enhances the familiarity and comfort of the learning environment.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col group cursor-pointer border border-[#E2E8F0] p-8 rounded-xl hover:border-[#2563EB] transition-colors">
              <div className="w-32 h-32 mb-6 group-hover:scale-105 transition-transform overflow-hidden rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                <img src="/feature-4.png" alt="Progress Monitoring" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Progress Monitoring</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                The facilitators at AL REHMAN ACADEMY track students&apos; progress. This helps in tracking down their growth and helps in recognizing the aspects of learners that need to be resolved. We ensure to share regular evaluation to the parents and students, so that it highlights the areas that need to be improved and requires further focus.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col group cursor-pointer border border-[#E2E8F0] p-8 rounded-xl hover:border-[#2563EB] transition-colors">
              <div className="w-32 h-32 mb-6 group-hover:scale-105 transition-transform overflow-hidden rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                <img src="/feature-5.png" alt="Flexible Timings" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Flexible Timings</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                AL REHMAN ACADEMY provides their services at adjustable timings so that it increases the ease for students. All the timings are suitable for students&apos; routines. Whether the preference of a student is morning, afternoon, or evening sessions, we help them accommodate their relevant demand and make sure the learning environment is optimal.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="flex flex-col group cursor-pointer border border-[#E2E8F0] p-8 rounded-xl hover:border-[#2563EB] transition-colors">
              <div className="w-32 h-32 mb-6 group-hover:scale-105 transition-transform overflow-hidden rounded-xl bg-[#F1F5F9] flex items-center justify-center">
                <img src="/feature-6.png" alt="Affordable Pricing" className="w-full h-full object-contain p-2" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Affordable Pricing</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                The first priority of our team is to provide high-quality education to everyone. Keeping the better standard of education as their first priority, AL REHMAN ACADEMY provides excellent services without any compromise, offering affordable prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="services" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#0F172A] tracking-tight">Featured Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl flex items-center justify-center mb-6 group-hover:border-[#2563EB] transition-colors overflow-hidden">
                 <img src="/service-1.png" alt="Home Tutoring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Home Tutoring</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Enjoy the pinnacle of personalized education within the comfort of your home. In order to achieve academic success for their learners, our dedicated tutors provide individualized guidance to each learner. Experience this worthwhile learning journey with AL REHMAN ACADEMY in Jeddah.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl flex items-center justify-center mb-6 group-hover:border-[#2563EB] transition-colors overflow-hidden">
                 <img src="/service-2.png" alt="Online Tutoring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Online Tutoring</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                AL REHMAN ACADEMY, with the help of its qualified teachers, provides individualized learning. The online classes are highly engaging, and tailored lesson plans make sure that all the necessities of your child are fulfilled. Improvement in your child&apos;s academic performance and ensuring excellence by engaging with us.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="w-full aspect-[4/3] bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl flex items-center justify-center mb-6 group-hover:border-[#2563EB] transition-colors overflow-hidden">
                 <img src="/service-3.png" alt="Quran Tutoring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#0F172A]">Quran Tutoring</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                We also offer services of Quran tutoring with the help of our experienced team. Experience the ease of learning the Holy Qur&apos;an from your home. One-on-one lessons of Quran tuition make sure that all the specific needs are fulfilled and efficient learning is ensured. Our tailored lessons also make sure that the Qur&apos;an learning is accomplished in the most effective way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability of Tutors */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A] tracking-tight">Availability of Tutors</h2>
            <p className="text-[#64748B] text-lg max-w-2xl leading-relaxed">
              Our team offers tutoring services from grades 1 to 12. We provide holistic tutoring for every class. Our devoted team of tutors are available to deliver great instructions in the most diverse disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#0F172A]">Grade 1-5</h3>
              <ul className="space-y-2 text-[#64748B] text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> English</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Mathematics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Science</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Social Studies</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Urdu</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Islamic Studies</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-[#0F172A]">Grade 6-8</h3>
              <ul className="space-y-2 text-[#64748B] text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> English</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Mathematics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Science</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Computer Science</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Social Studies</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Urdu</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Islamic Studies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#0F172A]">Matric/O Level</h3>
              <ul className="space-y-2 text-[#64748B] text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> English</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Mathematics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Science (Physics, Chemistry, Biology)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Computer Science</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Social Studies</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Urdu</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Islamic Studies</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-[#0F172A]">F.Sc/A Level</h3>
              <ul className="space-y-2 text-[#64748B] text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> English</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Mathematics</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Science (Physics, Chemistry, Biology)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Computer Science</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Social Studies</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Urdu</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-sm bg-[#2563EB] shrink-0" /> Islamic Studies</li>
              </ul>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6 text-[#64748B] text-sm leading-relaxed">
            <p>
              Our tutors have a strong command of their relevant subjects and have very competent academic qualifications. They have a strong passion of helping students in such a way to make them succeed. They tailor their teaching methodology according to the individual learning styles. Our team believes in creating a positive and interactive learning space so that it helps the learners to grow academically and also enhances their confidence.
            </p>
            <p>
              In case of having a need for one of the best home tuition services, for any grade and subjects mentioned, please reach out to us at AL REHMAN ACADEMY. We will be pleased to find you the best tutor according to your explicit needs.
            </p>
            <p>
              Moreover, for learning the Holy Qur&apos;an, you can also contact us online and get the benefits of an online Qur&apos;an academy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A] tracking-tight">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="container mx-auto px-4 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight mb-2">417+</p>
              <p className="text-[10px] text-[#64748B] uppercase tracking-widest font-bold">Graduated Students</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight mb-2">4+</p>
              <p className="text-[10px] text-[#64748B] uppercase tracking-widest font-bold">Awards & Recognition</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight mb-2">21+</p>
              <p className="text-[10px] text-[#64748B] uppercase tracking-widest font-bold">Professional Teachers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Tutor Form */}
      <section id="contact" className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-12 max-w-4xl">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0F172A] tracking-tight">Start a Conversation</h2>
            <p className="text-[10px] text-[#64748B] uppercase tracking-widest font-bold">Note: This form is only for students and parents who want to hire a tutor.</p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">Street Address</label>
              <input type="text" placeholder="123 Main St" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">City</label>
                <input type="text" placeholder="City" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">State/Province</label>
                <input type="text" placeholder="State" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">ZIP / Postal Code</label>
                <input type="text" placeholder="Postal Code" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">Country</label>
                <select className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB] appearance-none">
                  <option value="">Select country</option>
                  <option value="PK">Pakistan</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="AE">UAE</option>
                  <option value="US">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">Subject</label>
              <input type="text" placeholder="Subject" className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB]" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider block">Message</label>
              <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full bg-white border border-[#E2E8F0] rounded-lg p-3 text-sm focus:outline-none focus:border-[#2563EB] resize-y"></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 bg-[#2563EB] text-white font-bold rounded-lg hover:bg-[#1D4ED8] shadow-lg shadow-blue-200 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

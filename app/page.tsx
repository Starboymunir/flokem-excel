import Header from "./(site)/components/Header";
import PricingCard from "./(site)/components/PricingCard";
import StickyContactBar from "./(site)/components/StickyContactBar";
import HeroArt from "./(site)/components/HeroArt";
import GalleryCollage from "./(site)/components/GalleryCollage";
import Footer from "./(site)/components/Footer";
import { Printer, ScanLine, IdCard, PenSquare, Network } from "lucide-react";

export default function Page(){
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="section bg-gradient-to-br from-fx-red to-fx-navy text-white">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="badge bg-white/15 text-white">Trusted Local Computer Centre</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">Empowering Digital Skills & Education</h1>
            <p className="mt-4 text-white/90">Your one-stop center for computer training, business services & digital empowerment.</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="tel:08063710645" className="btn btn-primary bg-white text-fx-red">📞 Call Now</a>
              <a href="https://wa.me/2348063710645" className="btn btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-fx-navy">💬 WhatsApp</a>
            </div>
          </div>
          <HeroArt/>
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-fx-navy">About Flokem-Excel</h2>
            <p className="mt-4 text-fx-ink/80">Fast, affordable business centre and training—typing, printing, registrations, scanning, and practical computer skills.</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="card flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-fx-red to-fx-gold" aria-hidden/> Affordable</div>
              <div className="card flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-fx-red to-fx-gold" aria-hidden/> Reliable</div>
              <div className="card flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-fx-red to-fx-gold" aria-hidden/> Accessible</div>
              <div className="card flex items-center gap-2"><span className="inline-block h-3 w-3 rounded-full bg-gradient-to-br from-fx-red to-fx-gold" aria-hidden/> Skilled Tutors</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="card">Fast Turnaround</div>
            <div className="card">7-Day Availability</div>
            <div className="card">Friendly Support</div>
            <div className="card">Practical Projects</div>
          </div>
        </div>
      </section>

      {/* COMPUTER SERVICES */}
      <section className="section bg-fx-gray50 scroll-mt-24" id="computer-services">
        <div className="container">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-fx-navy">Computer Services</h2>
              <p className="mt-2 text-fx-ink/70">Business centre services with clear pricing and fast turnaround.</p>
            </div>
            <div className="flex gap-2">
              <a href="tel:08063710645" className="btn btn-primary">📞 Call</a>
              <a href="https://wa.me/2348063710645" className="btn btn-secondary">💬 WhatsApp</a>
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <PricingCard title="Typing & Printing" price="₦200/page" features={["Black/Color","Spiral Binding","Email/Flash"]} featured icon={<Printer size={18}/>}/>
            <PricingCard title="Photocopy & Lamination" price="₦50/page" features={["A4/A3","IDs","Documents"]} icon={<IdCard size={18}/>}/>
            <PricingCard title="Scanning & Email" price="₦100/page" features={["PDF","Bulk","Archive"]} icon={<ScanLine size={18}/>}/>
            <PricingCard title="Online Registrations" price="₦1,000" features={["JAMB","WAEC","NECO","NYSC"]} icon={<PenSquare size={18}/>}/>
            <PricingCard title="Graphic Design & CV Writing" price="₦1,500" features={["CV","Flyers","Passport IDs"]} icon={<PenSquare size={18}/>}/>
            <PricingCard title="Internet / Cafe Services" price="₦200/30min" features={["Browsing","Downloads","Printing Support"]} icon={<Network size={18}/>}/>
          </div>
        </div>
      </section>

      {/* TRAINING */}
      <section className="section scroll-mt-24" id="training">
        <div className="container space-y-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-fx-navy">Training</h2>
              <p className="mt-2 text-fx-ink/70">Structured learning for digital skills and exam success.</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                <a href="#computer-training" className="badge">Computer Training</a>
                <a href="#jamb-waec" className="badge">JAMB/WAEC Tutorials</a>
              </div>
            </div>
          </div>

          {/* Computer Training Track */}
          <div className="scroll-mt-24" id="computer-training">
            <div className="mt-6 bg-fx-gray50 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-fx-navy">Computer Training</h3>
              <p className="mt-1 text-fx-ink/70">Hands-on classes with practical projects.</p>
              <div className="mt-6 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
                <div className="card">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-sm text-fx-ink/70 mt-1">HTML/CSS/JS • React/Next.js basics.</p>
                  <div className="mt-4">Starting <span className="font-semibold text-fx-red">₦25,000</span></div>
                  <div className="mt-4 flex gap-2">
                    <a href="tel:08063710645" className="btn btn-primary">Enroll</a>
                    <a href="https://wa.me/2348063710645" className="btn btn-secondary">WhatsApp</a>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-lg font-semibold">Basic Computer</h4>
                  <p className="text-sm text-fx-ink/70 mt-1">Windows, typing, internet basics.</p>
                  <div className="mt-4">Starting <span className="font-semibold text-fx-red">₦10,000</span></div>
                  <div className="mt-4 flex gap-2">
                    <a href="tel:08063710645" className="btn btn-primary">Enroll</a>
                    <a href="https://wa.me/2348063710645" className="btn btn-secondary">WhatsApp</a>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-lg font-semibold">MS Excel</h4>
                  <p className="text-sm text-fx-ink/70 mt-1">Formulas, charts, data cleaning.</p>
                  <div className="mt-4">Starting <span className="font-semibold text-fx-red">₦12,000</span></div>
                  <div className="mt-4 flex gap-2">
                    <a href="tel:08063710645" className="btn btn-primary">Enroll</a>
                    <a href="https://wa.me/2348063710645" className="btn btn-secondary">WhatsApp</a>
                  </div>
                </div>
                <div className="card">
                  <h4 className="text-lg font-semibold">Graphics Design</h4>
                  <p className="text-sm text-fx-ink/70 mt-1">CorelDRAW / Photoshop basics.</p>
                  <div className="mt-4">Starting <span className="font-semibold text-fx-red">₦15,000</span></div>
                  <div className="mt-4 flex gap-2">
                    <a href="tel:08063710645" className="btn btn-primary">Enroll</a>
                    <a href="https://wa.me/2348063710645" className="btn btn-secondary">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JAMB/WAEC Tutorials Track */}
          <div className="scroll-mt-24" id="jamb-waec">
            <div className="mt-2 bg-fx-navy text-white rounded-2xl p-6">
              <h3 className="text-2xl font-semibold">JAMB/WAEC Tutorials</h3>
              <p className="mt-1 text-white/80">Exam-focused sessions with practice tests and past questions.</p>
              <div className="mt-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                <div className="card bg-white text-fx-ink">
                  <h4 className="text-lg font-semibold">Science Track</h4>
                  <ul className="mt-2 text-sm space-y-2 list-dot">
                    <li>Physics, Chemistry, Biology</li>
                    <li>Mathematics, English</li>
                    <li>Weekly mock tests</li>
                  </ul>
                  <div className="mt-4">From <span className="font-semibold text-fx-red">₦8,000/month</span></div>
                  <div className="mt-4 flex gap-2">
                    <a href="tel:08063710645" className="btn btn-primary">Enroll</a>
                    <a href="https://wa.me/2348063710645" className="btn btn-secondary">WhatsApp</a>
                  </div>
                </div>
                <div className="card bg-white text-fx-ink">
                  <h4 className="text-lg font-semibold">Arts Track</h4>
                  <ul className="mt-2 text-sm space-y-2 list-dot">
                    <li>Government, Literature, CRS</li>
                    <li>Mathematics, English</li>
                    <li>Weekend revision classes</li>
                  </ul>
                  <div className="mt-4">From <span className="font-semibold text-fx-red">₦8,000/month</span></div>
                  <div className="mt-4 flex gap-2">
                    <a href="tel:08063710645" className="btn btn-primary">Enroll</a>
                    <a href="https://wa.me/2348063710645" className="btn btn-secondary">WhatsApp</a>
                  </div>
                </div>
                <div className="card bg-white text-fx-ink">
                  <h4 className="text-lg font-semibold">Weekend Crash Program</h4>
                  <ul className="mt-2 text-sm space-y-2 list-dot">
                    <li>Past questions drilling</li>
                    <li>Time management skills</li>
                    <li>Exam strategy tips</li>
                  </ul>
                  <div className="mt-4">From <span className="font-semibold text-fx-red">₦5,000</span></div>
                  <div className="mt-4 flex gap-2">
                    <a href="tel:08063710645" className="btn btn-primary">Enroll</a>
                    <a href="https://wa.me/2348063710645" className="btn btn-secondary">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Gallery — collage */}
      <section className="section" id="gallery">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-fx-navy">Gallery</h2>
          <div className="mt-6">
            <GalleryCollage/>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section bg-fx-navy text-white" id="contact">
        <div className="container grid md:grid-cols-2 gap-8">
          <div className="card bg-white text-fx-ink">
            <h3 className="text-xl font-semibold">Quick Message</h3>
            <form className="mt-4 grid gap-3">
              <input placeholder="Name" className="border rounded-xl px-4 py-3" />
              <textarea placeholder="Message" className="border rounded-xl px-4 py-3 min-h-[120px]" />
              <button type="submit" className="btn btn-primary w-fit">Send</button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Call or WhatsApp</h3>
            <p className="mt-2 text-white/80">Reach out for directions, hours, and enrollment.</p>
            <div className="mt-4 flex gap-3 flex-wrap">
              <a href="tel:08063710645" className="btn btn-primary">📞 Call</a>
              <a href="https://wa.me/2348063710645" className="btn btn-secondary">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
      <StickyContactBar />
    </main>
  );
}

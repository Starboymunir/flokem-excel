import { Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
export default function Footer(){
  return (
    <footer className="pt-16 bg-gradient-to-b from-white to-fx-gray50 border-t">
      <div className="container grid md:grid-cols-4 gap-8">
        <div>
           <Link href="#" className="flex items-center gap-3">
  <Logo layout="horizontal" variant="dark" size={32}/>
</Link>
          <p className="mt-3 text-sm text-fx-ink/70">
            Business centre services and practical training—fast, friendly, and reliable.
          </p>
          <div className="mt-4 flex gap-2">
            <a href="tel:08063710645" className="btn btn-primary"><Phone size={16}/>Call</a>
            <a href="https://wa.me/2348063710645" className="btn btn-secondary"><MessageCircle size={16}/>WhatsApp</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-fx-navy">Services</h4>
          <ul className="mt-3 space-y-2 text-sm list-dot">
            <li>Typing & Printing</li>
            <li>Photocopy & Lamination</li>
            <li>Scanning & Email</li>
            <li>Online Registrations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-fx-navy">Training</h4>
          <ul className="mt-3 space-y-2 text-sm list-dot">
            <li>Web Development</li>
            <li>Basic Computer</li>
            <li>MS Excel</li>
            <li>Graphics Design</li>
            <li>JAMB/WAEC Tutorials</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-fx-navy">Find Us</h4>
          <p className="mt-3 text-sm text-fx-ink/70">Call or WhatsApp for directions and opening hours.</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" aria-label="Facebook"><Facebook size={18}/></a>
            <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t">
        <div className="container py-6 text-xs text-fx-ink/60 flex items-center justify-between">
          <span>© 2025 Flokem-Excel Computer Institute & Business Centre</span>
          <span>Designed by You</span>
        </div>
      </div>
    </footer>
  );
}

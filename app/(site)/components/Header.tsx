"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Header(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-fx-gray200">
      <div className="container flex items-center justify-between h-16">
        <Link href="#" className="flex items-center gap-3">
  <Logo layout="horizontal" variant="dark" size={32}/>
</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#computer-services" className="hover:text-fx-red">Computer Services</a>
          <a href="#training" className="hover:text-fx-red">Training</a>
          <a href="#computer-training" className="text-xs opacity-80 hover:opacity-100 -ml-2">• Computer Training</a>
          <a href="#jamb-waec" className="text-xs opacity-80 hover:opacity-100 -ml-2">• JAMB/WAEC</a>
          <a href="#gallery" className="hover:text-fx-red">Gallery</a>
          <a href="#contact" className="hover:text-fx-red">Contact</a>
          <a href="tel:08063710645" className="btn btn-primary"><Phone size={16}/>Call</a>
          <a href="https://wa.me/2348063710645" className="btn btn-secondary"><MessageCircle size={16}/>WhatsApp</a>
        </nav>
        <button aria-label="Menu" onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-xl border">☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <a onClick={()=>setOpen(false)} href="#computer-services">Computer Services</a>
            <a onClick={()=>setOpen(false)} href="#training">Training</a>
            <div className="pl-3 flex flex-col gap-2 text-sm">
              <a onClick={()=>setOpen(false)} href="#computer-training">• Computer Training</a>
              <a onClick={()=>setOpen(false)} href="#jamb-waec">• JAMB/WAEC</a>
            </div>
            <a onClick={()=>setOpen(false)} href="#gallery">Gallery</a>
            <a onClick={()=>setOpen(false)} href="#contact">Contact</a>
            <a href="tel:08063710645" className="btn btn-primary w-full"><Phone size={16}/> Call Now</a>
            <a href="https://wa.me/2348063710645" className="btn btn-secondary w-full"><MessageCircle size={16}/> WhatsApp</a>
          </div>
        </div>
      )}
    </header>
  );
}

import { Phone, MessageCircle } from "lucide-react";

export default function StickyContactBar(){
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <a aria-label="Call Now" href="tel:08063710645" className="btn btn-primary shadow-[0_4px_12px_rgba(0,0,0,.12)]"><Phone size={16}/></a>
      <a aria-label="WhatsApp" href="https://wa.me/2348063710645" className="btn btn-secondary"><MessageCircle size={16}/></a>
    </div>
  );
}

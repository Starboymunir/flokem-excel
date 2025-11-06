import { BadgeCheck, Phone, MessageCircle } from "lucide-react";

type Props = {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  icon?: React.ReactNode;
};
export default function PricingCard({title, price, features, featured, icon}: Props){
  return (
    <div className={`card relative overflow-hidden ${featured?"ring-2 ring-fx-red":""}`}>
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-fx-red/10" />
      {featured && <span className="badge absolute -top-3 left-6 bg-fx-red text-white">Popular</span>}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-fx-navy/5 grid place-items-center">{icon}</div>
        <h3 className="text-xl font-semibold text-fx-navy">{title}</h3>
      </div>
      <p className="mt-1 text-sm text-fx-ink/70">Clear pricing. Quick service.</p>
      <div className="mt-4 inline-flex items-baseline gap-1">
        <span className="text-3xl font-bold text-fx-red">{price}</span>
        <span className="text-sm text-fx-ink/60">/ from</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f,i)=> (
          <li key={i} className="flex items-start gap-2">
            <BadgeCheck className="mt-0.5 text-fx-navy" size={16}/> <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-2">
        <a href="tel:08063710645" className="btn btn-primary"><Phone size={16}/>Call</a>
        <a href="https://wa.me/2348063710645" className="btn btn-secondary"><MessageCircle size={16}/>WhatsApp</a>
      </div>
    </div>
  );
}

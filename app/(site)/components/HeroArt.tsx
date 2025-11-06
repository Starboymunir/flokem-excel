import { ShieldCheck, Printer, Layers, Sparkles } from "lucide-react";

export default function HeroArt(){
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-white/10 to-white/0 backdrop-blur-xl border border-white/20" />
      <div className="relative grid grid-cols-2 gap-3">
        <div className="aspect-[4/5] rounded-2xl bg-white/15 border border-white/20 p-4 flex flex-col justify-between">
          <div className="text-xs bg-white/20 rounded-full px-2 py-1 w-fit">Trusted Centre</div>
          <div className="text-white/90">
            <div className="text-lg font-semibold flex items-center gap-2"><ShieldCheck size={18}/> Secure Services</div>
            <p className="text-xs opacity-80 mt-1">Professional & reliable</p>
          </div>
        </div>
        <div className="aspect-square rounded-2xl bg-white/15 border border-white/20 p-4 flex flex-col">
          <div className="flex-1 rounded-xl bg-white/10 grid place-items-center">
            <Printer />
          </div>
          <div className="mt-3 text-xs opacity-80">High-quality prints</div>
        </div>
        <div className="col-span-2 rounded-2xl bg-white/15 border border-white/20 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm"><Layers size={16}/> Training + Business Services</div>
          <div className="text-xs bg-white/20 rounded-full px-3 py-1 flex items-center gap-1">
            <Sparkles size={14}/> Fast Turnaround
          </div>
        </div>
      </div>
    </div>
  );
}

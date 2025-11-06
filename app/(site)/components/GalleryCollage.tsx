// Sophisticated mosaic gallery with real images (Pexels license: free for commercial use)
const IMAGES = [
  {
    src: "https://images.pexels.com/photos/10638075/pexels-photo-10638075.jpeg?cs=srgb&fm=jpg&q=90&w=1600",
    alt: "Computer class with students using desktops",
    label: "Computer Lab",
    href: "https://www.pexels.com/photo/students-using-computers-in-their-class-10638075/",
  },
  {
    src: "https://images.pexels.com/photos/9072379/pexels-photo-9072379.jpeg?cs=srgb&fm=jpg&q=90&w=1600",
    alt: "Row of computers in neon-lit cybercafe",
    label: "Internet Café",
    href: "https://www.pexels.com/photo/computers-in-a-cybercafe-9072379/",
  },
  {
    src: "https://images.pexels.com/photos/3201783/pexels-photo-3201783.jpeg?cs=srgb&fm=jpg&q=90&w=1400",
    alt: "Man using office printer",
    label: "Printing",
    href: "https://www.pexels.com/photo/man-using-a-printer-3201783/",
  },
  {
    src: "https://images.pexels.com/photos/9301887/pexels-photo-9301887.jpeg?cs=srgb&fm=jpg&q=90&w=1400",
    alt: "Person operating photocopier",
    label: "Photocopy & Scan",
    href: "https://www.pexels.com/photo/person-using-a-photocopier-9301887/",
  },
  {
    src: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?cs=srgb&fm=jpg&q=90&w=1600",
    alt: "Designer browsing lettering references on laptop and tablet",
    label: "Graphics Design",
    href: "https://www.pexels.com/photo/photo-of-person-using-laptop-for-graphic-designs-4348404/",
  },
  {
    src: "https://images.pexels.com/photos/9414330/pexels-photo-9414330.jpeg?cs=srgb&fm=jpg&q=90&w=1600",
    alt: "Hand using pen tablet beside laptop",
    label: "Digital Art",
    href: "https://www.pexels.com/photo/a-person-drawing-on-a-graphics-tablet-9414330/",
  },
  {
    src: "https://images.pexels.com/photos/11025018/pexels-photo-11025018.jpeg?cs=srgb&fm=jpg&q=90&w=1600",
    alt: "Two students studying together in class",
    label: "Tutorials",
    href: "https://www.pexels.com/photo/boys-studying-together-in-a-classroom-11025018/",
  },
];

export default function GalleryCollage() {
  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-3">
      {/* Big hero tile */}
      <GalleryItem i={IMAGES[0]} className="col-span-4 row-span-4 rounded-2xl" />
      {/* Tall right column */}
      <GalleryItem i={IMAGES[1]} className="col-span-2 row-span-3 rounded-2xl" />
      {/* Bottom band */}
      <GalleryItem i={IMAGES[2]} className="col-span-2 row-span-2 rounded-2xl" />
      <GalleryItem i={IMAGES[3]} className="col-span-2 row-span-2 rounded-2xl" />
      <GalleryItem i={IMAGES[4]} className="col-span-2 row-span-2 rounded-2xl" />
      {/* Accent minis overlaying with stagger for rhythm */}
      <div className="col-span-6 grid grid-cols-6 gap-3">
        <GalleryItem i={IMAGES[5]} className="col-span-2 rounded-2xl" />
        <GalleryItem i={IMAGES[6]} className="col-span-4 rounded-2xl" />
      </div>
    </div>
  );
}

function GalleryItem({
  i,
  className = "",
}: {
  i: { src: string; alt: string; label: string; href: string };
  className?: string;
}) {
  return (
    <a
      href={i.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative group overflow-hidden ${className}`}
    >
      <img
        src={i.src}
        alt={i.alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90" />
      <span className="absolute left-3 bottom-3 text-white text-sm font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur group-hover:bg-black/60 transition">
        {i.label}
      </span>
    </a>
  );
}


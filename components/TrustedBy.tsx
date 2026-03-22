import Image from "next/image";

const companies = [
  { name: "Amazon", src: "/images/trusted_companies/amazon.png" },
  { name: "Como Shambhala", src: "/images/trusted_companies/comoshambala.webp" },
  { name: "Kamalaya", src: "/images/trusted_companies/kamalaya.png" },
  { name: "Kanlungan", src: "/images/trusted_companies/kanlungan2.png" },
  { name: "Lotus", src: "/images/trusted_companies/lotus.png" },
  { name: "Nilaya", src: "/images/trusted_companies/nilaya.png" },
  { name: "RJ", src: "/images/trusted_companies/rj.png" },
  { name: "Wanderbloom", src: "/images/trusted_companies/wanderbloom.png" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-stone/10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-px bg-sage" />
          <span className="section-label">Trusted by</span>
        </div>
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center justify-center">
              <Image
                src={company.src}
                alt={company.name}
                width={140}
                height={60}
                className="object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

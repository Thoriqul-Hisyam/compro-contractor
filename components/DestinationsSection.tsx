"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import labuanBajoImage from "@/assets/destination-labuan-bajo.jpg";
import sumbaImage from "@/assets/destination-sumba.jpg";
import rajaAmpatImage from "@/assets/destination-raja-ampat.jpg";

const destinations = [
  {
    image: labuanBajoImage,
    title: "Labuan Bajo",
    subtitle: "Gerbang Taman Nasional Komodo",
    description:
      "Jelajahi keajaiban Pulau Padar, Pink Beach, dan bertemu langsung dengan Komodo Dragon",
    duration: "3D2N - 5D4N",
    highlight: "Most Popular",
  },
  {
    image: sumbaImage,
    title: "Sumba",
    subtitle: "Pulau Seribu Megalitik",
    description:
      "Temukan keindahan budaya dan alam Sumba dengan desa tradisional dan pantai eksotis",
    duration: "4D3N - 6D5N",
    highlight: "Cultural",
  },
  {
    image: rajaAmpatImage,
    title: "Raja Ampat",
    subtitle: "Surga Bawah Laut Dunia",
    description:
      "Selami keanekaragaman hayati laut terkaya di planet ini dengan pemandangan pulau karst yang menakjubkan",
    duration: "5D4N - 7D6N",
    highlight: "Premium",
  },
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Destinasi
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Destinasi <span className="text-gradient-earth">Impian</span> Anda
          </h2>
          <p className="text-lg text-muted-foreground">
            Pilih dari berbagai destinasi eksotis di Indonesia yang menawarkan
            keindahan alam dan budaya yang luar biasa
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                    {destination.highlight}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {destination.duration}
                </div>

                <h3 className="font-serif text-2xl font-bold text-card-foreground mb-1">
                  {destination.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3">
                  {destination.subtitle}
                </p>

                <p className="text-muted-foreground mb-4">
                  {destination.description}
                </p>

                <Link
                  href="#packages"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Lihat Paket
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;

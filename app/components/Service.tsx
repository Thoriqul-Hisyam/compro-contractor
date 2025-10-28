const services = [
  {
    title: "Konstruksi Bangunan",
    icon: "🏗️",
    desc: "Pembangunan gedung, rumah, dan fasilitas umum dengan kualitas premium dan ketepatan waktu.",
  },
  {
    title: "Renovasi & Desain Interior",
    icon: "🛋️",
    desc: "Transformasi ruang menjadi fungsional dan estetis sesuai kebutuhan klien.",
  },
  {
    title: "Manajemen Proyek",
    icon: "📋",
    desc: "Perencanaan dan pengawasan proyek profesional dari awal hingga akhir.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 fade-in">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          Layanan Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Budi Santoso",
    text: "Pelayanan profesional, hasil bangunan sangat memuaskan dan tepat waktu. Rekomendasi untuk proyek besar!",
  },
  {
    name: "Clara Wijaya",
    text: "Tim sangat komunikatif dan hasil renovasi kantor kami luar biasa. Terima kasih PT Pilar Bambu Persada!",
  },
  {
    name: "Rizky Hartono",
    text: "Dari awal sampai akhir proyek berjalan lancar dan transparan. Hasilnya sesuai harapan!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 fade-in">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-10">
          Testimoni Klien
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <p className="text-gray-600 italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold text-green-700">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

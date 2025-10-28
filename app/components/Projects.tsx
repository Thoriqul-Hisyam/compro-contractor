const projects = [
  {
    title: "Perumahan Modern Bekasi",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Gedung Perkantoran Jakarta",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Restoran & Cafe Bali",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 fade-in">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-10">Proyek Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800">
                  {p.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 fade-in">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="md:flex items-center justify-between gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Tentang Kami
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              PT Pilar Bambu Persada adalah perusahaan kontraktor bangunan yang
              berkomitmen menghadirkan hasil berkualitas tinggi dengan ketepatan
              waktu, keamanan, dan efisiensi. Kami berpengalaman dalam proyek
              perumahan, komersial, hingga infrastruktur berskala besar.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dengan tim profesional dan pengalaman bertahun-tahun di bidang
              konstruksi, kami memastikan setiap proyek berjalan sesuai standar
              tertinggi, memberikan kepuasan maksimal bagi klien.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80"
              alt="Tentang Kami"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

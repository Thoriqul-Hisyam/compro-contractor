export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      <div className="flex flex-col items-center justify-center h-full text-center text-white relative z-10 px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Bangun Masa Depan Dengan Kualitas
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Kontraktor profesional yang mengutamakan ketepatan waktu, keamanan,
          dan hasil terbaik.
        </p>
        <a
          href="#contact"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Hubungi Kami
        </a>
      </div>
    </section>
  );
}

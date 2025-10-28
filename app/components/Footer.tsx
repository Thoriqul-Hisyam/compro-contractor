export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-green-900 to-green-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Kiri: Nama Perusahaan */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white tracking-wide">
            PT Pilar Bambu Persada
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Membangun dengan ketepatan, keahlian, dan kepercayaan.
          </p>
        </div>

        {/* Kanan: Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-right">
          © {year} PT Pilar Bambu Persada. <br className="md:hidden" />
          <span className="text-gray-500">Powered by </span>
          <span className="text-green-400 font-medium hover:text-green-300 transition">
            Lefateach
          </span>
        </div>
      </div>

      {/* Garis atas halus */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-green-700/40"></div>
    </footer>
  );
}

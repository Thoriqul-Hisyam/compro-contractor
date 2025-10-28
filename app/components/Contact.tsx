"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hubungi{" "}
              <span className="text-green-300">PT Pilar Bambu Persada</span>
            </h2>
            <p className="text-gray-200 text-lg">
              Kami siap membantu Anda membangun proyek impian dengan dedikasi,
              keahlian, dan hasil terbaik. Jangan ragu untuk menghubungi kami
              kapan saja.
            </p>

            <div className="space-y-4 pt-4">
              <div>
                <h4 className="font-semibold text-green-300">Alamat</h4>
                <p>Jl. Pembangunan No. 45, Bekasi, Indonesia</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-300">Telepon</h4>
                <p>+62 812 3456 7890</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-300">Email</h4>
                <p>info@pilarbambu.co.id</p>
              </div>
            </div>
          </div>

          {/* Right Side (Contact Form) */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6 text-green-700">
              Kirim Pesan
            </h3>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="nama@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-green-600 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-800 transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

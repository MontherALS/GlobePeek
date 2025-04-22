export default function HeroSection() {
  return (
    <section className=" mt-16 relative w-[50vw] hover:scale-105 duration-500  bg-gradient-to-br from-[#14213d] to-[#3d5a80] text-white p-10 rounded-2xl shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-2xl md:text-6xl font-title mb-4 text0c">
          Explore the World
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Discover, learn, and see new countries
        </p>
      </div>
    </section>
  );
}

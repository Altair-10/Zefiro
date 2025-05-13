import Link from 'next/link';

export default function AnimatedButton({ href = "#", mode = "link" }) {
  const scrollToSection = (id) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* Versione desktop */}
      {mode === "link" ? (
        <Link
          href={href}
          className="
            hidden md:flex
            text-gray-50 text-xl duration-300 relative group cursor-pointer 
            overflow-hidden h-[4vw] w-[12vw] rounded-xl bg-gradient-orange p-2 
            font-extrabold hover:bg-gradient-blue"
        >
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-orange"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-green-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
          <p className="z-10 text-[1.3vw] flex items-center">Scopri di più</p>
        </Link>
      ) : (
        <button
          onClick={() => scrollToSection("contactUs")}
          className="
            hidden md:flex
            text-gray-50 text-xl duration-300 relative group cursor-pointer 
            overflow-hidden h-[5vw] w-[25vw] rounded-xl bg-gradient-orange p-2 
            font-extrabold hover:bg-gradient-blue"
        >
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-orange"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-green-500"></div>
          <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
          <p className="z-10 text-[1.2vw] flex items-center">Richiedi una consulenza</p>
        </button>
      )}

      {/* Versione mobile */}
      {mode === "link" ? (
        <Link
          href={href}
          className="
            md:hidden text-gray-50 text-base duration-300 relative group cursor-pointer 
            overflow-hidden h-12 w-full rounded-xl bg-gradient-orange p-2 
            font-extrabold hover:bg-gradient-blue flex items-center justify-center
          "
        >
          <p className="z-10">Scopri di più</p>
        </Link>
      ) : (
        <button
          onClick={() => scrollToSection("contactUs")}
          className="
            md:hidden text-gray-50 text-base duration-300 relative group cursor-pointer 
            overflow-hidden h-12 w-full rounded-xl bg-gradient-orange p-2 
            font-extrabold hover:bg-gradient-blue flex items-start justify-start
          "
        >
          <p className="z-10">Richiedi una consulenza</p>
        </button>
      )}
    </>
  );
};

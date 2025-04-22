import Link from 'next/link';

const AnimatedButton = ({ href = "#" }) => {
  return (
    <>
    {/* Versione desktop */}
    <Link
      href={href}
      className="
        hidden md:block text-gray-50 text-xl duration-300 relative group cursor-pointer 
        overflow-hidden h-[4vw] w-[12vw] rounded-xl bg-gradient-orange p-2 
        font-extrabold hover:bg-gradient-blue
      ">
      <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-700 right-12 top-12 bg-orange"></div>
      <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150 duration-700 right-20 -top-6 bg-orange-500"></div>
      <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8 rounded-full group-hover:scale-150 duration-700 right-32 top-6 bg-green-500"></div>
      <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4 rounded-full group-hover:scale-150 duration-700 right-2 top-12 bg-red-600"></div>
      <p className="z-10 absolute bottom-4 left-4">Scopri di più</p>
    </Link>
    
    {/* Versione mobile */}
    <Link
      href={href}
      className="md:hidden text-gray-50 text-base duration-300 relative group cursor-pointer 
                 overflow-hidden h-12 w-full rounded-xl bg-gradient-orange p-2 
                 font-extrabold hover:bg-gradient-blue flex items-center justify-center"
    >
      <p className="z-10">Scopri di più</p>
    </Link>
  </>
  );
};

export default AnimatedButton;
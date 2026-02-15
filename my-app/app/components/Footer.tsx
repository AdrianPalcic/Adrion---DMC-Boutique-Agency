"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Lijeva strana - Copyright & Status */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-black/30 text-center text-[10px] uppercase tracking-[0.3em]">
            © {currentYear} Adrion Custom Travel Agency
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--yellow) opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--yellow)"></span>
            </span>
            <p className="text-(--yellow)/80 text-[10px] text-start uppercase tracking-[0.2em] font-medium italic">
              Currently under development
            </p>
          </div>
        </div>

        {/* Sredina - Logo ili Ime (opcionalno) */}
        <div className="flex flex-col items-center">
          <div className="w-[60px] h-auto  sm:w-fit">
            <img
              src="/images/logo-try.png"
              alt="Logo Adrion"
              className="w-[80px] h-full object-cover"
            />
          </div>
          <div className="font-trajan uppercase text-black/60 text-lg sm:text-xl">
            Adrion Custom
          </div>
          <div className="font-trajan text-black/60 text-sm">
            Travel Agency
          </div>
        </div>

        {/* Desna strana - Suptilna poruka */}
        <div className="text-right">
          <p className="text-black/30 text-[10px] uppercase tracking-[0.4em]">
            Crafting Excellence
          </p>
        </div>
      </div>

      {/* Tanki estetski bar na samom dnu */}
      <div className="mt-12 w-full h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
    </footer>
  );
};

export default Footer;

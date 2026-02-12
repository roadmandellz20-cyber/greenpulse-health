import { NavLink } from "react-router-dom";

const linkBase =
  "px-4 py-2 rounded-lg text-sm font-medium transition";
const linkInactive = "text-white/70 hover:text-white hover:bg-white/10";
const linkActive = "text-white bg-white/15";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-500/20 ring-1 ring-emerald-400/30" />
          <div className="leading-tight">
            <div className="text-white font-semibold">GreenPulse Health</div>
            <div className="text-white/60 text-xs">Community health programs</div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Home</NavLink>
          <NavLink to="/programs" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Programs</NavLink>
          <NavLink to="/volunteer" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Volunteer</NavLink>
          <NavLink to="/careers" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Careers</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

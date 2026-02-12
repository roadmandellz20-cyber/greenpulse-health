import { NavLink, Link } from "react-router-dom";
import Container from "./Container";

const navItem =
  "text-sm text-white/70 hover:text-white transition px-3 py-2 rounded-lg";

const navItemActive =
  "text-sm text-white bg-white/10 border border-white/10 px-3 py-2 rounded-lg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/15 border border-emerald-400/25 shadow-[0_0_30px_rgba(16,185,129,0.15)]" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">GreenPulse Health</div>
              <div className="text-xs text-white/60">Community health programs</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={({ isActive }) => (isActive ? navItemActive : navItem)}>
              Home
            </NavLink>
            <NavLink to="/programs" className={({ isActive }) => (isActive ? navItemActive : navItem)}>
              Programs
            </NavLink>
            <NavLink to="/volunteer" className={({ isActive }) => (isActive ? navItemActive : navItem)}>
              Volunteer
            </NavLink>
            <NavLink to="/careers" className={({ isActive }) => (isActive ? navItemActive : navItem)}>
              Careers
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? navItemActive : navItem)}>
              Contact
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

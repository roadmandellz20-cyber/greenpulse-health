import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Volunteer from "./pages/Volunteer";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
        <Navbar />

        <main className="mx-auto max-w-6xl px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

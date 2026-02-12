import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold">GreenPulse Health</div>
            <div className="text-white/60 text-sm mt-1">
              High-trust community health programs with modern delivery and real outcomes.
            </div>
          </div>

          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} GreenPulse Health. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}

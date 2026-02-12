import Container from "../components/Container";
import Reveal from "../components/Reveal";

const roles = [
  {
    title: "Program Operations Lead",
    location: "Banjul",
  },
  {
    title: "Community Health Navigator",
    location: "Western Region",
  },
];

export default function Careers() {
  return (
    <Container>
      <div className="py-24">
        <Reveal>
          <h1 className="text-4xl font-bold mb-6">Careers</h1>
          <p className="text-gray-400 mb-16">
            Build scalable health infrastructure that actually works.
          </p>
        </Reveal>

        <div className="space-y-6">
          {roles.map((role, i) => (
            <Reveal key={i}>
              <div className="border border-white/10 p-6 rounded-xl bg-white/5 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <p className="text-gray-400 text-sm">{role.location}</p>
                </div>
                <span className="text-green-400 text-sm">
                  Open position
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}

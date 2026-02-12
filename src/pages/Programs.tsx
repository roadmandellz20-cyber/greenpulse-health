import Container from "../components/Container";
import Reveal from "../components/Reveal";

const programs = [
  {
    title: "Mobile Screening Units",
    region: "Western Region",
    status: "Active",
    impact: "3,210 screenings completed",
    description:
      "Weekly mobile health screenings focused on early hypertension and diabetes detection.",
  },
  {
    title: "Youth Health Education",
    region: "Banjul",
    status: "Pilot",
    impact: "1,200 students reached",
    description:
      "Preventive education workshops across secondary schools focused on long-term risk reduction.",
  },
  {
    title: "Maternal Navigation Program",
    region: "Upper River Region",
    status: "Active",
    impact: "78% follow-up compliance",
    description:
      "Structured referral and follow-up support for expectant mothers in rural areas.",
  },
];

export default function Programs() {
  return (
    <Container>
      <div className="py-24">
        <Reveal>
          <h1 className="text-4xl font-bold mb-6">Programs</h1>
          <p className="text-gray-400 mb-16">
            Standardized initiatives built for measurable health outcomes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <Reveal key={i}>
              <div className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                    {program.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    {program.region}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {program.description}
                </p>

                <div className="text-green-400 text-sm font-medium">
                  {program.impact}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Container>
  );
}

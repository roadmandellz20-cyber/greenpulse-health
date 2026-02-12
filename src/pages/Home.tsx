import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Container from "../components/Container";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import Spotlight from "../components/Spotlight";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i },
  }),
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <div className="text-2xl font-bold text-white">
        <CountUp end={parseInt(value.replace(/[^0-9]/g, ""))} duration={2.2} separator="," />
        {value.includes("+") && "+"}
        {value.includes("%") && "%"}
      </div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function ProgramCard({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/7 transition">
      <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
        {tag}
      </div>
      <div className="mt-4 text-lg font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
      <div className="mt-5 text-sm text-emerald-300/90 group-hover:text-emerald-200 transition">
        Learn more →
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#061a12] to-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-40 right-[-140px] h-[420px] w-[420px] rounded-full bg-emerald-500/8 blur-[110px]" />
      </div>

      <main className="relative">
        <section className="pt-16 md:pt-24 pb-14">
          <Container>
            <Spotlight className="rounded-3xl border border-white/10 min-h-[70vh] flex items-center justify-center">
              <div className="px-8 py-16 md:px-12 md:py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-white/70">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.65)]" />
                    Evidence-led community health, delivered like a modern product.
                  </div>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={2}
                  className="mt-6 text-4xl md:text-6xl font-bold tracking-tight"
                >
                  A smarter way to run
                  <span className="text-emerald-400"> community health</span> programs.
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={3}
                  className="mt-5 text-base md:text-lg text-white/65 max-w-xl"
                >
                  GreenPulse Health delivers prevention, screenings, and support programs with
                  clear workflows, measurable outcomes, and a patient-first experience.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={4}
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <Link to="/programs">
                    <Button>Explore Programs</Button>
                  </Link>
                  <Link to="/volunteer">
                    <Button variant="secondary">Become a Volunteer</Button>
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={5}
                  className="mt-10 flex items-center gap-6 text-xs text-white/50"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    Secure & privacy-aware
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    Transparent reporting
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                    Community-first ops
                  </div>
                </motion.div>
              </div>

              {/* Right panel */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-white/70">Impact Dashboard</div>
                    <div className="text-xs text-emerald-300/80 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                      Live metrics
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Stat label="People reached" value="12,480+" />
                    <Stat label="Screenings completed" value="3,210" />
                    <Stat label="Follow-up rate" value="78%" />
                    <Stat label="Volunteer hours" value="1,940" />
                  </div>

                  <div className="mt-6 rounded-2xl bg-black/40 border border-white/10 p-5">
                    <div className="text-sm font-semibold text-white">Next: Mobile outreach</div>
                    <p className="mt-2 text-sm text-white/60">
                      Weekly pop-up screenings with automated referrals and follow-up scheduling.
                    </p>
                    <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-2/3 bg-emerald-400/80" />
                    </div>
                    <div className="mt-2 text-xs text-white/50">Progress: 66%</div>
                  </div>
                </motion.div>
                </motion.div>
              </div>
            </div>
              </div>
            </Spotlight>
          </Container>
        </section>

        {/* Programs preview */}
        <section className="py-14 border-t border-white/10">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-emerald-300/80 text-xs tracking-wider uppercase">
                  Programs
                </div>
                <Reveal>
                  <h2 className="mt-2 text-2xl md:text-3xl font-bold">Built for outcomes, not vibes.</h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-3 text-white/60 max-w-xl">
                    Clear program design, clean delivery, and tracking that proves impact.
                  </p>
                </Reveal>
              </div>
              <Link to="/programs" className="text-sm text-emerald-300/90 hover:text-emerald-200 transition">
                View all →
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <Reveal delay={0.0}>
                <ProgramCard
                  tag="Prevention"
                  title="Wellness & Lifestyle"
                  desc="Coaching, education, and habit support designed for real consistency."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <ProgramCard
                  tag="Screening"
                  title="Community Screening Days"
                  desc="Fast, organized screenings with a follow-up pipeline that doesn't drop people."
                />
              </Reveal>
              <Reveal delay={0.2}>
                <ProgramCard
                  tag="Support"
                  title="Care Navigation"
                  desc="Guided referrals and check-ins so people actually complete their care journey."
                />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16">
          <Container>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/6 to-white/3 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Partner with GreenPulse to run smarter programs.
                  </h3>
                  <p className="mt-3 text-white/60 max-w-2xl">
                    If you’re serious about measurable community outcomes, we’ll help you design,
                    deliver, and report programs at a higher standard.
                  </p>
                </div>
                <div className="md:col-span-4 flex md:justify-end gap-3">
                  <Link to="/contact">
                    <Button>Contact Us</Button>
                  </Link>
                  <Link to="/careers">
                    <Button variant="secondary">Join the Team</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}

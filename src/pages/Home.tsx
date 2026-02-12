import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease },
  }),
};

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/60">{label}</div>
    </div>
  );
}

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  tag,
}: {
  title: string;
  desc: string;
  tag: string;
}) {
  return (
    <div className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/7 transition-colors">
      <div className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
        {tag}
      </div>
      <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-white/70 leading-relaxed">{desc}</p>
      <div className="mt-5 text-sm text-emerald-300 group-hover:text-emerald-200">
        Learn more →
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 text-white/20"
      width="80"
      height="12"
      viewBox="0 0 80 12"
      fill="none"
    >
      <path
        d="M0 6h70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M70 1l9 5-9 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-10 h-[420px] w-[620px] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="noise-overlay" />
      </div>

      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <motion.div
              initial="hidden"
              animate="show"
              className="max-w-xl"
            >
              <motion.div variants={fadeUp} custom={0}>
                <Chip>Evidence-led community health, delivered like a product.</Chip>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white"
              >
                A smarter way to run{" "}
                <span className="text-emerald-400">community health</span>{" "}
                programs.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-5 text-white/70 leading-relaxed"
              >
                GreenPulse Health delivers prevention, screenings, and support
                programs with clear workflows, measurable outcomes, and a
                patient-first experience.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="mt-7 flex flex-wrap gap-3"
              >
                <Button to="/programs">Explore Programs</Button>
                <Button to="/volunteer" variant="secondary">
                  Become a Volunteer
                </Button>
                <Button to="/contact" variant="outline">
                  Partner with us
                </Button>
              </motion.div>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-7 flex flex-wrap gap-6 text-xs text-white/55"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Secure & privacy-aware
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Transparent reporting
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Community-first ops
                </span>
              </motion.div>
            </motion.div>

            {/* Dashboard card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[28px] bg-emerald-500/10 blur-2xl" />
              <div className="relative rounded-[28px] bg-white/5 border border-white/10 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60">Impact Dashboard</div>
                    <div className="text-lg font-bold text-white mt-1">
                      Live metrics
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    Live metrics
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Stat label="People reached" value="12,480+" />
                  <Stat label="Screenings completed" value="3,210" />
                  <Stat label="Follow-up rate" value="78%" />
                  <Stat label="Volunteer hours" value="1,940" />
                </div>

                <div className="mt-5 rounded-2xl bg-black/30 border border-white/10 p-5">
                  <div className="text-white font-semibold">
                    Next: Mobile outreach
                  </div>
                  <p className="mt-2 text-sm text-white/60">
                    Weekly pop-up screenings with automated referrals and follow-up scheduling.
                  </p>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-2/3 bg-emerald-400" />
                  </div>
                  <div className="mt-2 text-xs text-white/50">Progress: 66%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* METRICS STRIP (Startup signal) */}
      <section className="pb-14">
        <Container>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm text-white/60">Performance signals</div>
                <div className="text-xl font-bold text-white mt-1">
                  Built for outcomes, not vibes.
                </div>
              </div>
              <Link to="/programs" className="text-sm text-emerald-300 hover:text-emerald-200">
                View model →
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat label="Cost per screening" value="↓ 34%" />
              <Stat label="Follow-up compliance" value="↑ 78%" />
              <Stat label="Avg wait time" value="↓ 62%" />
              <Stat label="Volunteer retention" value="85%" />
            </div>
          </div>
        </Container>
      </section>

      {/* FOUNDER STORY (Credibility layer) */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <SectionHeading
              eyebrow="Why GreenPulse exists"
              title="Healthcare access shouldn’t depend on geography."
              desc="Community programs fail when operations are messy: missed follow-ups, unclear ownership, no reporting. GreenPulse fixes the system—workflows, tracking, and accountability—so impact is measurable and scalable."
            />

            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-sm text-white/60">The problem</div>
                <div className="mt-2 text-white font-semibold">
                  Programs run like events, not systems.
                </div>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  When delivery isn’t standardized, results depend on luck and individual effort.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-sm text-white/60">The fix</div>
                <div className="mt-2 text-white font-semibold">
                  Product-grade operations with real reporting.
                </div>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Clear workflows, patient journeys, and outcomes dashboards—built for scale.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS (3-step flow) */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A repeatable model you can deploy anywhere."
            desc="Standardize delivery, reduce drop-offs, and prove impact with measurable outcomes."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3 relative">
            <div className="relative">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-emerald-300 text-xs font-semibold">Step 1</div>
                <div className="mt-3 text-white text-lg font-bold">Outreach & intake</div>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Capture signups, demographics, consent, and initial risk indicators with a clean workflow.
                </p>
              </div>
              <Arrow />
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-emerald-300 text-xs font-semibold">Step 2</div>
                <div className="mt-3 text-white text-lg font-bold">Screen & refer</div>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Run screenings, auto-generate referrals, and assign follow-up ownership—no loose ends.
                </p>
              </div>
              <Arrow />
            </div>

            <div className="relative">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
                <div className="text-emerald-300 text-xs font-semibold">Step 3</div>
                <div className="mt-3 text-white text-lg font-bold">Track & report</div>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">
                  Measure follow-up, completion, and outcomes with dashboards partners can trust.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* OPERATING MODEL (Replace weak “Programs”) */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Our operating model"
            title="Not activities — infrastructure."
            desc="Four pillars that make delivery consistent and scalable across communities."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <Card
              tag="Prevention"
              title="Lifestyle & education"
              desc="Proactive programs that reduce risk early and improve long-term outcomes."
            />
            <Card
              tag="Screening"
              title="Community screening days"
              desc="Standardized events with clear intake, capture, and escalation paths."
            />
            <Card
              tag="Navigation"
              title="Follow-up & referrals"
              desc="Ownership-driven follow-up workflows to reduce drop-offs after screening."
            />
            <Card
              tag="Reporting"
              title="Transparent dashboards"
              desc="Partner-grade reporting built around measurable, verifiable outcomes."
            />
          </div>
        </Container>
      </section>

      {/* PARTNERS (Pitch mode) */}
      <section className="py-16 pb-24">
        <Container>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="noise-overlay" />

            <div className="relative grid gap-10 md:grid-cols-2 items-start">
              <SectionHeading
                eyebrow="For partners"
                title="Built for governments, NGOs & health sponsors."
                desc="If you fund impact, you need proof. GreenPulse gives you transparency, standardized delivery, and measurable outcomes."
              />

              <div className="grid gap-4">
                <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
                  <div className="text-white font-semibold">Data transparency</div>
                  <p className="mt-2 text-sm text-white/70">
                    Clean reporting structure partners can audit and trust.
                  </p>
                </div>
                <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
                  <div className="text-white font-semibold">Outcome tracking</div>
                  <p className="mt-2 text-sm text-white/70">
                    Follow-up completion, referral success, and impact signals.
                  </p>
                </div>
                <div className="rounded-2xl bg-black/30 border border-white/10 p-6">
                  <div className="text-white font-semibold">Scalable deployment</div>
                  <p className="mt-2 text-sm text-white/70">
                    Repeatable workflows you can roll out across regions.
                  </p>
                </div>

                <div className="mt-2 flex gap-3 flex-wrap">
                  <Button to="/contact">Talk to us</Button>
                  <Button to="/careers" variant="outline">
                    Join the team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

import Container from "../components/Container";
import Reveal from "../components/Reveal";
import Button from "../components/Button";

export default function Volunteer() {
  return (
    <Container>
      <div className="py-24 max-w-3xl">
        <Reveal>
          <h1 className="text-4xl font-bold mb-6">Volunteer</h1>
          <p className="text-gray-400 mb-8">
            Join a structured, impact-driven health delivery model.
            This isn’t random outreach — it’s measurable execution.
          </p>
        </Reveal>

        <Reveal>
          <ul className="space-y-4 text-gray-300 mb-12">
            <li>• Field screening support</li>
            <li>• Patient follow-up coordination</li>
            <li>• Data entry & reporting assistance</li>
            <li>• Community education facilitation</li>
          </ul>
        </Reveal>

        <Reveal>
          <Button to="/contact" variant="primary">
            Apply to volunteer
          </Button>
        </Reveal>
      </div>
    </Container>
  );
}

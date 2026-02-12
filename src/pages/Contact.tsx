import Container from "../components/Container";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <Container>
      <div className="py-24 max-w-3xl">
        <Reveal>
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
          <p className="text-gray-400 mb-12">
            Partner inquiries, deployment requests, or collaboration proposals.
          </p>
        </Reveal>

        <Reveal>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
            />
            <textarea
              placeholder="Your message"
              rows={5}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
            />
            <button
              type="submit"
              className="bg-green-500 px-6 py-3 rounded-full font-medium"
            >
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </Container>
  );
}

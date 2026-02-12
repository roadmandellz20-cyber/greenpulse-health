function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1 style={{ color: "#0F9D58" }}>GreenPulse Health Initiative</h1>
      <p>
        A community-driven health organization focused on outreach,
        volunteer programs, and sustainable medical support.
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h2>What We Do</h2>
      <ul>
        <li>Community Health Outreach</li>
        <li>Volunteer Programs</li>
        <li>Medical Assistance Campaigns</li>
        <li>Youth Health Education</li>
      </ul>

      <hr style={{ margin: "30px 0" }} />

      <h2>Get Involved</h2>
      <p>Volunteer with us or apply for open positions.</p>

      <button style={{
        padding: "10px 20px",
        backgroundColor: "#0F9D58",
        color: "white",
        border: "none",
        cursor: "pointer",
        marginRight: "10px"
      }}>
        Apply as Volunteer
      </button>

      <button style={{
        padding: "10px 20px",
        backgroundColor: "#1B5E20",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}>
        View Open Positions
      </button>
    </div>
  );
}

export default App;

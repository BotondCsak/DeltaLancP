import * as React from "react";

function EmailSender() {
  const [email, setEmail] = React.useState<string>("");
  const [status, setStatus] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const sendEmail = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("https://deltalancb01.azurewebsites.net/api/SendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const text = await res.text();
      setStatus(text);
    } catch (err) {
      console.error("Error sending email:", err);
      setStatus("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendEmail} disabled={loading}>
        {loading ? "Sending..." : "Send Email"}
      </button>
      {status && <div>{status}</div>}
    </div>
  );
}

export default EmailSender; // 👈 THIS is the change

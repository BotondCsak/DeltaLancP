import * as React from "react";

export function DoubleNumber() {
  const [input, setInput] = React.useState<number>(0);
  const [result, setResult] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const callBackend = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://deltalancb01.azurewebsites.net/api/HelloHttp?name=${input}`
      );
      const text = await res.text();
      setResult(text);
    } catch (err) {
      console.error("Backend error:", err);
      setResult("Error calling backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <button onClick={callBackend} disabled={loading}>
        {loading ? "Calling..." : "Send to Backend"}
      </button>
      {result && <div>Response: {result}</div>}
    </div>
  );
}

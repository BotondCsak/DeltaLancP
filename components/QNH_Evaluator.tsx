// components/QNH_Evaluator.tsx
import * as React from "react";

export default function QNHEvaluator() {
  const [inputText, setInputText] = React.useState("");
  const [evaluation, setEvaluation] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleEvaluate = async () => {
    setLoading(true);
    setEvaluation(null);
    try {
      const response = await fetch("https://deltalancb01.azurewebsites.net/api/EvaluateQNH", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vendorResponse: inputText }),
      });
      const result = await response.text();
      setEvaluation(result);
    } catch (err) {
      console.error("Evaluation error:", err);
      setEvaluation("Error connecting to evaluator.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <textarea
        rows={5}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter vendor's corrective action"
        style={{ width: "100%" }}
      />
      <button onClick={handleEvaluate} disabled={loading}>
        {loading ? "Evaluating..." : "Evaluate Response"}
      </button>
      {evaluation && <div><strong>AI Feedback:</strong> {evaluation}</div>}
    </div>
  );
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function InitialRate() {
  const [rate, setRate] = useState({
    URL: "",
    NetScore: 0.631,
    NetScore_Latency: 0,
    RampUp: 0.3,
    RampUp_Latency: 75.942,
    Correctness: 0.645,
    Correctness_Latency: 0.436,
    BusFactor: -1,
    BusFactor_Latency: -1,
    PullRequest: -1,
    PullRequestLatency: -1,
    GoodPinningPractice: -1,
    GoodPinningPracticeLatency: -1,
    ResponsiveMaintainer: 0.3,
    ResponsiveMaintainer_Latency: 0.603,
    License: 1,
    License_Latency: 0.573,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/package/1/rate")
      .then((response) => setRate(response.data));
  }, []);

  return (
    <>
      <h1>
        <pre>{JSON.stringify(rate, null, 2)}</pre>
      </h1>
      <h2>sadihsadiasd</h2>
    </>
  );
}

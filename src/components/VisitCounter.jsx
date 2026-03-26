import { useEffect, useState } from "react";

function VisitCounter() {
  const [count, setCount] = useState("...");

  useEffect(() => {
    const fetchCount = () => {
      fetch("https://aktiangco.goatcounter.com/counter/TOTAL.json")
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((data) => setCount(data.count))
        .catch((err) => {
          console.error("GoatCounter error:", err);
          setCount("Unavailable");
        });
    };

    fetchCount();
    const timer = setInterval(fetchCount, 10000);

    return () => clearInterval(timer);
  }, []);

  return <span className="nav-counter">Views: {count}</span>;
}

export default VisitCounter;
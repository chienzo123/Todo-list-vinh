import { useEffect, useState } from "react";
import { useCounterStore } from "../store/useCounterStore";

export default function Counter() {
  const [localCount, setLocalCount] = useState(0);

  const globalCount = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);

  useEffect(() => {
    console.log("Local count changed:", localCount);
  }, [localCount]);

  return (
    <div>
      <button onClick={() => setLocalCount(localCount + 1)}>
        Local Count: {localCount}
      </button>

      <br />
      <button onClick={increase}>
        Global Count (Zustand): {globalCount}
      </button>
    </div>
  );
}

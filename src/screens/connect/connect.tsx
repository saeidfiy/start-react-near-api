import { connect, Near } from "near-api-js";
import { useCallback, useState } from "react";
import { config } from "../../configs";

export function Connect() {
  const [nearData, setNearData] = useState<Near>();
  const handleOnClick = useCallback(async () => {
    const near = await connect(config);
    setNearData(near);
  }, []);

  return (
    <div>
      <button onClick={handleOnClick}>{"connect"}</button>
      <div>{nearData}</div>
    </div>
  );
}

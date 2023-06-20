import React from "react";
import { focusCurrentTime } from "../../../utils/utils";

export default function NowCTA() {
  return (
    <button
      className="p-2 absolute bottom-32 right-7 bg-now-button rounded-md text-white font-semibold	"
      onClick={() => {
        focusCurrentTime();
      }}
    >
      NOW
    </button>
  );
}

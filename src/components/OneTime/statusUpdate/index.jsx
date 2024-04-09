import React from "react";

import "./StatusUpdate.css";
import "../../../Fonts/Font.css";

function StatusUpdate({ status }) {
  return <p className="status-paragraph">{status}</p>;
}

export default StatusUpdate;

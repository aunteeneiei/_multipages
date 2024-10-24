import Counter from "./Counter/Counter";
import Timer from "./Timer/Timer";
import Add from "./Add/Add";
import Temperatures from "./Temperatures/Temperatures";

import "./Components.css";

function Components() {
  return (
    <div className="components-container">
      <h3 className="app-title">REACT COMPONENTS</h3>

      <div className="wrapper">
        <span>
          <Counter />
          <Timer />
        </span>
        <Add />
      </div>
      <div>
        <Temperatures />
      </div>

      <h3 className="myName">อภิรักษ์ สงแจ้งใหญ่ 66081358</h3>
    </div>
  );
}

export default Components;

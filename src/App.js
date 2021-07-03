import { useState } from "react";
import "./App.css";
import Homepage from "./Homepage";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import Upload from "./Upload";

function App() {
  const [widget, setWidget] = useState(false);

  const useStyles = makeStyles((theme) => ({
    deleteIcon1: {
      "& svg": {
        fontSize: 280,
      },
    },
  }));

  const handleClick = () => {
    console.log("clicked");
    setWidget(!widget);
  };

  return (
    <div className="App">
      <Homepage />

      <img
        style={{ overflow: "hidden" }}
        className="wave"
        src="svgwave.svg"
        alt="wave"
      />

      {widget ? (
        <iframe
          className="widget"
          src="https://webwidget-bd009.web.app/"
          alt="frame"
        />
      ) : (
        ""
      )}

      {!widget ? (
        <div className="button_div" onClick={handleClick}>
          <Upload data-id="1" />
        </div>
      ) : (
        <button onClick={handleClick} className="cancel_btn">
          <CancelIcon />
        </button>
      )}
    </div>
  );
}

export default App;

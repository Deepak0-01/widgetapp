import React from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

function Upload() {
  const [widget, setWidget] = useState(false);

  const useStyles = makeStyles((theme) => ({
    deleteIcon1: {
      "& svg": {
        fontSize: 280,
      },
    },
  }));

  return (
    <>
      <button className="upload_btn">
        <CloudUploadIcon data-id="1" style={useStyles.deleteIcon1} />
      </button>
    </>
  );
}

export default Upload;

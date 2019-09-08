import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import FileInput from "components/FileInput";
import Crop from "components/Crop";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 230,
    maxHeight: "100%",
    "@media (max-width: 960px)": {
      height: "100%"
    }
  },
  image: {
    width: "100%"
  }
});

const AvatarDialog = ({ croppable, open, toggle, onSave, aspect }) => {
  const classes = useStyles();
  const [src, setSrc] = useState("");
  const [file, setFile] = useState(null);
  const readFile = file => {
    const reader = new FileReader();
    reader.addEventListener("load", () => setSrc(reader.result));
    reader.readAsDataURL(file);
    setFile(file);
  };
  const fullScreen = useMediaQuery("(max-width:960px)");
  const save = () => {
    onSave(file);
    toggle();
    setSrc("");
  };
  const close = () => {
    toggle();
    setSrc("");
  };
  return (
    <Dialog
      open={open}
      onClose={close}
      fullScreen={fullScreen}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        <div className={classes.root}>
          {!src && <FileInput onChange={file => readFile(file)} />}
          {croppable && src && (
            <React.Fragment>
              <Crop
                src={src}
                aspect={aspect}
                onChange={blob => readFile(blob)}
              />
              <Typography
                variant="h6"
                color="primary"
                className={classes.helper}
              >
                Drag to crop your image, or just click save.
              </Typography>
            </React.Fragment>
          )}
          {!croppable && src && (
            <img src={src} alt="Selected image" className={classes.image} />
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} variant="outlined" fullWidth>
          Cancel
        </Button>
        <Button onClick={save} color="primary" variant="outlined" fullWidth>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvatarDialog;

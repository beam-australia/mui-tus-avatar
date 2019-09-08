import React, { useState } from "react";
import Image from "components/Image";
import Dialog from "components/Dialog";
import upload from "lib/upload";

const Avatar = ({
  src,
  defaultSrc,
  alt,
  className,
  onChange,
  endpoint,
  aspect,
  size,
  width,
  height,
  rounded,
  croppable,
  uploadable
}) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(src ? src : defaultSrc);
  const toggleDialog = () => setOpen(!open);
  const updateImage = async blob => {
    let fileUrl = "";
    window.URL.revokeObjectURL(fileUrl);
    fileUrl = window.URL.createObjectURL(blob);
    setImage(fileUrl);
    const url = await upload(blob, endpoint);
    setImage(url);
    onChange(url);
  }
  return (
    <React.Fragment>
      <Image
        src={image}
        alt={alt}
        onClick={toggleDialog}
        className={className}
        size={size}
        rounded={rounded}
        width={width}
        height={height}
      />
      {uploadable && (
        <Dialog
          open={open}
          croppable={croppable}
          toggle={toggleDialog}
          aspect={aspect}
          onSave={updateImage}
        />
      )}
    </React.Fragment>
  );
};

Avatar.defaultProps = {
  src: "",
  alt: "",
  endpoint: "https://master.tus.io/files/",
  defaultSrc: "https://api.adorable.io/avatars/285/mui-tus@github.com",
  rounded: false,
  aspect: 1 / 1,
  size: "lg",
  width: null,
  height: null,
  croppable: false,
  uploadable: false,
  onChange: () => {}
};

export default Avatar;

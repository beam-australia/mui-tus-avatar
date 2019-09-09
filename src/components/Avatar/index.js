import React from "react";
import Image from "components/Image";
import Dialog from "components/Dialog";
import upload from "lib/upload";

class Avatar extends React.PureComponent {
  state = {
    open: false,
    image: this.props.src ? this.props.src : this.props.defaultSrc
  };

  toggleDialog = () => {
    this.setState({ open: !this.state.open });
  };

  updateImage = async blob => {
    let image = "";
    window.URL.revokeObjectURL(image);
    image = window.URL.createObjectURL(blob);
    this.setState({ image });
    const url = await upload(blob, this.props.endpoint);
    this.setState({ image: url });
    this.props.onChange(url);
  };

  render() {
    const {
      alt,
      className,
      aspect,
      size,
      width,
      height,
      rounded,
      croppable,
      uploadable
    } = this.props;
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
  }
}

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

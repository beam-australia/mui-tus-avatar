import React from "react";
import ReactCrop from "react-image-crop";
import getCroppedImage from "../../lib/getCroppedImage";
import "react-image-crop/dist/ReactCrop.css";

class Crop extends React.PureComponent {
  state = {
    src: this.props.src,
    crop: {
      x: 20,
      y: 20,
      width: 400,
      aspect: this.props.aspect
    }
  };

  onLoaded = image => {
    this.imageRef = image;
  };

  onComplete = crop => {
    this.makeClientCrop(crop);
  };

  onChange = crop => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const blob = await getCroppedImage(this.imageRef, crop);
      this.props.onChange(blob);
    }
  }

  render() {
    const { crop, src } = this.state;
    return (
      <ReactCrop
        src={src}
        crop={crop}
        minWidth={100}
        onImageLoaded={this.onLoaded}
        onComplete={this.onComplete}
        onChange={this.onChange}
      />
    );
  }
}

export default Crop;

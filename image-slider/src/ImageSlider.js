import React, { Component } from "react";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiOutlineStop,
} from "react-icons/hi";

import { FaCircle } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };
  }

  handleNextClick = () => {
    this.setState((prevState) => {
      let newIndex = 0;
      if (prevState.index === this.props.images.length - 1)
        return {
          index: 0,
        };
      else {
        return {
          index: prevState.index + 1,
        };
      }
    });
  };

  handlePrevClick = () => {
    console.log("this", this);
    this.setState((prevState) => {
      let newIndex = 0;
      if (prevState.index === 0)
        return {
          index: this.props.images.length - 1,
        };
      else {
        return {
          index: prevState.index - 1,
        };
      }
    });
  };

  handleDotClick = (e) => {
    this.setState({
      index: parseInt(e.currentTarget.dataset.index),
    });
  };

  render() {
    // console.log(this.props.images[0].split("/")[3].split(".")[0]);
    return (
      <section className="container">
        <a className="skip_link" href="#after-image-slider-controls">
          Skip Image Slider Controls
        </a>
        <div aria-label="Image Slider" className="img_slider">
          {this.props.images.map((item, index) => (
            <img
              src={item}
              key={item}
              style={{ translate: `${-100 * this.state.index}%` }}
              alt={item.split("/")[3].split(".")[0]}
              aria-hidden={index !== this.state.index}
            />
          ))}
        </div>
        <button
          className="img_slider_prev img_slider_btn"
          onClick={this.handlePrevClick}
          aria-label="View Previous Image"
        >
          <HiArrowNarrowLeft />
        </button>
        <button
          className="img_slider_next img_slider_btn"
          onClick={this.handleNextClick}
          aria-label="View next Image"
        >
          <HiArrowNarrowRight />
        </button>
        <div className="img_slider_dots">
          {this.props.images.map((_, index) => (
            <button
              className="img_slider_dot"
              data-index={index}
              key={index}
              onClick={this.handleDotClick}
              aria-label={`View image ${index + 1}`}
            >
              {index === this.state.index ? (
                <FaCircleDot aria-hidden />
              ) : (
                <FaCircle aria-hidden />
              )}
            </button>
          ))}
        </div>
        <div id="after-image-slider-controls" />
      </section>
    );
  }
}

export default ImageSlider;

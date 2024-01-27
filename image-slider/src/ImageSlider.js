import React, { Component } from "react";
import {
  HiArrowNarrowLeft,
  HiArrowNarrowRight,
  HiOutlineStop,
} from "react-icons/hi";

import { FaCircle, FaRegCircle } from "react-icons/fa";

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
      <div className="container">
        <div className="img_slider">
          {this.props.images.map((item) => (
            <img
              src={item}
              key={item}
              style={{ translate: `${-100 * this.state.index}%` }}
            />
          ))}
        </div>
        <button
          className="img_slider_prev img_slider_btn"
          onClick={this.handlePrevClick}
        >
          <HiArrowNarrowLeft />
        </button>
        <button
          className="img_slider_next img_slider_btn"
          onClick={this.handleNextClick}
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
            >
              {index === this.state.index ? <FaCircle /> : <FaRegCircle />}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSlider;

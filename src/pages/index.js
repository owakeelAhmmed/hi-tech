/* eslint-disable @next/next/no-img-element */
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/images/banner-1.jpg";
import Image2 from "../assets/images/banner-2.jpg";
import Image3 from "../assets/images/banner-3.jpg";
import Image4 from "../assets/images/banner-4.jpg";
import Image5 from "../assets/images/banner-5.jpg";
import Image6 from "../assets/images/banner-6.jpg";
import Image from "next/image";
import Navbar from "./components/Shared/navbar";

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          interval={3000}
          stopOnHover={false}
        >
          <div>
            <Image
              src={Image1}
              alt="image1"
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                width: "100%",
                height: "600px",
              }}
            />
          </div>
          <div>
            <Image
              src={Image2}
              alt="image1"
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                width: "100%",
                height: "600px",
              }}
            />
          </div>
          <div>
            <Image
              src={Image3}
              alt="image1"
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                width: "100%",
                height: "600px",
              }}
            />
          </div>
          <div>
            <Image
              src={Image4}
              alt="image1"
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                width: "100%",
                height: "600px",
              }}
            />
          </div>
          <div>
            <Image
              src={Image5}
              alt="image1"
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                width: "100%",
                height: "600px",
              }}
            />
          </div>
          <div>
            <Image
              src={Image6}
              alt="image1"
              style={{
                backgroundSize: "cover",
                objectFit: "cover",
                width: "100%",
                height: "600px",
              }}
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

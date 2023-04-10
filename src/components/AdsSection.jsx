import React from "react";
import pagelogo from "../assets/images/img/navbar/pagelogo.png";
import googlead from "../assets/images/img/navbar/googleaddimage.png";
import { Container } from "react-bootstrap";
const AdsSection = () => {
  return (
    <nav>
      <Container>
        <div className="d-flex justify-content-between py-2 py-lg-3">
          <a href="#">
            <img src={pagelogo} alt="pagelogo" className="d-none d-lg-block" />
          </a>
          <a href="#">
            <img
              src={googlead}
              alt="googlead"
              className="ads_animation w-100 maxx_w_680"
            />
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default AdsSection;

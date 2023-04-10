import React, { useEffect, useState } from "react";
import AdsSection from "./AdsSection";
import MyNav from "./MyNav";
import { Col, Container, Row } from "react-bootstrap";
import maincolimage from "../assets/images/img/header/maincolimg.png";
import blackshoes from "../assets/images/img/header/smallblck.png";
import smallgreyshoes from "../assets/images/img/header/smallgrey.png";
import smallredshoes from "../assets/images/img/header/smallred.png";
import smallredblckshoes from "../assets/images/img/header/smallredblck.png";
import stars from "../assets/images/img/header/stars.png";
import compare from "../assets/images/img/header/compare.png";
import heart from "../assets/images/img/header/heart.png";
import share from "../assets/images/img/header/share.png";
import facebook from "../assets/images/img/header/facebook.png";
import tweeter from "../assets/images/img/header/tweeter.png";
import pintrest from "../assets/images/img/header/pintrest.png";
import google from "../assets/images/img/header/google.png";
const Header = () => {
  const [first, setfirst] = useState(1);

  useEffect(() => {}, [first]);

  return (
    <header>
      <AdsSection />
      <MyNav />
      <Container>
        <Row className=" align-items-center py-lg-5">
          <Col lg={6} className="py-4">
            <Row>
              <Col lg={12}>
                <div className="py-5 bg_lightgrey">
                  <img
                    src={maincolimage}
                    alt="maincolimage"
                    className="w-100"
                  />
                </div>
              </Col>
            </Row>
            <div className="overflow_scroll_max_lg scroll">
              <div className="py-4 d-flex">
                <Col className="">
                  <img
                    src={blackshoes}
                    alt="blackshoes"
                    className="w-100 maxh_w_137"
                  />
                </Col>
                <Col className=" ms-3">
                  <img
                    src={smallredshoes}
                    alt="smallredshoes"
                    className="w-100 maxh_w_137 "
                  />
                </Col>
                <Col className=" ms-3">
                  <img
                    src={smallgreyshoes}
                    alt="smallgreyshoes"
                    className="w-100 maxh_w_137 "
                  />
                </Col>
                <Col className=" ms-3">
                  <img
                    src={smallredblckshoes}
                    alt="smallredblckshoes"
                    className="w-100 maxh_w_137 "
                  />
                </Col>
                <Col className=" ms-3 d-lg-none">
                  <img
                    src={smallredblckshoes}
                    alt="smallredblckshoes"
                    className="w-100 maxh_w_137 "
                  />
                </Col>
                <Col className=" ms-3 d-lg-none">
                  <img
                    src={smallredblckshoes}
                    alt="smallredblckshoes"
                    className="w-100 maxh_w_137 "
                  />
                </Col>
                <Col className=" ms-3 d-lg-none">
                  <img
                    src={smallredblckshoes}
                    alt="smallredblckshoes"
                    className="w-100 maxh_w_137 "
                  />
                </Col>
                <Col className=" ms-3 d-lg-none">
                  <img
                    src={smallredblckshoes}
                    alt="smallredblckshoes"
                    className="w-100 maxh_w_137 "
                  />
                </Col>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <p className="ff_poppins fw_600 fs_3xl">
                PREMIUM MENS SPORTS LATHER KEDS
              </p>
              <div className="d-flex align-items-center mb-4">
                <img src={stars} alt="stars" />
                <p className="mb-0 ff_poppins fw_400 fs_lg ms-2 clr_lightblack">
                  ( 5 Customer Review )
                </p>
              </div>
              <p className="clr_lightestgrey mb-0 ff_poppins fw_400 fs_lg ">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta. Sed eget congue
                neque, mattis finibus neque. In vel dolor ac augue pretium
              </p>
              {/* qty  */}
              <div className="d-flex  align-items-center mt-5">
                <span className=" ff_poppins fw_500 fs_lg clr_black mb-0">
                  Qty:
                </span>
                <div className="white_space_nowrap border border_radius_21 py-2 px-4 ms-2 ms-sm-4">
                  <span
                    className="ff_Josefin fw_400 fs_lg clr_lightestgrey px-1 cursur_poi"
                    onClick={() => {
                      setfirst(first - 1);
                    }}
                  >
                    -
                  </span>
                  <span className="ff_Josefin fw_400 fs_lg clr_lightestgrey px-3">
                    {first}
                  </span>
                  <span
                    className="ff_Josefin fw_400 fs_lg clr_lightestgrey px-1 cursur_poi"
                    onClick={() => {
                      setfirst(first + 1);
                    }}
                  >
                    +
                  </span>
                </div>
                <button className="white_space_nowrap border-0 ff_poppins fw_500 fs_lg clr_white border_radius_21 bg_green py-2 px-4 ms-1 ms-sm-3">
                  Add to Cart
                </button>
              </div>
              {/* size */}
              <div className="d-flex  align-items-center mt-3">
                <span className=" ff_poppins fw_500 fs_lg clr_black mb-0">
                  Size:
                </span>
                <form>
                  <select className="ms-2 ms-sm-4  border ps-2 border_radius_21 py-2 minh_minw_select">
                    <option className="">S</option>
                    <option className="">M</option>
                    <option className="">XL</option>
                  </select>
                </form>
              </div>
              {/* color */}
              <div className="d-flex align-items-center my-3">
                <p className="ff_poppins fw_500 fs_lg clr_black mb-0">
                  Color:{" "}
                </p>
                <div className="d-flex align-items-center ms-4">
                  <div className="maxh_w_35 border_white_1px p-1 border_radius_2px">
                    <div className="bg_red maxh_w_30"></div>
                  </div>
                  <div className="maxh_w_35 border_white_1px p-1 border_radius_2px ms-1">
                    <div className="bg_lightbrown maxh_w_30"></div>
                  </div>
                  <div className="maxh_w_35 border_white_1px p-1 border_radius_2px ms-1">
                    <div className="bg_lightblackblue maxh_w_30"></div>
                  </div>
                  <div className="maxh_w_35 border_white_1px p-1 border_radius_2px ms-1">
                    <div className="bg_grey maxh_w_30"></div>
                  </div>
                </div>
              </div>
              {/* compare wishlist  */}
              <div className="d-flex align-items-center mt-4">
                <div className="d-flex align-items-center">
                  <a href="#">
                    <img src={compare} alt="compare" />
                  </a>
                  <p className="mb-0 ff_poppins fw_300 fs_sm clr_222222 ms-1">
                    Compare
                  </p>
                </div>
                <div className="d-flex align-items-center ms-4">
                  <a href="#">
                    <img src={heart} alt="heart" />
                  </a>
                  <p className="mb-0 ff_poppins fw_300 fs_sm clr_222222 ms-1">
                    Wishlist
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center border_top_1px_clr808080 pt-4 mt-5">
                <a href="#">
                  <img src={share} alt="share" />
                </a>
                <a href="#" className="ms-4">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="#" className="ms-4">
                  <img src={tweeter} alt="tweeter" />
                </a>
                <a href="#" className="ms-4">
                  <img src={pintrest} alt="pintrest" />
                </a>
                <a href="#" className="ms-4">
                  <img src={google} alt="google" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

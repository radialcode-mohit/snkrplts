import React from "react";
import pagelogo from "../assets/images/img/footer/footerpagelogo.png";
import facebook from "../assets/images/img/footer/facebook.png";
import tweter from "../assets/images/img/footer/tweter.png";
import google from "../assets/images/img/footer/goole.png";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="bg-black ">
      <Container className="py-5">
        <a href="#">
          {" "}
          <img src={pagelogo} alt="pagelogo" />
        </a>
        <Row>
          <Col lg={5}>
            <p className="ff_poppins fw_400 fs_sm clr_lightestwhite">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta.
            </p>
            <div className="d-flex">
              <a href="#">
                <img
                  src={facebook}
                  alt="facebook"
                  className=" hover_social_icons"
                />
              </a>
              <a href="#">
                <img
                  src={tweter}
                  alt="tweter"
                  className="ms-4 hover_social_icons"
                />
              </a>
              <a href="#">
                <img
                  src={google}
                  alt="google"
                  className="ms-4 hover_social_icons"
                />
              </a>
            </div>
          </Col>
          <Col lg={7}>
            <Row className="mt-5 mt-lg-0">
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-sm-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_poppins fw_600 fs_md clr_white mb-4">
                    CUSTOM LINKS
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-sm-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_poppins fw_600 fs_md clr_white mb-4">
                    PRODUCTS
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-md-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_poppins fw_600 fs_md clr_white mb-4">
                    OUR COMPANY
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col xs={12} sm={6} md={3} lg={3} className=" mt-5 mt-md-0">
                <ul className="mb-0 ps-0">
                  <li className="ff_poppins fw_600 fs_md clr_white mb-4">
                    YOUR ACCOUNT
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover "
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="ff_poppins fw_400 fs_md clr_lightwhite footerlihover"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <p className="ff_poppins fw_400 bg_darkblack fs_md clr_lightwhiteb9b9b9 mb-0 text-center py-4">
        © Copyright SNKRPLTS 2021.
      </p>
    </footer>
  );
};

export default Footer;

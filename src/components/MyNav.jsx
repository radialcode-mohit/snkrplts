import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import pagelogo from "../assets/images/img/navbar/pagelogo.png";
import close from "../assets/images/img/navbar//close.png";
const MyNav = () => {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <nav className="boxshadow">
      <div className="border_top">
        <Container>
          <div className="d-flex justify-content-between align-items-center py-2 d-lg-none">
            <img src={pagelogo} alt="pagelogo" className=" max_w_58" />
            <a
              href="#"
              className="navcicon_container"
              onClick={() => {
                setfirst(false);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <ul
            className={
              first
                ? "d-flex flex-column flex-lg-row justify-content-center align-items-center justify-content-lg-end py-4  mb-0 ps-0 ul_mobile_view left_100"
                : "d-flex flex-column flex-lg-row justify-content-center align-items-center justify-content-lg-end py-4  mb-0 ps-0 ul_mobile_view left_0"
            }
          >
            <li className="ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_roboto fw_400 fs_md clr_black hover_icrease_font_w"
              >
                HOME
              </a>
            </li>
            <li className="ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_roboto fw_400 fs_md clr_black hover_icrease_font_w"
              >
                SNEAKERS KOPEN
              </a>
            </li>
            <li className="ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_roboto fw_400 fs_md clr_black hover_icrease_font_w"
              >
                INTERVIEWS
              </a>
            </li>
            <li className="ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_roboto fw_400 fs_md clr_black hover_icrease_font_w"
              >
                SALE
              </a>
            </li>
            <li className="ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_roboto fw_400 fs_md clr_black hover_icrease_font_w"
              >
                SNEAKER VAN DE DAG
              </a>
            </li>
            <li className="ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_roboto fw_400 fs_md clr_black hover_icrease_font_w"
              >
                SNEAKER FORUM
              </a>
            </li>
            <li className="ms-lg-3 mt-5 mt-lg-0">
              <a
                href="#"
                className="ff_roboto fw_400 fs_md clr_black hover_icrease_font_w"
              >
                BLOG
              </a>
            </li>
            <img
              src={close}
              className=" position-absolute close_btn_position d-lg-none "
              alt="close"
              onClick={() => {
                setfirst(true);
              }}
            />
          </ul>
        </Container>
      </div>
    </nav>
  );
};

export default MyNav;

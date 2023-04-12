import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import redshoe from "../assets/images/img/relativeproduct/redshoeimage.png";
import greyshoe from "../assets/images/img/relativeproduct/greyshoesimg.png";
import star from "../assets/images/img/relativeproduct/tara.png";
import shoppingkart from "../assets/images/img/relativeproduct/greenshopingcart.png";
const RelatedProduct = () => {
  const [first, setfirst] = useState(0);
  return (
    <section className=" bg-white py-5">
      <Container className="pb-lg-5 pb-3">
        <p className=" ff_poppins fw_600 fs_3xl clr_black">RELATED PRODUCT</p>
        <Row>
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={redshoe} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={greyshoe} alt="greyshoe" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={redshoe} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={greyshoe} alt="greyshoe" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={redshoe} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={greyshoe} alt="greyshoe" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={redshoe} alt="redshoes" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>{" "}
          <Col lg={3} md={4} sm={6} className=" my-4 ">
            <div className="boxshadow_relatedsec position-relative zindex overflow-hidden cursur_poi ">
              <p className=" position-absolute ff_poppins fw_400 fs_xsm px-3 py-1 clr_white rightside_newpos">
                NEW
              </p>
              <p className="position-absolute ff_poppins fw_300 fs_xsm px-5  clr_white leftside_off_pos">
                -10% OFF
              </p>
              <img className="w-100" src={greyshoe} alt="greyshoe" />
              <div className="px-2 pb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className=" ff_poppins fw_500 fs_md clr_black mb-0 mt-3 ">
                      Quickiins Mens Shoes
                    </p>
                    <p className=" ff_poppins fw_500 fs_md clr_greyhash9 mt-2 ">
                      $90.00 <span className="clr_lightred">$70.00</span>
                    </p>
                  </div>
                  <img src={shoppingkart} alt="shoppingkart" />
                </div>
                <div className="d-flex">
                  <img src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                  <img className="ms-1" src={star} alt="star" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-end align-items-center mt-5">
          <p
            onClick={() => {
              setfirst(0);
            }}
            className={
              first === 0
                ? "ff_poppins fw_600 fs_xl whitebox  bg_orange cursur_poi"
                : "ff_poppins fw_600 fs_xl whitebox   cursur_poi"
            }
          >
            1
          </p>
          <p
            onClick={() => {
              setfirst(1);
            }}
            className={
              first === 1
                ? "ff_poppins fw_600 fs_xl whitebox  bg_orange ms-3 cursur_poi"
                : "ff_poppins fw_600 fs_xl whitebox ms-3  cursur_poi "
            }
          >
            2
          </p>{" "}
          <p
            onClick={() => {
              setfirst(2);
            }}
            className={
              first === 2
                ? "ff_poppins fw_600 fs_xl whitebox  bg_orange ms-3 cursur_poi"
                : "ff_poppins fw_600 fs_xl whitebox ms-3  cursur_poi "
            }
          >
            3
          </p>
          <p className=" ff_poppins fs_md clr_lightestblack fw_400 border_next_btn padding_next_btn ms-3 cursur_poi">
            Next &#62;&#62;
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RelatedProduct;

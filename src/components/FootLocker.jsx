import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import footlockerimg from "../assets/images/img/footlocker/footlocker.png";
import sidestepimg from "../assets/images/img/footlocker/sidestep.png";
const FootLocker = () => {
  const [first, setfirst] = useState(0);
  return (
    <section>
      <Container>
        <p className="ff_poppins fw_500 fs_2xl my-5 my-lg-0">
          You can buy the Nike Air Max 97 Men's Shoe - White here:
        </p>
        <div className="py-lg-5 d-flex overflow_scroll_max_lg">
          <div>
            <div className="border_radius_10 bg-white box_shadow_footlocker transition">
              {/* img div  */}
              <div className="footlocker_img_border bg_white py-4 px-5">
                <img
                  src={footlockerimg}
                  alt="footlockerimg"
                  className="w-100"
                />
              </div>
              <div className="px-3 pb-2">
                {/* price  */}
                <div className="d-flex align-items-center justify-content-between pt-4 pb-3">
                  <div className="d-flex align-items-center ">
                    <p className="mb-0 ff_poppins fw_400 fs_sm clr_222222">
                      Price:
                    </p>
                    <p className="mb-0 ff_poppins fw_600 fs_lg ms-3">€179,99</p>
                  </div>
                  <button className="green_btns_hover ff_poppins fw_400 fs_xsm clr_white bg_green  py-1 border_radius_6px px-2">
                    Best Price
                  </button>
                </div>
                {/* size */}
                <p className="ff_poppins fw_400 fs_sm clr_222222">Size:</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(0);
                    }}
                    className={
                      first === 0
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg-white clr_black"
                    }
                  >
                    41
                  </button>

                  <button
                    onClick={() => {
                      setfirst(1);
                    }}
                    className={
                      first === 1
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    42
                  </button>

                  <button
                    onClick={() => {
                      setfirst(2);
                    }}
                    className={
                      first === 2
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(3);
                    }}
                    className={
                      first === 3
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px   bg-white clr_black mt-2"
                    }
                  >
                    44
                  </button>

                  <button
                    onClick={() => {
                      setfirst(4);
                    }}
                    className={
                      first === 4
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    45
                  </button>

                  <button
                    onClick={() => {
                      setfirst(5);
                    }}
                    className={
                      first === 5
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    46
                  </button>
                </div>
                <p className="ff_poppins fw_400 fs_sm mb-0 mt-3 mb-2">
                  View this product as:
                </p>
                <p className="ff_poppins fw_600 fs_sm clr_blue mb-4 cursur_poi">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </div>
          <div className="ms-3">
            <div className="border_radius_10 bg-white box_shadow_footlocker transition">
              {/* img div  */}
              <div className="footlocker_img_border bg_white py-4 px-5">
                <img src={sidestepimg} alt="sidestepimg" className="w-100" />
              </div>
              <div className="px-3 pb-2">
                {/* price  */}
                <div className="d-flex align-items-center justify-content-between pt-4 pb-3">
                  <div className="d-flex align-items-center ">
                    <p className="mb-0 ff_poppins fw_400 fs_sm clr_222222">
                      Price:
                    </p>
                    <p className="mb-0 ff_poppins fw_600 fs_lg ms-3">€179,99</p>
                  </div>
                  <button className="green_btns_hover ff_poppins fw_400 fs_xsm clr_white bg_green py-1 border_radius_6px px-2">
                    Best Price
                  </button>
                </div>
                {/* size */}
                <p className="ff_poppins fw_400 fs_sm clr_222222">Size:</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(6);
                    }}
                    className={
                      first === 6
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg-white clr_black"
                    }
                  >
                    41
                  </button>

                  <button
                    onClick={() => {
                      setfirst(7);
                    }}
                    className={
                      first === 7
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    42
                  </button>

                  <button
                    onClick={() => {
                      setfirst(8);
                    }}
                    className={
                      first === 8
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(9);
                    }}
                    className={
                      first === 9
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px   bg-white clr_black mt-2"
                    }
                  >
                    44
                  </button>

                  <button
                    onClick={() => {
                      setfirst(10);
                    }}
                    className={
                      first === 10
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    45
                  </button>

                  <button
                    onClick={() => {
                      setfirst(11);
                    }}
                    className={
                      first === 11
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    46
                  </button>
                </div>
                <p className="ff_poppins fw_400 fs_sm mb-0 mt-3 mb-2">
                  View this product as:
                </p>
                <p className="ff_poppins fw_600 fs_sm clr_blue mb-4 cursur_poi">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </div>
          <div className="ms-3">
            <div className="border_radius_10 bg-white box_shadow_footlocker transition">
              {/* img div  */}
              <div className="footlocker_img_border bg_white py-4 px-5">
                <img
                  src={footlockerimg}
                  alt="footlockerimg"
                  className="w-100"
                />
              </div>
              <div className="px-3 pb-2">
                {/* price  */}
                <div className="d-flex align-items-center justify-content-between pt-4 pb-3">
                  <div className="d-flex align-items-center ">
                    <p className="mb-0 ff_poppins fw_400 fs_sm clr_222222">
                      Price:
                    </p>
                    <p className="mb-0 ff_poppins fw_600 fs_lg ms-3">€179,99</p>
                  </div>
                  <button className="green_btns_hover ff_poppins fw_400 fs_xsm clr_white bg_green  py-1 border_radius_6px px-2">
                    Best Price
                  </button>
                </div>
                {/* size */}
                <p className="ff_poppins fw_400 fs_sm clr_222222">Size:</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(12);
                    }}
                    className={
                      first === 12
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg-white clr_black"
                    }
                  >
                    41
                  </button>

                  <button
                    onClick={() => {
                      setfirst(13);
                    }}
                    className={
                      first === 13
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    42
                  </button>

                  <button
                    onClick={() => {
                      setfirst(14);
                    }}
                    className={
                      first === 14
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(15);
                    }}
                    className={
                      first === 15
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px   bg-white clr_black mt-2"
                    }
                  >
                    44
                  </button>

                  <button
                    onClick={() => {
                      setfirst(16);
                    }}
                    className={
                      first === 16
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    45
                  </button>

                  <button
                    onClick={() => {
                      setfirst(17);
                    }}
                    className={
                      first === 17
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    46
                  </button>
                </div>
                <p className="ff_poppins fw_400 fs_sm mb-0 mt-3 mb-2">
                  View this product as:
                </p>
                <p className="ff_poppins fw_600 fs_sm clr_blue mb-4 cursur_poi">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </div>
          <div className="ms-3">
            <div className="border_radius_10 bg-white box_shadow_footlocker transition">
              {/* img div  */}
              <div className="footlocker_img_border bg_white py-4 px-5">
                <img src={sidestepimg} alt="sidestepimg" className="w-100" />
              </div>
              <div className="px-3 pb-2">
                {/* price  */}
                <div className="d-flex align-items-center justify-content-between pt-4 pb-3">
                  <div className="d-flex align-items-center ">
                    <p className="mb-0 ff_poppins fw_400 fs_sm clr_222222">
                      Price:
                    </p>
                    <p className="mb-0 ff_poppins fw_600 fs_lg ms-3">€179,99</p>
                  </div>
                  <button className="green_btns_hover ff_poppins fw_400 fs_xsm clr_white bg_green  py-1 border_radius_6px px-2">
                    Best Price
                  </button>
                </div>
                {/* size */}
                <p className="ff_poppins fw_400 fs_sm clr_222222">Size:</p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(18);
                    }}
                    className={
                      first === 18
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px ms-1 bg-white clr_black"
                    }
                  >
                    41
                  </button>

                  <button
                    onClick={() => {
                      setfirst(19);
                    }}
                    className={
                      first === 19
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    42
                  </button>

                  <button
                    onClick={() => {
                      setfirst(20);
                    }}
                    className={
                      first === 20
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg_green clr_white"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2  px_32px  ms_11 bg-white clr_black"
                    }
                  >
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => {
                      setfirst(21);
                    }}
                    className={
                      first === 21
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px   bg-white clr_black mt-2"
                    }
                  >
                    44
                  </button>

                  <button
                    onClick={() => {
                      setfirst(22);
                    }}
                    className={
                      first === 22
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    45
                  </button>

                  <button
                    onClick={() => {
                      setfirst(23);
                    }}
                    className={
                      first === 23
                        ? "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg_green clr_white mt-2"
                        : "text-center ff_poppins fw_500 fs_sm border_radius_40 border_1px_rgb py-2 px_32px  ms_11 bg-white clr_black mt-2"
                    }
                  >
                    46
                  </button>
                </div>
                <p className="ff_poppins fw_400 fs_sm mb-0 mt-3 mb-2">
                  View this product as:
                </p>
                <p className="ff_poppins fw_600 fs_sm clr_blue mb-4 cursur_poi">
                  Foot Locker NL
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FootLocker;

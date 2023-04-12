import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Description = () => {
  const [first, setfirst] = useState(0);
  const [second, setsecond] = useState(0);

  return (
    <section className="py-lg-5 py-3">
      <Container>
        <div className="d-flex overflow_scroll_max_lg align-items-start scroll">
          <div
            onClick={() => {
              setfirst(0);
              setsecond(0);
            }}
            className=" py-3"
          >
            <p
              className={
                second === 0
                  ? "white_space_nowrap ff_poppins fw_400 fs_lg clr_lightred border_btm_red  position-relative cursur_poi pb-2"
                  : "white_space_nowrap ff_poppins fw_400 fs_lg clr_black  position-relative cursur_poi"
              }
            >
              DESCRIPTION
            </p>
          </div>
          <div
            onClick={() => {
              setfirst(1);
              setsecond(1);
            }}
            className="ms-4 py-3"
          >
            <p
              className={
                second === 1
                  ? "white_space_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_lightred  position-relative cursur_poi border_btm_red pb-2"
                  : "white_space_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_black  position-relative cursur_poi"
              }
            >
              ADDITIONAL INFORMATION
            </p>
          </div>
          <div
            onClick={() => {
              setfirst(2);
              setsecond(2);
            }}
            className="ms-4 py-3"
          >
            <p
              className={
                second === 2
                  ? "white_space_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_lightred border_btm_red position-relative cursur_poi pb-2"
                  : "white_space_nowrap ms-lg-5 ff_poppins fw_400 fs_lg clr_black  position-relative cursur_poi"
              }
            >
              REVIEWS (1)
            </p>
          </div>
        </div>
        <div
          className={
            first === 0 ? "py-lg-3 py-3 d-block" : "d-none py-lg-3 py-3"
          }
        >
          <p className="ff_poppins fs_lg fw_400 clr_lightblack">
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
            mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec
            massa in ligula vestibulum mattis. Suspendisse imperdiet lorem
            eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor
            vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non
            pharetra mi. Cura
          </p>
        </div>
        <p
          className={
            first === 1
              ? "py-lg-3 py-3 d-block ff_poppins fs_lg fw_400 clr_lightblack"
              : "d-none py-lg-3 py-3 ff_poppins fs_lg fw_400 clr_lightblack"
          }
        >
          Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
          euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla in
          leo ullamcorper, in finibus elit porta. Sed eget congue neque, mattis
          finibus neque. In vel dolor ac augue pretium suscipit. Ut nec mas
        </p>
        <p
          className={
            first === 2 ? "py-lg-3 py-3 d-block" : "d-none py-lg-3 py-3"
          }
        >
          <span className="star_font_styles">&#9733;</span>
          <span className="star_font_styles">&#9733;</span>
          <span className="star_font_styles">&#9733;</span>
          <span className="star_font_styles">&#9733;</span>
          <span className="star_font_styles">&#9733;</span>
          <div>
            <span className="star_font_styles">&#9733;</span>
            <span className="star_font_styles">&#9733;</span>
            <span className="star_font_styles">&#9733;</span>
            <span className="star_font_styles">&#9733;</span>
          </div>
        </p>
      </Container>
    </section>
  );
};

export default Description;

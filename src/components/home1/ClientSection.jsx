import React from "react";
import Marquee from "react-fast-marquee";

const ClientSection = () => {
  return (
    <div className="client-section mb-130">
      <div className="container-fluid one">
        <h2 className="client-title">Ils me font confiance</h2>
        <div className="col-lg-12 pl--95 pr--95">
          <div className="client-logo-wrap">
            <div className="marque-wrap">
              <Marquee>
                <div className="marquee_text2">
                  <a href="#">
                    <img src="assets/img/logos/VET&SPHERE.jpg" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/cpts.png" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/HGO_G-VYV_C-Mut-Estuaire.svg" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/HGO_G-VYV_C-Mut-Porte Orient.svg" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/isffel.png" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/polynys.svg" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/RECYCLEURS-BRETONS.jpg" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/sill_dairy_international_logo.jpg" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                  <a href="#">
                    <img src="assets/img/logos/VET&SPHERE.jpg" alt="" style={{
                      width: "100%",
                      height: "100px",
                    }} />
                  </a>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;

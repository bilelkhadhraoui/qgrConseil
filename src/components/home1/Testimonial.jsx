import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Testimonial = () => {
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      effect: 'fade',             // Use the fade effect
      fadeEffect: {
        crossFade: true           // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: '.pagination-3',
        clickable: true,
      },
      navigation: {
        nextEl: ".next-3",
        prevEl: ".prev-3",
      },
    }
  }, [])
  return (
    <div className="testimonial-section2 two mb-130">
      <div className="container-fluid one">
        <div className="row">
          <div className="col-lg-12">
            <div className="tastimonial-wrap2 two">
              <Swiper {...slideSetting} className="swiper testimonial-slider3">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <div className="testimonial-img magnetic-item">
                        <span className="sharp1" />
                        <span className="sharp2" />
                        <img src="assets/img/logos/cpts.png" height={100} alt="" />
                      </div>
                      <div className="testimonal-content">
                        <p>La CPTS du Pays de REDON a fait appel à QGR Conseil pour les accompagner dans l’écriture de son projet de santé. La collaboration a été d’une grande qualité, nous permettant de soumettre à l’ARS un projet de qualité, précis, détaillé et pertinent au vu du contexte populationnel de notre territoire. La disponibilité de Mme LUNEAU, la qualité de son travail ont été très appréciées. Encore un grand merci !</p>
                        <div className="author-area">
                          <div className="content">
                            <h6>Dr A. MOUTEL – CPTS du Pays de REDON (Juin 2021)</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <div className="testimonial-img magnetic-item">
                        <span className="sharp1" />
                        <span className="sharp2" />
                        <img src="assets/img/logos/VET&SPHERE.jpg" alt="" height={100} />
                      </div>
                      <div className="testimonal-content">
                        <p>Réseau Cristal a sollicité Mme LUNEAU pour réaliser des audits sur la satisfaction clients et sur le management de la qualité sur nos 60 sites vétérinaires adhérentes. Cela nous a permis d’avoir une vision globale et un regard extérieur.

                          On a été satisfait de son approche humaine et elle a su rendre plus accessible la notion de qualité au sein des entreprises. Mme LUNEAU a bien respecté notre cahier des charges tout en étant force de proposition pour la création d’un nouvel audit.</p>
                        <div className="author-area">
                          <div className="content">
                            <h6>Dr M. RETUREAU – Réseau CRISTAL (Avril 2024)</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="pagination-wrap">
                <div className="pagination-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

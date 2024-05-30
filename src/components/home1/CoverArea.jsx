import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import FloatingCard from "../common/FloatingCard";
SwiperCore.use([Pagination, Autoplay, EffectFade]);

const CoverArea = () => {
  const coverslider = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="cover-section mb-130">
      <div className="container-fluid one">
        <div className="col-lg-12">
          <div className="cover-wrapper">
            <div className="row">
              <div className="col-lg-12 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-start justify-content-between mb-60">
                <div className="section-title1 one">
                  <span>Domaines d'expertise</span>
                  <h2>
                    Vous accompagner dans la conception et la mise en place d'une stratégie de progrès pour votre organisation
                  </h2>
                </div>
                <Link legacyBehavior href="/service2">
                  <a className="explore-btn">
                    Explorer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
              <div className="col-lg-12 position-relative">
                <div className="slider-btn-group">
                  <div className="slider-btn prev-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn next-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                    >
                      <g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.5833 8.9668H1V7.7168H15.5833V8.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.9589 7.7168C12.0189 7.7168 9.61719 10.3018 9.61719 13.0585V13.6835H10.8672V13.0585C10.8672 10.966 12.7355 8.9668 14.9589 8.9668H15.583V7.7168H14.9589Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.9589 8.96667C12.0189 8.96667 9.61719 6.38167 9.61719 3.625V3H10.8672V3.625C10.8672 5.71833 12.7355 7.71667 14.9589 7.71667H15.583V8.96667H14.9589Z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <Swiper {...coverslider} className="swiper cover-carasol">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <FloatingCard img="assets/img/home1/carou1.png" title="GESTION DES RISQUES" tag={'Cartographier'} content={<div>
                        <p>Conception et réalisation d'audit diagnostic,</p>
                        <p>Synthétisation des constats,</p>
                        <p>Présentation des préconisations,</p>
                        <p>Proposition d'un plan d'actions,</p>
                      </div>} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <FloatingCard img="assets/img/home1/carou2.png" title="QUALITÉ" tag={"Structurer"} content={
                        <div>
                          <p>Évaluation des écarts au référentiel,</p>
                          <p>Création et mise à jour des indicateurs,</p>
                          <p>Réalisation d'audit à blanc,</p>
                          <p>Appui lors de la viste d'audit de certification,</p>
                          <p>Proposition de réponses aux recommandations émises lores de l'audit,</p>
                        </div>
                      } />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <FloatingCard img="assets/img/home1/carou3.png" title="AMÉLIORATION CONTINUE" tag={"Optimiser"} content={
                        <div>
                          <p>Audit du système qualité existant,</p>
                          <p>Détection des axes d'Amélioration,</p>
                          <p>Création du plan d'actions et des indicateurs,</p>
                          <p>Organisation et suivi des retours d'expériences.</p>
                        </div>
                      } />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <FloatingCard img="assets/img/home1/carou4.png" title="management qualité de transition" tag={"Accompagner"} content={
                        <div>
                          <p>Gestion du quotidien qualité,</p>
                          <p>Tutorat de la montée en compétence qualité des collaborateurs,</p>
                          <p>Accompagnement à la gestion de crise,</p>
                          <p>Management relais,</p>
                        </div>
                      } />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <FloatingCard img="assets/img/home1/carou5.jpg" title="L'ADN" tag={"QGR Conseil"} content={
                        <div>
                          <p>Coconstruire avec vous un système qualité efficient en optimisant les outils existants</p>
                          <ul>
                            <li>Pour dynamiser la démarche qualité</li>
                            <li>Pour augmenter la satisfaction client</li>
                            <li>Pour déployer une stratégie d'amélioration continue</li>
                          </ul>
                        </div>
                      } />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <FloatingCard img="assets/img/home1/carou6.jpg" title="LES VALEURS" tag={"QGR Conseil"} content={
                        <div>
                          <ul>
                            <li>Curiosité</li>
                            <li>Pragmatisme</li>
                            <li>Créativité</li>
                          </ul>
                        </div>
                      } />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverArea;

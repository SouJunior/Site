import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../OccupationSection/OccupationSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { carouselItems } from "../../utils/carouselItems";
import { Paragraph } from "../commons/Paragraph";
import { Heading } from "../commons/Heading";

export const OccupationSection = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = navigationPrevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = navigationNextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <>
      <section className={styles.OccupationSection} id="areas-de-atuacao">
        <div className={styles.OccupationContainer}>
          <Heading level={"h2"}>Áreas de atuação</Heading>
          <Paragraph>
            Aqui na SouJunior, atuam profissionais iniciantes das diversas áreas
            que compõem uma empresa de tecnologia. Confira abaixo as áreas de
            atuação que temos em nosso quadro atualmente:
          </Paragraph>

          <div className={styles.areasContainer}>
            <Swiper
              ref={swiperRef}
              slidesPerView={8}
              freeMode={true}
              loop={true}
              rewind={true}
              modules={[Controller, Navigation]}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
            >
              {carouselItems.map(({ title, icon, url }) => (
                <SwiperSlide key={title}>
                  <Link href={`/areas-de-atuacao/${url}`}>
                    <div className={styles.areaItem}>
                      <Image src={icon} alt={title} width={62} height={62} />
                      <p>{title}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <div className={styles.arrowContainer}>
        <button ref={navigationPrevRef}>
          <Image
            src="/assets/button-directional-dark-caroussel.svg"
            width={62}
            height={62}
            alt="Anterior"
          />
        </button>
        <button ref={navigationNextRef}>
          <Image
            src="/assets/button-directional-dark-caroussel.svg"
            width={62}
            height={62}
            alt="Próximo"
          />
        </button>
      </div>
    </>
  );
};

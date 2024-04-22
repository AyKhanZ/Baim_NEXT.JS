import React, {useEffect, useReducer, useRef, useState} from 'react';
import styles from './EmployeeDetails.module.css';
import Image from 'next/image';
import Swiper from "swiper";

const EmployeeDetails: React.FC = () => {

    useEffect(() => {
        const swiper = new Swiper(".blogSlider", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 3,
                slideShadows: true
            },
            keyboard: {
                enabled: true
            },
            mousewheel: {
                thresholdDelta: 70
            },
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 1
                },
                1024: {
                    slidesPerView: 2
                },
                1560: {
                    slidesPerView: 3
                }
            }
        });

        // // Clean up the Swiper instance
        // return () => {
        //     swiper.destroy(true, true);
        // };
    }, []);



    return (
        <div className={styles.container}>
            <div className={styles.firstSection}>
                <div className={styles.mainInfo}>
                    <h1>Name Surname</h1>
                    <h3>Position</h3>
                </div>
                <div className={styles.firstImage}>
                    <Image src="" alt="Your Image" width={400} height={300}/>
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.blogSlider}>
                    <div className={`${styles.blogSlider__wrp} ${styles.swiperWrapper}`}>
                        <div className={`${styles.blogSlider__item} ${styles.swiperSlide}`}>
                            <div className={styles.blogSlider__img}>
                            <img
                                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
                                    alt=""/>
                            </div>
                            <div className={styles.blogSlider__content}>
                                <span className={styles.blogSlider__code}>26 December 2019</span>
                                <div className={styles.blogSlider__title}>Lorem Ipsum Dolor</div>
                                <div className={styles.blogSlider__text}>Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                                </div>
                                <a href="#" className={styles.blogSlider__button}>READ MORE</a>
                            </div>
                        </div>
                        <div className={`${styles.blogSlider__item} swiper-slide`}>
                            <div className={styles.blogSlider__img}>
                                <img
                                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
                                    alt=""/>
                            </div>
                            <div className={styles.blogSlider__content}>
                                <span className={styles.blogSlider__code}>26 December 2019</span>
                                <div className={styles.blogSlider__title}>Lorem Ipsum Dolor2</div>
                                <div className={styles.blogSlider__text}>Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                                </div>
                                <a href="#" className={styles.blogSlider__button}>READ MORE</a>
                            </div>
                        </div>
                        <div className={`${styles.blogSlider__item} swiper-slide`}>
                            <div className={styles.blogSlider__img}>
                                <img
                                    src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
                                    alt=""/>
                            </div>
                            <div className={styles.blogSlider__content}>
                                <span className={styles.blogSlider__code}>26 December 2019</span>
                                <div className={styles.blogSlider__title}>Lorem Ipsum Dolor</div>
                                <div className={styles.blogSlider__text}>Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?
                                </div>
                                <a href="#" className={styles.blogSlider__button}>READ MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.blogSlider__pagination}></div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetails;
import React from 'react'
// import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './../style/home/carousel.css';
import { slidesData } from '../data/home/carousel';

const Comp_Carousel = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     responsive: [
    //         {
    //             breakpoint: 2560,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 2,

    //                 arrows: true,
    //                 dots: true,
    //                 infinite: true,
    //                 autoplay: true,
    //                 speed: 500,


    //             }
    //         },
    //         {
    //             breakpoint: 1100,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 2,
    //                 arrows: true,
    //                 dots: true,
    //                 infinite: true
    //             }
    //         },
    //         {
    //             breakpoint: 700,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 2,
    //                 arrows: true,
    //                 dots: true,
    //                 infinite: true
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 2,
    //                 arrows: true,
    //                 dots: true,
    //                 infinite: true
    //             }
    //         },
    //         {
    //             breakpoint: 200,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 5,
    //                 arrows: true,
    //                 dots: true
    //             }
    //         }
    //     ]
    // };


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (

        <div style={{ marginBottom: '8rem' }}>
            <div><h2 className='carousel-text'>One of the Greatest Scientists</h2></div>

            <div className="slider-wrapper">

                <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={500}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={2000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={["desktop", "tablet", "mobile", "superLargeDesktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">
                    {slidesData.map((slide) =>
                        <div className="slick-slide" key={slide.id}>

                            <div className='slick-image'>
                                <img className='slick-slide-image' src={slide.img} alt="Pictures of Greatest Scientists" />

                            </div>
                            <div className='slick-col'>
                                <span className="slick-slide-name">{slide.name}</span>
                                <span className='slick-slide-date'>({slide.start_date}-{slide.end_date})</span>
                            </div>

                        </div>
                    )}
                </Carousel>

            </div>

        </div>


    )
}

export default Comp_Carousel

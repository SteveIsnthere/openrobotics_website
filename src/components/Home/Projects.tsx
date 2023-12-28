import {Link} from "react-router-dom";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper";

function Project() {
    return (
        <>
            <div className="relative max-w-screen-xl px-4 py-5 mx-auto">
                <h2 className="text-4xl py-14 mt-5 text-gray-900 text-center font-bold tracking-tight sm:text-5xl">
                    Our Projects
                </h2>
            </div>


            <h3 className="flex max-w-screen-xl mx-auto items-start justify-start font-bold text-xl mb-5">Current Projects</h3>
            <div className="flex max-w-screen-xl mx-auto items-center justify-center">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper center"
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Link
                            to="/Pianobot"
                            className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
                        >
                            <img
                                className="object-cover w-full h-56"
                                src="assets/img/pianobot.png"
                                alt=""
                            />

                            <div className="p-6 h-60">
                                <h5 className="text-xl font-bold">PIANOBOT</h5>

                                <p className="mt-2 text-sm text-gray-500">
                                    The Pianobot project allows students with a passion for music
                                    and robotics to combine their interests into one fun project!
                                </p>

                                <div
                                    className="inline-block pb-1 mt-4 font-medium text-red-600 border-b border-red-600 ">
                                    Find out more
                                    <span aria-hidden="true">&rarr;</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link
                            to="/Robocup"
                            className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
                        >
                            <img
                                className="object-cover w-full h-56"
                                src="assets/img/robocup.png"
                                alt=""
                            />

                            <div className="p-6 h-60">
                                <h5 className="text-xl font-bold">ROBOCUP@HOME</h5>

                                <p className="mt-2 text-sm text-gray-500">
                                    The goal of this project is to create immensely helpful
                                    service and assistance robot technology for household usage.
                                </p>

                                <div
                                    className="inline-block pb-1 mt-4 font-medium text-red-600 border-b border-red-600 ">
                                    Find out more
                                    <span aria-hidden="true">&rarr;</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
            <h1 className="flex max-w-screen-xl mx-auto items-start justify-start font-bold text-xl mb-5 mt-8">Past Projects
                (Completed)</h1>
            <div className="flex max-w-screen-xl mx-auto items-center justify-center">
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper center"
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Link
                            to="/Artbot"
                            className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
                        >
                            <img
                                className="object-cover w-full h-56"
                                src="assets/img/artbot.png"
                                alt=""
                            />

                            <div className="p-6 h-60">
                                <h5 className="text-xl font-bold">ARTBOT</h5>

                                <p className="mt-2 text-sm text-gray-500">
                                    The Artbot project is a unique opportunity for students to
                                    learn more about the intricacies of visual arts by building a
                                    robot that can paint 2D compositions!
                                </p>

                                <div
                                    className="inline-block pb-1 mt-4 font-medium text-red-600 border-b border-red-600 ">
                                    Find out more
                                    <span aria-hidden="true">&rarr;</span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Project;


import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";

// Swiper modules
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const ShowTrending = (props) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation

      /* ================= AUTOPLAY ================= */
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}

      /* ================= RESPONSIVE ================= */
      breakpoints={{
        // Mobile
        0: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        // Small tablet
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        // Desktop
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        // Large desktop
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}

      className="w-full"
    >
      {props.products.map((ele) => (
        <SwiperSlide key={ele.id}>

          {/* ================= PRODUCT CARD ================= */}

          <Link to={'/view'} state={ele} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Image */}
            <div className="flex h-[180px] items-center justify-center overflow-hidden rounded-xl bg-gray-50">

              <img
                src={ele.thumbnail}
                alt={ele.title}
                className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-110"
              />

            </div>

            {/* Product Details */}
            <div className="mt-4">

              {/* Category */}
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                {ele.category}
              </p>

              {/* Title */}
              <h3 className="mt-1 truncate text-base font-bold text-gray-900">
                {ele.title}
              </h3>

              {/* Rating + Stock */}
              <div className="mt-2 flex items-center justify-between">

                <span className="rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                  ⭐ {ele.rating}
                </span>

                <span className="text-xs text-gray-500">
                  {ele.stock} left
                </span>

              </div>

              {/* Price */}
              <div className="mt-3 flex items-center gap-2">

                <span className="text-xl font-extrabold text-gray-900">
                  ${ele.price}
                </span>

                <span className="text-xs text-gray-400 line-through">
                  $
                  {Math.round(
                    ele.price /
                      (1 - ele.discountPercentage / 100)
                  )}
                </span>

                <span className="text-xs font-semibold text-green-600">
                  {Math.round(ele.discountPercentage)}% OFF
                </span>

              </div>

            </div>

          </Link>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ShowTrending;


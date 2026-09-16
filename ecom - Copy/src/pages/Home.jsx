
import React, { useEffect, useState } from "react";
import ShowTrending from "../components/ShowTrending";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  // ================= GET PRODUCTS =================
  async function getAllProducts() {
    try {
      let res = await fetch(
        "https://dummyjson.com/products?skip=0&limit=0"
      );

      let data = await res.json();

      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  // ================= FILTER PRODUCTS =================
  let smartPhones = products.filter(
    (ele) => ele.category === "smartphones"
  );

  let laptops = products.filter(
    (ele) => ele.category === "laptops"
  );

  // ================= VIEW PRODUCT =================
  function handleView(obj) {
    navigate(`/view?name=${obj.title}`, {
      state: obj,
    });
  }

  // ================= USE EFFECT =================
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================================================= */}
      {/* NAVBAR */}
      {/* ================================================= */}

     

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="mx-auto max-w-7xl px-4 pt-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-12 text-white shadow-lg sm:px-10 md:py-16">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 right-20 h-72 w-72 rounded-full bg-white/10" />

          <div className="relative z-10 max-w-xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              New Collection
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Everything You Need,
              <br />
              All in One Place.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-blue-100 sm:text-base">
              Discover the latest smartphones, laptops, electronics
              and more at amazing prices.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-md transition hover:scale-105 hover:bg-gray-100"
            >
              Shop Now →
            </button>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* TRENDING SMARTPHONES */}
      {/* ================================================= */}

      <section className="mx-auto mt-10 max-w-7xl px-4">

        <div className="mb-5 flex items-end justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Trending Now
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              Smartphones
            </h2>
          </div>

          <button className="hidden text-sm font-semibold text-blue-600 hover:text-blue-800 sm:block">
            View All →
          </button>

        </div>

        <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm">

          {smartPhones.length > 0 ? (
            <ShowTrending products={smartPhones} />
          ) : (
            <div className="py-10 text-center text-gray-400">
              Loading smartphones...
            </div>
          )}

        </div>

      </section>

      {/* ================================================= */}
      {/* TRENDING LAPTOPS */}
      {/* ================================================= */}

      <section className="mx-auto mt-10 max-w-7xl px-4">

        <div className="mb-5 flex items-end justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
              Top Picks
            </p>

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              Laptops
            </h2>
          </div>

          <button className="hidden text-sm font-semibold text-purple-600 hover:text-purple-800 sm:block">
            View All →
          </button>

        </div>

        <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-sm">

          {laptops.length > 0 ? (
            <ShowTrending products={laptops} />
          ) : (
            <div className="py-10 text-center text-gray-400">
              Loading laptops...
            </div>
          )}

        </div>

      </section>

      {/* ================================================= */}
      {/* ALL PRODUCTS */}
      {/* ================================================= */}

      <section
        id="products"
        className="mx-auto mt-12 max-w-7xl px-4 pb-16"
      >

        {/* Section Heading */}
        <div className="mb-6">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore Our Store
          </p>

          <div className="flex items-center justify-between">

            <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              All Products
            </h2>

            <span className="text-sm text-gray-500">
              {products.length} Products
            </span>

          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((ele) => (

            <div
              key={ele.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* ================= IMAGE ================= */}

              <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gray-50">

                {/* Discount */}
                <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  -{Math.round(ele.discountPercentage)}%
                </span>

                {/* Favorite */}
                <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-red-50 hover:text-red-500">
                  ♡
                </button>

                <img
                  src={ele.thumbnail}
                  alt={ele.title}
                  className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* ================= DETAILS ================= */}

              <div className="p-5">

                {/* Category */}
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  {ele.category}
                </p>

                {/* Title */}
                <h3 className="mt-1 truncate text-lg font-bold text-gray-900">
                  {ele.title}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2">

                  <span className="rounded-md bg-green-600 px-2 py-1 text-xs font-semibold text-white">
                    ⭐ {ele.rating}
                  </span>

                  <span className="text-xs text-gray-400">
                    {ele.stock} available
                  </span>

                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">

                  <span className="text-2xl font-extrabold text-gray-900">
                    ${ele.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    $
                    {Math.round(
                      ele.price /
                        (1 - ele.discountPercentage / 100)
                    )}
                  </span>

                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-2">

                  <button
                    className="flex-1 rounded-xl bg-gray-900 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                  >
                    🛒 Add to Cart
                  </button>

                  <button
                    onClick={() => handleView(ele)}
                    className="rounded-xl border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    View
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <section className="border-t bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y px-4 py-8 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">

          <div className="flex gap-4 px-5 py-4">
            <span className="text-3xl">🚚</span>

            <div>
              <h3 className="font-bold">
                Free Delivery
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                On orders above $50
              </p>
            </div>
          </div>

          <div className="flex gap-4 px-5 py-4">
            <span className="text-3xl">🔒</span>

            <div>
              <h3 className="font-bold">
                Secure Payment
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                100% secure checkout
              </p>
            </div>
          </div>

          <div className="flex gap-4 px-5 py-4">
            <span className="text-3xl">↩️</span>

            <div>
              <h3 className="font-bold">
                Easy Returns
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                7 days return policy
              </p>
            </div>
          </div>

          <div className="flex gap-4 px-5 py-4">
            <span className="text-3xl">💬</span>

            <div>
              <h3 className="font-bold">
                24/7 Support
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                We're here to help
              </p>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;

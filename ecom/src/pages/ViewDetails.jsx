
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ViewDetails = () => {
  let location = useLocation();

  // Product received from previous page
  let product = location.state;

  console.log(product);

  const [quantity, setQuantity] = useState(1);


  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Product not found
        </h1>
      </div>
    );
  }

  const [selectedImage, setselectedImage] = useState("");

  function handleGetImage(url){
    console.log(url)
    setselectedImage(url)
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      <div className="mx-auto max-w-6xl">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          Home / Products /{" "}
          <span className="font-medium text-gray-800">
            {product.title}
          </span>
        </div>

        {/* Main Product Card */}
        <div className="grid grid-cols-1 gap-8 rounded-2xl bg-white p-6 shadow-md md:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <div className="flex items-center justify-center rounded-xl bg-gray-50 p-8">

            <img
              src={selectedImage.length ==0 ? product.thumbnail : selectedImage}
              alt={product.title}
              className="h-[400px] w-full object-contain transition duration-300 hover:scale-105"
            />
           

           <div>
                {location.state.images.map((url, i)=>{
                    return  <img
                    onClick={()=>handleGetImage(url, i)}
              src={url}
              alt={product.title}
              className="h-[100px] w-full object-contain transition duration-300 hover:scale-105"
            />
                })}
            
           </div>

            

          </div>

          {/* ================= PRODUCT DETAILS ================= */}
          <div className="flex flex-col justify-center">

            {/* Brand */}
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              {product.brand}
            </p>

            {/* Title */}
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">

              <span className="rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-white">
                ⭐ {product.rating}
              </span>

              <span className="text-sm text-gray-500">
                120 Reviews
              </span>

            </div>

            {/* Price */}
            <div className="mt-6 border-b border-gray-200 pb-6">

              <div className="flex items-center gap-4">

                <span className="text-4xl font-bold text-gray-900">
                  ₹{product.price}
                </span>

                <span className="text-lg text-gray-400 line-through">
                  ₹{Math.round(product.price * 1.3)}
                </span>

                <span className="font-semibold text-green-600">
                  30% OFF
                </span>

              </div>

              <p className="mt-2 text-sm text-gray-500">
                Inclusive of all taxes
              </p>

            </div>

            {/* Description */}
            <div className="mt-6">

              <h2 className="text-lg font-semibold text-gray-900">
                Description
              </h2>

              <p className="mt-2 leading-7 text-gray-600">
                {product.description}
              </p>

            </div>

            {/* Product Info */}
            <div className="mt-6 grid grid-cols-2 gap-3">

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Category
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {product.category}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Brand
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {product.brand}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Stock
                </p>
                <p className="mt-1 font-semibold text-green-600">
                  {product.stock} Available
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">
                  Warranty
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  1 Year
                </p>
              </div>

            </div>

            {/* Quantity */}
            <div className="mt-6 flex items-center gap-5">

              {/* <span className="font-semibold text-gray-700">
                Quantity:
              </span> */}

              {/* <div className="flex items-center overflow-hidden rounded-lg border">

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev > 1 ? prev - 1 : 1
                    )
                  }
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  -
                </button>

                <span className="border-x px-5 py-2 font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      prev < product.stock
                        ? prev + 1
                        : prev
                    )
                  }
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  +
                </button>

              </div> */}

            </div>

            {/* Buttons */}
            <div className="mt-7 flex gap-4">

              <button
                className="flex-1 rounded-xl border-2 border-blue-600 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                🛒 Add to Cart
              </button>

              <button
                className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Buy Now
              </button>

            </div>

          </div>
        </div>

        {/* ================= EXTRA INFORMATION ================= */}

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Delivery */}
          <div className="rounded-xl bg-white p-6 shadow-sm">

            <div className="text-3xl">
              🚚
            </div>

            <h3 className="mt-3 font-bold text-gray-900">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Get your product delivered within 3-5 business days.
            </p>

          </div>

          {/* Return */}
          <div className="rounded-xl bg-white p-6 shadow-sm">

            <div className="text-3xl">
              🔄
            </div>

            <h3 className="mt-3 font-bold text-gray-900">
              Easy Returns
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Easy 7-day return and replacement policy.
            </p>

          </div>

          {/* Secure */}
          <div className="rounded-xl bg-white p-6 shadow-sm">

            <div className="text-3xl">
              🔒
            </div>

            <h3 className="mt-3 font-bold text-gray-900">
              Secure Payment
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Your payment information is completely secure.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ViewDetails;

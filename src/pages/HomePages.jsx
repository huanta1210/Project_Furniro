import Header from "../componments/Header";
import Footer from "../componments/Footer";
import Banner from "../assets/img/banner.jpeg";
import image1 from "../assets/img/product-1.jpeg";
import image2 from "../assets/img/product-2.jpeg";
import image3 from "../assets/img/product-3.jpeg";
import image4 from "../assets/img/product-4.jpeg";

import gallery1 from "../assets/img/gallery-1.jpeg";
import gallery2 from "../assets/img/gallery-2.jpeg";
import gallery3 from "../assets/img/gallery-3.jpeg";
import gallery4 from "../assets/img/gallery-4.jpeg";
import gallery5 from "../assets/img/gallery-5.jpeg";
import gallery6 from "../assets/img/gallery-6.jpeg";

import room1 from "../assets/img/room-1.jpeg";
import room2 from "../assets/img/room-2.jpeg";
import room3 from "../assets/img/room-3.jpeg";
import room4 from "../assets/img/room-4.jpeg";

function HomePages() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="">
        <div className="banner h-4/5">
          <img className="h-1/5 w-full" src={Banner} alt="" />
        </div>

        <div className="main my-10 mx-44">
          <div className="mb-7">
            <div className="main-title inline-block">
              <p className="text-3xl font-bold ">New Products</p>
            </div>

            <div className="main-all-product float-right">
              <button className="border-2 border-yellow-300 p-2 rounded text-amber-300 font-semibold">
                View all product
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-between ">
            <div className="product w-56 border">
              <a href="">
                <img className="h-64 w-full" src={image1} alt="" />
              </a>
              <p className="title ml-2 font-semibold">Syltherine</p>
              <p className="description ml-2 text-gray-300 ">
                Stylish cafe chair
              </p>
              <p className="price text-lg text-red-500 font-semibold ml-2">
                1.800.000đ
              </p>
              <button className="border border-yellow-300 rounded text-amber-400 py-1 px-14 ml-2 mb-3 hover:bg-amber-500 hover:text-white">
                Add to cart
              </button>
            </div>

            <div className="product w-56 border">
              <a href="">
                <img className="h-64 w-full" src={image2} alt="" />
              </a>
              <p className="title ml-2 font-semibold">Syltherine</p>
              <p className="description ml-2 text-gray-300 ">
                Stylish cafe chair
              </p>
              <p className="price text-lg text-red-500 font-semibold ml-2">
                1.800.000đ
              </p>
              <button className="border border-yellow-300 rounded text-amber-400 py-1 px-14 ml-2 mb-3 hover:bg-amber-500 hover:text-white">
                Add to cart
              </button>
            </div>

            <div className="product w-56 border">
              <a href="">
                <img className="h-64 w-full" src={image3} alt="" />
              </a>
              <p className="title ml-2 font-semibold">Syltherine</p>
              <p className="description ml-2 text-gray-300 ">
                Stylish cafe chair
              </p>
              <p className="price text-lg text-red-500 font-semibold ml-2">
                1.800.000đ
              </p>
              <button className="border border-yellow-300 rounded text-amber-400 py-1 px-14 ml-2 mb-3 hover:bg-amber-500 hover:text-white">
                Add to cart
              </button>
            </div>

            <div className="product w-56 border">
              <a href="">
                <img className="h-64 w-full" src={image4} alt="" />
              </a>
              <p className="title ml-2 font-semibold">Syltherine</p>
              <p className="description ml-2 text-gray-300 ">
                Stylish cafe chair
              </p>
              <p className="price text-lg text-red-500 font-semibold ml-2">
                1.800.000đ
              </p>
              <button className="border border-yellow-300 rounded text-amber-400 py-1 px-14 ml-2 mb-3 hover:bg-amber-500 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="mx-44">
          <div className="mb-7">
            <div className="main-title inline-block">
              <p className="text-3xl font-bold ">Gallery</p>
            </div>

            <div className="main-all-product float-right">
              <button className="border-2 border-yellow-300 p-2 rounded text-amber-300 font-semibold">
                View all gallery
              </button>
            </div>
          </div>

          <div className="gallery flex flex-wrap justify-between">
            <div className="gallery-list mb-7">
              <img className="h-64 img-gallery" src={gallery1} alt="" />
            </div>
            <div className="gallery-list">
              <img className="h-64 img-gallery" src={gallery2} alt="" />
            </div>
            <div className="gallery-list">
              <img className="h-64 img-gallery" src={gallery3} alt="" />
            </div>
            <div className="gallery-list">
              <img className="h-64 img-gallery" src={gallery4} alt="" />
            </div>
            <div className="gallery-list">
              <img className="h-64 img-gallery" src={gallery5} alt="" />
            </div>
            <div className="gallery-list">
              <img className="h-64 img-gallery" src={gallery6} alt="" />
            </div>
          </div>
        </div>

        <div className="main-new mx-44 mt-10">
          <div className="mb-7">
            <div className="main-title inline-block">
              <p className="text-3xl font-bold ">News</p>
            </div>

            <div className="main-all-product float-right">
              <button className="border-2 border-yellow-300 p-2 rounded text-amber-300 font-semibold">
                View all news
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-between mb-10">
            <div className="product flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
              <a href="">
                <img className="h-56 w-full" src={room1} alt="" />
              </a>
              <p className="description text-gray-300 mt-1">
                <i className="ti ti-calendar"> 24/04/2024</i>
              </p>
              <p className="title font-semibold">
                A bedroom must have something like this
              </p>
              <a href="">
                <p className="price text-xs pt-2 text-red-500 font-semibold ">
                  Xem chi tiết <i className="ti ti-arrow-right"></i>
                </p>
              </a>
            </div>

            <div className="product flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
              <a href="">
                <img className="h-56 w-full" src={room2} alt="" />
              </a>
              <p className="description text-gray-300 mt-1">
                <i className="ti ti-calendar"> 24/04/2024</i>
              </p>
              <p className="title font-semibold">
                A bedroom must have something like this
              </p>
              <a href="">
                <p className="price text-xs pt-2 text-red-500 font-semibold ">
                  Xem chi tiết <i className="ti ti-arrow-right"></i>
                </p>
              </a>
            </div>

            <div className="product flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
              <a href="">
                <img className="h-56 w-full" src={room3} alt="" />
              </a>
              <p className="description text-gray-300 mt-1">
                <i className="ti ti-calendar"> 24/04/2024</i>
              </p>
              <p className="title font-semibold">
                A bedroom must have something like this
              </p>
              <a href="">
                <p className="price text-xs pt-2 text-red-500 font-semibold ">
                  Xem chi tiết <i className="ti ti-arrow-right"></i>
                </p>
              </a>
            </div>

            <div className="product flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
              <a href="">
                <img className="h-56 w-full" src={room4} alt="" />
              </a>
              <p className="description text-gray-300 mt-1">
                <i className="ti ti-calendar"> 24/04/2024</i>
              </p>
              <p className="title font-semibold">
                A bedroom must have something like this
              </p>
              <a href="">
                <p className="price text-xs pt-2 text-red-500 font-semibold ">
                  Xem chi tiết <i className="ti ti-arrow-right"></i>
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50">
          <div className="main-rank mt-5 mx-44 flex flex-wrap gap-4 justify-between py-9">
            <div className="rank flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] flex items-center">
              <div className="icon-rank">
                <i className="ti ti-headphone-alt text-3xl" />
              </div>
              <div className="inline-block pl-3">
                <p className="text-lg font-semibold">High Quality</p>
                <p className="text-sm text-gray-400">
                  crafted from top materials
                </p>
              </div>
            </div>
            <div className="rank flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] flex items-center">
              <div className="icon-rank">
                <i className="ti ti-cup text-3xl" />
              </div>
              <div className="inline-block pl-3">
                <p className="text-lg font-semibold">24 / 7 Support</p>
                <p className="text-sm text-gray-400">Dedicated support</p>
              </div>
            </div>
            <div className="rank flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] flex items-center">
              <div className="icon-rank">
                <i className="ti ti-skype text-3xl" />
              </div>
              <div className="inline-block pl-3">
                <p className="text-lg font-semibold">Warranty Protection</p>
                <p className="text-sm text-gray-400">Over 2 years</p>
              </div>
            </div>
            <div className="rank flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] flex items-center">
              <div className="icon-rank">
                <i className="ti ti-briefcase text-3xl" />
              </div>
              <div className="inline-block pl-3">
                <p className="text-lg font-semibold">Free Shipping</p>
                <p className="text-sm text-gray-400">Order over 150 $</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePages;

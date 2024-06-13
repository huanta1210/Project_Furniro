import Header from "../componments/Header";
import Footer from "../componments/Footer";
import banner1 from "../assets/img/banner-1.jpeg";
import image1 from "../assets/img/product-2.jpeg";
import image2 from "../assets/img/product-3.jpeg";
import image3 from "../assets/img/product-4.jpeg";

function ProductsList() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="banner h-4/5">
          <img className="h-1/5 w-full" src={banner1} alt="" />
        </div>
        <div className="mt-10 mx-44">
          <div className="product grid grid-cols-12 gap-4">
            <div className="col-span-3 p-4">
              <h1 className="font-semibold text-xl mb-3 text-zinc-600">
                Categories
              </h1>
              <ul>
                <li className="pb-1">
                  <a className="text-gray-500" href="">
                    Cafe Chair
                  </a>
                </li>
                <li className="pb-1">
                  <a className="text-gray-500" href="">
                    Sofa
                  </a>
                </li>
                <li className="pb-1">
                  <a className="text-gray-500" href="">
                    Lamp
                  </a>
                </li>
                <li className="pb-1">
                  <a className="text-gray-500" href="">
                    Carpet
                  </a>
                </li>
                <li className="pb-1">
                  <a className="text-gray-500" href="">
                    Cabinet
                  </a>
                </li>
                <li className="pb-1">
                  <a className="text-gray-500" href="">
                    Tea Table
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-9">
              <div className="flex flex-wrap gap-4 justify-between">
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image1} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description ml-2 text-sm py-1 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold py-1 ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image2} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description ml-2 text-sm py-1 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold py-1 ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image3} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description ml-2 text-sm py-1 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold py-1 ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image1} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description ml-2 text-sm py-1 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold py-1 ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image2} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description ml-2 text-sm py-1 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold py-1 ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image3} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description ml-2 text-sm py-1 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold py-1 ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image1} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description ml-2 text-sm py-1 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold py-1 ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="/productDetails">
                    <img className="h-64 w-full" src={image2} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Syltherine</p>
                  <p className="description text-sm py-1 ml-2 text-gray-400 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold ml-2">
                    1.800.000đ
                  </p>
                  <button className="border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white ">
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="btn-next mt-4">
                <button
                  className="border py-2 px-5 bg-gray-500 rounded text-white text-lg inline-block font-semibold hover:bg-amber-600"
                  type="button"
                >
                  1
                </button>
                <button
                  className="border py-2 px-5 bg-gray-500 rounded text-white text-lg inline-block ml-2 font-semibold hover:bg-amber-600"
                  type="button"
                >
                  2
                </button>
                <button
                  className="border py-2 px-5 bg-gray-500 rounded text-white text-lg inline-block ml-2 font-semibold hover:bg-amber-600"
                  type="button"
                >
                  3
                </button>

                <button
                  className="border py-2 px-5 bg-gray-500 rounded text-white text-lg inline-block ml-2 font-semibold hover:bg-amber-600"
                  type="button"
                >
                  Next
                </button>
              </div>
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
export default ProductsList;

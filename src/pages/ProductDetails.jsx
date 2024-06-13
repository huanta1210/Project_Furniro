import Header from "../componments/Header";
import Footer from "../componments/Footer";
import image1 from "../assets/img/product-2.jpeg";
import image6 from "../assets/img/product-6.jpeg";
import image7 from "../assets/img/product-7.jpeg";
import image2 from "../assets/img/product-3.jpeg";
import image3 from "../assets/img/product-4.jpeg";
import image4 from "../assets/img/product-5.jpeg";
import image5 from "../assets/img/product-1.jpeg";

function ProductDetails() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mb-10">
        <div className="mx-44 ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1 h-96">
              <div className="image mb-1">
                <img className="h-16 w-full" src={image1} alt="" />
              </div>
              <div className="image mb-1">
                <img className="h-16 w-full" src={image1} alt="" />
              </div>
              <div className="image mb-1">
                <img className="h-16 w-full" src={image1} alt="" />
              </div>
              <div className="image mb-1">
                <img className="h-16 w-full" src={image1} alt="" />
              </div>
              <div className="image mb-1">
                <img className="h-16 w-full" src={image1} alt="" />
              </div>
            </div>
            <div className="col-span-5">
              <div className="img h-80 w-full">
                <img className="h-96 w-full" src={image1} alt="" />
              </div>
            </div>
            <div className="col-span-6">
              <div className="title">
                <h3 className="text-xl font-semibold">Asgaard sofa</h3>
              </div>
              <div className="mt-2">
                <p className="price text-3xl text-red-500 font-bold">
                  25.000.000đ
                </p>
              </div>
              <div className="rating my-4">
                <div className="review inline-block border-r-2 border-gray-400">
                  <span className="star text-xl text-yellow-400">&#9733;</span>
                  <span className="star text-xl text-yellow-400 pl-1">
                    &#9733;
                  </span>
                  <span className="star text-xl text-yellow-400 pl-1">
                    &#9733;
                  </span>
                  <span className="star text-xl text-yellow-400 pl-1">
                    &#9733;
                  </span>
                  <span className="star text-xl text-yellow-400 pl-1 pr-4">
                    &#9733;
                  </span>
                </div>
                <div className="user-review inline-block ml-4">
                  <p className="text-sm text-gray-400 font-semibold">
                    5 Customer Review
                  </p>
                </div>
              </div>

              <div className="product-decription mb-4">
                <p className="text-sm font-semibold">
                  Setting the bar as one of the loudest speakers in its class,
                  the Kilburn is a compact, stout-hearted hero with a
                  well-balanced audio which boasts a clear midrange and extended
                  and extended highs for a sound.
                </p>
              </div>

              <div className="size">
                <p className="text-sm text-gray-400 mb-2 font-semibold">Size</p>
                <div className="flex space-x-4">
                  <label className="flex items-center justify-center relative">
                    <input
                      type="radio"
                      name="size"
                      className="appearance-none w-6 h-6 bg-gray-400 border border-gray-400 rounded flex items-center justify-center checked:bg-blue-500 checked:text-white"
                    />
                    <span className="absolute text-center text-xs text-white w-full">
                      S
                    </span>
                  </label>
                  <label className="flex items-center justify-center relative">
                    <input
                      type="radio"
                      name="size"
                      className="appearance-none w-6 h-6 bg-gray-400 border border-gray-400 rounded flex items-center justify-center checked:bg-blue-500 checked:text-white"
                    />
                    <span className="absolute text-center text-xs text-white w-full">
                      M
                    </span>
                  </label>
                  <label className="flex items-center justify-center relative">
                    <input
                      type="radio"
                      name="size"
                      className="appearance-none w-6 h-6 bg-gray-400 border border-gray-400 rounded flex items-center justify-center checked:bg-blue-500 checked:text-white"
                    />
                    <span className="absolute text-center text-xs text-white w-full">
                      L
                    </span>
                  </label>
                  <label className="flex items-center justify-center relative">
                    <input
                      type="radio"
                      name="size"
                      className="appearance-none w-6 h-6 bg-gray-400 border border-gray-400 rounded flex items-center justify-center checked:bg-blue-500 checked:text-white"
                    />
                    <span className="absolute text-center text-xs text-white w-full">
                      XL
                    </span>
                  </label>
                </div>
              </div>
              <div className="color mt-4">
                <h3 className="text-sm text-gray-400 font-semibold mb-2">
                  Color
                </h3>
                <div className="flex space-x-4">
                  <label className="relative cursor-pointer">
                    <input type="radio" name="color" className="sr-only peer" />
                    <div className="w-8 h-8 rounded-full bg-purple-600 border-2 border-transparent peer-checked:border-purple-600 peer-checked:ring-2 peer-checked:ring-purple-600"></div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input type="radio" name="color" className="sr-only peer" />
                    <div className="w-8 h-8 rounded-full bg-black border-2 border-transparent peer-checked:border-black peer-checked:ring-2 peer-checked:ring-black"></div>
                  </label>
                  <label className="relative cursor-pointer">
                    <input type="radio" name="color" className="sr-only peer" />
                    <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-transparent peer-checked:border-yellow-500 peer-checked:ring-2 peer-checked:ring-yellow-500"></div>
                  </label>
                </div>
              </div>

              <div className="pay mt-4 border-b-2 border-gray-300 mb-1">
                <div className="flex justify-between mb-4">
                  <div className="count border rounded font-semibold border-gray-400">
                    <button className="inline-block pl-2">-</button>
                    <p className="inline-block px-12 py-2">0</p>
                    <button className="inline-block pr-2">+</button>
                  </div>
                  <div className="add-cart border rounded font-semibold border-amber-400">
                    <button className="py-2 px-14 text-amber-400">
                      Add To Cart
                    </button>
                  </div>
                  <div className="compare border rounded font-semibold border-gray-400 ">
                    <button className="py-2 px-14">
                      <span className="pr-2">+</span> Compare
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs mb-1 font-semibold text-gray-300">
                  SKU: <span>SS001</span>
                </p>
                <p className="text-xs mb-1 font-semibold text-gray-300">
                  Category: <span>Sofa</span>
                </p>
                <p className="text-xs mb-1 font-semibold text-gray-300">
                  Tags: <span>Sofa, Chair, Home, Shop</span>
                </p>
              </div>
            </div>
          </div>

          <div className="description mt-8 border-b-2 border-gray-300 pb-2">
            <div className="text-center text-sm font-semibold text-gray-400">
              <button>Description</button>
              <button className="px-20">Additional Infomation</button>
              <button>Reviews [ 5 ]</button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-xs font-medium text-gray-400 leading-normal">
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.{" "}
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </p>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6">
                <img src={image6} alt="" />
              </div>
              <div className="col-span-6">
                <img src={image7} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="main-title text-center">
              <p className="text-3xl font-bold ">Related Products</p>
            </div>
            <div className="product mt-7 ">
              <div className="flex flex-wrap gap-4 justify-between">
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
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
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="">
                    <img className="h-64 w-full" src={image3} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Levisa</p>
                  <p className="description ml-2 text-gray-300 ">
                    Stylish cafe chair
                  </p>
                  <p className="price text-lg text-red-500 font-semibold ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="">
                    <img className="h-64 w-full" src={image4} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Lolito</p>
                  <p className="description ml-2 text-gray-300 ">
                    Luxury big sofa
                  </p>
                  <p className="price text-lg text-red-500 font-semibold ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white">
                    Add to cart
                  </button>
                </div>
                <div className="product w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)]">
                  <a href="">
                    <img className="h-64 w-full" src={image5} alt="" />
                  </a>
                  <p className="title ml-2 font-semibold">Respira</p>
                  <p className="description ml-2 text-gray-300 ">
                    Out door bar table and stool
                  </p>
                  <p className="price text-lg text-red-500 font-semibold ml-2">
                    1.800.000đ
                  </p>
                  <button className="mb-2 border border-yellow-300 rounded text-amber-400 py-2 px-12 ml-2 whitespace-nowrap hover:bg-amber-500 hover:text-white">
                    Add to cart
                  </button>
                </div>
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
export default ProductDetails;

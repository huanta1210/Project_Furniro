import Footer from "../componments/Footer";
import Header from "../componments/Header";
import Banner2 from "../assets/img/banner-3.jpeg";
import Bg from "../assets/img/bg-2.png";

function Contact() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="banner h-4/5 mb-5">
          <img
            style={{ height: "1440px" }}
            className="h-1/5 w-full"
            src={Banner2}
            alt=""
          />
        </div>
        <div className="flex justify-between mb-10 mx-44">
          <div className="text-center">
            <div className=" flex items-center">
              <i className="text-5xl ti ti-map-alt text-amber-500"></i>
              <span className="text-xl font-bold ml-4">ADDRESS</span>
            </div>
            <p className="text-base font-medium ml-16">
              60/850 Đường Láng, Láng <p>Thượng, Đống Đa, Hà Nội</p>
            </p>
          </div>

          <div className="text-center">
            <div className=" flex items-center">
              <i className="text-5xl ti ti-email text-amber-500"></i>

              <span className="text-xl font-bold ml-4">CONTACT DETAILS</span>
            </div>
            <p className="text-base font-medium ml-4">info@furniro.com</p>
            <p className="text-lg text-gray-500 font-semibold ml-3 py-1">
              043583439856
            </p>
          </div>
          <div className="text-center">
            <div className=" flex items-center">
              <i className="text-5xl ti ti-sharethis-alt text-amber-500"></i>
              <span className="text-xl font-bold ml-4">SOCIAL NETWORKS</span>
            </div>
            <span className="ml-16">
              <i className="ti ti-instagram text-2xl text-pink-400"></i>
            </span>
            <span className="pl-6">
              <i className="ti ti-youtube text-2xl text-red-500"></i>
            </span>
            <span className="pl-6">
              <i className="ti ti-twitter text-2xl text-blue-500"></i>
            </span>
            <span className="pl-6">
              <i className="fa-brands fa-square-facebook text-2xl text-blue-700"></i>
            </span>
            <span className="pl-6">
              <i className="fa-brands fa-tiktok text-2xl"></i>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-6" style={{ height: "600px" }}>
            <img
              className="w-full"
              style={{ height: "600px" }}
              src={Bg}
              alt=""
            />
          </div>
          <div className="col-span-6 bg-gray-100">
            <div className="ml-9 mt-20 mb-8">
              <h5 className="text-xl font-semibold">CONTACT</h5>
              <h1 className="text-4xl font-bold py-4">CONNECT WITH US NOW</h1>
            </div>
            <div className="ml-9">
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full border-b-2 py-3 bg-gray-100  border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="w-full border-b-2 py-3 bg-gray-100 border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border-b-2 py-3 bg-gray-100 border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full border-b-2 py-3 bg-gray-100 border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mt-4">
                  <input
                    name="message"
                    placeholder="Message"
                    className="w-full border-b-2 py-3 bg-gray-100 border-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="border py-2 px-5 bg-amber-500 rounded-sm hover:bg-white hover:transition 1s "
                  >
                    <span className="ml-2 text-white hover:text-slate-900 ">
                      <i className="ti ti-location-arrow text-sm font-semibold">
                        {" "}
                        <span className="text-sm font-semibold">
                          Send Information
                        </span>
                      </i>
                    </span>
                  </button>
                </div>
              </form>
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
export default Contact;

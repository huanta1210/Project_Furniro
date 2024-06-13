import Footer from "../componments/Footer";
import Header from "../componments/Header";
import Banner from "../assets/img/banner-2.jpeg";
import BackGround from "../assets/img/backGround.jpeg";
import About1 from "../assets/img/about-1.jpeg";
import About2 from "../assets/img/about-2.jpeg";
import About3 from "../assets/img/about-3.jpeg";
import About4 from "../assets/img/about-4.jpeg";

function About() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="banner h-4/5">
          <img className="h-1/5 w-full" src={Banner} alt="" />
        </div>
        <div className="mx-44 my-10">
          <div className="flex justify-between mb-10">
            <div className="text-center">
              <i className="text-5xl ti ti-save-alt text-amber-500"></i>
              <h2 className="font-bold text-2xl my-2">Our Mission</h2>
              <p className="text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div className="text-center mx-1">
              <i className="text-5xl ti ti-pinterest-alt text-amber-500"></i>
              <h2 className="font-bold text-2xl my-2">Our Vision</h2>
              <p className="text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div className="text-center">
              <i className="text-5xl ti ti-joomla text-amber-500"></i>
              <h2 className="font-bold text-2xl my-2">Our Values</h2>
              <p className="text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-6 mr-3">
              <img className="w-full" src={BackGround} alt="" />
            </div>
            <div className="col-span-6 ml-3">
              <h3 className="my-4 font-bold text-3xl">About Furniro Company</h3>
              <p className="text-base font-medium mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-base font-medium mt-4">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center my-8">
              We Create Natural Wood Furniture <p>As Well As High-Quality</p>
            </h3>
            <div className="flex flex-wrap gap-4 justify-between">
              <div className="w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <img className="h-80 w-full" src={About1} alt="" />
                <p className="absolute left-0 bottom-0 pl-3 pb-3 text-white text-sm font-semibold ">
                  FLOORING
                </p>
              </div>

              <div className="w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <img className="h-80 w-full" src={About2} alt="" />
                <p className="absolute left-0 bottom-0 pl-3 pb-3 text-white text-sm font-semibold ">
                  REFINISHING
                </p>
              </div>

              <div className="w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <img className="h-80 w-full" src={About3} alt="" />
                <p className="absolute left-0 bottom-0 pl-3 pb-3 text-white text-sm font-semibold ">
                  INSTALLATION
                </p>
              </div>

              <div className="w-56 bg-gray-50 flex-grow-0 flex-shrink-0 w-[calc(25%-1rem)] relative">
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <img className="h-80 w-full" src={About4} alt="" />
                <p className="absolute left-0 bottom-0 pl-3 pb-3 text-white text-sm font-semibold ">
                  WARNING THE FLOOR
                </p>
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
export default About;

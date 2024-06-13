import Header from "../../componments/Header";
import Footer from "../../componments/Footer";

function Login() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mx-96 main-login">
        <div className="login flex flex-col items-center justify-center mt-24 mr-12">
          <div className="login-title text-center">
            <h1 className="text-4xl text-black">Login to your account</h1>
            <div className="login-platform mt-6">
              <div className="login-facebook border p-2 bg-blue-800 inline-block mr-6">
                <a className="text-white flex items-center" href="#">
                  <i className="ti ti-facebook pr-3 text-lg border-r-2"></i>
                  <span className="mx-4 text-sm">Facebook</span>
                </a>
              </div>

              <div className="login-facebook border p-2 bg-orange-600 inline-block mr-6">
                <a className="text-white flex items-center" href="#">
                  <i className="ti ti-google pr-3 text-lg border-r-2"></i>
                  <span className="mx-7 text-sm">Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="login-form my-10">
          <div>
            <form>
              <div className="form-group mb-8">
                <label className="text-lg text-black" htmlFor="email">
                  Email:<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full py-3 mt-2 rounded-md border-gray-300 border outline-none pl-3 focus:border-lime-600"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="form-group mb-8">
                <label className="text-lg text-black" htmlFor="password">
                  Password:<span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full py-3 mt-2 rounded-md border-gray-300 border outline-none pl-3 focus:border-lime-600"
                  type="text"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                />
              </div>

              <div className="form-group text-center">
                <button
                  className="btn-submit border border-black py-3 px-28 text-lg text-white bg-black font-medium hover:bg-white hover:text-black"
                  type="submit"
                >
                  Login
                </button>
                <p className="text-sm text-red-500 my-6">
                  <a href="/login_recover">Forgot password ?</a>
                </p>
                <p className="text-sm">
                  Do you already have an account? Register{" "}
                  <a className="text-red-500" href="/register">
                    Here.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default Login;

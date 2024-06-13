import Header from "../../componments/Header";
import Footer from "../../componments/Footer";
import image1 from "../../assets/img/product-5.jpeg";

function Cart() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="mb-16">
        <div className="mx-44 mt-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-9">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold tracking-wider">
                        Quantity
                      </th>
                      <th className="px-6 py-3 bg-gray-100 text-left text-sm leading-4 font-semibold tracking-wider">
                        Subtotal
                      </th>
                      <th className="px-6 py-3 bg-gray-100"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="pr-6 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <img className="h-14 w-14" src={image1} alt="" />
                          <span className="ml-4 text-sm font-semibold text-gray-400">
                            Asgaarad
                          </span>
                        </div>
                      </td>
                      <td className="pr-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-semibold">
                        25.000.000đ
                      </td>
                      <td className="pl-4 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <button className="px-2 py-1">-</button>
                          <p className="px-3 py-1">0</p>
                          <button className="px-2 py-1">+</button>
                        </div>
                      </td>
                      <td className="pl-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-semibold">
                        25.000.000đ
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xl text-red-500">
                        <i className="ti ti-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <img className="h-14 w-14" src={image1} alt="" />
                          <span className="ml-4 text-sm font-semibold text-gray-400">
                            Asgaarad
                          </span>
                        </div>
                      </td>
                      <td className="pr-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-semibold">
                        25.000.000đ
                      </td>
                      <td className="pl-4 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <button className="px-2 py-1">-</button>
                          <p className="px-3 py-1">0</p>
                          <button className="px-2 py-1">+</button>
                        </div>
                      </td>
                      <td className="pl-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-semibold">
                        25.000.000đ
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xl text-red-500">
                        <i className="ti ti-trash"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="pr-6 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <img className="h-14 w-14" src={image1} alt="" />
                          <span className="ml-4 text-sm font-semibold text-gray-400">
                            Asgaarad
                          </span>
                        </div>
                      </td>
                      <td className="pr-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-semibold">
                        25.000.000đ
                      </td>
                      <td className="pl-4 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <button className="px-2 py-1">-</button>
                          <p className="px-3 py-1">0</p>
                          <button className="px-2 py-1">+</button>
                        </div>
                      </td>
                      <td className="pl-4 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 font-semibold">
                        25.000.000đ
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-xl text-red-500">
                        <i className="ti ti-trash"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-span-3">
              <div className="w-full bg-gray-100">
                <div className="cart-total mx-6">
                  <div className=" border-b-2 border-gray-200">
                    <h1 className="text-2xl font-bold py-3">Cart Total</h1>
                  </div>
                  <div className="my-3">
                    <p className="font-semibold text-sm inline-block">
                      Subtotal
                    </p>
                    <p className="price text-sm text-gray-300 font-semibold float-right">
                      25.000.000đ
                    </p>
                  </div>

                  <div className="total">
                    <p className="font-semibold text-sm inline-block">Total</p>
                    <p className="price text-lg text-red-500 font-bold float-right">
                      25.000.000đ
                    </p>
                  </div>
                  <a href="/cart/payments">
                    <button
                      className="border-2 py-2 px-16 ml-2 my-6 border-amber-400 rounded text-amber-400 font-semibold "
                      type="button"
                    >
                      CheckOut
                    </button>
                  </a>
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

export default Cart;

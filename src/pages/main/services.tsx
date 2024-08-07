import Link from "next/link";
import React from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

const Services = () => {
  return (
    <section className="py-5">
      <div className="max-w-7xl px-3 mx-auto">
        <h1 className="md:text-[30px] leading-10 text-[25px] text-black text-center font-semibold">
          Xizmatlar va narxlar
        </h1>
        <p className="md:text-[17px] leading-[30px] text-[15px] text-[#666] text-center">
          O'zingizga ma'qul tarifni tanlang
        </p>
        <div className="table-pr w-[85%] mx-auto py-5">
          <table className="table w-full border-collapse">
            <thead>
              <tr>
                <th className="p-5 w-[25%] text-left font-bold border border-solid border-[#ddd]">
                  Features
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Daily
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Monthly
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Annually
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  10-hours training
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Coffee and lunch
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Course files to your email in PDF
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Individual consulting
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Certificate
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[85%] mx-auto py-5">
          <table className=" table w-full border-collapse">
            <thead>
              <tr>
                <th className="p-5 w-[25%] text-left font-bold border border-solid border-[#ddd]">
                  Features
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Daily
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Monthly
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Annually
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  10-hours training
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Coffee and lunch
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Course files to your email in PDF
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Individual consulting
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Certificate
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[85%] mx-auto py-5">
          <table className="table w-full border-collapse">
            <thead>
              <tr>
                <th className="p-5 w-[25%] text-left font-bold border border-solid border-[#ddd]">
                  Features
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Daily
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Monthly
                </th>
                <th className="p-5 w-[25%] text-center font-bold border border-solid border-[#ddd]">
                  Annually
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  10-hours training
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Coffee and lunch
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Course files to your email in PDF
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Individual consulting
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-left w-[25%]">
                  Certificate
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCloseCircle className="text-red-600 mx-auto text-[18px]" />
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <IoIosCheckmarkCircle className="text-[#4CAF50] mx-auto text-[18px]" />
                </td>
              </tr>
              <tr>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]"></td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
                <td className="border border-solid border-[#ddd] p-5 text-center w-[25%]">
                  <Link
                    href={"#contact"}
                    className="inline-block bg-green-700 border-0 rounded-[5px] transition-all duration-[0.3s] hover:opacity-90 text-white"
                  >
                    <button className="py-[15px] px-10 text-[17px]">
                      Ko'proq
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Services;

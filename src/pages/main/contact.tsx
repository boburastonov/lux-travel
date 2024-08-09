"use client";
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone, FaRegEnvelope } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Contact = () => {
  // const [activeButton, setActiveButton] = useState("button1");
  const [inputValue, setInputValue] = useState<string>("");
  const [numberValue, setNumberValue] = useState<string>("");
  const [areaValue, setAreaValue] = useState<string>("");

  const messageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const sendMessage = (e: React.FormEvent) => {
    console.log(numberValue,"numberValue")
    e.preventDefault();
    if (!numberValue && !inputValue) {
      toast.error("Please fill in both fields.");
      return;
    }
    const token = "7229813830:AAFlDf6El0NDlFH5wod5x8vT1jV-IJhEKU8";
    const chat_id = "5730538728";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Name: ${inputValue} \nPhone Number: ${numberValue} \nComment: ${areaValue}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        setInputValue("");
        setNumberValue("");
        setAreaValue("");
        toast.success("Your data has been sent successfully!");
      })
      .catch((err) => {
        toast.error("Your data has not been sent successfully!");
        console.log("Yuborishda xatolik,", err);
      });
  };
  return (
    <section id="contact" className="md:py-10 py-5 px-5 bg-[#f9f9f9]">
      <div className="max-w-7xl px-3 mx-auto">
        <div className="md:w-[80%] w-[95%] flex lg:flex-row flex-col items-center justify-center mx-auto">
          <div className="lg:w-[50%] lg:m-0 mb-6 w-full bg-black lg:rounded-tl-lg lg:rounded-bl-lg rounded-lg md:p-[30px] p-4 shadow-[0_2px_4px_#0000001a]">
            <h2 className="text-[29px] fontSemibo'ld m'-5 text-white">
              Savollaringiz qoldimi?
            </h2>
            <form className="flex flex-col gap-[15px]">
              <input
                className="w-full border-0 p-[10px] my-[10px] text-[16px] bg-transparent border-b border-solid border-white text-white"
                type="text"
                placeholder="Ismingiz"
                required
                value={inputValue}
                onChange={messageHandler}
                minLength={3}
              />
              <input
                className="w-full border-0 p-[10px] my-[10px] text-[16px] bg-transparent border-b border-solid border-white text-white"
                type="number"
                placeholder="+998"
                required
                value={numberValue}
                 onChange={(e) => setNumberValue(e?.target?.value)}
                minLength={9}
              />
              <textarea
                className="w-full border-0 p-[10px] my-[10px] text-[16px] bg-transparent border-b border-solid border-white text-white min-h-[100px]"
                placeholder="Savolingiz..."
                value={areaValue}
                onChange={(e)=>setAreaValue(e.target.value)}
              />
              <label className="flex items-center gap-5">
                <input className="w-5" type="checkbox" />
                <p className="text-[14px] text-white ">
                  Offerta shartlariga roziman
                </p>
              </label>
              <button
                onClick={sendMessage}
                className="lg:mr-auto mx-auto bg-orange-400 text-white border-0 rounded-sm py-[10px] px-5 text-base cursor-pointer transition-all duration-[0.3s] hover:shadow-[1px_1px_5px_5px_#ffffff6c]"
              >
                Yuborish
              </button>
            </form>
            <ToastContainer />
          </div>
          <div className="lg:w-[50%] w-full bg-white lg:pt-[58px] pt-0 md:px-[30px] px-3 shadow-[0_2px_4px_#0000001a] rounded-tr-lg rounded-br-lg">
            <p className="text-[17px] py-[5px] font-normal lg:text-left text-center">
              Mutaxassislarimizdan barcha savollaringizga javob olmoqchi
              bo’lsangiz quyidagi manzilga tashrif buyuring yoki bizga
              qo’ng’iroq qiling
            </p>
            <div className="rounded-lg">
              <iframe
                src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&amp;z=12"
                width="100%"
                height="200px"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </div>
            <ul className="p-0 m-0 list-none">
              <li className="flex items-center gap-[10px] py-[5px]">
                <IoLocationSharp />
                <span className="text-[17px] py-[5px] font-normal">
                  Toshkent shahar, Manzil ko’chasi 1a{" "}
                </span>
              </li>
              <li className="flex items-center gap-[10px] py-[5px]">
                <FaPhone />
                <span className="text-[17px] py-[5px] font-normal">
                  +9981234567
                </span>
              </li>
              <li className="flex items-center gap-[10px] py-[5px]">
                <FaRegEnvelope />
                <span className="text-[17px] py-[5px] font-normal">
                  kompaniyanomi@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

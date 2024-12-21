import React from "react";
import mapLogo from "./map-logo.jpg";
import watermark from "./flower-logo.png";
import person from "./person.png";
import sig from "./sig.png";
import muddron from "./muddron.png";
import sign from "./sign.jpg";
import barcode from "./barcode.gif";

const NidCard = () => {
  return (
    <div className="myFont m-8 w-full mx-auto bg-white p-8">
      {/* Banner  */}
      <div className="flex gap-4">
        {/* left side card  */}
        <div className="z-50 border-[1.999px] w-[323.5px] h-[205px] border-gray-800 bg-white text-black relative">
          {/* Topper  */}
          <div className="flex justify-between p-1 border-b-[1.999px] border-gray-800 h-[60px]">
            <img src={mapLogo} className="size-[38px]" alt="map" />
            <div className="text-center w-full p-0">
              <div className="text-[20px] ">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</div>
              <div className="text-[11px] -mt-1.5 text-green-600">
                Government of the People's Republic of Bangladesh
              </div>
              <div className="-mt-1.5">
                <span className="text-red-600 text-[10px]">
                  National ID Card
                </span>{" "}
                / <span className="text-[11px] ">জাতীয় পিরচয় পত্র </span>
              </div>
            </div>
          </div>
          {/* watermark  */}
          <img
            src={watermark}
            className="absolute inset-x-0 mt-4 mx-auto z-10 flex items-start justify-center scale-125"
            alt="watermark"
          />
          {/* Bottom bar  */}
          <div className="relative h-[145px] flex z-50">
            {/* left image and sig  */}
            <div className="flex flex-col gap-2">
              {/* image and sige */}
              <img src={person} className="w-[68px] h-[78px]" alt="person" />
              <img src={sig} className="w-[68px] h-auto" alt="person" />
            </div>
            {/* Right information  */}
            <div className="p-1">
              <div className="text-[16px] space-x-4 font-semibold">
                <span>নাম:</span> <span>রুজিনা বেগম</span>
              </div>
              <div className="text-[16px] mt-1.5 space-x-4 ">
                <span>Name:</span>{" "}
                <span className="uppercase">Riujina Begum</span>
              </div>
              <div className="text-[14px] space-x-4 ">
                <span>পিতা:</span> <span>মেঃ আবুল কাশেম</span>
              </div>
              <div className="text-[14px] space-x-4 ">
                <span>মাতা:</span> <span>পারুল বেগম</span>
              </div>
              <div className="text-[14px]  ">
                <span>Date of Birth:</span>{" "}
                <span className="text-red-600"> 01 Jan 1988</span>
              </div>
              <div className="text-[14px]  ">
                <span>ID NO:</span>{" "}
                <span className="text-red-600 font-semibold">6427347916</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side card  */}
        <div className=" border-[1.999px] w-[323.5px] h-[205px] border-gray-800 bg-white text-black">
          {/* topbar  */}
          <div className="border-b-[1.999px] border-gray-800 p-1">
            <p className="text-[8.5px] text-center">
              এই কার্ডটি গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের সম্পত্তি। কার্ডটি
              ব্যবহারকারী ব্যতীত অন্য কোথাও পাওয়া গেলে নিকটস্থ পোস্ট অফিসে জমা
              দেবার জন্য অনুরোধ করা হলো।
            </p>
          </div>
          {/* midlebar  */}
          <div className="border-b-[1.999px] border-gray-800 p-1 flex flex-col justify-between gap-2">
            <p className="text-[8.5px] text-center">
              ঠিকানা: বাসা/হোল্ডিং: ত্তসমাম চেয়ারম্যানের বাড়ী, গ্রাম/রাস্তা:
              আবদুল আলী নগর ডি টি রাস্তা, কু লানপাড়া, ডাকঘর: কাষ্টস একাডেমি -
              ৪২১৯, পাহাড়তলী, চট্টগ্রাম সিটি কর্পোরেশন পাহাড়তলী ওয়ার্ড নং-১০,
              চট্টগ্রাম
            </p>
            <p className="text-[8.5px] text-center flex justify-between -mb-1.5">
              <span>
                রক্তের গ্রুপ / Blood Group:{" "}
                <span className="font-semibold text-red-600">A+</span>
              </span>
              <span>
                জন্মস্থান:
                <span>চট্টগ্রাম</span>
              </span>
              <img
                src={muddron}
                className="h-3 w-auto translate-x-1"
                alt="muddron"
              />
            </p>
          </div>
          {/* Bottom Bar  */}
          <div className=" p-1 flex flex-col justify-between gap-2">
            <img src={sign} alt="sign" className="w-20 h-auto p-1 ml-1" />
            <p className="text-[8.5px] -mt-2 text-center flex justify-between">
              <span>প্রদানকারী কর্তৃপক্ষের স্বাক্ষর </span>
              <span>
                প্রদানের তারিখ: <span>১৫/০১/২০২১</span>
              </span>
            </p>
            <img src={barcode} alt="barcode" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NidCard;

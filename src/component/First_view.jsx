import React from 'react';

import image1 from './image/洗車のサブスク2.webp';
import ReactGA from "react-ga4";
import tukiiti from './image/tukiiti.webp';
import tukiiti_big from './image/tukiiti_big.webp';
import price_img from './image/price_img.webp';



function First_view() {
  return (

    <div className=" bg-gray-100">
      <div id="first" className="relative h-[500px] mt-16 overflow-hidden sm:h-[700px]">
        {/* Background Image */}
        <picture>
          <img
            loading="eager"
            src={image1}
            alt="Luxury Car Wash"
            className="w-full max-w-[1800px] h-[500px] object-cover sm:w-full sm:max-w-[2200px] sm:h-[700px]"
          />
        </picture>
  
        {/* Overlay Image 1 */}
        <div className="absolute inset-0 flex justify-center items-center">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={tukiiti}
            /> 
            <img
              src={tukiiti_big}
              alt="Luxury Vehicle"
              className="w-[400px] h-[400px] sm:w-[750px] sm:h-[750px] object-contain"
              style={{ top: '15%', transform: 'translateY(-30%)' }}
            />
          </picture>
        </div>
  
        {/* Overlay Image 2 */}
        <div className="absolute inset-0 flex justify-center sm:justify-start items-center">
          <img
            src={price_img}
            alt="Premium Service"
            className="w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] object-contain relative sm:translate-x-[20%]"
            style={{
              top: '15%',
              transform: 'translateY(-5%)',
            }}
          />
        </div>
  
        {/* AppRedirectButton positioning - centered */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="w-full max-w-xs px-4">
            <AppRedirectButton className="w-full whitespace-nowrap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default First_view;

const AppRedirectButton = () => {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS端末の場合
      ReactGA.event({
        category: "App Redirect",
        action: "download click",
        label: "app Redirect", // iOS向けのリンク
      });
      window.location.href = "https://apps.apple.com/jp/app/wash-wallet-app/id1499473412";
    } else {
      // Android端末の場合
      ReactGA.event({
        category: "App Redirect",
        action: "download click", 
        label: "app Redirect", 
      });
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.mkseiko.washwalletapp";
    }
  };

  return (
    <button
      onClick={handleRedirect}
      className="bg_cherry_button hover:bg_cherry2 text-white font-bold py-4 px-8 rounded-full text-lg"
    >
      wash WALLETをダウンロード
    </button>
  );
};

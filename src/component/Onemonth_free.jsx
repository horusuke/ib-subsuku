import React from 'react'

import free_text from './image/free_text.webp'
import ReactGA from "react-ga4";


function onemonth_free() {
  return (
<>
  <div className="bg_pattern Diagonal_v2"></div>
  <div className="section">
    <div className="relative w-full overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-100 opacity-80 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOEgxOHYxOGgxOFYxOHptLS45ODcgMHYxNi4wMTNoLTE2LjAxM1YxOGgxNi4wMTN6IiBmaWxsPSIjNjM3MGRiIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] z-10"></div>
      </div>

      {/* Promotional content */}
      <div className="relative z-20 flex flex-col items-center justify-center stripe">
        <div className="w-full px-6 py-16 bg-white bg-opacity-90 shadow-xl transform transition-all duration-500 hover:shadow-2xl stripe">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {/* Image */}
            <img
              src={free_text}
              alt="キャンペーン画像"
              className="w-64 h-auto"
            />

            {/* Button */}
            {/* <button
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl 
                          font-medium tracking-wide text-white bg-blue-600 rounded-full overflow-hidden
                          shadow-lg transition-all duration-300 ease-out
                          hover:bg-indigo-700 hover:scale-105 hover:shadow-indigo-200
                          active:scale-95 active:bg-indigo-800
                          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => console.log('Free trial button clicked')}
            >
              <span className="relative z-10">１カ月無料で利用する</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 z-0 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></span>
            </button> */}
            <AppRedirectButton/>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default onemonth_free



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
      className="group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl 
                          font-medium tracking-wide text-white bg-blue-600 rounded-full overflow-hidden
                          shadow-lg transition-all duration-300 ease-out
                          hover:bg-indigo-700 hover:scale-105 hover:shadow-indigo-200
                          "
    >
      一カ月間無料で利用する
    </button>
  );
};
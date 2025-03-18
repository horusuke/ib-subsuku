import { ArrowRight, User } from 'lucide-react'
import React from 'react'
import human from './image/26044732__1_-removebg-preview (1).png'

function Regist_button() {
  return (
    <div className="bg_cherry2 pt-8 pb-8 ">
    {/* <button 
      className="group w-full sm:w-auto mx-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
      onClick={() => window.location.href = '#registration'}
    >
      <span className="text-lg cherry">今すぐ登録する</span>
      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 cherry" />
    </button> */}
    <AppRedirectButton/>
  </div>
  )
}

export default Regist_button

const AppRedirectButton = () => {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS端末の場合
      window.location.href = "https://apps.apple.com/jp/app/wash-wallet-app/id1499473412";
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.mkseiko.washwalletapp";
    }
  };

  return (
    <button 
    className="cherry_button group w-full sm:w-auto mx-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
    onClick={handleRedirect}
    >
      <span className="text-lg cherry">wash WALLETをダウンロード</span>
      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 cherry" />
    </button>
  );
};
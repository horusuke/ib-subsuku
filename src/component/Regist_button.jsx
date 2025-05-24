import { ArrowRight } from 'lucide-react';
import React from 'react';

function Regist_button() {
  return (
    <div className="bg_cherry2 pt-8 pb-8 px-4 sm:px-0">
      <AppRedirectButton />
    </div>
  );
}

export default Regist_button;

const AppRedirectButton = () => {
  const handleRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS端末の場合
      window.location.href = "https://apps.apple.com/jp/app/wash-wallet-app/id1499473412";
      setTimeout(() => window.location.href, 100);
    } else {
      window.location.href = "https://play.google.com/store/apps/details?id=com.mkseiko.washwalletapp";
      setTimeout(() => window.location.href, 100);
    }
  };

  return (
    <button 
      className="cherry_button group w-[90%] sm:w-auto mx-auto flex items-center justify-center space-x-2 px-8 py-4 bg-white text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
      onClick={handleRedirect}
    >
      <span className="text-lg cherry">wash WALLETをダウンロード</span>
      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200 cherry" />
    </button>
  );
};
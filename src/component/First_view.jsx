import React from 'react';

import image1 from './image/洗車のサブスク2.webp';

function First_view() {
  return (
    <div id="first" className="relative h-[500px] mt-16 overflow-hidden sm:h-[700px]">
      <img
      loading="eager"
        src={image1}
        alt="高級車の洗車"
        className="w-full max-w-[1800px] h-[500px] object-cover sm:w-full sm:max-w-[2200px] sm:h-[700px]"
        />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h3 className="text-4xl sm:text-7xl font-bold mb-6 tracking-wide shadow-lg text-center">
            <span className="sky">もこもこ</span>泡洗車<br />
          </h3>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center">
            <span className="sky">月々定額</span>で洗車し放題！
            {/* <span className="text-orange-600">2200円</span> ~ */}
          </h1>
          <h3 className="text-3xl sm:text-5xl font-bold mb-6 text-center">
            一カ月 
            <span className="cherry text-5xl sm:text-7xl font-extrabold underline shadow-lg">
              2200円～
            </span>
            <br />
          </h3>
          <AppRedirectButton />
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
      window.location.href = "https://apps.apple.com/jp/app/wash-wallet-app/id1499473412";
    } else {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.mkseiko.washwalletapp";
    }
  };

  return (
    <button
      onClick={handleRedirect}
      className="bg_cherry_button hover:bg_cherry2 text-white font-bold py-4 px-8 rounded-full text-lg "
    >
      wash WALLETをダウンロード
    </button>
  );
};

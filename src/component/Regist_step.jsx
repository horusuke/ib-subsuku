import React from 'react';
import regist1 from '../component/image/regist1.png';
import regist2 from '../component/image/regist2.png';
import regist3 from '../component/image/regist3.png';
import regist4 from '../component/image/regist4.png';
import regist5 from '../component/image/regist5.png';
import regist6 from '../component/image/regist6.png';

function Regist_step() {
  const steps = [
    {
      number: "01",
      title: "Wash WALLET アプリをダウンロード",
      description: (
        <>
          まずはアプリをダウンロードし、起動後に新規登録ボタンをタップして、
          次のステップに進みましょう。
          <div className="mt-4">
            <AppRedirectButton />
          </div>
        </>
      ),
      image: regist1,
    },
    {
      number: "02",
      title: "チュートリアルを読む",
      description: "アプリの使い方を学ぶためにチュートリアルを読み、wash WaLLETについて理解を深めましょう。",
      image: regist2,
    },
    {
      number: "03",
      title: "登録情報を入力",
      description: "アカウントを作成するために、必要な個人情報を入力しましょう。",
      image: regist3,
    },
    {
      number: "04",
      title: "利用規約と個人情報保護方針を確認し、同意",
      description: "アプリの利用規約と個人情報保護方針を確認し、同意することで次のステップに進みます。",
      image: regist4,
    },
    {
      number: "05",
      title: "情報入力完了後「確認する」をタップ",
      description: "入力した情報を確認し、内容に間違いがなければ「確認する」をタップして、登録を完了させましょう。",
      image: regist5,
    },
    {
      number: "06",
      title: "届いたメールをスマホで開き本登録を完了させる。",
      description: "登録完了の確認メールが届くので、スマホで開いて、本登録を完了させましょう。",
      image: regist6,
    },
  ];

  return (
    <div className="bg_mint py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          登録方法
        </h2>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* 縦線の背景 */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg_sky transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg p-6 shadow-md relative"
            >
              {/* 画像エリア */}
              <div className={`w-full md:w-1/3 flex justify-center ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <div className="w-full max-w-[180px] aspect-[1.7/2.8]">
                  <img
                  loading="lazy"
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* テキストエリア */}
              <div className="w-full md:w-2/3">
                <div className="text-4xl font-bold cherry mb-3">{step.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                )}
              </div>

              {/* 縦線の接続点 */}
              {index < steps.length - 1 && (
                <div className="absolute top-full left-1/2 w-[2px] h-6 bg_sky transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Regist_step;

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
      className="bg_cherry text-white px-6 py-2 rounded-full font-medium hover:bg_cherry2 transform hover:scale-105 transition-all duration-200 shadow-lg"
      >
      Wash WALLETをダウンロード
    </button>
  );
};

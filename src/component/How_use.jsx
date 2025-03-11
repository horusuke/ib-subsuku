import React from 'react';
import buy1 from '../component/image/buy1.png';
import buy2 from '../component/image/buy2.png';
import buy3 from '../component/image/buy3.png';
import buy4 from '../component/image/buy4.png';
import buy5 from '../component/image/buy5.png';
import buy6 from '../component/image/buy6.png';

function buy_step() {
  const steps = [
      {
        number: "01",
        title: "店舗を探す",
        description: "アプリ内の店舗一覧から、洗車を依頼する店舗を見つけましょう。",
        image: buy1
      },
      {
        number: "02",
        title: "定額チケットを選ぶ",
        description: "提供されている定額チケットの中から、自分に合ったプランを選び、カートのボタンをタップして購入手続きに進みましょう。",
        image: buy2
      },
      {
        number: "03",
        title: "レジへ進む",
        description: "購入するチケットの内容と注意点を確認し、問題がなければ「レジへ進む」ボタンをタップして次に進みましょう。",
        image: buy3
      },
      {
        number: "04",
        title: "クレジットカード情報を入力",
        description: "支払いのために、クレジットカード情報を入力します。※情報を登録していない場合にのみ入力が必要です。",
        image: buy4
      },
      {
        number: "05",
        title: "自動車登録番号を入力",
        description: "洗車を依頼する車両の自動車登録番号を入力します。",
        image: buy5
      },
      {
        number: "06",
        title: "購入する",
        description: "購入内容を再度確認し、問題がなければ「購入する」ボタンをタップして、購入を確定しましょう。",
        image: buy6
      }
    
  ];

  return (
    <div className="bg_sky py-12"> {/* 背景色を青に変更 */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          定額チケット購入方法
        </h2>

        <div className="max-w-4xl mx-auto space-y-12 relative">
          {/* 縦線の背景 */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg_mint transform -translate-x-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg p-6 shadow-md relative"
            >
              {/* 画像エリア */}
              <div className={`w-full md:w-1/3 flex justify-center ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                <div className="w-full max-w-[180px] aspect-[1.7/3.05]">
                  <img
                    src={step.image}
                    alt={`Step ${step.number}`}
                    className="rounded-lg shadow-md w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* テキストエリア */}
              <div className="w-full md:w-2/3">
                <div className="text-4xl font-bold cherry mb-3 text-left">
                  {step.number}
                </div>
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
                <div className="absolute top-full left-1/2 w-[2px] h-6 bg_mint transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default buy_step;

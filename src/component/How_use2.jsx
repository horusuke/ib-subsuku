import React from 'react';
import use1 from '../component/image/use1.png';
import use2 from '../component/image/use2.png';
import use3 from '../component/image/use3.png';
import use4 from '../component/image/use4.png';
import use5 from '../component/image/use5.png';
import use6 from '../component/image/use6.png';
import use7 from '../component/image/use7.png';
import use8 from '../component/image/use8.png';
import use9 from '../component/image/use9.png';


function How_use2() {
  const steps = [
    {
      number: "01",
      title: "定額チケットを選択",
      description: "マイページから、利用定額チケットを選択し、次のステップに進みましょう。",
      image: use1
    },
    {
      number: "02",
      title: "使う",
      description: "選択したチケットを利用するために「使う」をタップして、次の手続きを進めます。",
      image: use2
    },
    {
      number: "03",
      title: "店舗を選択",
      description: "チケットを使用する店舗を選択します。近くの店舗や評価の良い店舗を選びましょう。",
      image: use3
    },
    {
      number: "04",
      title: "洗車受付を進める",
      description: "洗車受付を進めていきます。必要な情報を入力しましょう。",
      image: use4
    },
    {
      number: "05",
      title: "追加料金の支払方法の選択",
      description: "もし追加料金が発生した場合、支払方法を選択し、次に進みます。",
      image: use5
    },
    {
      number: "06",
      title: "確定する",
      description: "洗車内容を最終確認し、問題がなければ「確定する」をタップして手続きを完了します。",
      image: use6
    },
    {
      number: "07",
      title: "QRコードを表示",
      description: "マイページに移動し、QRコードを表示させましょう。",
      image: use7
    },
    {
      number: "08",
      title: "QRコードをかざす",
      description: "洗車機前まで行き、表示されたQRコードをかざしましょう。",
      image: use8
    },
    {
      number: "09",
      title: "洗車スタート",
      description: "",
      image: use9
    }
  ]
  

  return (
    <div className="bg_mint py-12"> {/* 背景色を変更 */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          定額チケットの使い方
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
                <div className={`w-full max-w-[180px] ${index === 7 || index === 8 ? 'aspect-square' : 'aspect-[1.7/3.05]'}`}>
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
                <div className="absolute top-full left-1/2 w-[2px] h-6 bg_sky transform -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default How_use2;

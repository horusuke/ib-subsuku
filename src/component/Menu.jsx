import React, { useState } from 'react';
import { ChevronDown, Coffee, Pizza, IceCream, Sandwich } from 'lucide-react';
import silk from './image/シルキーコート.jpg'
import tiara from './image/ティアラコート.jpg'
import mokomoko from './image/もこもこ泡.png'
import under from './image/下部洗浄.png'
import '../App.css'


function Menu() {
  const [openItems, setOpenItems] = useState([]);

  const menuItems = [
    {
      id: 1,
      title: "水洗い",
      description: "コーティング施工車におすすめ。ボディについたほこりや砂を洗い流します。",
      // price: "¥450",
      ammount:'¥500',
    },
    {
      id: 3,
      title: "撥水",
      description: "車をきれいにしたあとに、撥水コートでコーティング。ツヤのあるボディで撥水性、紫外線保護を発揮します。定期的に撥水洗車を行うことで車をきれいな状態に保ちましょう。",
      ammount:'¥900',

    },
    {
      id: 4,
      title: "シルキーコート",
      description: "シルクのような滑らかな手触りと美しい光沢が特徴の高密度ポリマーコーティングです。",
      ammount:'¥1500',
      img:silk,

    },
    {
        id: 5,
        title: "ティアラコート",
        description: "滑水性、光沢および手触りが向上したガラス系コーティングです。硬質な被膜を形成し、汚れや紫外線からボディを守ります。",
        ammount:'¥2200',
        img:tiara,

      }
  ];

  const optionItems = [
    {
      id: 6,
      title: "ボディ高圧ジェット",
      description: "高圧の水流を使用して、車に付着した汚れやホコリを強力に洗い流す方法です。専用の高圧洗浄機を使い、水を高圧で噴射することで、通常の水やスポンジでは落ちにくい汚れを効果的に取り除きます。",
      ammount:'¥200',
    },
    {
      id: 7,
      title: "下回りジェット",
      description: "一体式下部洗浄システム。ブラッシングと同時工程で洗浄ができ、車の下回りやステップなどの裾まわりの汚れを落とします。さらにタイヤとホイールの洗浄も同時に行います。",
      ammount:'¥200',
      img:under,

    },
    {
      id: 8,
      title: "もこもこ泡",
      description: "きめ細かい泡でボディを優しく包み、洗い上げます。車がフワフワの泡で覆われるのでお子様にも人気です。",
      ammount:'¥200',
      img:mokomoko,

    },
    {
      id: 9,
      title: "ていねい洗い",
      description: "ブラッシング回数を１往復増やすことで表面の汚れをしっかり落とします。汚れが気になる方にはピッタリなオプションです。",
      ammount:'¥200',

    }
  ];

  const toggleAccordion = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
<div className="  p-4 sm:p-6 md:p-8 bg_mint">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 ">メニュー</h1>
    <p className='bg_sky w-24 text-white text-lg mt-8 mb-8 rounded-sm text-center'>洗車メニュー</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden h-auto"
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            {/* 左側アイコンとタイトル */}
            <div className="flex items-center gap-3">
              <span className="font-medium text-lg">{item.title}</span>
            </div>
            
            {/* 金額部分 */}
            <span className="font-bold text-3xl  text-right ml-auto cherry">
              {item.ammount}
            </span>

            {/* アコーディオン矢印 */}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openItems.includes(item.id) ? "transform rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(item.id) ? "max-h-[500px]" : "max-h-0"
            }`}
            style={{
              height: openItems.includes(item.id) ? "auto" : "0",
            }}
          >
            {/* 画像部分 */}
            {item.img && (
              <div className="flex justify-center p-4">
                <div className="w-full max-w-[400px] aspect-[6/3] overflow-hidden">
                  <img
                  loading="lazy"
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            )}

            {/* 説明部分 */}
            <div className="p-4 pt-0">
              <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
            </div>
          </div>


        </div>
      ))}
    </div>

    <p className='bg_sky w-24 text-white text-lg mt-8 mb-8 rounded-sm text-center'>オプション</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">

{optionItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden h-auto"
        >
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full p-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            {/* 左側アイコンとタイトル */}
            <div className="flex items-center gap-3">
              <span className="font-medium text-lg">{item.title}</span>
            </div>
            
            {/* 金額部分 */}
            <span className="font-bold text-3xl  text-right ml-auto cherry">
              {item.ammount}
            </span>

            {/* アコーディオン矢印 */}
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                openItems.includes(item.id) ? "transform rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.includes(item.id) ? "max-h-[500px]" : "max-h-0"
            }`}
            style={{
              height: openItems.includes(item.id) ? "auto" : "0",
            }}
          >
            {/* 画像部分 */}
            {item.img && (
              <div className="flex justify-center p-4">
                <div className="w-full max-w-[400px] aspect-[6/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            )}

            {/* 説明部分 */}
            <div className="p-4 pt-0">
              <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
        </div>
  </div>
</div>

  );
}

export default Menu;

import { Check, X } from 'lucide-react'
import React from 'react'

function Price() {
  return (
    <div id='pricing' className="  py-12 px-4 sm:px-6 lg:px-8 bg_sky">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl text-white">
            料金プラン
          </h2>
          <p className="mt-4 text-xl text-white ">
            あなたのニーズに合わせて最適なプランをお選びください
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {/* Basic Plan */}
          <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="mb-6">
              <h3 className="text-lg font-semibold leading-5 text-gray-900">シルバープラン</h3>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-gray-900">¥2,200</span>
                <span className="text-base font-medium text-gray-500">/月</span>
              </p>
            </div>
            <ul className="mb-8 space-y-4 flex-1">
            <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">洗車回数：1回/日</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ガソリン5円引き</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">水洗い</span>
              </li>
              {/* <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">シャンプー</span>
              </li> */}
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">撥水</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-red-500" />
                <span className="ml-3 text-gray-700">シルキーコート</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-red-500" />
                <span className="ml-3 text-gray-700">ティアラコート</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ボディ高圧ジェットスプレー</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-gray-700">下回りジェットスプレー</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-red-500" />
                <span className="ml-3 text-gray-700">もこもこ泡</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-red-500" />
                <span className="ml-3 text-gray-700">ていねい洗い
                </span>
              </li>

            </ul>
            <AppRedirectButton_price_sky/>

          </div>

          {/* Pro Plan */}
          <div className="relative flex flex-col rounded-2xl border-2 border_cherry bg-white p-8 shadow-md transition-all hover:shadow-lg">
            <div className="absolute -top-5 right-0 left-0 mx-auto w-32 rounded-full bg_cherry px-3 py-2 text-sm font-semibold text-white text-center">
              おすすめ！
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold leading-5 text-gray-900">ゴールドプラン</h3>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-gray-900">¥3,300</span>
                <span className="text-base font-medium text-gray-500">/月</span>
              </p>
            </div>
            <ul className="mb-8 space-y-4 flex-1">
            <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">洗車回数：1回/日</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ガソリン6円引き</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">水洗い</span>
              </li>
              {/* <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">シャンプー</span>
              </li> */}
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">撥水</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-gray-700">シルキーコート</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-red-500" />
                <span className="ml-3 text-gray-700">ティアラコート</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ボディ高圧ジェットスプレー</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-gray-700">下回りジェットスプレー</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">もこもこ泡</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-red-500" />
                <span className="ml-3 text-gray-700">ていねい洗い
                </span>
              </li>

            </ul>
            {/* <button className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700">
              登録
            </button> */}
            <AppRedirectButton_price_blue/>
          </div>

          {/* Enterprise Plan */}
          <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg">
            <div className="mb-6">
              <h3 className="text-lg font-semibold leading-5 text-gray-900">プラチナプラン</h3>
              <p className="mt-8">
                <span className="text-4xl font-bold tracking-tight text-gray-900">¥4,400</span>
                <span className="text-base font-medium text-gray-500">/月</span>
              </p>
            </div>
            <ul className="mb-8 space-y-4 flex-1">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">洗車回数：2回/日</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ガソリン10円引き</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">水洗い</span>
              </li>
              {/* <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">シャンプー</span>
              </li> */}
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">撥水</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-gray-700">シルキーコート</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ティアラコート</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ボディ高圧ジェットスプレー</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
              <span className="ml-3 text-gray-700">下回りジェットスプレー</span>
              </li>
              <li className="flex items-center">
              <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">もこもこ泡</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="ml-3 text-gray-700">ていねい洗い</span>
              </li>

            </ul>
            {/* <button className="block w-full rounded-lg bg-blue-50 px-6 py-3 text-center text-sm font-semibold text-blue-600 hover:bg-blue-100">
              登録
            </button> */}
            <AppRedirectButton_price_sky/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price

const AppRedirectButton_price_blue = () => {
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
      className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"    >
      Wash WALLETをダウンロード
    </button>
  );
};

const AppRedirectButton_price_sky = () => {
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
      className="block w-full rounded-lg bg-blue-50 px-6 py-3 text-center text-sm font-semibold text-blue-600 hover:bg-blue-100"
    >
      Wash WALLETをダウンロード
    </button>
  );
};

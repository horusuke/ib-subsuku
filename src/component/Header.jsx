import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import rogo from './image/アイビー石油ロゴ.png';
import '../App.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // メニューを閉じる関数
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* ヘッダー - fixed positionで常に表示 */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* ロゴ */}
            <div className="flex items-center">
              <a href="#first">
                <img 
                  src={rogo} 
                  alt="ロゴ" 
                  className="h-10 w-auto max-w-full object-contain" 
                />
              </a>
            </div>

            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                洗車のサブスクとは
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                ご利用料金
              </a>
              <a href="#locations" className="text-gray-600 hover:text-blue-600 transition-colors">
                対応店舗
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                よくあるご質問
              </a>
              {/* <button
                className="bg_cherry text-white px-6 py-2 rounded-full font-medium hover:bg_cherry2 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                登録
              </button> */}
              <AppRedirectButton/>
            </nav>

            {/* モバイルメニューボタン */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="メニューを開く"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg text-sm">
              <a
                href="#about"
                onClick={closeMenu} // メニューを閉じる
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                洗車のサブスクとは
              </a>
              <a
                href="#pricing"
                onClick={closeMenu} // メニューを閉じる
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                ご利用料金
              </a>
              <a
                href="#locations"
                onClick={closeMenu} // メニューを閉じる
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                対応店舗
              </a>
              <a
                href="#faq"
                onClick={closeMenu} // メニューを閉じる
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                よくあるご質問
              </a>
              {/* <button
                className="w-full mt-2 bg_cherry text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                無料で会員登録
              </button> */}
              <AppRedirectButton_mobile/>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;

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
      wash WALLETをダウンロード
    </button>
  );
};

const AppRedirectButton_mobile = () => {
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
      className="w-full mt-2 bg_cherry text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
      >
      wash WALLETをダウンロード
    </button>
  );
};

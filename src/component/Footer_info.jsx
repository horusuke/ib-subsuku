import React from 'react';

function Footer_info() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              サービス
            </h3>
            <ul className="space-y-2">
            <li>
                <a href="#about" className="hover:text-white transition flex items-center">
                  洗車のサブスクとは？
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition flex items-center">
                  ご利用料金
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition flex items-center">
                  店舗一覧
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              サポート
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-white transition flex items-center">
                  よくあるご質問
                </a>
              </li>
              <li>
                <a href="https://ib.servicestation.jp/contact/" className="hover:text-white transition flex items-center">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              情報
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://ib.servicestation.jp/company/" className="hover:text-white transition flex items-center">
                  会社概要
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} 株式会社アイビー石油
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer_info;
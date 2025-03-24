import React from 'react';
import { Clock, Phone } from 'lucide-react';
import matubashi from './image/matsubashi.png'

const shops = [
  {
    id: 1,
    name: "セルフステーション松橋北SS",
    image: matubashi,
    address: "〒869-0502 熊本県宇城市松橋町松橋789-1",
    hours: "24時間",
    phone: "0964-34-3456"
  }
];

function Store_info() {
  return (
    <div id='locations' className=" bg_sky p-6 pb-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-white mb-8 ">店舗一覧</h1>
        
        <div className="space-y-6">
          {shops.map((shop) => (
            <div 
              key={shop.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex">
                {/* 画像部分 */}
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={shop.image}
                    alt={shop.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* 情報部分 */}
                <div className="p-6 md:w-1/2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {shop.name}
                  </h2>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      {/* <MapPin className="w-5 h-5 mr-2" /> */}
                      <span>{shop.address}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{shop.hours}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>{shop.phone}</span>
                    </div>
                  </div>
                  
                  {/* <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                    詳細を見る
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Store_info;
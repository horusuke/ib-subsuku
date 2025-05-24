import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import matubashi from './image/セルフステーション松橋北.webp'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const shops = [
  {
    id: 1,
    name: "セルフステーション松橋北",
    image: matubashi,
    address: "〒869-0502 熊本県宇城市松橋町松橋789-1",
    hours: "24時間",
    phone: "0964-34-3456"
  }
];

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 32.65541076660156, // 熊本県宇城市松橋町松橋789-1 の緯度
  lng: 130.68141174316406, // 熊本県宇城市松橋町松橋789-1 の経度
};

console.log('読み込み')

const MyGoogleMap = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-100"> {/* マップコンテナの外装スタイル（Tailwind CSS） */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.1552898290656!2d130.67883807615405!3d32.655311490194876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3540890c1e26d6a9%3A0x6235f331c870210b!2zYXBvbGxvc3RhdGlvbiDjgrvjg6vjg5Xmnb7mqYvljJdTU--8iOOCouOCpOODk-ODvOefs-ayue-8iQ!5e0!3m2!1sja!2sjp!4v1745380685812!5m2!1sja!2sjp"
        style={{ width: "100%", height: "450px", border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};



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
                      <MapPin className="w-5 h-5 mr-2" />
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
        <MyGoogleMap/>
      </div>
    </div>
  );
}

export default Store_info;
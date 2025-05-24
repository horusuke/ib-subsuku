// src/Flowchart.js
import React from 'react';
import matsubashi from '../component/image/matsubashi.webp'
import unit from '../component/image/unit.webp'
import machine from '../component/image/洗車機.webp'
import wash_place from '../component/image/wash_place.webp'
import towel from '../component/image/towel.webp'
import towel2 from '../component/image/towel2.webp'
import vacuum_cleaner from '../component/image/vacuum_cleaner.webp'
import mat from '../component/image/mat.webp'




const ItemCard = ({ item }) => {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="flex flex-col">
        <div className="p-6">
        <div className="px-6 pb-6">
          <div className="h-48 overflow-hidden rounded-lg aspect-[4/3] flex justify-center items-center mx-auto">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700"
            />
          </div>
        </div>
          
          <div className="text-gray-600 leading-relaxed flex items-center">
            <div className="inline-flex shrink-0 justify-center bg_cherry text-white rounded-full h-10 w-10 items-center mr-4">
              {item.id}
            </div>
            <div className="flex-1">
              {item.description}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

  const items = [
    {
      id: 1,
      title: "Digital Innovation",
      description: "ガソリンスタンド内に洗車場があります。24時間営業です。",
      imageUrl: matsubashi
    },
    {
      id: 2,
      title: "Sustainable Growth",
      description: "こちらでお好きなメニューをお選びいただけます。",
      imageUrl: unit
    },
    {
      id: 3,
      title: "Customer Experience",
      description: "やわらかい布ブラシで洗いあげます。535本のセンサーがついているので、洗い残しもほとんどありません。",
      imageUrl: machine
    },
    {
      id: 4,
      title: "Market Adaptation",
      description: "屋根付きの拭き上げスペースです。8台分あります。",
      imageUrl: wash_place
    },
    {
      id: 5,
      title: "Talent Cultivation",
      description: "タオルは無料で貸し出しています。",
      imageUrl: towel
    },
    {
      id: 6,
      title: "Strategic Partnerships",
      description: "掃除機は5分100円でご利用できます。",
      imageUrl: vacuum_cleaner
    },
    {
      id: 7,
      title: "Data-Driven Decisions",
      description: "マット洗い機は無料でご利用できます。",
      imageUrl: mat
    }
  ];



const Instore = () => {
    return (
      <div className='bg_mint'>
        <div class="max-w-7xl mx-auto px-6 md:px-12 py-10 ">
            <h2 class="text-3xl font-bold text-center mb-12">洗車の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        </div>
      );
};

export default Instore;
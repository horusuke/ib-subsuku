import React from 'react';
import { Shield, Droplets, Sparkles, Zap } from 'lucide-react';
import sensor from '../component/image/sensor.png'
import blush from '../component/image/blush.png'
import coat from '../component/image/coat.png'
import jet from '../component/image/jet.png'



function FeatureCard({ icon: Icon, title, description, imageUrl }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
        loading="lazy"
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          {/* <Icon className="h-6 w-6 text-blue-600 mr-2" /> */}
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function Machine() {
  const features = [
    {
      icon: Shield,
      title: "535本のセンサー",
      description: "車形を読み取るセンサーの数が535本あるので洗い残しが少なく、完璧な洗浄を実現します。",
      imageUrl: sensor
    },
    {
      icon: Droplets,
      title: "やわらかい布ブラシ",
      description: "ブラシがやわらかい布のため、手洗いしたような繊細で丁寧な仕上がりになります。",
      imageUrl: blush
    },
    {
      icon: Sparkles,
      title: "ティアラコートロイヤル",
      description: "ガラス系のコーティングなのでツヤと水はじきが抜群です！持続期間は3か月と長持ちします。",
      imageUrl: coat
    },
    {
      icon: Zap,
      title: "高圧ジェット",
      description: "高圧ジェットが他の洗車機の威力と比較すると倍近くあり、頑固な汚れも簡単に落とします。",
      imageUrl: jet
    }
  ];

  return (
    <div className=" bg_mint">
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">洗車機について</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
    
      </main>
    </div>
  );
}

export default Machine;

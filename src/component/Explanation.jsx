import { User } from 'lucide-react'
import React from 'react'
import human from './image/26044732__1_-removebg-preview (1).png'

function Explanation() {
  return (
    <div id='about' className="flex flex-col md:flex-row items-center justify-center gap-8 pb-8 pt-8 bg_cherry2">
    <div className="relative">
      <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center">
        <img src={human}/>
      </div>

    </div>
    <div className="text-center md:text-left md:max-w-xl">
  <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
    もこもこ泡洗車とは？<br className="hidden md:inline" />
  </h1>
  <p className="text-lg text-white">
    高圧ジェットと柔らか布であなたの大切な愛車を常に最高できれいな状態を維持します
  </p>
  <p className="text-lg text-white">
    {/* wash WALLET appを用いて洗車を行います。 */}
  </p>
</div>
  </div>
  )
}

export default Explanation
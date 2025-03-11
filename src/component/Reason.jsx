import { Car, Fuel, Sparkle, Timer } from 'lucide-react'
import React from 'react'

function Reason() {
  return (
    <div className="pt-10 pb-10 relative overflow-hidden bg_sky">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#3b82f6_0%,transparent_60%)] opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 lg:text-left text-white">選ばれる4つの理由</h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="text-left"> {/* Changed from text-center sm:text-left to just text-left */}
                  <p className="text-gray-600 text-lg text-white">
                     ・車の洗車に時間がかかって困っていませんか？
                  </p>
                  <p className="text-gray-600 text-lg text-white">
                     ・また、ガソリン代が高くてお悩みではありませんか？
                  </p>
                  <p className="text-gray-600 text-lg text-white">
                     ・さらに、高額なコーティング洗車に手が出しづらいと思っていませんか？
                  </p>
                  <p className="text-gray-600 text-lg text-white">
                     ・そんなお悩みを解決する方法があります。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="w-full aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                <div className="flex flex-col items-center justify-center p-4 sm:p-8 border border-gray-100 bg-gradient-to-br from-blue-50 to-blue-100 group transition-all hover:bg-blue-100">
                  <Car className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform mb-4" />
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-bold mb-2">月々定額で洗車し放題</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 sm:p-8 border border-gray-100 bg-gradient-to-bl from-blue-600 to-blue-700 group transition-all hover:bg-blue-800">
                  <Fuel className="w-16 h-16 text-white group-hover:scale-110 transition-transform mb-4" />
                  <div className="text-center text-white">
                    <h3 className="text-base sm:text-lg font-bold mb-2">ガソリンがお得に給油できる</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 sm:p-8 border border-gray-100 bg-gradient-to-bl from-blue-600 to-blue-700 group transition-all hover:bg-blue-800">
                  <Sparkle className="w-16 h-16 text-white group-hover:scale-110 transition-transform mb-4" />
                  <div className="text-center text-white">
                    <h3 className="text-base sm:text-lg font-bold mb-2">高額コーティング洗車も利用できるので、ずっと車をキレイな状態を保てる</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 sm:p-8 border border-gray-100 bg-gradient-to-br from-blue-50 to-blue-100 group transition-all hover:bg-blue-100">
                  <Timer className="w-16 h-16 text-blue-600 group-hover:scale-110 transition-transform mb-4" />
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-bold mb-2">自宅で洗車するよりも時短</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reason


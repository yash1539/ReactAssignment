import React from "react";
import activity from "./activity.svg";
import bitcoin from "./Bitcoin SV (BSV).svg"
import Binance from "./Binance .svg"
import Ethereum from "./Ethereum.svg"
import Solana from "./Solana.svg"




const App = () => {
  return (
    <div>
      <div className="bg-[#14172B] h-screen w-screen overflow-hidden ">
        <div className="flex items-center relative top-[246.34px] left-[83.89px] space-x-[17.33px]">
          <div>
            <img src={activity} />
          </div>
          <div className="text-white">
            Trending Assests
          </div>
        </div>
        <div className="rounded-full h-[110px] w-[110px] bg-[#626A88] absolute left-[182.37px] top-[321.92px] z-10 border-[#14172B] border-[10px]">
          <div className="relative left-5 top-5">
            <img src={bitcoin} />

          </div>
        </div>
        <div className="bg-[#626A88] w-[290.74px] h-[350.08px] relative top-[371.92px] left-[87px] rounded-2xl ">
          <div className="relative top-[50px] left-[75px]">
            <div className="text-[#737BAE] relative left-6">Bitcoin(BTC)</div>
            <div className="relative top-4">
              <div className="flex items-center h-[40px] w-[242px] bg-[#14172B] space-x-4 relative right-12 rounded-full">
                <div className="text-[#ECF0FF] relative left-8">$31,812.80</div>

                <div className="text-[#00FFA3] relative left-8">+10%</div>
              </div>

            </div>
          </div>
          <div className="text-[#737BAE] relative left-28 top-24">Price</div>
          <div className=" h-[40px] w-[242px] bg-[#14172B]  relative top-[100px] left-[30px] rounded-full">
            <div className="text-[#ECF0FF] relative left-20 top-2">$60,000</div>

            <div className="text-[#737BAE] relative left-20 top-10">tvl</div>
            <div className="h-[40px] w-[242px] bg-[#14172B]  relative top-[50px]  rounded-full">
              <div className="flex align-center relative left-20 top-2">
                <img src={Binance} />
                <img src={Ethereum} />
                <img src={Solana} />
              </div>
            </div>
            <div className="text-[#737BAE] relative left-[55px] top-[50px]">Popular pairs</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default App;

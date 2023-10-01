import React from "react";
import asset1 from "./assets/I1.jpg"
import asset2 from "./assets/I2.jpg"
import asset3 from "./assets/I3.jpg"
import asset4 from "./assets/I4.jpg"
import asset5 from "./assets/I5.jpg"
import asset6 from "./assets/I6.jpg"
import asset7 from "./assets/I7.jpg"
import asset8 from "./assets/I8.jpg"

function App() {
  return (
    <div className="m-6 w-full">
      <p className="text-2xl p-3 font-semibold">Pokemon Cards</p>
      <div className="grid xl:grid-cols-4 grid-cols-3 xl:gap-[15px] lg:gap-3 md:gap-4 gap-2 w-full md:text-left text-center pb-8 ">
        <div className="p1 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img1 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className="img11 w-full h-[100%] object-cover" src={asset1} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">CHARIZARD</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:5000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Described by the media as "a lean, ferocious, fire-breathing dragon ... sleek, powerful, and utterly destructive"</h4>
              </div>
            </div>
          </div>        
        </div> 
        <div className="p2 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img2 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className=" img22 w-full h-[100%] object-cover " src={asset2} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">LUGIA</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:22000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Lugia is a large Pokémon that resembles a dragon, a plesiosaur, and a bird. It is primarily silver-white, but it has blue undersides with slightly varying tones."</h4>
              </div>
            </div>
          </div>        
        </div>
        <div className="p3 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img3 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className="img33 w-full h-[100%] object-cover " src={asset3} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">GENGAR</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:8000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Gengar is a dark purple, bipedal Pokémon with a roundish body. It has red eyes, a wide mouth that is usually curled into a sinister grin, and pointed ears."</h4>
              </div>
            </div>
          </div>        
        </div>
        <div className="p4 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img4 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className="img44 w-full h-[100%] object-cover " src={asset4} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">PALKIA</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:25000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Palkia is described as a deity in Sinnoh-region mythology. It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology."</h4>
              </div>
            </div>
          </div>        
        </div>
        <div className="p5 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img5 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className="img55 w-full h-[100%] object-cover " src={asset5} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">MEWTWO</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:3000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Palkia is described as a deity in Sinnoh-region mythology. It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology."</h4>
              </div>
            </div>
          </div>        
        </div>
        <div className="p6 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img6 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className="img66 w-full h-[100%] object-cover " src={asset6} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">RAPIDASH</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:3000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Palkia is described as a deity in Sinnoh-region mythology. It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology."</h4>
              </div>
            </div>
          </div>        
        </div>
        <div className="p7 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img7 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className="img77 w-full h-[100%] object-cover" src={asset7} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">UMBREON</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:3000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Palkia is described as a deity in Sinnoh-region mythology. It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology."</h4>
              </div>
            </div>
          </div>        
        </div>
        <div className="p8 relative w-full h-[130px] md:h-[280px] flex justify-center items-center "> 
          <div className="img8 absolute w-full h-full bottom-0 right-0 duration-300 ease-in-out bg-black">
            <img className="img88 w-full h-[100%] object-cover " src={asset8} alt="img1"></img>
          </div>
          <div className="w-full h-full flex flex-col ">
            <div className="grow w-full  hidden md:flex flex-col items-start justify-start gap-[30px] py-[20px] px-[20px] bg-[#E92D06]">
              <p className="text-white text-[18px] leading-[16px] font-area-normal font-semibold ">DIALGA</p>
              <p className="text-white text-[14px] leading-[30px] font-area-normal">HP:3000</p>
              <div>
                <h4 classname="font-area-normal-medium text-[14px] text-black">Palkia is described as a deity in Sinnoh-region mythology. It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology."</h4>
              </div>
            </div>
          </div>        
        </div>
        
          


      
      </div>
    </div>
  );
}

export default App;

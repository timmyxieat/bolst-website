import { LogoIcon } from "./LogoIcon";
import imgGeminiGeneratedImage850G62850G62850G1 from "figma:asset/3603506bae0d2912fe1a2c459e28b572f7ff9ee3.png";

export function DesktopFrame() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] w-[1440px]" data-name="Desktop">
      {/* Header */}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between px-[112px] py-[20px] relative w-full">
            <div className="h-[32px] relative shrink-0 w-[135.453px]">
              <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
              <div className="absolute bg-[rgba(0,0,0,0)] h-[32px] left-0 top-0 w-[18px]">
                <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
                <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[18px]">
                  <LogoIcon />
                </div>
              </div>
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[28px] leading-[28px] left-[26px] not-italic text-[#024a60] text-[20px] top-[2px] w-[110px]">Bolst Pillow</p>
            </div>
            <div className="h-[46px] relative shrink-0 w-[358.219px]">
              <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="h-[634px] relative shrink-0 w-[1440px]">
        <div className="h-[634px] overflow-clip relative rounded-[inherit] w-[1440px]">
          {/* Content Container */}
          <div className="absolute bg-[rgba(0,0,0,0)] h-[500px] left-[80px] top-[100px] w-[1280px]">
            <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
            
            {/* Image */}
            <div className="absolute contents left-[-80px] top-[-72px]">
              <div className="absolute h-[643px] left-[-80px] top-[-72px] w-[1469px]">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeminiGeneratedImage850G62850G62850G1} />
              </div>
              <div className="absolute bg-[#e1e0e1] h-[84px] left-[1312px] top-[473px] w-[78px]" />
            </div>

            {/* Text and Form */}
            <div className="absolute bg-[rgba(0,0,0,0)] h-[494px] left-[32px] top-[3px] w-[576px]">
              <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.2] left-0 not-italic text-[#024a60] text-[48px] top-[46px] w-[592px]">Finally, Perfect Alignment. Every Night.</p>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.8] left-0 not-italic text-[#024a60] text-[24px] top-[194px] w-[551px]">Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.</p>
              
              {/* Form */}
              <form className="absolute left-0 top-[355px] flex gap-[12px]">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="bg-[#faf9f6] h-[50px] rounded-[8px] w-[373.297px] border border-[lightgrey] px-[16px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#024a60] placeholder:text-[#adaebc] focus:outline-none focus:ring-2 focus:ring-[#024a60]"
                />
                <button 
                  type="submit"
                  className="bg-[#024a60] h-[48px] rounded-[8px] w-[140.703px] font-['Inter:Medium',sans-serif] font-medium text-[#faf9f6] text-[16px] hover:bg-[#035a73] transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>

          {/* Header overlay (duplicated for z-index) */}
          <div className="absolute h-[28px] left-0 top-0 w-[1440px]">
            <div className="flex flex-row items-center size-full">
              <div className="box-border content-stretch flex h-[28px] items-center justify-between px-[112px] py-[20px] relative w-[1440px]">
                <div className="h-[32px] relative shrink-0 w-[135.453px]">
                  <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
                  <div className="absolute bg-[rgba(0,0,0,0)] h-[32px] left-0 top-0 w-[18px]">
                    <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
                    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[18px]">
                      <LogoIcon />
                    </div>
                  </div>
                </div>
                <div className="h-[46px] relative shrink-0 w-[358.219px]">
                  <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      </div>

      {/* Bottom Gradient */}
      <div className="bg-gradient-to-r from-[#e7e7e7] h-[134px] shrink-0 to-[#e1e1e1] via-[#e7e7e7] via-[49.472%] w-[1440px]" />
    </div>
  );
}

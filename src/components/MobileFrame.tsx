import { LogoIcon } from "./LogoIcon";
import imgGeminiGeneratedImage850G62850G62850G1 from "figma:asset/3603506bae0d2912fe1a2c459e28b572f7ff9ee3.png";

export function MobileFrame() {
  return (
    <div className="bg-white relative w-[390px] overflow-clip" data-name="Mobile">
      {/* Image */}
      <div className="absolute contents left-0 top-[86px]">
        <div className="absolute h-[311px] left-0 top-[86px] w-[390px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-76.86%] max-w-none top-0 w-[176.91%]" src={imgGeminiGeneratedImage850G62850G62850G1} />
          </div>
        </div>
        <div className="absolute bg-[#e1e0e1] h-[40.597px] left-[353.3px] top-[349.4px] w-[37.697px]" />
      </div>

      {/* Header */}
      <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[32px] py-[20px] top-0 w-[390px]">
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

      {/* Gradient Background */}
      <div className="absolute bg-gradient-to-r from-[#e7e7e7] h-[480px] left-0 to-[#e1e1e1] top-[394px] via-[#e5e5e5] via-[49.472%] w-[390px]" />

      {/* Heading */}
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.2] left-[32px] not-italic text-[#024a60] text-[32px] top-[351px] w-[338px]">Finally, Perfect Alignment. Every Night.</p>

      {/* Subheading */}
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.8] left-[33px] not-italic text-[#024a60] text-[20px] top-[499px] w-[331px]">Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.</p>

      {/* Form */}
      <form className="absolute left-[33px] top-[677px] flex flex-col gap-[14px]">
        <input 
          type="email" 
          placeholder="Enter your email address"
          className="bg-[#faf9f6] h-[50px] rounded-[8px] w-[331px] border border-[lightgrey] px-[16px] font-['Inter:Regular',sans-serif] font-normal text-[16px] text-[#024a60] placeholder:text-[#adaebc] focus:outline-none focus:ring-2 focus:ring-[#024a60]"
        />
        <button 
          type="submit"
          className="bg-[#024a60] h-[48px] rounded-[8px] w-[140.703px] font-['Inter:Medium',sans-serif] font-medium text-[#faf9f6] text-[16px] hover:bg-[#035a73] transition-colors"
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
}

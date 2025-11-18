import svgPaths from "./svg-cytbsbb4ip";
import imgGeminiGeneratedImage850G62850G62850G1 from "figma:asset/3603506bae0d2912fe1a2c459e28b572f7ff9ee3.png";

function Image() {
  return (
    <div className="absolute contents left-0 top-[86px]" data-name="Image">
      <div className="absolute h-[311px] left-0 top-[86px] w-[402px]" data-name="Gemini_Generated_Image_850g62850g62850g 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-76.86%] max-w-none top-0 w-[176.91%]" src={imgGeminiGeneratedImage850G62850G62850G1} />
        </div>
      </div>
      <div className="absolute bg-[#e1e0e1] h-[40.597px] left-[364.3px] top-[349.4px] w-[37.697px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
        <g id="Frame">
          <g clipPath="url(#clip0_3_91)">
            <path d={svgPaths.p26f1cd80} fill="var(--fill-0, #024A60)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_91">
            <path d="M0 0H18V24H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[18px]" data-name="svg">
      <Frame />
    </div>
  );
}

function I() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[32px] left-0 top-0 w-[18px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Div() {
  return (
    <div className="h-[32px] relative shrink-0 w-[135.453px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[28px] leading-[28px] left-[26px] not-italic text-[#024a60] text-[20px] top-[2px] w-[110px]">Bolst Pillow</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[46px] relative shrink-0 w-[358.219px]" data-name="nav">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-0 px-[32px] py-[20px] top-0 w-[402px]" data-name="div">
      <Div />
      <Nav />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#faf9f6] h-[50px] left-[33px] rounded-[8px] top-[677px] w-[331px]" data-name="input">
      <div aria-hidden="true" className="absolute border border-[lightgrey] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[16px] not-italic text-[#adaebc] text-[16px] top-[25px] translate-y-[-50%] w-[374px]">
        <p className="leading-[24px]">Enter your email address</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#024a60] h-[48px] left-[33px] rounded-[8px] top-[761px] w-[140.703px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[normal] left-[70.5px] not-italic text-[#faf9f6] text-[16px] text-center top-[14px] translate-x-[-50%] w-[141px]">Join Waitlist</p>
    </div>
  );
}

export default function IPhone16Pro() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 Pro - 1">
      <Image />
      <Div1 />
      <div className="absolute bg-gradient-to-r from-[#e7e7e7] h-[480px] left-0 to-[#e1e1e1] top-[394px] via-[#e5e5e5] via-[49.472%] w-[402px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.2] left-[32px] not-italic text-[#024a60] text-[32px] top-[351px] w-[338px]">Finally, Perfect Alignment. Every Night.</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.8] left-[33px] not-italic text-[#024a60] text-[20px] top-[499px] w-[331px]">Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.</p>
      <Input />
      <Button />
    </div>
  );
}
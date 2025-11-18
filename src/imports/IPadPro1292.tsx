import svgPaths from "./svg-tjsghu7mxk";
import imgPillow4 from "figma:asset/26573d1322595007226983cced233dca73634d5a.png";

function Frame() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
        <g id="Frame">
          <g clipPath="url(#clip0_3_94)">
            <path d={svgPaths.p26f1cd80} fill="var(--fill-0, #024A60)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_94">
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
    <div className="bg-[rgba(0,0,0,0)] h-[32px] relative shrink-0 w-[18px]" data-name="i">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Svg />
    </div>
  );
}

function Div() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[72px] top-[32px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I />
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[28px] leading-[28px] not-italic relative shrink-0 text-[#024a60] text-[20px] w-[110px]">Bolst Pillow</p>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-[#faf9f6] grow h-[50px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="input">
      <div aria-hidden="true" className="absolute border border-[lightgrey] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[16px] not-italic text-[#adaebc] text-[16px] top-[25px] translate-y-[-50%] w-[374px]">
        <p className="leading-[24px]">Enter your email address</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#024a60] h-[48px] relative rounded-[8px] shrink-0 w-[140.703px]" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[normal] left-[70.5px] not-italic text-[#faf9f6] text-[16px] text-center top-[14px] translate-x-[-50%] w-[141px]">Join Waitlist</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[600px]">
      <Input />
      <Button />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#024a60] text-[48px] text-center w-[600px]">Finally, Perfect Alignment. Every Night.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] not-italic relative shrink-0 text-[#024a60] text-[24px] text-center w-[600px]">Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.</p>
      <Frame1 />
    </div>
  );
}

export default function IPadPro() {
  return (
    <div className="bg-white relative size-full" data-name="iPad Pro 12.9' - 2">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-end pb-[360px] pt-[32px] px-[72px] relative size-full">
          <div className="absolute left-[-1197px] size-[2400px] top-[-654px]" data-name="Pillow 4">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPillow4} />
          </div>
          <Div />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}
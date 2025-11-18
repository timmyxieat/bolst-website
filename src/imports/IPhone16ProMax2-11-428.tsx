import svgPaths from "./svg-ejxzfmjsya";
import imgPillow5 from "figma:asset/26573d1322595007226983cced233dca73634d5a.png";

function Input() {
  return (
    <div className="basis-0 bg-[#faf9f6] grow h-[50px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="input">
      <div aria-hidden="true" className="absolute border border-[lightgrey] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[16px] not-italic text-[#adaebc] text-[16px] top-[25px] translate-y-[-50%] w-[374px]">
        <p className="leading-[24px]">Enter your email</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#024a60] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[16px] py-[10px] relative rounded-[8px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-center text-nowrap whitespace-pre">Join Waitlist</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Input />
      <div className="flex flex-row items-center self-stretch">
        <Button />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.2] not-italic relative shrink-0 text-[#024a60] text-[32px] w-full">Finally, Perfect Alignment. Every Night.</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.8] not-italic relative shrink-0 text-[#024a60] text-[20px] w-full">Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.</p>
      <Frame1 />
    </div>
  );
}

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
    <div className="absolute content-stretch flex gap-[8px] items-center left-[32px] top-[32px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I />
      <p className="font-medium leading-[28px] not-italic relative shrink-0 text-[#024a60] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">Bolst Pillows</p>
    </div>
  );
}

export default function IPhone16ProMax() {
  return (
    <div className="bg-white relative size-full" data-name="iPhone 16 Pro Max - 2">
      <div className="flex flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start justify-end pb-[120px] pt-[16px] px-[32px] relative size-full">
          <div className="absolute left-[-638px] size-[1184px] top-[-170px]" data-name="Pillow 5">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPillow5} />
          </div>
          <div className="h-[190px] relative shrink-0 w-[370px]">
            <div aria-hidden="true" className="absolute border-[#cc0000] border-[10px] border-solid inset-0 pointer-events-none" />
          </div>
          <Frame2 />
          <Div />
        </div>
      </div>
    </div>
  );
}
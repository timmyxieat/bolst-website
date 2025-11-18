import svgPaths from "./svg-1lzzjsad8e";
import imgPillow3 from "figma:asset/26573d1322595007226983cced233dca73634d5a.png";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 text-[#024a60]">
      <p className="font-medium leading-[1.2] not-italic relative shrink-0 text-[48px] w-[540px]">Finally, Perfect Alignment. Every Night.</p>
      <p className="font-normal leading-[1.8] relative shrink-0 text-[24px] w-[540px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-[#faf9f6] grow h-[50px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="input">
      <div aria-hidden="true" className="absolute border border-[lightgrey] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="absolute flex flex-col font-normal h-[50px] justify-center leading-[0] left-[16px] text-[#adaebc] text-[16px] top-[25px] translate-y-[-50%] w-[374px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px]">Enter your email address</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#024a60] box-border content-stretch flex gap-[10px] h-full items-center justify-center px-[24px] py-[10px] relative rounded-[8px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-medium leading-[normal] not-italic relative shrink-0 text-[#faf9f6] text-[16px] text-center text-nowrap whitespace-pre">Join Waitlist</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Input />
      <div className="flex flex-row items-center self-stretch">
        <Button />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[540px]">
      <Frame1 />
      <Frame2 />
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
    <div className="absolute content-stretch flex gap-[8px] items-center left-[72px] top-[32px]" data-name="div">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <I />
      <p className="font-medium leading-[28px] not-italic relative shrink-0 text-[#024a60] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">Bolst Pillows</p>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 3">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[72px] py-[10px] relative size-full">
          <div className="absolute left-[-738px] size-[2400px] top-[-506px]" data-name="Pillow 3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPillow3} />
          </div>
          <Frame3 />
          <Div />
          <div className="h-[379px] relative shrink-0 w-[740px]">
            <div aria-hidden="true" className="absolute border-[#cc0000] border-[10px] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
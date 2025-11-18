import svgPaths from "./imports/svg-90hwhp9g1x";
import imgPillow from "./assets/26573d1322595007226983cced233dca73634d5a.png";
import { Toaster } from 'sonner';
import { WaitlistForm } from './components/WaitlistForm';

function LogoIcon() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
        <g id="Frame">
          <g clipPath="url(#clip0_logo)">
            <path d={svgPaths.p26f1cd80} fill="#024A60" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_logo">
            <path d="M0 0H18V24H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-white relative w-full h-screen overflow-hidden">
      <Toaster position="top-center" richColors />
      {/* Desktop - Landscape Layout (1024px+) */}
      <div className="hidden lg:flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[1.11vw] items-center px-[5vw] py-[0.69vh] relative size-full">
          {/* Background Image - positioned so pillow area (1359,848,740x379 in 2400x2400) aligns with the pillow placeholder */}
          <div 
            className="absolute pointer-events-none"
            style={{
              width: '166.67vw',
              height: '166.67vw',
              left: 'calc(100% - 51.39vw - 5vw - 94.38vw)',
              top: 'calc(50% - 58.89vw - 26.32vw/2)'
            }}
          >
            <img 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgPillow} 
            />
          </div>
          
          {/* Content */}
          <div className="content-stretch flex flex-col gap-[2.22vw] items-start relative shrink-0 z-10" style={{ width: '37.5vw' }}>
            <p className="font-medium leading-[1.2] not-italic text-[#024a60]" style={{ fontSize: '3.33vw' }}>
              Finally, Perfect Alignment. Every Night.
            </p>
            <p className="font-normal leading-[1.8] not-italic text-[#024a60]" style={{ fontSize: '1.67vw', fontVariationSettings: "'wdth' 100" }}>
              Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.
            </p>

            {/* Form */}
            <WaitlistForm variant="desktop" />
          </div>
          
          {/* Pillow Placeholder - where the pillow should visually appear */}
          <div className="relative shrink-0" style={{ width: '51.39vw', height: '26.32vw' }}>
            {/* This is where the pillow from the image should align */}
          </div>
          
          {/* Logo */}
          <div className="absolute content-stretch flex gap-[8px] items-center left-[5vw] top-[32px] z-20">
            <div className="bg-[rgba(0,0,0,0)] h-[32px] relative shrink-0 w-[18px]">
              <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[18px]">
                <LogoIcon />
              </div>
            </div>
            <p className="font-medium leading-[28px] not-italic text-[#024a60] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">
              Bolst Pillows
            </p>
          </div>
        </div>
      </div>

      {/* Tablet - Large Portrait Layout (640px - 1023px) */}
      <div className="hidden sm:flex lg:hidden flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-center justify-end pb-[20vh] pt-[32px] px-[72px] relative size-full">
          {/* Background Image - positioned so pillow area aligns with the pillow placeholder */}
          <div 
            className="absolute pointer-events-none"
            style={{
              width: 'min(312.5vw, 2400px)',
              height: 'min(312.5vw, 2400px)',
              left: 'calc(50% - min(176.95vw, 1359px) - min(96.35vw, 740px)/2)',
              top: 'calc(10vh - min(110.42vw, 848px))'
            }}
          >
            <img 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgPillow} 
            />
          </div>
          
          {/* Logo */}
          <div className="absolute content-stretch flex gap-[8px] items-center left-[72px] top-[32px] z-20">
            <div className="bg-[rgba(0,0,0,0)] h-[32px] relative shrink-0 w-[18px]">
              <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[18px]">
                <LogoIcon />
              </div>
            </div>
            <p className="font-medium leading-[28px] not-italic text-[#024a60] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">
              Bolst Pillows
            </p>
          </div>
          
          {/* Pillow Placeholder - where the pillow should visually appear */}
          <div className="relative shrink-0" style={{ width: 'min(96.35vw, 740px)', height: 'min(49.35vw, 379px)' }}>
            {/* This is where the pillow from the image should align */}
          </div>
          
          {/* Content */}
          <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0 w-full z-10">
            <p className="font-medium leading-[1.2] not-italic text-[#024a60] text-[36px] text-center w-[600px]">
              Finally, Perfect Alignment. Every Night.
            </p>
            <p className="font-normal leading-[1.8] not-italic text-[#024a60] text-[22px] text-center w-[600px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.
            </p>

            {/* Form */}
            <WaitlistForm variant="tablet" />
          </div>
        </div>
      </div>

      {/* Mobile - Small Portrait Layout (< 640px) */}
      <div className="flex sm:hidden flex-col justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[64px] items-start justify-end pt-[16px] px-[32px] relative size-full" style={{ paddingBottom: 'max(15vh, min(25vh, 100vh - 100vw * 1.5))' }}>
          {/* Background Image - scaled and positioned for mobile */}
          <div 
            className="absolute pointer-events-none"
            style={{
              width: '320vw',
              height: '320vw',
              left: 'calc(50% - 181.2vw - 98.67vw/2)',
              top: 'calc(12vh - 113.07vw)'
            }}
          >
            <img 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover" 
              src={imgPillow} 
            />
          </div>
          
          {/* Logo */}
          <div className="absolute content-stretch flex gap-[8px] items-center left-[32px] top-[16px] z-20">
            <div className="bg-[rgba(0,0,0,0)] h-[32px] relative shrink-0 w-[18px]">
              <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[18px]">
                <LogoIcon />
              </div>
            </div>
            <p className="font-medium leading-[28px] not-italic text-[#024a60] text-[20px] text-nowrap tracking-[-0.4px] whitespace-pre">
              Bolst Pillows
            </p>
          </div>
          
          {/* Pillow Placeholder - scaled for mobile */}
          <div className="h-[190px] relative shrink-0 w-[370px]">
            {/* This is where the pillow from the image should align */}
          </div>
          
          {/* Content */}
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full z-10">
            <p className="font-medium leading-[1.2] not-italic text-[#024a60] text-[32px] w-full">
              Finally, Perfect Alignment. Every Night.
            </p>
            <p className="font-normal leading-[1.8] not-italic text-[#024a60] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
              Contouring that hugs the curves of your head. No collapse, no constant adjusting, just restorative sleep you can count on.
            </p>

            {/* Form */}
            <WaitlistForm variant="mobile" />
          </div>
        </div>
      </div>
    </div>
  );
}
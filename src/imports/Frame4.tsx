import imgPillow6 from "figma:asset/26573d1322595007226983cced233dca73634d5a.png";

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute left-0 size-[2400px] top-0" data-name="Pillow 6">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPillow6} />
      </div>
      <div className="absolute h-[379px] left-[1359px] top-[848px] w-[740px]">
        <div aria-hidden="true" className="absolute border-[#cc0000] border-[10px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
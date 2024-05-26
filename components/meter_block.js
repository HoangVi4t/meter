
export default function MeterBlock({header}){
  return <div>
    <div className="bg-white border rounded text-center">
      <p className="text-base font-bold">{header}</p>
      <div className="flex justify-center gap-2.5 ">
        <p>U12</p>
        <p>U12</p>
        <p>U12</p>
      </div>
    </div>
  </div>
}
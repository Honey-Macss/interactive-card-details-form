const Inputs = ({label, placeHolders, width}) => {
  return (
    <div className=" grid ">
        <label htmlFor="" className=" mt-[1.1rem] text-[#2c2631] text-[0.8rem] tracking-widest font-medium">{label}</label>
        <input className= {` ${width} mt-[0.4rem] text-[#2c2631] text-[1.1rem] border-[1px] hover:border-[#684e79] cursor-pointer outline-none rounded-[10px] p-[0.7rem_0_0.7rem_1rem] font-medium tracking-wide`} type="text" placeholder={placeHolders} />
        <p className=" text-[hsl(0,_100%,_66%)] mt-[0.4rem] text-[0.7rem] font-medium">sdsds</p>
    </div>
  )
}

export default Inputs
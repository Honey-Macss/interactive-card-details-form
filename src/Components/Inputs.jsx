
const Inputs = ({label, type, placeHolders, width, value, setValue }) => {

  return (
    <div className=" grid ">
        <label htmlFor="" className=" mt-[1.1rem] mi:mt-[0.9rem] text-[#2c2631] text-[0.8rem] mi:text-[0.7rem] tracking-widest font-medium">{label}</label>
        <input value={value} onChange={setValue} maxLength={2} className= {` ${width} mt-[0.4rem] text-[#2c2631] text-[1.1rem] mi:text-[0.9rem] border-[1px] hover:border-[#742191] cursor-pointer outline-none rounded-[10px] p-[0.7rem_0_0.7rem_1rem] font-medium tracking-wide`} type={type} placeholder={placeHolders} />
        {/* {errors && <p className=" text-[hsl(0,_100%,_66%)] mt-[0.4rem] text-[0.7rem] font-medium">{errors}</p>} */}
        {/* <p className=" text-[hsl(0,_100%,_66%)] mt-[0.4rem] text-[0.7rem] font-medium">{errors}</p> */}
    </div>
  )
}

export default Inputs
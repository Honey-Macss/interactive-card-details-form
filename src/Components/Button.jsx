
const Button = ({buttonValue, onClick}) => {
  return (
    <input onClick={onClick} className=" w-[100%] py-[0.7rem] mt-[1.5rem] text-[1.1rem] text-white font-medium rounded-[10px] cursor-pointer bg-[#220930] " type="submit" value={buttonValue} />
  )
}

export default Button;
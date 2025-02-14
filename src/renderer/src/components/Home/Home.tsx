import { useState } from 'react'

const HomeStates = (): JSX.Element => {
  const [section, setSection] = useState('home')
  return (
    <div className=' flex flex-row gap-3 items-center py-20 px-20'>
      <div className={` font-poppins text-base font-semibold cursor-pointer ${ section === "home" ? " text-black" : " text-[#C0C0C0]"}`} onClick={() => setSection("home")}>Home</div>
      <div className={` font-poppins text-base font-semibold cursor-pointer ${ section === "following" ? " text-black" : " text-[#C0C0C0]"}`} onClick={() => setSection("following")}>Following</div>
      <div className={` font-poppins text-base font-semibold cursor-pointer ${ section === "explore" ? " text-black" : " text-[#C0C0C0]"}`} onClick={() => setSection("explore")}>Explore</div>
    </div>
  )
}

export default HomeStates

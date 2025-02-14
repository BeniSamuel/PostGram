import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '@fontsource/poppins'; // Defaults to 400 weight



const DashLeft = (): JSX.Element => {
  const navigate = useNavigate();
  const currentPathName = useLocation();
  const [tab, setTab] = useState('home');

  useEffect(() => {

  })

  return (
    <div className=' w-full md:w-[20%] bg-[#FFFFFF] px-8 py-4 flex flex-col gap-12 '>
      <div>
        <div className=' font-poppins text-lg font-semibold'>PostGram</div>
      </div>

      <div className=' flex flex-col'>
        <div>
          <img />
          <div className=" font-poppins text-sm font-semibold hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">Home</div>
        </div>
        <div>
          <img />
          <div className=" font-poppins text-sm font-semibold hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">Search</div>
        </div>
        <div>
          <img />
          <div className=" font-poppins text-sm font-semibold hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">Notifications</div>
        </div>
        <div>
          <img />
          <div className=" font-poppins text-sm font-semibold hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">Saved Posts</div>
        </div>
        <div>
          <img />
          <div className=" font-poppins text-sm font-semibold hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">Messages</div>
        </div>
      </div>
    </div>
  )
}

export default DashLeft

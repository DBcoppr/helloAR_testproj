import React from 'react'
import dashboardLogo from "../../../assets/dashboardLogo.svg"
import logoutLogo from "../../../assets/logout.svg"
function Sidebar() {
  return (
    <div className='w-[255px] h-screen bg-[#FFF] border-r-gray border'>
        <div className='text-[36px] font-bold h-[104px] flex justify-center items-center text-purple'>Logo</div>
        <div className='flex items-center justify-between flex-col w-full h-[calc(100%-104px)] pb-4'>
            <div className='w-full bg-[#E6F7FF] border-r-[#1890FF] border-r-[3px]'>
              <img src={dashboardLogo} alt="dashboardicon" className='pl-6 py-2.5' />
            </div>
            <div className='flex gap-2.5 py-[9px] pl-6 w-full items-center'>
              <img src={logoutLogo} alt="dashboardicon" className='pl-6 py-2.5' />
              <p>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
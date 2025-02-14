import React, { ReactNode } from 'react'
import DashCenter from './DashCenter'
import DashLeft from './DashLeft'
import DashRight from './DashRight'

type DashboardProps = {
  children: ReactNode
}

const Dashboard: React.FC<DashboardProps> = ({ children }): JSX.Element => {
  return (
    <div className=" flex flex-col md:flex-row ">
      <DashLeft />
      <DashCenter>{children}</DashCenter>
      <DashRight />
    </div>
  )
}

export default Dashboard

import React, { ReactNode } from "react";

type DashCenterProps = {
  children: ReactNode;
};

const DashCenter: React.FC<DashCenterProps> = ({ children }): JSX.Element => {
  return <div className=" w-full md:w-[55%]">{children}</div>;
};

export default DashCenter;

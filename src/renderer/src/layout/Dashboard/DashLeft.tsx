import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "@fontsource/poppins"; // Defaults to 400 weight

const DashLeft = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState("home");

  useEffect(() => {
    const currentPathName = location.pathname;
    if (currentPathName === "/") setTab("home");
    else if (currentPathName.startsWith("/search")) setTab("search");
    else if (currentPathName.startsWith("/notifications")) setTab("notifications");
    else if (currentPathName.startsWith("/savedPosts")) setTab ("saved");
    else if (currentPathName.startsWith("/messages")) setTab("messages")

  });

  const handleNavigation = ( tab: string, route: string ) => {
    setTab(tab);
    navigate(route);
  }

  return (
    <div className=" w-full md:w-[20%] bg-[#FFFFFF] px-8 py-4 flex flex-col gap-12 ">
      <div>
        <div className=" font-poppins text-lg font-semibold">PostGram</div>
      </div>

      <div className=" flex flex-col">
        <div onClick={() => handleNavigation("home", "/")}>
          <img />
          <div className=" font-poppins text-sm font-medium hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">
            Home
          </div>
        </div>
        <div onClick={() => handleNavigation("search", "/search")}>
          <img />
          <div className=" font-poppins text-sm font-medium hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">
            Search
          </div>
        </div>
        <div onClick={() => handleNavigation("notifications", "/notifications")}>
          <img />
          <div className=" font-poppins text-sm font-medium hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">
            Notifications
          </div>
        </div>
        <div onClick={() => handleNavigation("saved", "/savedPosts")}>
          <img />
          <div className=" font-poppins text-sm font-medium hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">
            Saved Posts
          </div>
        </div>
        <div onClick={() => handleNavigation("messages", "/messages")}>
          <img />
          <div className=" font-poppins text-sm font-medium hover:bg-[#F7F7F7] py-2 px-2 rounded-md cursor-pointer ">
            Messages
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashLeft;

import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

import Foooter from "../layout/Foooter";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Foooter></Foooter>
    </div>
  );
};

export default Main;

import { Outlet } from "react-router-dom";
import Header from "../layout/Header";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;

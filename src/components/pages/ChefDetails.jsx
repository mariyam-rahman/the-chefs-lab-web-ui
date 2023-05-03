import { useContext, useEffect } from "react";
import { AuthContext } from "./../../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

const ChefDetails = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return <div>{isLoggedIn ? "loggedIn" : "not logged in"} chef details</div>;
};

export default ChefDetails;

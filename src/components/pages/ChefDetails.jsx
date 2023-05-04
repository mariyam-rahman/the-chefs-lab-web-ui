import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ChefDetails = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { state: { redirectTo: `/chef/${params.id}` } });
    }
  }, []);

  const [chef, setChef] = useState(null);
  // console.log({ chef });
  useEffect(() => {
    axios
      .get(`http://localhost:3000/chef/${params.id}`)
      .then((res) => setChef(res.data));
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">banner</div>
      </div>
      <div>other details of chef</div>
      <div>{isLoading && "shit"}</div>
      <div>
        {chef?.recipes?.map((e, i) => (
          <ChefRecipe chef={e} key={i} />
        ))}
      </div>
    </div>
  );
};

const ChefRecipe = () => {
  return (
    <>
      <img
        src="/images/stock/photo-1635805737707-575885ab0820.jpg"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <>
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </>
    </>
  );
};

export default ChefDetails;

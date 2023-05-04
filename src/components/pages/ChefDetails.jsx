import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../contexts/AuthContext";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "flowbite-react/lib/esm";
import { VITE_SERVER_URL } from "./../../../variables.js";
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
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    await axios
      .get(
        `${VITE_SERVER_URL}/chef/${params.id}`
        // `http://localhost:3000/chef/${params.id}`
      )
      .then((res) => setChef(res.data));

    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Spinner aria-label="Spinner button example" />
      ) : (
        <>
          <Banner chef={chef}></Banner>

          <RecipeContainer>
            {chef?.recipes?.map((e, i) => (
              <RecipeItem recipe={e} key={i} />
            ))}
          </RecipeContainer>
        </>
      )}
    </div>
  );
};

const RecipeItem = ({ recipe }) => {
  return (
    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      <div href="#">
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={recipe.imageUrl}
          alt="Bonnie Avatar"
          style={{ aspectRatio: 1, objectFit: "cover", width: "800px" }}
        />
      </div>
      <div className="p-5" style={{}}>
        <h5 style={{ fontSize: "160%", fontWeight: "bold" }}>
          {recipe.recipeName}
        </h5>
        <h5 style={{ fontSize: "120%", fontWeight: "bold" }}>
          Cooking Method:
        </h5>
        <span className="text-gray-500 dark:text-gray-400"></span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
          {recipe.cookingMethod}
        </p>
        <h5 style={{ fontSize: "120%", fontWeight: "bold" }}>ingredients:</h5>
        <ul style={{}}>
          {recipe.ingredients?.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <svg
          fill="white"
          stroke="blue"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-8"
        >
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
        </svg>
      </div>
    </div>
  );
};

const Banner = ({ chef }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {chef.name}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {chef.bio}
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Contact
          </a>
        </div>
        <div
          className="hidden lg:mt-0 lg:col-span-5 lg:flex "
          style={{ justifyContent: "end" }}
        >
          <img
            src={chef.imageUrl}
            alt="mockup"
            style={{ maxHeight: "80vh", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

const RecipeContainer = ({ children }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Recipies
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the his Arts
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;

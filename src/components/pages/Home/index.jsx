import Menu from "./Menu";
import { Button } from "flowbite-react";
import Chefs from "./Chefs";
import About from "./About";
import Hero from "./Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";
import { Spinner } from "flowbite-react/lib/esm";

import { VITE_SERVER_URL } from "./../../../../variables.js";

const Home = () => {
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${VITE_SERVER_URL}/recipes`)
      .then((res) => {
        setRecipes(res.data);
        setIsLoading(false);
      })
      .catch((ex) => setIsLoading(false));
  }, []);

  return (
    // ---------------------Section-1 Banner------------------
    <div>
      <Hero />
      <Chefs></Chefs>
      <About></About>
      {/* <Menu /> */}
      {recipes ? (
        <RecipeContainer>
          {recipes.map((e, i) => (
            <Recipe recipe={e} key={i} />
          ))}
        </RecipeContainer>
      ) : (
        <Spinner aria-label="Spinner button example" className="px-1" />
      )}
    </div>
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

export default Home;

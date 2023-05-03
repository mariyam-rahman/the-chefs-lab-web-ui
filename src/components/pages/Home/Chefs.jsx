import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Chefs() {
  const [chefs, setChefs] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3000/chefs").then((res) => setChefs(res.data));
  }, []);

  return (
    <div className="py-24">
      <h2 className="text-4xl text-center font-bold pb-16">
        Our Experienced Chef Team
      </h2>
      <div className=" sm:flex  lg:flex gap-10" style={{ flexWrap: "wrap" }}>
        {chefs?.map((e) => (
          <ChefItem chef={e} />
        ))}
      </div>
    </div>
  );
}

const ChefItem = ({ chef }) => {
  const {
    name,
    imageUrl,
    yearsOfExperience,
    numOfRecipes: recipesCount,
    likes: likesCount,
  } = chef;
  return (
    <Card imgSrc={imageUrl} className="p-8" style={{ maxWidth: "300px" }}>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
        {name}
      </h5>
      <div className="flex justify-between">
        <h4>{yearsOfExperience}+ years of experienced</h4>
        <p>{recipesCount}+ Recipe</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xl  text-gray-900 ">
          <svg
            fill="blue"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-8"
          >
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
          </svg>
          {likesCount}
        </div>

        <Link to="/chef-details">
          <p
            href="#"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Recipes
          </p>
        </Link>
      </div>
    </Card>
  );
};

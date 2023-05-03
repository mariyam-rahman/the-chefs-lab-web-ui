import Menu from "./Menu";
import { Button } from "flowbite-react";
import Chefs from "./Chefs";
const Home = () => {
  return (
    // ---------------------Section-1 Banner------------------
    <div className="bg-white border-2 border-red-50">
      <div className="flex-col lg:flex-row-reverse border-2 border-red-200 py-24">
        <div>
          <img
            src="http://kamleshyadav.com/html/catering/catering/assets/images/main/story.png"
            className="max-w-sm rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            It’s Not Just A Food It’s An Experience
          </h1>
          <p className="py-6">
            We collect the best quality of ingredients & provide our guest fresh
            & delicious food with the best execution.
          </p>
          <div className="flex gap-7">
            <Button color="failure" pill={true}>
              Book Now
            </Button>
            <Button color="dark" pill={true}>
              Know More
            </Button>
          </div>
        </div>
      </div>
      <Chefs></Chefs>

      <Menu></Menu>
    </div>
  );
};

export default Home;

import { Card } from "flowbite-react";

const Chefs = () => {
  return (
    <div>
      <div className="max-w-sm">
        <Card imgSrc="https://img.freepik.com/free-photo/front-view-young-female-cook-white-cook-suit-white-cap-smiling-happy_140725-15367.jpg?t=st=1683037335~exp=1683037935~hmac=17a1b2e93900d58f44ac7cd81bf71d233ce7949895d825bdf218a5f11d043a79">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            Maria Lopez
          </h5>
          <div className="flex justify-between">
            <h4>10+ years of experienced</h4>
            <p>80+ Recipe</p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $599
            </span>

            <a
              href="#"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chefs;

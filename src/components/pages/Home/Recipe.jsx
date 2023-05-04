export default function RecipeItem({ recipe }) {
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
}

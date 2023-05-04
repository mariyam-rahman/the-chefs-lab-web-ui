import { Accordion } from "flowbite-react";

const Blog = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            1. Tell us the differences between uncontrolled and controlled
            components.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Uncontrolled components refer to form elements whose values are
              handled by the DOM, rather than by React. This means that the data
              is not directly accessible or mutable by React, and changes to the
              form element are typically handled via event listeners or by
              querying the DOM. Controlled components, on the other hand, are
              form elements whose values are managed by the React component that
              renders them. This means that the data is directly accessible and
              mutable by React, and can be easily passed to other components or
              persisted to a database.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            2. How to validate React props using PropTypes
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              To validate React props using PropTypes, import the PropTypes
              library and define the prop types for your component. Use
              PropTypes to specify the expected type and requiredness of each
              prop.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            3. Tell us the difference between nodejs and express js
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              NodeJS is a platfom to run JS code outside browser, whereas
              ExpressJS is a server-side web application framework for NodeJS.
              It's uses midelwares and route handling to simplifie web
              devlopment.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            4. What is a custom hook, and why will you create a custom hook?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Custom huk is a reusable functon to sare logik between React
              components. They can be used to abstract complex logics, reducde
              repition of code and incresse reusability.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blog;

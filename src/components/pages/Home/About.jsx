import { Timeline } from "flowbite-react";

const About = () => {
  return (
    <div className="py-24">
      <h2 className="text-4xl font-bold text-center pb-16">
        About
        <span className="text-red-600"> Us</span>
      </h2>
      <div className="sm:flex lg:flex items-center gap-12 px-16">
        <div>
          <Timeline>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>WE</Timeline.Title>
                <Timeline.Body>
                  We Have Been been serving wonderful Mexico food to thousands
                  of food lovers around the country for more than a generation.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>Our Mission</Timeline.Title>
                <Timeline.Body>
                  To satisfy the customers in response to their various food
                  demands and needs considering their socio-economic status and
                  maintain food quality in all aspect.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Title>Our Vision</Timeline.Title>
                <Timeline.Body>
                  To drive healthy eating among children and families by
                  promoting nutritious food and Make sure that every customer
                  who comes through our doors, leaves with a craving to come
                  back again.
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        </div>
        <div>
          <img
            src="https://img.freepik.com/free-photo/young-happy-cook-preparing-bruschetta-with-avocado-sauce-cherry-tomato-kitchen_637285-3120.jpg?w=996&t=st=1683149120~exp=1683149720~hmac=48fac2d37c27c3e83b899af154b22d47cb68e44b06ce66fe158020447efad84a"
            alt=""
            className="rounded "
          />
        </div>
      </div>
    </div>
  );
};

export default About;

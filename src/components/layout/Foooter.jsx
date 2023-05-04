import { Footer } from "flowbite-react";

const Foooter = () => {
  return (
    <div className="my-40 text-center">
      <Footer container={true} style={{ border: "none" }}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
            <img src="/logo.png" alt="logo" className=" w-32" />
            <Footer.LinkGroup className="text-center items-center flex justify-around ">
              <Footer.Link href="#" className="mr-6">
                Home
              </Footer.Link>
              <Footer.Link href="#" className="mr-6">
                Blog
              </Footer.Link>
              <Footer.Link href="#" className="mr-6">
                Chef Details
              </Footer.Link>
              <Footer.Link href="#">Login</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="The Chef's Lab" year={2023} />
        </div>
      </Footer>
    </div>
  );
};

export default Foooter;

import { Footer } from "flowbite-react";

const Foooter = () => {
  return (
    <div className="my-40">
      <Footer container={true} style={{ border: "none" }}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <img src="/src/assets/logo.png" alt="logo" className=" w-32" />
            <Footer.LinkGroup>
              <Footer.Link href="#">Home</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
              <Footer.Link href="#">Chef Details</Footer.Link>
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

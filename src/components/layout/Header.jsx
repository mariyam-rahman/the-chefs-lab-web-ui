import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";

import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthContext";

const Header = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  console.log({ user_Header: user, isLoggedIn });
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src="/logo.png" className="mr-3 h-6 sm:h-36" alt=" Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {isLoggedIn ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  // img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  img={
                    user && user.photoURL
                      ? user.photoURL
                      : "https://www.w3schools.com/howto/img_avatar.png"
                  }
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to={"/login"}>
              {" "}
              <Button>Login</Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>Home</Link>
          <Link to={"/blog"}>Blog</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

import { Label, TextInput, Checkbox, Button } from "flowbite-react";

import { AuthContext } from "./../../contexts/AuthContext";
import { useContext, useState } from "react";

import firebaseConfig from "./../../config/firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async () => {
    setIsLoading(true);
    signInWithEmailAndPassword(firebaseConfig, email, password)
      .then((userCredential) => {
        // Signed in
        setIsLoading(false);
        const user = userCredential.user;
        console.log({ user });

        login(user.accessToken, { email: user.email });
        // toast
        navigate(location.state.redirectTo || "/");

        // ...
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorCode, errorMessage });
      });
  };

  return (
    <div className="container" style={{ maxWidth: "400px", margin: "auto" }}>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            value={email}
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            style={{ flex: "1" }}
          >
            Submit {isLoading && "...."}
          </Button>
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              navigate("/register", {
                state: { redirectTo: location.state.redirectTo },
              });
            }}
            style={{ flex: "1" }}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

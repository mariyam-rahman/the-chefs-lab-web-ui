import { Label, TextInput, Checkbox, Button } from "flowbite-react";

import { AuthContext } from "./../../contexts/AuthContext";
import { useContext, useState } from "react";

// import firebaseConfig from "./../../config/firebase";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "./../../config/firebase";
import { Spinner } from "flowbite-react/lib/esm";
import { toast } from "react-toastify";
const Register = () => {
  const { login } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const onSubmit = async () => {
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // registration done
        // update the user profile image
        // ...
        console.log({ userCredential });
        const shit = await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        });

        console.log({ shit });

        setIsLoading(false);
        const user = userCredential.user;
        // console.log({ userCredential });
        login(user.accessToken, {
          email: user.email,
          id: user.uid,
          displayName: name,
          photoURL: photoUrl,
        });
        // toast
        navigate(location.state?.redirectTo || "/");
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
            <Label htmlFor="email1" value="Name" />
          </div>
          <TextInput
            value={name}
            id="name"
            type="text"
            placeholder="ex: jhon smith"
            required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your Image URL" />
          </div>
          <TextInput
            value={photoUrl}
            id="photoUrl"
            type="url"
            placeholder="https://domain.extension"
            required={false}
            onChange={(e) => {
              setPhotoUrl(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            value={email}
            id="email1"
            type="email"
            placeholder="name@domain.com"
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

        <Button
          type="submit"
          onClick={(e) => {
            const toastConfig = {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            };
            const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            e.preventDefault();

            const isEmailValid = emailRegex.test(email);

            if (!password) {
              toast("Password is required", toastConfig);
            } else if (password.length <= 6) {
              toast("Password must be more than 6 characters", toastConfig);
            } else if (!email) {
              toast("Email is required", toastConfig);
            } else if (isEmailValid) {
              toast("Please enter a valid email", toastConfig);
            } else {
              onSubmit();
            }
          }}
        >
          Submit{" "}
          {isLoading && (
            <Spinner aria-label="Spinner button example" className="px-1" />
          )}
        </Button>
      </form>
    </div>
  );
};

export default Register;

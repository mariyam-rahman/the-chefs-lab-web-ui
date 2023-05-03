import { Label, TextInput, Checkbox, Button } from "flowbite-react";

import { AuthContext } from "./../../contexts/AuthContext";
import { useContext, useState } from "react";

import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = async () => {
    const res = await axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    });

    if (res.status === 200) {
      login(res.data.token, res.data.user);
    }
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { TextInput, Button, PasswordInput } from "@mantine/core";
import { useCredsStore } from "../utils/store";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setCreds = useCredsStore((state) => state.setCreds);

  const submitHandler = async (e) => {
    e.preventDefault();
    setCreds({ username, password });
    router.push("/");
  };

  return (
    <div className="p-8 justify-center items-center flex min-h-[calc(100vh_-_4rem)]">
      <div className="bg-gray-900 p-10 rounded-lg">
        <p className="text-4xl font-semibold mb-2">Login</p>
        <p className="text-gray-400">
          Please enter your LDAP login credentials
        </p>

        <form onSubmit={submitHandler} className="flex flex-col">
          <TextInput
            placeholder="Roll Number"
            label="Roll Number"
            variant="filled"
            size="md"
            required
            className="min-w-[60%] w-[35rem] max-w-[90vw]"
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            styles={{
              label: {
                color: "#e5e7eb",
              },
            }}
          />

          <PasswordInput
            placeholder="Password"
            label="Password"
            variant="filled"
            size="md"
            className="min-w-[60%] w-[35rem] max-w-[90vw]"
            required
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            styles={{
              label: {
                color: "#e5e7eb",
              },
            }}
          />

          <Button
            type="submit"
            variant="outline"
            color="gray"
            size="md"
            compact
            className="min-w-[60%] w-[35rem] max-w-[90vw] mt-4"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Login;

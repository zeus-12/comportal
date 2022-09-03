import { useSession, signIn, signOut } from "next-auth";
import { Router } from "next/router";

const Login = () => {
  const { data: session } = useSession();
  if (!session) {
    Router.push("/user");
  }

  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};
export default Login;

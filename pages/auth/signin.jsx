import { Button, Image } from "@mantine/core";
import { unstable_getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";
import { Logo } from "../../components/NavbarComponents";
import { authOptions } from "../api/auth/[...nextauth]";

export default function SignIn({ providers }) {
  return (
    <div className="login-background h-[92vh] flex justify-center items-center">
      {Object.values(providers).map((provider) => (
        <div
          className="flex flex-col items-center gap-4 justify-center"
          key={provider.name}
        >
          <Logo textSize="text-6xl" />

          <div>
            <Button
              className="bg-[#0b5893] flex justify-between px-2"
              onClick={() => signIn(provider.id)}
            >
              <img src="/google-logo.png" className="h-8" alt="google" />
              <p className="pl-2">Sign in with {provider.name}</p>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session) {
    return {
      redirect: {
        destination: "/user",
        permanent: false,
      },
    };
  }

  return {
    props: { providers },
  };
}

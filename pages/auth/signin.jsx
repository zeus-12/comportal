import { Button, Image } from "@mantine/core";
import { getProviders, signIn } from "next-auth/react";
import { Logo } from "../../components/NavbarComponents";

export default function SignIn({ providers }) {
  return (
    <div className="flex-col gap-8 h-screen flex justify-center items-center">
      <Logo textSize="text-4xl" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            className="bg-blue-300 flex justify-between px-2"
            onClick={() => signIn(provider.id)}
          >
            <img src="/google-logo.png" className="h-8" alt="google" />
            <p className="pl-2">Sign in with {provider.name}</p>
          </Button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

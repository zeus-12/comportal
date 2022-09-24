import { Button, Image } from "@mantine/core";
import { signIn } from "next-auth/react";
import { Logo } from "../../components/NavbarComponents";
import getServerSession from "../../utils/getServerSession";

export default function SignIn() {
  // CHANGE WHEN ADDING MORE PROVIDERS
  const providers = { google: { id: "google", name: "Google" } };

  return (
    <div className="login-background h-[92vh] flex justify-center items-center">
      {Object.values(providers).map((provider) => (
        <div
          className="flex flex-col items-center gap-4 justify-center"
          key={provider.name}
        >
          <Logo textSize="text-6xl" />

          <div>
            <p className="text-xl font-semibold">
              The all-in-one complaint portal for Insti!
            </p>
          </div>

          <div>
            <Button
              className="bg-[#0b5893] flex justify-between px-2"
              onClick={() => signIn(provider.id)}
            >
              <Image
                width={25}
                height={25}
                src="/google-logo.png"
                alt="google"
              />
              <p className="pl-2">Sign in with {provider.name}</p>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res);

  if (session) {
    return {
      redirect: {
        destination: "/user",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

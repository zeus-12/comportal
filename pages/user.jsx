import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";
// -------------------
// TODO FIX "HEY NAME"
const server_url = "http://localhost:3000";

const User = (props) => {
  console.log(props);
  // const name = session.user.name;
  return (
    <div className="flex justify-between">
      <p>Hey, </p>
      <Button className="" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  try {
    const res = await fetch(server_url + "/api/complaints/user");
    console.log(res);
    const data = await res.json();
    return {
      props: {
        // complaints: data.data,
        session: session,
        complaints: JSON.parse(JSON.stringify(data.data)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        notFound: null,
      },
    };
    // return {
    //   notFound: true,
    // };
  }
};

export default User;

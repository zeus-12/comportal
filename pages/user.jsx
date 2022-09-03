import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";
import dbConnect from "../utils/dbConnect";
import Complaint from "../models/complaint";
import ComplaintGrid from "../components/ComplaintGrid";

// -------------------
// TODO FIX "HEY NAME"
const server_url = "http://localhost:3000";

const User = ({ session, complaints }) => {
  // const name = session.user.name;
  console.log(complaints);
  return (
    <div>
      <div className="flex justify-between mt-24">
        <p>Hey, {session.user.name}</p>
        <Button className="" onClick={signOut}>
          Sign Out
        </Button>
      </div>
      <ComplaintGrid complaints={complaints} />
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

  const email = session.user.email;

  await dbConnect();
  try {
    const data = await Complaint.find({ email });

    console.log(data);
    return {
      props: {
        session,
        // complaints: data,
        complaints: JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};
// try {
//   const res = await fetch(server_url + "/api/complaints/user");

//   const data = await res.JSON();
//   return {
//     props: {
//       // complaints: data.data,
//       session: session,
//       complaints: JSON.parse(JSON.stringify(data.data)),
//     },
//   };
// } catch (error) {
//   console.log(error);
//   return {
//     props: {
//       notFound: null,
//     },
//   };
//   // return {
//   //   notFound: true,
//   // };
// }

export default User;

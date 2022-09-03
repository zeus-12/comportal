import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mantine/core";
import dbConnect from "../utils/dbConnect";
import Complaint from "../models/complaint";
import ComplaintGrid from "../components/ComplaintGrid";
import { useEffect, useState } from "react";
import ComplaintModal from "../components/ComplaintModal";

const server_url = "http://localhost:3000";

const User = ({ session, complaints }) => {
  const [cur, setCur] = useState({});
  console.log(cur);

  useEffect(() => {
    if (cur) {
    }
  }, [cur]);

  return (
    <>
      <div className="flex justify-between mt-24 px-4">
        <div className="flex ">
          <p className="text-3xl mb-10 mr-4">Hey,</p>
          <p className="text-3xl">{session.user.name}</p>
        </div>
        <Button className="" onClick={signOut} variant="outline">
          Sign Out
        </Button>
      </div>
      <ComplaintGrid setCur={setCur} complaints={complaints} />
      <ComplaintModal />
    </>
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

import { authOptions } from "./api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { Button } from "@mantine/core";
import dbConnect from "../utils/dbConnect";
import Complaint from "../models/complaint";
import ComplaintGrid from "../components/ComplaintGrid";
import { useState } from "react";
import ComplaintModal from "../components/ComplaintModal";
import Router from "next/router";

const User = ({ session, complaints }) => {
  const signoutHandler = () => {
    signOut();
    Router.push("/");
  };

  const [cur, setCur] = useState({});

  return (
    <>
      <div className="flex justify-between pt-4 md:px-20 sm:px-8 px-4 items-center mb-8">
        <p className="md:text-3xl sm:text-2xl text-xl font-semibold">
          Hey, {session.user.name}
        </p>

        <Button
          className="hover:bg-[#1da1f2] hover:text-white border-[#1da1f2] text-[#1da1f2]"
          color="#1da1f2"
          onClick={signoutHandler}
          variant="outline"
        >
          Sign Out
        </Button>
      </div>
      <ComplaintGrid setCur={setCur} complaints={complaints} />
      <ComplaintModal setCur={setCur} cur={cur} />
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

    return {
      props: {
        session,
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

export default User;

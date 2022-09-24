import { signOut, useSession } from "next-auth/react";
import { Button } from "@mantine/core";
import ComplaintGrid from "../components/ComplaintGrid";
import { useContext, useEffect, useState } from "react";
import ComplaintModal from "../components/ComplaintModal";
import Router from "next/router";
// import { AuthContext } from "../utils/context";
// import { unstable_getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]";

const User = () => {
  // const name = "hi";
  const { data } = useSession();
  const name = data?.user.name;

  // const data = useContext(AuthContext);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const res = await fetch("/api/complaints/me");
      const data = (await res.json()).data;
      setComplaints(data);
    };

    fetchComplaints();
  }, []);

  const signoutHandler = () => {
    signOut();
    Router.push("/");
  };

  const [cur, setCur] = useState({});

  if (!complaints) {
    return "Loading";
  }

  return (
    <>
      <div className="flex justify-between pt-4 md:px-20 sm:px-8 px-4 items-center mb-8">
        <p className="md:text-3xl sm:text-2xl text-xl font-semibold">
          {/* Hey, {session.user.name} */}
          Hey, {name ? name : "there"}
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

// export const getServerSideProps = async (context) => {
//   const session = await unstable_getServerSession(
//     context.req,
//     context.res,
//     authOptions
//   );

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/api/auth/signin",
//         permanent: false,
//       },
//     };
//   }

//   const name = session.user.name;

//   return {
//     props: {
//       name,
//     },
//   };
// };

export default User;

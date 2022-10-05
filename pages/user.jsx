import { signOut, useSession } from "next-auth/react";
import { Button, Loader } from "@mantine/core";
import ComplaintGrid from "../components/ComplaintGrid";
import { useEffect, useState } from "react";
import ComplaintModal from "../components/ComplaintModal";
import Router from "next/router";

const User = () => {
  const { data } = useSession();
  const name = data?.user.name;

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
    return (
      <div className="h-[92vh] flex items-center justify-center">
        <Loader size="xl" variant="dots" />
      </div>
    );
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

export default User;

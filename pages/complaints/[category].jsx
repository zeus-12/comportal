import { Button, Card, Grid } from "@mantine/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import ComplaintGrid from "../../components/ComplaintGrid";
import ComplaintModal from "../../components/ComplaintModal";
import { allowedCategories, toTitleCase } from "../../utils/helper";

const server_url = "http://localhost:3000";

const FilteredPage = ({ category, complaints }) => {
  const [cur, setCur] = useState({});
  console.log(cur);

  useEffect(() => {
    if (cur) {
    }
  }, [cur]);

  return (
    <div className="">
      <p className="text-3xl p-8 font-semibold mb-2">
        {category && toTitleCase(category)}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ComplaintGrid setCur={setCur} complaints={complaints} />
        <ComplaintModal setCur={setCur} cur={cur} />
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { category } = context.query;
  if (!allowedCategories.includes(category)) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await fetch(server_url + `/api/complaints/${category}`);
    const data = await res.json();
    return {
      props: {
        category,
        complaints: data.data,
        // complaints: JSON.parse(JSON.stringify(data.data)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};

export default FilteredPage;

import { Button, Card, Grid } from "@mantine/core";
import Link from "next/link";
import ComplaintGrid from "../../components/ComplaintGrid";
import { allowedCategories, toTitleCase } from "../../utils/helper";

const server_url = "http://localhost:3000";

const FilteredPage = ({ category, complaints }) => {
  return (
    <div className="mt-20">
      <p className="ml-20 text-3xl font-semibold mb-2">
        {category && toTitleCase(category)}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ComplaintGrid complaints={complaints} />
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

  return {
    props: null,
  };
};

export default FilteredPage;

import { useState } from "react";
import ComplaintGrid from "../../components/ComplaintGrid";
import ComplaintModal from "../../components/ComplaintModal";
import { allowedCategories, toTitleCase } from "../../utils/helper";

const FilteredPage = ({ category, complaints }) => {
  const [cur, setCur] = useState({});

  return (
    <div>
      <p className="text-3xl px-8 pt-4 pb-4 font-semibold mb-2">
        {category && toTitleCase(category)}
      </p>

      {complaints.length !== 0 ? (
        <div className="flex flex-col items-center">
          <ComplaintGrid setCur={setCur} complaints={complaints} />
          <ComplaintModal setCur={setCur} cur={cur} />
        </div>
      ) : (
        <p className="text-2xl  font-semibold ">No Complaints</p>
      )}
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
    const res = await fetch(`/api/complaints/${category}`);
    const data = await res.json();
    return {
      props: {
        category,
        complaints: data.data,
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

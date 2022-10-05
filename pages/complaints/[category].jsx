import { useEffect, useState } from "react";
import ComplaintGrid from "../../components/ComplaintGrid";
import ComplaintModal from "../../components/ComplaintModal";
import { allowedCategories } from "../../utils/constants";
import { toTitleCase } from "../../utils/calculations";
import { useRouter } from "next/router";
import { Loader } from "@mantine/core";

const FilteredPage = () => {
  const [cur, setCur] = useState({});
  const [complaints, setComplaints] = useState([]);
  let category = useRouter().query.category;

  useEffect(() => {
    const fetchComplaints = async () => {
      const res = await fetch(`/api/complaints/${category}`);
      const data = (await res.json()).data;
      setComplaints(data);
    };
    if (category) {
      if (!allowedCategories.includes(category)) {
        return {
          notFound: true,
        };
      }

      fetchComplaints();
    }
  }, [category]);

  if (!complaints.length) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader variant="dots" />;
      </div>
    );
  }

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
        <p className="text-xl ml-8 font-semibold ">No Complaints</p>
      )}
    </div>
  );
};

export default FilteredPage;

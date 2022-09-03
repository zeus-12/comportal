const server_url = "http://localhost:3000";

const Test = ({ complaints }) => {
  console.log(complaints);
  return <div>hi</div>;
};

export const getServerSideProps = async () => {
  try {
    const res = await fetch(server_url + "/api/complaints");
    console.log(res);
    const data = await res.json();
    return {
      props: {
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

export default Test;

import { useState } from "react";
import Router, { useRouter } from "next/router";
import { Button, Card, Text, Grid, Pagination } from "@mantine/core";
import Link from "next/link";

// const complaints = [
//   { key: 1 },
//   { key: 2 },
//   { key: 3 },
//   { key: 4 },
//   { key: 5 },
//   { key: 6 },
//   { key: 7 },
//   { key: 8 },
//   { key: 9 },
//   { key: 10 },
//   { key: 11 },
//   { key: 12 },
//   { key: 13 },
//   { key: 14 },
//   { key: 15 },
//   { key: 16 },
//   { key: 17 },
//   { key: 18 },
//   { key: 19 },
//   { key: 20 },
//   { key: 21 },
//   { key: 22 },
//   { key: 23 },
//   { key: 24 },
//   { key: 25 },
//   { key: 26 },
//   { key: 27 },
//   { key: 28 },
//   { key: 29 },
// ];

const server_url = "http://localhost:3000";

const FilteredPage = ({ complaints }) => {
  return (
    <>
      <Text style={{ margin: "40px" }} weight={500} size="lg" mt="md">
        Health and Hygiene
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid style={{ width: "90vw" }} gutter={20} justify="center">
          {complaints &&
            complaints.map((item, id) => {
              return (
                <Grid.Col xs={8} sm={7} md={6} lg={4} key={id}>
                  <Link href="">
                    <Card
                      className="comptype"
                      shadow="sm"
                      p="xl"
                      style={{ padding: "2vmin", aspectRatio: " 2 / 1" }}
                    >
                      <div className="flex justify-between">
                        <p className="text-2xl font-semibold">{item.title}</p>
                        <p className="text-gray-400">27/11/2001</p>
                      </div>
                      <p>{item.description}</p>
                    </Card>
                  </Link>
                </Grid.Col>
              );
            })}
        </Grid>
        <Pagination
          style={{ margin: "5vmin 0" }}
          total={10}
          color="gray"
          radius="md"
        />
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const allowedCategories = ["health_hygiene", "sports", "technical", "other"];
  const { category } = context.query;
  if (!allowedCategories.includes(category)) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await fetch(server_url + "/api/complaints");
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

  return {
    props: null,
  };
};

export default FilteredPage;

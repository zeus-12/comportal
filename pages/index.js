import { Card, Image, Text, Grid } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";

const comptype = [
  {
    href: "health_hygiene",
    title: "Health and Hygiene",
    imageurl: "/health.jpg",
  },
  {
    href: "staff",
    title: "Staff",
    imageurl: "/staff.jpg",
  },

  {
    href: "electrical",
    title: "Electrical",
    imageurl: "/electrical.jpg",
  },
  {
    href: "plumbing",
    title: "Plumbing",
    imageurl: "/plumbing.jpeg",
  },
  {
    href: "others",
    title: "Others",
    imageurl: "/others.jpeg",
  },
];
const server_url = "http://localhost:3000";
export default function Home({ complaints }) {
  console.log(complaints);
  return (
    <div className="">
      <Head>
        <title>Complaint Portal</title>
        <meta
          name="description"
          content="Submit your hostel related complaints here"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8">
        <p className="font-semibold text-3xl">Complaints</p>
      </div>

      <Grid
        style={{ width: "80vw", marginLeft: "10vw" }}
        gutter={20}
        justify="center"
      >
        {comptype.map((a, id) => {
          return (
            <Grid.Col key={id} sm={9} md={5} lg={5} xl={4}>
              <Link href={`/complaints/${a.href}`}>
                <Card
                  className="comptype hover:cursor-pointer"
                  shadow="sm"
                  p="lg"
                  radius="md"
                  withBorder
                >
                  <Card.Section>
                    <Image
                      src={a.imageurl}
                      style={{ aspectRatio: "2 / 1", overflow: "hidden" }}
                    />
                    <Text
                      weight={500}
                      style={{
                        padding: "0.5rem",
                        width: "100%",
                        textAlign: "right",
                      }}
                    >
                      {a.title}
                    </Text>
                  </Card.Section>
                </Card>
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}

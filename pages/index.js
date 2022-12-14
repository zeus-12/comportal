import { Card, Image, Text, Grid } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { categoryWithTitleUrl } from "../utils/constants";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Complaint Portal</title>
        <meta
          name="description"
          content="Submit your hostel related complaints here"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="pt-4 md:px-20 sm:px-8 px-4 mb-8">
        <p className="font-semibold text-3xl">Complaints</p>
      </div>

      <Grid
        className="mx-auto"
        style={{ width: "90vw" }}
        gutter={20}
        justify="center"
      >
        {categoryWithTitleUrl.map((a, id) => {
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
                      alt={a.title}
                      src={a.imageurl}
                      style={{ aspectRatio: "2 / 1", overflow: "hidden" }}
                    />
                    <Text
                      weight={500}
                      className="bg-[#0d1d31]"
                      color="white"
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

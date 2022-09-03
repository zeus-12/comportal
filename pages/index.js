import { Card, Image, Text, Grid } from '@mantine/core';
import Head from "next/head";
import Link from 'next/link';



const comptype = [
  {
    href: "/hygiene",
    title: "Hygiene",
    imageurl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
  },
  {

    href: "",
    title: "Sports",
    imageurl: ""
  },
  {
    href: "",
    title: "Staff",
    imageurl: ""
  },
  {
    href: "",
    title: "Common Rooms",
    imageurl: ""
  },
  {
    href: "",
    title: "Electrical",
    imageurl: ""
  },
  {
    href: "",
    title: "Plumbing",
    imageurl: ""
  }
]

export default function Home() {
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
        <p className="font-semibold text-3xl">Complaint Portal</p>
      </div>



      <Grid style={{ width: "80vw", marginLeft: "10vw" }} gutter={20} justify="center">

        {comptype.map((a) => {

          return (
            <Grid.Col xs={8} sm={7} md={6} lg={4}>
              <Link href={a.href}>
              <Card className="comptype" shadow="sm" p="lg" radius="md" withBorder>
                <Card.Section>
                  <Image
                    src={a.imageurl}
                    style={{ aspectRatio: "2 / 1", overflow: "hidden" }}
                  />
                  <Text weight={500} style={{ padding: "0.5rem", width: "100%", textAlign: "right" }}>{a.title}</Text>
                </Card.Section>
              </Card>
              </Link>
            </Grid.Col>
          )
        })}

      </Grid>
    </div>


  );
}

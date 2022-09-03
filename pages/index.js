import { Button } from "@mantine/core";
import Head from "next/head";

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
    </div>
  );
}

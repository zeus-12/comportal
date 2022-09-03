import { Card, Grid } from "@mantine/core";
import Link from "next/link";

const ComplaintGrid = ({ complaints }) => {
  return (
    <div>
      <Grid style={{ width: "90vw" }} gutter={20} justify="center">
        {complaints &&
          complaints.map((item, id) => {
            return (
              <Grid.Col xs={8} sm={7} md={6} lg={4} key={id}>
                <Link href="">
                  <Card
                    className="comptype hover:cursor-pointer"
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
    </div>
  );
};
export default ComplaintGrid;

import { Card, Grid } from "@mantine/core";
import Link from "next/link";

const ComplaintGrid = ({ complaints, setCur = () => {} }) => {
  return (
    <div>
      <Grid style={{ width: "90vw" }} mx={"auto"} gutter={20}>
        {complaints &&
          complaints.map((item, id) => {
            return (
              <GridWrapper key={id}>
                <Link href="">
                  <ComplaintCard setCur={setCur} item={item} />
                </Link>
              </GridWrapper>
            );
          })}
      </Grid>
    </div>
  );
};

export const GridWrapper = ({ children }) => {
  return (
    <Grid.Col xs={8} sm={7} md={6} lg={4}>
      {children}
    </Grid.Col>
  );
};

export const ComplaintCard = ({ item, setCur }) => {
  return (
    <Card
      onClick={() => setCur(item)}
      className="comptype hover:cursor-pointer h-32 bg-[#0d1d31]"
      shadow="sm"
      radius="md"
      withBorder
    >
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">{item.title}</p>
        <p className="text-gray-400">27/11/2001</p>
      </div>
      <p className="overflow-ellipsis break-words">{item.description}</p>
    </Card>
  );
};
export default ComplaintGrid;

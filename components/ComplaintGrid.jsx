import { Card, Grid } from "@mantine/core";
import Link from "next/link";
import { isostringToDate } from "../utils/helper";

const ComplaintGrid = ({ complaints, setCur = () => {} }) => {
  return (
    <div>
      <GridWrapper>
        <Grid style={{ width: "90vw" }} mx="auto" gutter={20}>
          {complaints &&
            complaints.map((item, id) => {
              return (
                <Grid.Col mx="auto" xs={8} sm={7} md={6} lg={4} key={id}>
                  <Link href="">
                    <ComplaintCard setCur={setCur} item={item} />
                  </Link>
                </Grid.Col>
              );
            })}
        </Grid>
      </GridWrapper>
    </div>
  );
};

export const GridWrapper = ({ children }) => {
  return (
    <Grid style={{ width: "90vw" }} mx="auto" gutter={20}>
      {children}
    </Grid>
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
      <div className="flex justify-between my-2">
        <p className="text-2xl font-semibold">{item.title}</p>
        <p className="text-gray-400">{item.createdAt}</p>
      </div>
      <p className="truncate break-words">{item.description}</p>
    </Card>
  );
};
export default ComplaintGrid;

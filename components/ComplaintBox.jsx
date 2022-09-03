import { TextInput, Button, Select, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Modal, Group } from "@mantine/core";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSession } from "next-auth/react";

export default function ComplaintBox({ setNewRequest, newRequest }) {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;

  const data = ["Health & Hygiene", "Technical issues", "Sports", "Others"];
  const form = useForm({
    initialValues: {
      phoneNumber: "",
      category: "",
      desc: "",
      title: "",
      rel: [{ link: "" }],
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("hi");
    await fetch("/api/complaints/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.values),
    });
  };

  const fields = form.values.rel.map((item, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="Link"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`rel.${index}.link`)}
      />
      <Button onClick={() => form.removeListItem("rel", index)}>
        <RiDeleteBin6Line />
      </Button>
    </Group>
  ));

  return (
    <>
      <Modal
        opened={newRequest}
        onClose={() => setNewRequest(false)}
        title="Register Your Complaint"
        classNames={{
          title: "text-2xl font-semibold ",
        }}
        centered
      >
        {
          <div className="">
            <form onSubmit={submitHandler} className="flex flex-col">
              {/* <p>Name: {name}</p>
              <p>Email: {email}</p> */}
              <TextInput
                required={true}
                placeholder="Phone Number"
                label="Phone Number"
                variant="filled"
                size="md"
                {...form.getInputProps("num")}
              />

              <Select
                label="Category"
                placeholder="Pick One"
                variant="filled"
                size="md"
                {...form.getInputProps("category")}
                data={data}
              />
              <TextInput
                required={true}
                placeholder="eg:Monkey issue"
                label="Title"
                variant="filled"
                size="md"
                {...form.getInputProps("title")}
              />
              <Textarea
                required={true}
                placeholder="Please elaborate on your complaint"
                label="Description"
                variant="filled"
                size="md"
                {...form.getInputProps("desc")}
              />
              <p className="font-medium">
                Add relevent links for your complaint
              </p>

              {fields}
              <Group position="center" mt="md">
                <Button
                  onClick={() => form.insertListItem("rel", { link: "" })}
                >
                  Add Link
                </Button>
              </Group>

              <Button
                type="submit"
                variant="filled"
                centered
                size="md"
                classNames={{
                  root: "bg-[#1da1f2] mt-2 w-[]",
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        }
      </Modal>
    </>
  );
}

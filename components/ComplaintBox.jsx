import {
  TextInput,
  Button,
  Select,
  Textarea,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Modal, Group } from "@mantine/core";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { categoryData } from "../utils/helper";
import { useState } from "react";
import { Error, Success } from "./Notifications";

export default function ComplaintBox({ setNewRequest, newRequest }) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { data: session } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;

  const form = useForm({
    initialValues: {
      phoneNumber: "",
      category: "",
      description: "",
      title: "",
      links: [{ link: "" }],
    },
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/complaints/${form.values.category}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form.values, name, email }),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    form.reset();
    setNewRequest(false);
  };

  const fields = form.values.links.map((item, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="Link"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`links.${index}.link`)}
      />
      <Button
        onClick={() => form.removeListItem("links", index)}
        variant="outline"
        color="red"
        className="hover:text-white hover:bg-red-500"
      >
        <RiDeleteBin6Line />
      </Button>
    </Group>
  ));

  return (
    <>
      {success && <Success message="Added Complaint" />}
      {error && <Error message="Added Complaint" />}
      <Modal
        opened={newRequest}
        onClose={() => setNewRequest(false)}
        title="Register Your Complaint"
        classNames={{
          title: "text-2xl font-semibold",
        }}
        centered
      >
        {
          <div className="">
            <form onSubmit={submitHandler} className="flex flex-col">
              <div className="mb-2">
                <p>{name}</p>
                <p>{email}</p>
              </div>
              <NumberInput
                required={true}
                placeholder="Phone Number"
                label="Phone Number"
                variant="filled"
                size="md"
                {...form.getInputProps("phoneNumber")}
              />

              <Select
                label="Category"
                placeholder="Pick One"
                variant="filled"
                size="md"
                {...form.getInputProps("category")}
                data={categoryData}
              />
              <TextInput
                required={true}
                placeholder="eg:Leakage in Kitchen"
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
                {...form.getInputProps("description")}
              />
              <p className="font-medium">
                Add relevent links for your complaint
              </p>

              {fields}
              <Group position="center" mt="md">
                <Button
                  onClick={() => form.insertListItem("links", { link: "" })}
                  variant="outline"
                  className="hover:bg-[#1da1f2] hover:text-white "
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

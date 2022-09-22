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
import { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { NotificationContext } from "../context/NotificationContext";

export default function NewComplaint({ setNewRequest, newRequest }) {
  const { setMessage, setType } = useContext(NotificationContext);

  const { data: session } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;

  const form = useForm({
    initialValues: {
      // phoneNumber: "",
      category: "",
      description: "",
      title: "",
      links: [],
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
      setType("success");
      setMessage("Your complaint has been submitted");
      setTimeout(() => {
        setType(null);
      }, 3000);
    } else {
      setType("error");
      setMessage("Something went wrong");
      setTimeout(() => {
        setType(null);
      }, 3000);
    }
    form.reset();
    setNewRequest(false);
  };

  const LinksFields = form.values.links.map((item, index) => (
    <Group key={index}>
      <TextInput
        variant="filled"
        placeholder="Link"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`links.${index}`)}
      />
      <Button
        onClick={() => form.removeListItem("links", index)}
        variant="outline"
        color="red"
        className="hover:text-white hover:bg-red-500"
      >
        <RiDeleteBin6Line className="w-4 h-5" />
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
          title: "text-2xl font-semibold",
        }}
        centered="true"
      >
        {
          <div className="">
            <form onSubmit={submitHandler} className="flex gap-2 flex-col">
              <div className="flex justify-between text-gray-400 font-semibold">
                <p>{name}</p>
                <p>{email}</p>
              </div>
              {/* remember to UNCOMMENT PHONENUMBER FROM MODEL WHEN REQ */}
              {/* <NumberInput
                hideControls={true}
                required={true}
                placeholder="Phone Number"
                label="Phone Number"
                variant="filled"
                size="md"
                {...form.getInputProps("phoneNumber")}
              /> */}

              <Select
                label="Category"
                placeholder="Choose category"
                variant="filled"
                size="md"
                {...form.getInputProps("category")}
                data={categoryData}
              />
              <TextInput
                required={true}
                placeholder="eg: No Wi-Fi"
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
              <div className="flex justify-between  items-center">
                <p className="font-medium">Add links</p>
                <Button
                  onClick={() => form.insertListItem("links", "")}
                  variant="outline"
                  className="hover:bg-[#1da1f2] hover:text-white "
                >
                  <HiOutlinePlus className="w-4 h-5" />
                </Button>
              </div>

              {LinksFields}

              <Button
                type="submit"
                variant="filled"
                centered="true"
                size="md"
                classNames={{
                  root: "bg-blue-400 hover:bg-blue-300 mt-2 w-[]",
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

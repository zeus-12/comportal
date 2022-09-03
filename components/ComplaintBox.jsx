import { useState } from 'react';
import { TextInput, Button, Select,Textarea} from "@mantine/core";
import { useForm } from '@mantine/form';
import { Modal, Group } from '@mantine/core';

export default function Demo() {
  const [opened, setOpened] = useState(true);
  const data = ['Health & Hygiene', 'Technical issues','Sports','Others']
  const form = useForm({
    initialValues: {
      name:"",
      num:"",
      category:"",
      desc:"",
      title:"",
      rel : [{link:''}]
    },
  });
  const fields = form.values.rel.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="Link"
        withAsterisk
        sx={{ flex: 1 }}
        {...form.getInputProps(`rel.${index}.link`)}
        classNames={{
          input:"bg-[#d6d3d1] text-black"
        }}
      />
      <Button onClick={() => form.removeListItem('rel', index)}
      classNames={{
        root: "bg-[#1da1f2]",
      }}>
        Delete
      </Button>
    </Group>
  ));
  return (
    <>
      <Modal
        opened= {opened}
        onClose={() => setOpened(false)}
        title="Register Your Complaint"
        classNames={{
          title: "text-2xl font-semibold text-black ",
          modal:"bg-white",
          close: "bg-black"
        }}
        centered
      >
        {
            
            <div className="">      
              <form className="flex flex-col">
                <TextInput
                  placeholder="Name"
                  label="Name"
                  variant="filled"
                  size="md"
                  classNames={{
                    label: "text-black ",
                    input:"bg-[#d6d3d1] text-black"
                  }}
                  {...form.getInputProps('name')}
                  
                />
                <TextInput
                  placeholder="Phone Number"
                  label="Phone Number"
                  variant="filled"
                  size="md"
                  classNames={{
                    label: "text-black ",
                    input:"bg-[#d6d3d1] text-black"
                  }}
                  {...form.getInputProps('num')}
                />
                
                <Select
                  label="Category"
                  placeholder="Pick One"
                  variant="filled"
                  size="md"
                  classNames={{
                    label: "text-black ",
                    input:"bg-[#d6d3d1] text-black"
                  }}
                  {...form.getInputProps('category')}
                  
                  data={data}

                />
                <TextInput
                  placeholder="eg:Monkey issue"
                  label="Title"
                  variant="filled"
                  size="md"
                  classNames={{
                    label: "text-black ",
                    input:"bg-[#d6d3d1] text-black"
                  }}
                  {...form.getInputProps('title')}
                />
                <Textarea
                  placeholder="Please elaborate on your complaint"
                  label="Description"
                  variant="filled"
                  size="md"
                  classNames={{
                    label: "text-black ",
                    input:"bg-[#d6d3d1] text-black"
                  }}
                  {...form.getInputProps('desc')}
                />
                <p className='text-black font-medium'>Add relevent links for your complaint</p>
          
                        
                          {fields}
                          <Group position="center" mt="md">
                            <Button
                              onClick={() =>
                                form.insertListItem('rel', { link: ''})
                              }
                              classNames={{
                                root: "bg-[#1da1f2]",
                              }}
                            >
                              Add Link
                            </Button>
                          </Group>

                          
                <Button
                  
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


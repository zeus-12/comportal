import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

const ViewCard = () => {
    const [opened, setOpened] = useState(true);
  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Title"
        classNames={{
            title: "text-4xl text-black",
            modal:"bg-white"
          }}
        centered
      >
        {
            <div className='text-black'>
                <div className='flex justify-between mb-2 '>
                    <h2 className='text-lg'>Description</h2>
                    <div className='flex'>
                        <h3>Status :</h3>
                        <h3 className='text-[#fbbf24] ml-1'>Pending</h3>
                    </div>
                </div>
                <p>The most intense geomagnetic storm in recorded history peaked between 1 and 2 September 1859. Known as the Carrington Event, it caused strong auroral displays that were reported globally and caused sparking and even fires in multiple telegraph stations.</p>
                <div className='mt-2 flex justify-between'>
                    <div>
                        <h2>Posted By</h2>
                        <h2>Name</h2>
                        {/* <h2>Posted Anonymously</h2> */}
                        
                    </div>
                    <div>
                        <h2>03/09/22</h2>
                    </div>

                </div>
            </div>
        }
      </Modal>
  )
}

export default ViewCard
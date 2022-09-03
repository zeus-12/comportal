import { Notification } from '@mantine/core';
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export default function Submitted(){
    return (
        <Notification icon={<IoCheckmarkDoneCircleSharp/>} title="Submitted" radius="md"
        classNames={{
            children:"bg-[#84cc16]"
        }
        }
        />
    )
}

export default function Error(){
    return (
        <Notification icon={MdCancel} title="Error" radius="md"
        classNames={{
            children:"bg-[#dc2626]"
        }
        }
        />
    )
}

export default function Loading(){
    return (
        <Notification title="Just a second" radius="md"
        loading
        classNames={{
            children:"bg-[#0e7490]"
        }}
        >
            Please wait until your feedback is uploaded, you cannot close this notification yet
        </Notification>
    )
}
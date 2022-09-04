import { Notification } from "@mantine/core";
import { MdCancel } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export function Success({ success }) {
  return (
    <Notification
      className="fixed z-10 right-4 bottom-[2vh]"
      disallowClose
      icon={<IoCheckmarkDoneCircleSharp />}
      title="Submitted"
      radius="md"
      classNames={{
        children: "bg-[#84cc16]",
      }}
    >
      {success}
    </Notification>
  );
}

export function Error({ error }) {
  return (
    <Notification
      className="fixed z-10 right-4 bottom-[2vh]"
      disallowClose
      icon={MdCancel}
      title="Error"
      radius="md"
      classNames={{
        children: "bg-[#dc2626]",
      }}
    >
      {error}
    </Notification>
  );
}

// export function Loading({ message }) {
//   return (
//     <Notification
//       className="fixed z-10 right-4 bottom-[2vh]"
//       disallowClose
//       title="Just a second"
//       radius="md"
//       loading
//       classNames={{
//         children: "bg-[#0e7490]",
//       }}
//     >
//       {message}
//     </Notification>
//   );
// }

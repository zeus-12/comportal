import { Notification as MantineNotification } from "@mantine/core";
import { MdError } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export default function Notification({ message, type }) {
  if (!type) {
    return;
  }
  return (
    <MantineNotification
      className="fixed z-50 right-4 bottom-[2vh]"
      disallowClose
      icon={type === "error" ? <MdError /> : <IoCheckmarkDoneCircleSharp />}
      title={type === "error" ? "Error" : "Success"}
      radius="md"
      color={type === "error" ? "red" : "green"}
      classNames={{
        children: type === "error" ? "bg-[#dc2626]" : "bg-[#84cc16]",
      }}
    >
      {message}
    </MantineNotification>
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

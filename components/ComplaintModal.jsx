import { Modal } from "@mantine/core";
import { isostringToDate } from "../utils/date";

const ComplaintModal = ({ cur, setCur }) => {
  const opened = Object.values(cur).length > 0;

  return (
    <Modal
      opened={opened}
      onClose={() => setCur({})}
      size="lg"
      title={cur.title}
      classNames={{
        title: "text-4xl",
        modal: "bg-[#0D2A53] rounded-xl",
      }}
      centered
    >
      {cur && (
        <div>
          <p className="text-[#78716c]">{cur.description}</p>
          <div className="mt-2 flex justify-between">
            <div>
              <p className="text-gray-300">- {cur.name}</p>
            </div>
            <div>
              <p className="text-gray-400">{isostringToDate(cur.createdAt)}</p>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ComplaintModal;

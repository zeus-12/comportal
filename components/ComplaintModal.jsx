import { Modal } from "@mantine/core";

const ComplaintModal = ({ cur, setCur }) => {
  const opened = Object.values(cur).length > 0;

  return (
    <Modal
      opened={opened}
      onClose={() => setCur({})}
      title={cur.title}
      classNames={{
        title: "text-4xl",
      }}
      centered
    >
      {cur && (
        <div>
          {/* <div className="flex justify-between mb-2 ">
            <h2 className="text-lg">{cur.title}</h2>
          </div> */}
          <p className="text-[#78716c]">{cur.description}</p>
          <div className="mt-2 flex justify-between">
            <div>
              <h2>Posted By</h2>
              <h2>{cur.name}</h2>
            </div>
            <div>
              <h2>03/09/22</h2>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ComplaintModal;

import { Burger } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Logo, LinkElements, NavbarDrawer } from "./NavbarComponents";

export default function Navbar({ setNewRequest }) {
  const { data: session } = useSession();

  //for the burger & drawer
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <div className="px-6 border-b-[1px] border-gray-800 w-screen h-[8vh] bg-[#000000] relative top-0 flex justify-between items-center z-50 ">
        <Logo setOpened={setOpened} />
        <div className="sm:hidden">
          <Burger
            color="#60a5fa"
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </div>

        {/* so that the burger icon remains in the case --- you open the burger icon then increases the size */}
        {opened && (
          <div className="hidden sm:flex">
            <Burger
              color="#26c6da"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
          </div>
        )}
        {!opened && (
          <div className="text-gray-300 text-lg font-medium hidden xl:gap-8 sm:flex gap-8">
            <LinkElements setNewRequest={setNewRequest} session={session} />
          </div>
        )}
      </div>

      <div className="absolute top-10">
        <NavbarDrawer
          setNewRequest={setNewRequest}
          session={session}
          setOpened={setOpened}
          opened={opened}
        />
      </div>
    </div>
  );
}

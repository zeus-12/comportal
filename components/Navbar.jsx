import { Burger, Drawer } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

const LinkItems = [
  { link: "/", name: "Complaints" },
  { link: "/new", name: "New Complaint" },
];

const LinkComponent = ({ link, name }) => (
  <Link href={link} passHref>
    <p className="px-2 py-1 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900">
      {name}
    </p>
  </Link>
);

const LinkElements = () => (
  <>
    {LinkItems.map((item, i) => (
      <LinkComponent key={i} link={item.link} name={item.name} />
    ))}
    {/* login and user */}
    {/* todo */}
    <LinkComponent link="/login" name="Login" />
    <LinkComponent link="/user" name="User" />
  </>
);

const Logo = ({ setOpened }) => (
  <Link href="/" passHref>
    <div
      onClick={() => setOpened(false)}
      className="flex items-center hover:cursor-pointer"
    >
      <p className="text-lg">
        Com<span className="text-blue-400">portal</span>
      </p>
    </div>
  </Link>
);

const NavbarDrawer = ({ opened, setOpened }) => (
  <Drawer
    className="pt-4 px-2 bg-black"
    onClick={() => setOpened(false)}
    opened={opened}
    position="top"
    size="100vh"
    onClose={() => setOpened(false)}
    overlayOpacity={0.55}
    overlayBlur={3}
    withCloseButton={false}
    zIndex={20}
  >
    <div className="text-2xl pt-16 space-y-4">
      <LinkElements />
    </div>
  </Drawer>
);

export default function Navbar() {
  //for the burger & drawer
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <div className="px-6 border-b-[1px] border-gray-800 w-screen h-16 bg-black fixed top-0 flex justify-between items-center z-50 ">
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
            <LinkElements />
          </div>
        )}
      </div>

      <div className="absolute top-10">
        <NavbarDrawer setOpened={setOpened} opened={opened} />
      </div>
    </div>
  );
}

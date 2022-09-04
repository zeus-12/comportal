import { Drawer } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";
import { Error } from "./Notifications";

export const LinkComponent = ({ link, name }) => (
  <Link href={link} passHref>
    <p className="px-2 py-1 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900">
      {name}
    </p>
  </Link>
);

export const LinkElements = ({ setNewRequest, session }) => {
  const [error, setError] = useState(false);
  const newRequestHandler = () => {
    if (session) {
      setNewRequest(true);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <>
      {error && <Error error="Please login to add complaint" />}
      <LinkComponent link="/" name="Complaints" />

      <p
        onClick={newRequestHandler}
        className="px-2 py-1 text-gray-300 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900"
      >
        New Request
      </p>

      {/* Logout & SignIn*/}
      {session && (
        <div className="flex justify-center items-center">
          <img
            alt="user"
            src={session.user.image}
            className="w-9 h-9 rounded-full"
          />
          <LinkComponent link="/user" name={session.user.name} />
        </div>
      )}

      {!session && <LinkComponent link="/api/auth/signin" name="Login" />}
    </>
  );
};

export const Logo = ({ setOpened }) => (
  <Link href="/" passHref>
    <div
      onClick={() => setOpened(false)}
      className="flex items-center hover:cursor-pointer"
    >
      <p className="text-2xl">
        Com<span className="text-blue-400">portal</span>
      </p>
    </div>
  </Link>
);

export const NavbarDrawer = ({ setNewRequest, opened, setOpened, session }) => (
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
      <LinkElements setNewRequest={setNewRequest} session={session} />
    </div>
  </Drawer>
);

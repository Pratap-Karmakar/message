import Image from "next/image";
import React from "react";
import messenger from "../public/messenger.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = true;

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <img
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
            alt="Profile Pic"
          />
          <div>
            <p className="text-blue-400">Ligged in as:</p>
            <p className="text-lg">Pratap Karmakar</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex items-center space-x-2">
          <Image src={messenger} alt="logo" width={50} height={10} />
          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href='/auth/signin'
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;

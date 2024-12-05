import { FcUpload } from "react-icons/fc";
import React from "react";

export default function Header() {
  return (
    <header className="text-white p-10 flex flex-col items-center justify-center space-y-4">
      <FcUpload className="h-40 w-40" />
      <h1 className="text-3xl">Investment Calculator </h1>
      
    </header>
  );
}

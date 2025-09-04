"use client";

import { useState } from "react";
import CoverPage from "./cover";
import HomePage from "./home";

export default function UndanganPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen ? (
        <CoverPage onOpen={() => setIsOpen(true)} />
      ) : (
        <HomePage />
      )}
    </>
  );
}

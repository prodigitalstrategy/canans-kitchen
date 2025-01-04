import React from "react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src="/logo.png" alt="Canan's Kitchen Logo" className="h-12 w-auto" />
    </Link>
  );
}

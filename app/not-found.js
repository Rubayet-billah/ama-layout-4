import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import { Home } from "react-feather";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="mb-4 text-center mrf-sub-heading text-primary">
        Oops! 404 - Page not found
      </h1>
      <p className="mb-8 text-center lg:text-xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button>
          <Home size={14} /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

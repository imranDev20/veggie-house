import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <>
      <Link
        className={`mx-2 px-2 py-2 hover:text-orange-500 transition-colors font-semibold ${
          match ? "text-orange-500" : "text-neutral-600"
        }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </>
  );
};

export default CustomLink;

import Link from "next/link";
import { ChevronRight } from "react-feather";

const Breadcrumb = ({ items }) => {
  return (
    <nav
      className="flex flex-wrap items-center space-x-1 text-sm"
      aria-label="breadcrumb"
    >
      {items?.map((item, index) => (
        <div key={index} className="flex items-center">
          {index !== 0 && <ChevronRight className="w-4 h-4 mx-1" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;

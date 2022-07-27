import { useState } from "react";
import { IoLogoDribbble } from "react-icons/io"

const NavMenu = ({ children }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <>
      <ul
        className={`absolute right-2 md:right-4 md:top-1/4 flex border border-neutral-300 dark:border-neutral-700 rounded-b-lg
                    overflow-hidden transition-all duration-150 md:duration-300 bg-white divide-x ${
                      open
                        ? "top-full opacity-100"
                        : "top-1/4 opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
                    }`}
      >
        {children}
      </ul>
      <div className="md:hidden">
        <button onClick={handleClick} className="px-3 py-2 w-min h-min">
          <IoLogoDribbble />
        </button>
      </div>
    </>
  );
};

export default NavMenu;

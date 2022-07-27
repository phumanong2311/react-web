import { Link, To, useMatch, useResolvedPath } from 'react-router-dom';

/* // TODO: Instead of label prop, I would rather pass children.
  In case we want to pass an image or something.
  -jb
*/

const NavItem = ({ to, label }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={`nav font-source font-semibold dark:font-medium text-md py-2 px-4 ${
        match ? 'text-indigo-500' : 'text-black dark:text-white'
      }`}>
      {label}
    </Link>
  );
};

export default NavItem;
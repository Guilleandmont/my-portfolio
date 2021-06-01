import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-2 md:space-x-12">
        <li>
          <Link href="#">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

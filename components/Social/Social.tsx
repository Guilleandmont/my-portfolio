import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

const Social = () => {
  return (
    <div>
      <IconContext.Provider value={{ size: "2.5rem" }}>
        <ul className="flex flex-row my-8 space-x-4">
          <li>
            <Link href="#">
              <a>
                <FaGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <FaTwitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <FaLinkedin />
              </a>
            </Link>
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default Social;

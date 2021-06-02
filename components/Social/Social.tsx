import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Social = () => {
  return (
    <div>
      <ul className="flex flex-row my-8 space-x-4">
        <li>
          <Link href="#">
            <a>
              <FaGithub className="w-10 h-10" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <FaTwitter className="w-10 h-10" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <FaLinkedin className="w-10 h-10" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Social;

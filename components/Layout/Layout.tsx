import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <div className="py-4 px-6 min-h-screen md:py-20 px-24">{children}</div>
  );
};

export default Layout;

import { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="p-8 md:p-24">{children}</div>;
};

export default Layout;

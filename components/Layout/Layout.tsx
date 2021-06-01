import { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="py-20 px-24 min-h-screen">{children}</div>;
};

export default Layout;

import { FC } from "react";

const Layout: FC = ({ children }) => {
  return <div className="m-8 min-h-screen">{children}</div>;
};

export default Layout;

import { Outlet } from "react-router";
import Header from "../../components/Header";

const PaginaBase = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default PaginaBase;

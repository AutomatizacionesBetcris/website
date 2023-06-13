import LogoBC from "../../src/img/logo-blanco.png";

const NavBar = () => {
  return (
    <>
      <nav className="flex flex-col border top-0 z-50 items-center justify-center h-20 bg-sky-800">
        <img src={LogoBC} alt="Logo" className="h-10" />
      </nav>
    </>
  );
};

export default NavBar;

import { NavLink,Outlet } from "react-router";


const BasicLayout = () => {
  return (
    <div>
      <header>
        <h1>Avans keuzekompas</h1>
        <nav >
      <NavLink to="/overview">Overview</NavLink>
  </nav>
      </header>
      <main><Outlet/></main>
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
};

export default BasicLayout;
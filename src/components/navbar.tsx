
import NavSearch from "./nav-search";
import Navlinks from "./navlinks";

export default function Navbar() {
    console.log("Rendering Navbar");
  return (
    <nav>
      <h2>My Navbar</h2>
      <Navlinks/>
      <NavSearch/>
    </nav>
  );
}
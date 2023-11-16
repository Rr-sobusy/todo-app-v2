import { useContext } from "react";
import Typography from "./Typography";
// context
import { ThemeContext } from "../context/Provider";

// svg icons
import Sun from "../assets/icon-sun.svg";
import Moon from "../assets/icon-moon.svg";

type Props = {};

const ThemeToggler = (props: Props) => {
  const theme = useContext(ThemeContext);

  const Icon = theme?.theme === "dark" ? Sun : Moon;

  function changeTheme() {
    theme?.toggleTheme();
  }
  return (
    <div className="flex items-center justify-between">
      <Typography className="tracking-wider text-white">TODO</Typography>
      <img onClick={changeTheme} className="cursor-pointer" src={Icon} alt="" />
    </div>
  );
};

export default ThemeToggler;

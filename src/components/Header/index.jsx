import "./styles.scss";
import { LuSparkle } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { SwitchDarkMode } from "./components/SwitchDarkMode";

export function Header() {
  return (
    <header className="headerContainer">
      <div>IV</div>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Projetos</a>
          </li>
          <LuSparkle size={15} className="filled-icon" />
          <li>
            <a href="#">Certificações</a>
          </li>
          <LuSparkle size={15} className="filled-icon" />
          <li>
            <a href="#">Sobre</a>
          </li>
          <LuSparkle size={15} className="filled-icon" />
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </div>
      <div className="switchHeader">
        <div>
          <SwitchDarkMode />
        </div>
        <LuSparkle size={15} className="filled-icon" />
        <div>
          <TbWorld size={20} />
        </div>
      </div>
    </header>
  );
}

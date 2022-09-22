import { faPlus, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Logo from "../../../public/logo.svg";
import classes from "./home-page.module.scss";

export interface HomePageProps {}

export const HomePage: React.VFC<HomePageProps> = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <header>
        <img className={classes.logo} src={Logo} alt="logo" />
        <h1 className={classes.intro}>Welcome To</h1>
        <h1 className={classes.title}>MigRush</h1>
      </header>
      <div className={classes.menu}>
        <button onClick={() => navigate("/new")}>
          <FontAwesomeIcon icon={faPlus} />
          <span>Create Event</span>
        </button>
        <button onClick={() => navigate("/join")}>
          <FontAwesomeIcon icon={faRightToBracket} />
          <span>Join Event</span>
        </button>
      </div>
    </div>
  );
};

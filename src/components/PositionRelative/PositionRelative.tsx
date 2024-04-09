import NumbersIncrement from "../NumbersIncrement/NumbersIncrement";
import Plan from "../Plan/Plan";
import styles from "./PositionRelative.module.css";
import TwoColumns from "../TwoColumns/TwoColumns";
import SmallCarousel from "../SmallCarousel/SmallCarousel";
import News from "../News/News";
import Modules from "../Modules/Modules";
import Footer from "../Footer/Footer";
import ChoiceForm from "../ChoiceForm/ChoiceForm";
import Team from "../Team/Team";
import ErrorPage from "../ErrorPage/ErrorPage";

const PositionRelative = () => {
  return (
    <div className={styles.relative}>
      {/* <Plan />
      <TwoColumns />
      <SmallCarousel />
      <NumbersIncrement />
      <ChoiceForm />
      <News />
      <SmallCarousel />
      <Modules /> */}
      {/* <ErrorPage></ErrorPage> */}
    </div>
  );
};

export default PositionRelative;

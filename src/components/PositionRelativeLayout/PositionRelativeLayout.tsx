import Footer from "../Footer/Footer";
import NumbersIncrement from "../NumbersIncrement/NumbersIncrement";
import styles from "./PositionRelative.module.css";

const PositionRelative = ({ children }: any) => {
  return (
    <div className={styles.relative}>
      {children}
      <Footer />
    </div>
  );
};

export default PositionRelative;

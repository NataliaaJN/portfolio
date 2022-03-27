import "../../styles/components/header/Header.scss";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <h1 className="header__title">
        <div className="header__title--word">
          <span className="header__title--word--initial">N</span>
          <motion.span
            className="header__title--word--word1"
            transition={{ duration: 1.2, delay: 0.5  }}
            animate={{ width: 260 }}
          >
            atalia
          </motion.span>
        </div>
        <div className="header__title--word">
          <span className="header__title--word--initial">J</span>
          <motion.span
            className="header__title--word--word2"
            transition={{ duration: 1.2, delay: 0.5  }}
            animate={{ width: 330 }}
          >
            iménez
          </motion.span>
        </div>
        <div className="header__title--word">
          <span className="header__title--word--initial">N</span>
          <motion.span
            className="header__title--word--word3"
            transition={{ duration: 1.2, delay: 0.5 }}
            animate={{ width: 180 }}
          >
            ieto
          </motion.span>
        </div>
      </h1>
      <h2 className="header__job">Front- end</h2>
    </div>
  );
};

export default Header;

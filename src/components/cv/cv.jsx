import "../../styles/components/cv/cv.scss";
import cv from "../../images/cv.png";

const Cv = () => {
  return (
    <section className="cvSection">
      <div className="cvSection__imgContainer">
        <img className="cvSection__imgContainer--cv" src={cv} alt="CV Natalia" />
      </div>
    </section>
  );
};

export default Cv;

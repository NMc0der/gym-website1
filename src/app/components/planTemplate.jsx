import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const PlanTemaplate = ({ image, name, price, classes }) => {
  return (
    <div className="template-container">
      <div className="template-image-container">
        <Image src={image} />
      </div>
      <div className="template-info-container">
        <h3 className="template-name">{name}</h3>
        <div className="template-price-container">
          <span className="template-dollar-sign">$</span>
          <span className="template-price">{price}</span>
          <span className="template-pm">p/m</span>
        </div>
        <div className="class-names-data">
          {classes.map((gymClass) => {
            return <p>{gymClass}</p>;
          })}
        </div>
        <div className="purchase-btn-container">
          <Link href="/signUp">
            <Button text={"PURCHASE NOW"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlanTemaplate;

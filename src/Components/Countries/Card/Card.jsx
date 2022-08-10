import LoadingAni from "../../../UI/LoadingAni";
import classes from "./Card.module.scss";

const Card = ({ country, region, capital, population, image }) => {

  return (
    
    <div className={classes.card}>
      <img src={image} alt="flag" />
      <div className={classes.info}>
        <h2>{country}</h2>
        <p>{`Region: ${region}`}</p>
        <p>{`Capital: ${capital}`}</p>
        <p>{`Population: ${population}`}</p>
      </div>
    </div>
  );
};

export default Card;

import classes from "./Card.module.scss";
import {Link, useParams} from 'react-router-dom'

const Card = ({ country, region, capital, population, image, index }) => {


  
  return (
    
    <Link to = {`/home/country-detail/${index}`} className={classes.card}>
      <img src={image} alt="flag" />
      <div className={classes.info}>
        <h2>{country}</h2>
        <p>{`Region: ${region}`}</p>
        <p>{`Capital: ${capital}`}</p>
        <p>{`Population: ${population}`}</p>
      </div>
    </Link>
  );
};

export default Card;

import classes from './Card.module.scss'

const Card = () => {
    return(
        <div className={classes.card}>
            <h1>Picture</h1>
            <div className={classes.info}>
                <h2>Country</h2>
                <p>Population:xxx</p>
                <p>Region:Europe</p>
                <p>Capital:Berlin</p>
            </div>
        </div>
    )
}

export default Card;
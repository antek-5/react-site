
import PageTitle from "../PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/cardsReducer";
import Card from "../Card/Card";
import styles from "./Favorite.module.scss";

const Favorite = () => {
    
    const favCards = useSelector(state => getFavoriteCards(state));

    if(favCards.length === 0) return(
        <div className={styles.favContainer}>
            <PageTitle>Favorite<br /><br />(no favorites yet :c)</PageTitle>
        </div>
    );
    else return(
        <div className={styles.favContainer}>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favCards.map(card => <Card key={card.id} {...card} />)}
                </ul>
            </article>
        </div>
    );

    
}

export default Favorite;
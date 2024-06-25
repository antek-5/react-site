import { removeCard, toggleCardFavorite } from '../../redux/cardsReducer';
import styles from './Card.module.scss';
import clsx from "clsx";
import { useDispatch } from 'react-redux';


const Card = props => {


    const dispatch = useDispatch();

    const removeCardClick = () => {
        dispatch(removeCard(props.id));
    }

    const toggleFavorite = () => {
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        <li className={styles.card}>
            {props.title}
            <div>
                <button onClick={removeCardClick}>
                    <span className={'fa fa-trash'}/>
                </button>
                <button onClick={toggleFavorite}>
                    <span className={clsx('fa fa-star-o', props.isFavorite && styles.active)} />
                </button>
            </div>
        </li>
    );
};

export default Card;
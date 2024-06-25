import { toggleCardFavorite } from '../../redux/store';
import styles from './Card.module.scss';
import clsx from "clsx";
import { useDispatch } from 'react-redux';


const Card = props => {

    const dispatch = useDispatch();

    const toggleFavorite = () => {
        console.log('props.isFavorite', props.isFavorite);
        dispatch(toggleCardFavorite(props.id));
        console.log('props.isFavorite', props.isFavorite);
    }

    return (
        <li className={styles.card}>{props.title}<button onClick={toggleFavorite}><span className={clsx('fa fa-star-o', props.isFavorite && styles.active)} /></button></li>
    );
};

export default Card;
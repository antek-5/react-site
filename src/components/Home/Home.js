
import Hero from "../Hero/Hero";
import ListForm from "../ListForm/ListForm";
import Lists from '../Lists/Lists';

const Home = () => {

    // const listData = useSelector(state => getListById(state, 1));

    return (
        <>
            <Hero />
            <Lists />
            <ListForm />
        </>
    );
}

export default Home;
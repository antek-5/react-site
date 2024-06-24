
import { useState } from "react";
import { addList } from "../../redux/store";
import Button from "../Button/Button";
import styles from "../ListForm/ListForm.module.scss"
import { useDispatch } from "react-redux";
import TextInput from "../TextInput/TextInput";


const ListForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    return(
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label>Title:</label> <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <label>Description:</label><TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button >ADD LIST</Button>
        </form>
    );
}

export default ListForm;
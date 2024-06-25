import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchStr } from '../../redux/searchStringReducer';

const SearchForm = () => {

    const [searchStringSource, setSearchStringSource] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        setSearchStringSource(e.target.value)
        dispatch(updateSearchStr(searchStringSource));
    };


    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput value={searchStringSource} onChange={handleSubmit}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;
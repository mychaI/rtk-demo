import React from 'react';
import styles from './Fox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectSrc, fetchFox } from './foxSlice';

export function Fox() {
    const foxImage = useSelector(selectSrc)
    const dispatch = useDispatch();
    const endpoint = 'https://randomfox.ca/floof/';
    return (
        <React.Fragment>
            <br />
            <button className={styles.button} onClick={() => dispatch(fetchFox(endpoint))}>Fetch Fox</button>
            <br />
            <img src={foxImage}></img>
        </React.Fragment>
    )
}
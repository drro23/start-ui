import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import '../styles/searchBar.css';

import {fetchResourceInfos, setResourceInfos} from '../redux/slices/searchSlice';

/**
 *
 * @param {string} value
 * @param {number} delay
 * @returns {string}
 */
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
        () => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay]
    );
    return debouncedValue;
}

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const debouncedSearchTerm = useDebounce(input, 500);

    const search = useCallback(
        () => {
            if (input.length > 1) {
                dispatch(fetchResourceInfos({name: input}));
            } else {
                dispatch(setResourceInfos([]))
            }
        },
        [input, dispatch],
    );

    useEffect(() => {
        if (debouncedSearchTerm) {
            search();
        }
    }, [search, debouncedSearchTerm]);

    const updateInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <input
                className="searchBar"
                value={input}
                onChange={updateInput}
                type="text"
                id="header-search"
                placeholder="Search..."
                name="s"
            />
        </div>
    )
}

export default SearchBar;

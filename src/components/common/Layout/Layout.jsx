import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../../store/app/appSlice';
import './Layout.css';

export const Layout = ({ children }) => {
    const { data } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    useEffect(() => { console.log({ data }) }, [data]);

    const onThemeSwitch = useCallback(() => {
        const newTheme = data.theme === 'light' ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
    }, [data, dispatch]);

    return <div className="layout-wrapper">
        <div className="theme-switcher">Current theme: {data.theme} <button onClick={onThemeSwitch}>switch theme</button></div>
        <div className="content-wrapper">
            {children}
        </div>
    </div>
}
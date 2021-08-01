import React,{useEffect} from 'react'
import FirstSection from './Homepage/FirstSection'
import TopRated from './Homepage/TopRated';
import Trending from './Homepage/Trending';
import {useDispatch} from 'react-redux';
import {getHomeproducts} from '../redux/actions.js/actions';
const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHomeproducts());

    },[dispatch])
    return (
        <div>
            <FirstSection/>
            <Trending/>
            <TopRated/>
        </div>
    )
}

export default HomePage

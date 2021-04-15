import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/MainComponent';
import '../../assets/css/header.css';
import '../../assets/css/footer.css';

const Home = () => {
    return (
        <>
        <Header />
        <Main />
        <Footer />
        </>
    )
}

export default Home;
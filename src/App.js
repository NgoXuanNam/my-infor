import Header from './components/Header/Header';
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import song from '~/assets/image/song.png';
import Scrollup from './components/Scrollup/Scrollup';
import Loading from './components/Loading/Loading';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, []);

    return loading ? (
        <Loading />
    ) : (
        <div className="App">
            <Header />
            <div>
                <img src={song} alt="bg" className="w-full h-[150px]" />
            </div>
            <Section />
            <Footer />
            <Scrollup />
        </div>
    );
}

export default App;

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
export default function Scrollup() {
    const [showToTop, setShowToTop] = useState(false);

    useEffect(() => {
        const handleScrollY = () => {
            if (window.scrollY >= 300) {
                setShowToTop(true);
            } else {
                setShowToTop(false);
            }
            // setShowToTop(window.scrollY >= 300);
        };
        window.addEventListener('scroll', handleScrollY);

        return () => {
            window.addEventListener('scroll', handleScrollY);
        };
    }, []);

    const handleToTop = () => {
        document.documentElement.scrollTop = 0;
    };
    return (
        <div onClick={handleToTop} className="btn-to-top fixed bottom-4 right-8">
            {showToTop && (
                <button className="bg-[#c81717] p-3 rounded-xl animate-bounce">
                    <FontAwesomeIcon icon={faChevronUp} className=" text-[#ffffff] text-[2rem]" />
                </button>
            )}
        </div>
    );
}

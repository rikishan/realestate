import React, { useEffect } from 'react';
import '../components/Body.css';

const Body = () => {
    useEffect(() => {
        const findYourHomeElement = document.querySelector('.find-your-home');
        const realEstateElement = document.querySelector('.real-estate');

        // Animation sequence
        setTimeout(() => {
            findYourHomeElement.classList.add('fade-up');
        }, 2000);

        setTimeout(() => {
            findYourHomeElement.classList.add('hide-text');
        }, 4000);

        setTimeout(() => {
            realEstateElement.classList.add('appear-down');
        }, 6000);
    }, []);

    return (
        <div className="body">
            <div className="image-container">
                <div className="text-overlay">
                    <span className="text find-your-home">Find your home</span>
                    <span className="text real-estate">Real Estate</span>
                </div>
            </div>
        </div>
    );
};

export default Body;

import React, { useState } from 'react';
import NavTabs from './NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import github from './images/github-mark.png'
import linkedin from './images/LI-In-Bug.png'


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');


    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (

        <div className="main-content">
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
            <footer className='row justify-content-center footer'>
                <div className='col-1 p-0 m-0'>
                <a
                    href="https://github.com/vlopez99"
                >
                    <img className='footer-img' src={github} alt="github" />
                </a>
                </div>
                <div className='col-1 p-0 m-0'>
                <a
                    href="https://www.linkedin.com/in/vincent-lopez-35b210270/"
                >
                    <img className='footer-img' src={linkedin} alt="linkedin" />
                </a>
                </div>
            </footer>
        </div>
    );
}
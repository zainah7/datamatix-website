const { useState } = React;

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="logo-container">
                    <img src="assets/Asset 8.png" alt="Logo" className="logo" />
                    <div className="logo-text">
                        <span>The World</span>
                        <span>Governments Efficiency</span>
                        <span>Week in Dubai</span>
                    </div>
                </div>
                <div className="header-info">
                    <span className="header-date">February 2-5, 2026 Dubai - UAE</span>
                    <img src="assets/Asset 9.png" alt="Calendar" className="calendar-icon" />
                </div>
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
            <div className="header-bottom">
                 <p>Supporting global efforts to re-engineer and restructure existing government organizations and system frameworks, eliminate bureaucracy, reduce expenditures, and enhance government efficiency through innovation, leadership, collaboration, excellence in governance, sustainable policies, and global competitiveness</p>
            </div>
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                <a href="#">HOME</a>
                <a href="#">DATAMATIX</a>
                <a href="#">Excellence Awards</a>
                <a href="#">PROFILE</a>
                <a href="#">AGENDA</a>
                <a href="#">SPEAKERS</a>
                <a href="#">REGISTRATION</a>
                <a href="#">PARTNERSHIP</a>
            </nav>
        </header>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <DatamatixInfo />
            <Stats />
            <Events />
            <Footer />
        </div>
    );
}

const Events = () => {
    return (
        <section className="events">
            <section className="events-intro-section">
                <div className="events-intro-hero-content">
                    <h1>Shaping Smarter<br/>Governance for<br/>a Fast-Changing<br/>World</h1>
                </div>
                <div className="events-intro-left-bar"></div>
                <div className="events-intro-red-square">
                    <div className="calendar-clock-icon">
                        <div className="calendar-icon-base"></div>
                        <div className="clock-icon-overlay"></div>
                    </div>
                </div>
                <div className="events-intro-content">
                    <h2 className="events-schedule-title">
                        <span className="events-line-small">• The World Governments Efficiency Week in Dubai</span>
                        <span className="events-line-big">EVENTS SCEHDULE</span>
                    </h2>
                </div>
                <div className="events-intro-right-bar"></div>
            </section>
            <CountdownSection />
            <div className="event-grid">
                <div className="event-card">
                    <img src="assets/Asset 19.png" alt="Global Leadership Summit" />
                    <h3>GLOBAL<br/>LEADERSHIP<br/>SUMMIT</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
                <div className="event-card">
                    <img src="assets/Asset 18.png" alt="Innovation & Future Technologies" />
                    <h3>INNOVATION<br/>AND FUTURE<br/>TECHNOLOGIES</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
                <div className="event-card">
                    <img src="assets/Asset 12.png" alt="Government Efficiency Conference" />
                    <h3>GOVERNMENT<br/>EFFICIENCY<br/>CONFERENCE</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
                <div className="event-card">
                    <img src="assets/Asset 13.png" alt="City Governance & Urban Development" />
                    <h3>CITY GOVERNANCE<br/>AND URBAN<br/>DEVELOPMENT</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
                <div className="event-card">
                    <img src="assets/Asset 14.png" alt="Streamlining Public Sector Bureaucracy" />
                    <h3>STREAMLINING<br/>PUBLIC SECTOR<br/>BUREAUCRACY</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
                <div className="event-card">
                    <img src="assets/Asset 15.png" alt="Modern Management Strategies" />
                    <h3>MODERN<br/>MANAGEMENT<br/>STRATEGIES</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
                <div className="event-card">
                    <img src="assets/Asset 16.png" alt="Human Capital Development for Government" />
                    <h3>HUMAN CAPITAL<br/>DEVELOPMENT<br/>FOR GOVT.</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
                <div className="event-card">
                    <img src="assets/Asset 17.png" alt="AI in Government and Cities" />
                    <h3>AI IN<br/>GOVERNMENT<br/>AND CITIES</h3>
                    <p>5 May 2026, Dubai - UAE</p>
                </div>
            </div>
        </section>
    );
}

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src="assets/Asset 8.png" alt="Logo" className="footer-logo" />
                <h3>Dubai Leads: Empowering the Future of Government Performance</h3>
            </div>
            <div className="footer-middle">
                <div className="footer-col">
                    <h4>Datamatix Profile</h4>
                    <ul>
                        <li><a href="#">&gt; Welcome</a></li>
                        <li><a href="#">&gt; Who we are</a></li>
                        <li><a href="#">&gt; Photo Gallery</a></li>
                        <li><a href="#">&gt; Testimonials</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Datamatix Events</h4>
                    <ul>
                        <li><a href="#">&gt; Conferences</a></li>
                        <li><a href="#">&gt; Executives Programs</a></li>
                        <li><a href="#">&gt; Round Table Meetings</a></li>
                        <li><a href="#">&gt; Business Delegations</a></li>
                        <li><a href="#">&gt; Knowledge Exchange</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Datamatix Services</h4>
                    <ul>
                        <li><a href="#">&gt; Our Services</a></li>
                        <li><a href="#">&gt; Consultancies</a></li>
                        <li><a href="#">&gt; Events Management</a></li>
                        <li><a href="#">&gt; inDubai Services</a></li>
                        <li><a href="#">&gt; Research Center</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Global Platform</h4>
                    <ul>
                        <li><a href="#">&gt; World Conferences</a></li>
                        <li><a href="#">&gt; World Rea Estate Events</a></li>
                        <li><a href="#">&gt; World Influencers Council</a></li>
                        <li><a href="#">&gt; Woibex Int. Council</a></li>
                        <li><a href="#">&gt; Int. Remote Work Council</a></li>
                        <li><a href="#">&gt; World Government Platform</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-middle">
                <div className="footer-col">
                    <h4>Events Speakers</h4>
                    <ul>
                        <li><a href="#">&gt; Celebrities</a></li>
                        <li><a href="#">&gt; Keynotes Speakers</a></li>
                        <li><a href="#">&gt; MC's and Presenters</a></li>
                        <li><a href="#">&gt; Partnership</a></li>
                        <li><a href="#">&gt; Suggestions</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Traveling Services</h4>
                    <ul>
                        <li><a href="#">&gt; City Information</a></li>
                        <li><a href="#">&gt; Airlines Information</a></li>
                        <li><a href="#">&gt; Shopping malls</a></li>
                        <li><a href="#">&gt; Restaurants Information</a></li>
                        <li><a href="#">&gt; Hotels Information</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Careers and Jobs</h4>
                    <ul>
                        <li><a href="#">&gt; Mentoring</a></li>
                        <li><a href="#">&gt; Intership</a></li>
                        <li><a href="#">&gt; Volunteer</a></li>
                        <li><a href="#">&gt; Recruitment</a></li>
                        <li><a href="#">&gt; Remote Working</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Media and News</h4>
                    <ul>
                        <li><a href="#">&gt; Press Releases</a></li>
                        <li><a href="#">&gt; Datamatix TV</a></li>
                        <li><a href="#">&gt; Datamatix Radio</a></li>
                        <li><a href="#">&gt; Datamatix Podcast</a></li>
                        <li><a href="#">&gt; Interviews</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-subscribe">
                <h4>Subscribe to our special offers</h4>
                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button className="submit-btn">Submit</button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2025-2030 © Datamatix Group - Copyright All Rights Reserved</p>
                <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <DatamatixInfo />
            <Stats />
            <Events />
            <Footer />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
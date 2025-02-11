import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LandingPage.css'; // Create this CSS file for custom styles

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
        
            <main className="main-content">
                <div className="carousel-container">
                    <Carousel showThumbs={false} autoPlay infiniteLoop showIndicators={false}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVudGFsJTIwaGVhbHRofGVufDB8fDB8fHww" alt="Mental Health Support" />
                            <p className="legend">Mental Health Support</p>
                        </div>
                        <div>
                            <img src="https://plus.unsplash.com/premium_photo-1661281212609-f4681817d657?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Online Therapy" />
                            <p className="legend">Online Therapy</p>
                        </div>
                        <div>
                            <img src="https://plus.unsplash.com/premium_photo-1661277709298-a91380f68daa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y291bnNlbGxvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Expert Counselors" />
                            <p className="legend">Expert Counselors</p>
                        </div>
                    </Carousel>
                </div>
                <div className="info-container">
                    <section className="info-section">
                        <h2>Welcome to Human Health</h2>
                        <p>Your mental health is our priority. We provide top-notch telemedicine services to support your mental well-being.</p>
                    </section>
                    <section className="info-section">
                        <h2>Our Services</h2>
                        <div className="card">
                            <h3>Mental Health Support</h3>
                            <p>We offer comprehensive mental health support to help you manage stress, anxiety, and other mental health issues.</p>
                        </div>
                        <div className="card">
                            <h3>Online Therapy</h3>
                            <p>Connect with licensed therapists from the comfort of your home through our online therapy sessions.</p>
                        </div>
                        <div className="card">
                            <h3>Expert Counselors</h3>
                            <p>Our team of expert counselors is here to provide you with the guidance and support you need.</p>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="footer">
                <p>&copy; 2025 Human Health. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
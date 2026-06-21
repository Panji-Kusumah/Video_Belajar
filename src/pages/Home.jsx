import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CourseSection from '../components/CourseSection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-bg-cream min-h-screen">
            <Navbar />
            <Hero />
            <CourseSection />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;
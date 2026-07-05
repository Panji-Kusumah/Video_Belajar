import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/ui/Hero';
import CourseSection from '../../components/ui/CourseSection';
import NewsLetter from '../../components/ui/NewsLetter';
import Footer from '../../components/layout/Footer';

const Home = () => {
    return (
        <div className="bg-bg-cream min-h-screen">
            <Navbar />
            <Hero />
            <CourseSection />
            <NewsLetter />
            <Footer />
        </div>
    );
};

export default Home;
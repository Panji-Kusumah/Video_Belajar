import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import FilterSidebar from '../../components/ui/FilterSidebar';
import CourseCard from '../../components/ui/CourseCard';
import SortDropdown from '../../components/ui/SortDropdown';
import SearchBox from '../../components/ui/SearchBox';
import Pagination from '../../components/ui/Pagination';
import useCourseStore from '../../store/useCourseStore';

const Courses = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const itemsPerPage = 6;

    const getFilteredCourses = useCourseStore((state) => state.getFilteredCourses);
    const filteredCourses = getFilteredCourses();

    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    const paginatedCourses = filteredCourses.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="bg-bg-cream min-h-screen">
            <Navbar />
            <div className="max-w-300 mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">
                        Koleksi Video Pembelajaran Unggulan
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                    </p>
                </div>
                <div className="lg:hidden mb-4">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-900"
                    >
                        <span>Filter</span>
                        <svg 
                            className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {showFilters && (
                        <div className="mt-4">
                            <FilterSidebar />
                        </div>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <div className="flex gap-3">
                        <SortDropdown />
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-normal text-gray-700"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filter
                        </button>
                    </div>
                    <div className="flex-1 sm:max-w-xs">
                        <SearchBox />
                    </div>
                </div>
                <div className="hidden lg:flex gap-6">
                    <FilterSidebar />
                    <div className="flex-1">
                        {paginatedCourses.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {paginatedCourses.map((course) => (
                                    <CourseCard
                                        key={course.id}
                                        image={course.image}
                                        title={course.title}
                                        desc={course.description}
                                        instructorImage={course.instructorImage}
                                        instructorName={course.instructor}
                                        instructorRole={course.role}
                                        rating={course.rating}
                                        reviews={course.reviews}
                                        price={course.price}
                                        originalPrice={course.originalPrice}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Tidak Ada Kelas Ditemukan</h3>
                                <p className="text-sm text-gray-600">Coba ubah filter atau kata kunci pencarian Anda.</p>
                            </div>
                        )}
                        {totalPages > 1 && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>
                </div>
                <div className="lg:hidden">
                    {paginatedCourses.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {paginatedCourses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    image={course.image}
                                    title={course.title}
                                    desc={course.description}
                                    instructorImage={course.instructorImage}
                                    instructorName={course.instructor}
                                    instructorRole={course.role}
                                    rating={course.rating}
                                    reviews={course.reviews}
                                    price={course.price}
                                    originalPrice={course.originalPrice}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Tidak Ada Kelas Ditemukan</h3>
                            <p className="text-sm text-gray-600">Coba ubah filter atau kata kunci pencarian Anda.</p>
                        </div>
                    )}
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Courses;
import CourseCard from "./CourseCard";
import useCourseStore from "../../store/useCourseStore";

const CourseSection = () => {
    const courses = useCourseStore((state) => state.courses);
    return (
        <section id="courses" className="py-12 px-6">
            <div className="max-w-300 mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-black text-gray-900 mb-2">
                        Koleksi Video Pembelajaran Unggulan
                    </h2>
                    <p className="text-base text-gray-600">
                        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
                    </p>
                </div>
                <div className="flex gap-8 mb-8 border-b border-gray-200">
                    <a
                        href="#"
                        className="text-[15px] font-bold text-accent pb-3 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.75 after:bg-accent after:rounded-t-sm"
                    >
                        Semua Kelas
                    </a>
                    <a
                        href="#"
                        className="text-[15px] font-normal text-gray-600 pb-3 hover:text-gray-900 transition-colors"
                    >
                        Programming
                    </a>
                    <a
                        href="#"
                        className="text-[15px] font-normal text-gray-600 pb-3 hover:text-gray-900 transition-colors"
                    >
                        Desain
                    </a>
                    <a
                        href="#"
                        className="text-[15px] font-normal text-gray-600 pb-3 hover:text-gray-900 transition-colors"
                    >
                        Marketing
                    </a>
                    <a
                        href="#"
                        className="text-[15px] font-normal text-gray-600 pb-3 hover:text-gray-900 transition-colors"
                    >
                        Bisnis
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            image={course.image}
                            title={course.title}
                            desc="Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini."
                            instructorImage={`https://i.pravatar.cc/150?img=${course.id + 10}`}
                            instructorName={course.instructor}
                            instructorRole={course.role}
                            rating={course.rating}
                            reviews={course.reviews}
                            price={course.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CourseSection;
import { create } from 'zustand';

const initialCourses = [
    { id: 1, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop", title: "Fullstack JavaScript Bootcamp", instructor: "Fajar Bodogol", role: "Senior Software Engineer di Traveloka", rating: 4.9, reviews: 1245, price: "Rp 499K" },
    { id: 2, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop", title: "UI/UX Design Masterclass", instructor: "Burhan Vhantofel", role: "Lead UI Designer di Tokopedia", rating: 4.8, reviews: 892, price: "Rp 399K" },
    { id: 3, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop", title: "Digital Marketing dari Nol", instructor: "Rizky Firmansyah", role: "Digital Marketing Manager di Shopee", rating: 4.7, reviews: 2103, price: "Rp 299K" },
    { id: 4, image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop", title: "Data Analytics dengan Excel & SQL", instructor: "Jo Margono", role: "Data Analyst di Bukalapak", rating: 4.8, reviews: 1567, price: "Rp 449K" },
    { id: 5, image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop", title: "AI Prompt Engineering", instructor: "Chiezka Asycnhronous", role: "AI Engineer di Telkom Indonesia", rating: 5.0, reviews: 321, price: "Rp 599K" },
    { id: 6, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop", title: "Membangun Startup yang Bertumbuh", instructor: "Linda Array", role: "CEO Laguna", rating: 4.8, reviews: 678, price: "Rp 349K" },
    { id: 7, image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop", title: "Video Editing untuk Content Creator", instructor: "Michelle Tantrum", role: "Content Strategist di TikTok", rating: 4.7, reviews: 986, price: "Rp 279K" },
    { id: 8, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop", title: "Public Speaking untuk Profesional", instructor: "Fahmi Gland", role: "Product Manager di Ruangguru", rating: 4.9, reviews: 1103, price: "Rp 249K" },
    { id: 9, image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=250&fit=crop", title: "Produktivitas & Time Management", instructor: "Citra Maharani", role: "Senior Accountant di Gojek", rating: 4.8, reviews: 754, price: "Rp 199K" }
];

const useCourseStore = create((set) => ({
    courses: initialCourses,
    addCourse: (newCourse) => set((state) => ({
        courses: [...state.courses, { ...newCourse, id: Date.now() }]
    })),
    updateCourse: (id, updatedData) => set((state) => ({
        courses: state.courses.map(c => c.id === id ? { ...c, ...updatedData } : c)
    })),
    deleteCourse: (id) => set((state) => ({
        courses: state.courses.filter(c => c.id !== id)
    }))
}));

export default useCourseStore;
import { create } from 'zustand';

const initialCourses = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
        title: "Fullstack JavaScript Bootcamp",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Fajar Bodogol",
        role: "Senior Software Engineer di Traveloka",
        instructorImage: "https://i.pravatar.cc/150?img=11",
        rating: 4.9,
        reviews: 1245,
        price: 499000,
        originalPrice: null,
        category: "Digital & Teknologi",
        duration: "Lebih dari 8 Jam",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
        title: "UI/UX Design Masterclass",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Burhan Vhantofel",
        role: "Lead UI Designer di Tokopedia",
        instructorImage: "https://i.pravatar.cc/150?img=12",
        rating: 4.8,
        reviews: 892,
        price: 399000,
        originalPrice: null,
        category: "Digital & Teknologi",
        duration: "4 - 8 Jam",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
        title: "Digital Marketing dari Nol",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Rizky Firmansyah",
        role: "Digital Marketing Manager di Shopee",
        instructorImage: "https://i.pravatar.cc/150?img=13",
        rating: 4.7,
        reviews: 2103,
        price: 299000,
        originalPrice: null,
        category: "Pemasaran",
        duration: "4 - 8 Jam",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop",
        title: "Data Analytics dengan Excel & SQL",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Jo Margono",
        role: "Data Analyst di Bukalapak",
        instructorImage: "https://i.pravatar.cc/150?img=14",
        rating: 4.8,
        reviews: 1567,
        price: 449000,
        originalPrice: null,
        category: "Digital & Teknologi",
        duration: "Lebih dari 8 Jam",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
        title: "AI Prompt Engineering",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Chiezka Asycnhronous",
        role: "AI Engineer di Telkom Indonesia",
        instructorImage: "https://i.pravatar.cc/150?img=15",
        rating: 5.0,
        reviews: 321,
        price: 599000,
        originalPrice: null,
        category: "Digital & Teknologi",
        duration: "Kurang dari 4 Jam",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
        title: "Membangun Startup yang Bertumbuh",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Linda Array",
        role: "CEO Laguna",
        instructorImage: "https://i.pravatar.cc/150?img=16",
        rating: 4.8,
        reviews: 678,
        price: 349000,
        originalPrice: null,
        category: "Bisnis Manajemen",
        duration: "4 - 8 Jam",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
        title: "Video Editing untuk Content Creator",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Michelle Tantrum",
        role: "Content Strategist di TikTok",
        instructorImage: "https://i.pravatar.cc/150?img=17",
        rating: 4.7,
        reviews: 986,
        price: 279000,
        originalPrice: 350000,
        category: "Digital & Teknologi",
        duration: "4 - 8 Jam",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
        title: "Public Speaking untuk Profesional",
        description: "Mulai transformasi dengan instruktur profesional, harga terjangkau, dan materi yang relevan dengan kebutuhan industri saat ini.",
        instructor: "Fahmi Gland",
        role: "Product Manager di Ruangguru",
        instructorImage: "https://i.pravatar.cc/150?img=18",
        rating: 4.9,
        reviews: 1103,
        price: 249000,
        originalPrice: null,
        category: "Pengembangan Diri",
        duration: "Kurang dari 4 Jam",
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
        title: "Introduction to Web Development",
        description: "Kelas pengantar gratis untuk pemula yang ingin belajar web development dari nol.",
        instructor: "Andi Wijaya",
        role: "Junior Developer di Startup Lokal",
        instructorImage: "https://i.pravatar.cc/150?img=33",
        rating: 4.5,
        reviews: 234,
        price: 0,
        originalPrice: null,
        category: "Digital & Teknologi",
        duration: "Kurang dari 4 Jam",
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
        title: "Dasar-Dasar Desain Grafis",
        description: "Pelajari prinsip dasar desain grafis secara gratis. Cocok untuk pemula.",
        instructor: "Sari Dewi",
        role: "Graphic Designer Freelance",
        instructorImage: "https://i.pravatar.cc/150?img=44",
        rating: 4.3,
        reviews: 156,
        price: 0,
        originalPrice: null,
        category: "Digital & Teknologi",
        duration: "Kurang dari 4 Jam",
    }
];
const applyCategoryFilter = (courses, selectedCategories) => {
    if (!selectedCategories.length) return courses;
    return courses.filter(c => selectedCategories.includes(c.category));
};
const applyDurationFilter = (courses, selectedDuration) => {
    if (!selectedDuration) return courses;
    return courses.filter(c => c.duration === selectedDuration);
};
const applyPriceFilter = (courses, selectedPrice) => {
    switch (selectedPrice) {
        case 'Gratis':
            return courses.filter(c => c.price === 0);
        case 'Berbayar':
            return courses.filter(c => c.price > 0);
        default:
            return courses;
    }
};
const applySearchFilter = (courses, searchQuery) => {
    if (!searchQuery) return courses;
    const query = searchQuery.toLowerCase();
    return courses.filter(c =>
        c.title.toLowerCase().includes(query) ||
        c.instructor.toLowerCase().includes(query)
    );
};
const applySort = (courses, sortBy) => {
    const sorted = [...courses];
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'a-z':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'z-a':
            return sorted.sort((a, b) => b.title.localeCompare(a.title));
        case 'rating-high':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'rating-low':
            return sorted.sort((a, b) => a.rating - b.rating);
        default:
            return courses;
    }
};
const useCourseStore = create((set, get) => ({
    courses: initialCourses,
    selectedCategories: [],
    selectedDuration: null,
    selectedPrice: 'Semua',
    searchQuery: '',
    sortBy: 'default',
    addCourse: (newCourse) => set((state) => ({
        courses: [...state.courses, { ...newCourse, id: Date.now() }]
    })),
    updateCourse: (id, updatedData) => set((state) => ({
        courses: state.courses.map(c => c.id === id ? { ...c, ...updatedData } : c)
    })),
    deleteCourse: (id) => set((state) => ({
        courses: state.courses.filter(c => c.id !== id)
    })),
    toggleCategory: (category) =>
        set((state) => ({
            selectedCategories: state.selectedCategories.includes(category)
                ? state.selectedCategories.filter(c => c !== category)
                : [...state.selectedCategories, category]
        })),
    setDuration: (duration) => set({ selectedDuration: duration }),
    setPrice: (price) => set({ selectedPrice: price }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setSortBy: (sortBy) => set({ sortBy }),
    resetFilters: () =>
        set({
            selectedCategories: [],
            selectedDuration: null,
            selectedPrice: 'Semua',
            searchQuery: '',
            sortBy: 'default'
        }),
    getFilteredCourses: () => {
        const {
            courses,
            selectedCategories,
            selectedDuration,
            selectedPrice,
            searchQuery,
            sortBy
        } = get();
        let result = courses;
        result = applyCategoryFilter(result, selectedCategories);
        result = applyDurationFilter(result, selectedDuration);
        result = applyPriceFilter(result, selectedPrice);
        result = applySearchFilter(result, searchQuery);
        result = applySort(result, sortBy);
        return result;
    }
}));

export default useCourseStore;
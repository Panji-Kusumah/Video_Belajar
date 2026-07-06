import useCourseStore from '../../store/useCourseStore';

const FilterSidebar = () => {
    const {
        selectedCategories,
        selectedDuration,
        toggleCategory,
        setDuration,
        resetFilters
    } = useCourseStore();

    const categories = ['Pemasaran', 'Digital & Teknologi', 'Pengembangan Diri', 'Bisnis Manajemen'];
    const durations = ['Kurang dari 4 Jam', '4 - 8 Jam', 'Lebih dari 8 Jam'];

    return (
        <aside className="w-72 shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-base font-bold text-gray-900">Filter</h3>
                    <button
                        onClick={resetFilters}
                        className="text-sm font-bold text-accent hover:text-accent-dark transition-colors"
                    >
                        Reset
                    </button>
                </div>
                <div className="mb-5">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="text-sm font-bold text-primary">Bidang Studi</span>
                        </div>
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="space-y-2.5 pl-6">
                        {categories.map((cat) => (
                            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${selectedCategories.includes(cat)
                                        ? 'bg-primary border-primary'
                                        : 'border-gray-300 group-hover:border-primary'
                                    }`}>
                                    {selectedCategories.includes(cat) && (
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => toggleCategory(cat)}
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                    {cat}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-5 pt-5 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span className="text-sm font-bold text-primary">Harga</span>
                        </div>
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="space-y-2.5 pl-6">
                        {categories.map((cat) => (
                            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors ${selectedCategories.includes(cat)
                                        ? 'bg-primary border-primary'
                                        : 'border-gray-300 group-hover:border-primary'
                                    }`}>
                                    {selectedCategories.includes(cat) && (
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={selectedCategories.includes(cat)}
                                    onChange={() => toggleCategory(cat)}
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                    {cat}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="pt-5 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-bold text-primary">Durasi</span>
                        </div>
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <div className="space-y-2.5 pl-6">
                        {durations.map((dur) => (
                            <label key={dur} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selectedDuration === dur
                                        ? 'border-primary'
                                        : 'border-gray-300 group-hover:border-primary'
                                    }`}>
                                    {selectedDuration === dur && (
                                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    )}
                                </div>
                                <input
                                    type="radio"
                                    name="duration"
                                    className="hidden"
                                    checked={selectedDuration === dur}
                                    onChange={() => setDuration(dur)}
                                />
                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                                    {dur}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
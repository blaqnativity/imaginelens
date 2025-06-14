export interface FilterProps {
  handleFilter: (filter: string) => void;
}

const TabFilter: React.FC<FilterProps> = ({ handleFilter }) => {
  return (
    <div className="bg-white py-6">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="w-full">
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav
                aria-label="Tabs"
                className="-mb-px flex flex-wrap items-end gap-x-8"
              >
                <button
                  onClick={() => handleFilter("Nature")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Nature
                </button>
                <button
                  onClick={() => handleFilter("Wild Life")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Wild Life
                </button>
                <button
                  onClick={() => handleFilter("Wild Life")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Geography
                </button>
                <button
                  onClick={() => handleFilter("Film")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Film
                </button>
                <button
                  onClick={() => handleFilter("Cars")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Cars
                </button>
                <button
                  onClick={() => handleFilter("Life Style")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Life Style
                </button>
                <button
                  onClick={() => handleFilter("Architecture and Interior")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Architecture & Interior
                </button>
                <button
                  onClick={() => handleFilter("Anime")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Anime
                </button>
                <button
                  onClick={() => handleFilter("Fashion")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Fashion
                </button>
                <button
                  onClick={() => handleFilter("Wallpapers")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Wallpapers
                </button>
                <button
                  onClick={() => handleFilter("Travel")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Travel
                </button>
                <button
                  onClick={() => handleFilter("Street Photography")}
                  className="inline-flex border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  Street Photography
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabFilter;

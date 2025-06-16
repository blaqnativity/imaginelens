import { filterLinks } from "../data/data";

export interface FilterProps {
  handleSelection: (filter: string) => void;
}

const TabFilter: React.FC<FilterProps> = ({ handleSelection }) => {
  return (
    <div className="bg-white py-6">
      <div className="mx-auto container px-6 lg:px-8">
        <div className="w-full">
          <div>
            <div className="border-b border-gray-200">
              <nav
                aria-label="Tabs"
                className="-mb-px flex flex-wrap items-end gap-x-8"
              >
                {filterLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => handleSelection(link)}
                    className="inline-flex cursor-pointer border-b-2 border-transparent px-1 py-3.5 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    {link}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabFilter;

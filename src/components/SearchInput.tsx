export interface SearchProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchInput: React.FC<SearchProps> = ({
  searchInput,
  setSearchInput,
  handleSearch,
}) => {
  return (
    <div className="dark:bg-gray-800">
      <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
              Find images easily using specific keywords and tags.
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
              A database with anything you need.
            </p>
          </div>

          <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
            <form className="flex rounded-md w-full" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full p-3 rounded-md rounded-r-none border border-gray-300 placeholder-current dark:bg-gray-500 dark:text-gray-300 dark:border-none"
                placeholder="keyword"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-violet-700 text-white text-lg font-semibold py-3 px-6 rounded-r-md"
              >
                <span>Find</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

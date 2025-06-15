import { useState } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import TabFilter from "./components/TabFilter";
import Spinner from "./components/Spinner";

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const IMAGES_PER_PAGE = 20;

  const fetchImage = async (query: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_API_URL
        }?query=${query}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(data.results);
      setTotalPages(data.total_pages);
      console.log(data); // Optional: keep this for debugging
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    await fetchImage(searchInput);
    setSearchInput(""); // reset input
  };

  const handleFilter = async (filter: string) => {
    await fetchImage(filter);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SearchInput
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <TabFilter handleFilter={handleFilter} />

      {loading && (
        <div className="mx-auto text-center mt-10">
          <Spinner />
        </div>
      )}
      <div className="mx-auto py-10">
        {images.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
            {images.map((image) => (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.alt_description || "Image"}
                className="rounded-md shadow-md w-[300px] h-[200px] object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

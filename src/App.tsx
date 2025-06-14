import { useState } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import TabFilter from "./components/TabFilter";
import Spinner from "./components/Spinner";

const App: React.FC = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrls, setImageUrls] = useState<string[]>([]); // changed to array

  const fetchImage = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}?key=${
          import.meta.env.VITE_API_KEY
        }&q=${encodeURIComponent(query)}&image_type=photo&per_page=10`
      );
      const hits = response.data.hits;

      if (Array.isArray(hits) && hits.length > 0) {
        // Pick up to 5 random images from the hits
        const shuffled = hits.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10).map((img) => img.webformatURL);
        setImageUrls(selected);
      } else {
        console.warn("No images found for:", query);
        setImageUrls([]);
      }
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput) return;
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
        {imageUrls.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Search result ${index + 1}`}
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

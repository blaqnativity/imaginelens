import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import TabFilter from "./components/TabFilter";
import Spinner from "./components/Spinner";

// image interface
interface ImageResult {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

const App: React.FC = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<ImageResult[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const IMAGES_PER_PAGE = 20;

  // fetching images using axios
  const fetchImages = useCallback(async () => {
    try {
      if (searchInput.current?.value) {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}?query=${
            searchInput.current?.value
          }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
            import.meta.env.VITE_API_KEY
          }`
        );
        setImages(data.results);
        setTotalPages(data.total_pages);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetSearch = () => {
    setPage(1);
    fetchImages();
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    resetSearch();
  };

  const handleSelection = (selection: string) => {
    if (searchInput.current) {
      searchInput.current.value = selection;
    }
    resetSearch();
  };

  return (
    <div className="min-h-screen">
      <SearchInput searchInput={searchInput} handleSearch={handleSearch} />
      <TabFilter handleSelection={handleSelection} />

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

      {images.length > 0 && (
        <div className="flex justify-center gap-4 mb-10">
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => setPage(page + 1)}
              className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-md"
            >
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

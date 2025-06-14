import { ClipLoader } from "react-spinners";

const Spinner: React.FC = () => {
  return (
    <div>
      <ClipLoader
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;

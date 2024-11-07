import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoadingButton = () => {
  return (
    <p className="flex select-none items-center gap-2 rounded-full border px-4 py-2 text-lg">
      <FontAwesomeIcon icon={faSpinner} spin />
      Loading
    </p>
  );
};

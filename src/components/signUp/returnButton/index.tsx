import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const RetunrButton = () => {
  return (
    <Link
      to={"/"}
      className="absolute -top-10 left-0 flex items-center gap-2 rounded-lg border border-white px-2 py-1 text-white duration-300 hover:scale-110 hover:opacity-80 hover:shadow-allAround"
    >
      <FontAwesomeIcon icon={faTimes} />
      Return
    </Link>
  );
};

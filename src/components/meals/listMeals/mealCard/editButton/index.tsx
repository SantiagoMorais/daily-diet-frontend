import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMeal } from "@functions/handleListMeals";
import { useState } from "react";
import { EditWindow } from "./editWindow";

export const EditButton = ({ mealData }: { mealData: IMeal }) => {
  const [openWindow, setOpenWindow] = useState<boolean>(false);

  return (
    <>
      <button
        className="flex-1 rounded-md bg-white py-1 text-center text-bg duration-300 hover:scale-105 hover:opacity-80"
        title="Edit meal"
        onClick={() => setOpenWindow(true)}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      {openWindow && (
        <EditWindow
          mealData={mealData}
          setOpenWindow={setOpenWindow}
        />
      )}
    </>
  );
};

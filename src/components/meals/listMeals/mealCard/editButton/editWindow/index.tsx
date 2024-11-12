import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMeal } from "@functions/handleListMeals";
import { button, title } from "@styles/index";
import { EditMealForm } from "./editMealForm";

interface IEditWindow {
  mealData: IMeal;
  setOpenWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditWindow = ({ mealData, setOpenWindow }: IEditWindow) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen max-w-full">
      <span className="absolute left-0 top-0 h-screen w-screen bg-black opacity-50"></span>
      <div className="absolute left-1/2 top-1/2 z-50 flex w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-xl border-2 border-white bg-bg p-4 md:w-auto">
        <button
          onClick={() => setOpenWindow(false)}
          className={button({
            color: "secondary",
            className:
              "absolute -top-14 right-0 size-12 rounded-lg p-2 text-xl hover:scale-110 hover:opacity-80",
          })}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h3
          className={title({
            afterEffect: "borderBottom",
            className: "pb-1 text-2xl",
          })}
        >
          Edit{" "}
          <span className="rounded-lg bg-white px-2 text-primary">meal</span>
        </h3>

        <EditMealForm mealData={mealData} setOpenWindow={setOpenWindow} />
      </div>
    </div>
  );
};

import { faListOl } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const UserSummary = () => {
    return (
        <div className="flex flex-1 flex-col gap-4 bg-bg 500 items-center h-fit p-4 rounded-xl border-white border">
            <FontAwesomeIcon icon={faListOl} />
        </div>
    )
}
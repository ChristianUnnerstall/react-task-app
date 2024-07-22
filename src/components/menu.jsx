import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineListAlt, MdOutlineSettings } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Menu() {
    return (
        <div className="navigation-level-1">
            <IconContext.Provider value={{ className: "navigation-icons"}}>
                <div className="top">
                    <RxHamburgerMenu />
                    <MdOutlineListAlt />
                </div>
                <div className="bottom">
                    {/* For settings and user  */}
                    <MdOutlineSettings />
                </div>
            </IconContext.Provider>
        </div>
    )
}
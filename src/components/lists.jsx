import { Link } from "react-router-dom";
import { MdAddCard, MdOutlinePlaylistAdd } from "react-icons/md";

export default function Lists() {

    function handleAddList() {
        alert("New list item placeholder!")
    }

    return(
        <div>
            <div className="header">
                <h1>Lists</h1>
                <Link to="/tasks/new"><MdAddCard /></Link>
            </div>
            <div className="content">
            <ul>
                <li><Link to="/tasks/">Tasks</Link></li>
            </ul>
            </div>
            <div className="footer">
                <MdOutlinePlaylistAdd onClick={handleAddList}/>
            </div>
        </div>
    )
}
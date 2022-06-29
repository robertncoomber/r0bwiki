import NoteButton from "./NoteButton"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Notes() {

    const navigate = useNavigate();

    return (
        <div className="robTable">
            <table>
                <tr>
                    <th>Some things</th>
                    <th></th>
                </tr>
                <tr>
                    <td className="tableP">
                        <a href="https://www.4th-floor.com/research/dolby-atmos-for-game-engines">Dolby Atmos for Game Engines (research paper) - 2022</a>
                    </td>
                    <th></th>
                </tr>
                <tr>
                    <td className="tableP">
                        <a href="https://www.instagram.com/ar/153264500082040/">✨The Light✨ (Instagram Filter) - 2020</a>
                    </td>
                    <th></th>
                </tr>
                <tr>
                    <td className="tableP">
                        <a href="https://www.youtube.com/watch?v=uVb1ZTVCjvE">Wwise Livestream 3D Interactive Music (livestream) - 2021</a>
                    </td>
                    <th></th>
                </tr>
                <tr>
                    <td className="tableP">
                        <a href="https://apps.apple.com/us/app/dirty-laundry-by-blake-ruby/id1501449544">Spatial Audio 360 Music (ios app) - 2020</a>
                    </td>
                    <th></th>
                </tr>

            </table>
        </div >
    )
}



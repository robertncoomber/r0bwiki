import "./robsTableStyles.css"

export default function PersonalInformation() {
    return (
        <div className="robTable">
            <h1 className="myTitle">Rob.wiki</h1>
            <table>
                <tr>
                    <th >Personal Information</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td className="right">Robert Coomber</td>
                </tr>
                <tr>
                    <td>Occupation</td>
                    <td className="right">Software, DSP, Audio, VR</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td className="right">Los Angeles, CA</td>
                </tr>
                <tr>
                    <td>Work</td>
                    <td className="right">4th Floor</td>
                </tr>
            </table>
        </div >
    )
}
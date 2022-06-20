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
                    <td className="tableP">Name</td>
                    <td className="right">Robert Coomber</td>
                </tr>
                <tr>
                    <td className="tableP">Occupation</td>
                    <td className="right">Software, DSP, Audio, VR</td>
                </tr>
                <tr>
                    <td className="tableP">Location</td>
                    <td className="right">Los Angeles, CA</td>
                </tr>
                <tr>
                    <td className="tableP">Work</td>
                    <td className="right"><a href="https://4th-floor.com">4th Floor</a> </td>
                </tr>
            </table>
        </div >
    )
}
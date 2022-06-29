import "./noteEntryStyle.css"
import { Link } from "react-router-dom"

export default function NoteEntry() {
    return (
        <div className="notesEntry">
            <Link to="/">Home</Link>
            <h1>Learning to Code C# for Unity</h1>
            <p>5/27/2022 - <em>This is targeted to people who are wanting to learn C# and Unity.</em></p>
            <h2>Getting Started</h2>
            <p>Learn the basics of <a href="https://www.udemy.com/course/csharp-tutorial-for-beginners/" target="_blank" rel="noopener">OOP and C# Programming</a>. Learn and understand Variables, Functions, Classes, Enums, Control Flow, Arrays, Inheritance, Lists, Reading and Writing files, namespaces/using. Use lessons that require you to write code and work through problems. You need to have github cli/desktop working by this time.</p>
            <h2>Start Unity</h2>
            <p><em>💡 Use github for every project from here on out. Even roll a ball. You will hold yourself more accountable. </em></p>
            <p>It is now a good time to start &ldquo;Roll A Ball&rdquo;. Here you will get an introduction to working with programming for Unity. You will become immediately familiar with classes like Monobehaviour. This is the base class you must inherit from to make a unity &ldquo;component&rdquo;, which is required for a script to be added to a GameObject. From here do <a href="https://learn.unity.com/pathway/unity-essentials" target="_blank" rel="noopener">Unity Essentials</a></p>
            <p>Things I wish I knew when starting:</p>
            <ul>
                <li>Don&rsquo;t over engineer things. Hack them together first. Then make them efficient.</li>
                <li>Share things you make early. They are **almost** always cool.</li>
                <li>Be in discord, twitter whatever it is talking about it to others.</li>
                <li>***Don't start with anything complex***&nbsp;</li>
            </ul>
            <h2>Get Good At C#</h2>
            <p>As you begin working more in unity, you need to know that <a href="https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/" target="_blank" rel="noopener">C# does not stop there</a>. As projects grow, you need strong organization and optimization within the code. Continue working through lessons on Interfaces, Byte Operations, Async, Generics, networking(it will be needed).&nbsp;</p>
            <h2>Get Good At Unity</h2>
            <p>Start with more advanced learning topics on coding <a href="https://learn.unity.com/pathway/junior-programmer" target="_blank" rel="noopener">Unity "Jr Programmer"</a>. Now start moving into directions you find interesting. Physics, Networking, VR, Tools, 3D Art, Rendering (Shaders), Acoustics, Modeling, Animation, Robotics, AI, Game Genre, whatever &hellip; begin researching and building shorter projects in that sect of unity you find interesting.</p>
            <h2>Why this structure?</h2>
            <p>To learn unity efficiently, your C# OOP knowledge needs to lead your unity learning. Unity is a heavy OOP system, so learn OOP first. Going too deep into C# before getting into unity is not necessary so you should begin learning how to program in unity after you have a good understanding of OOP and C# basics.</p>
            <h2>What Next?</h2>
            <p>If you follow this path, you will be on a path to have the capabilities to build the things you want with Unity. Put yourself in situations where you have teammates. Knowledge is shared quickly in these situations. If there are people that are smarter than you, even better.&nbsp;</p>
            <p>You should follow, <a href="https://twitter.com/bgolus" target="_blank" rel="noopener">bgolus</a><a href="https://twitter.com/Rengle820" target="_blank" rel="noopener">rengle820(golf+)</a><a href="https://twitter.com/FreyaHolmer" target="_blank" rel="noopener">freya</a><a href="https://twitter.com/newsycombinator" target="_blank" rel="noopener">hacker news</a></p>
            <p>Good Luck.</p>
        </div >
    )
}
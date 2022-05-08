import { useState, useEffect } from "react";

export default function HomePage() {
    const [time, setTime] = useState(getTime());

    function getDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + "/" + dd + "/" + yyyy;
        return today;
    }

    useEffect(() => {
        const interval = setInterval(() => setTime(getTime(), 1000));
        return () => {};
    }, []);

    function getTime() {
        var today = new Date();
        var time =
            today.getHours() +
            ":" +
            today.getMinutes() +
            ":" +
            today.getSeconds();
        return time;
    }

    return (
        <div>
            <h1 className="title">Robert Coomber's Personal Site</h1>
        </div>
    );
}

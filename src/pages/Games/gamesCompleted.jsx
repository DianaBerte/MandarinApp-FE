import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarComponent from "../../components/NavbarComponent.jsx";

// const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// localStorage.setItem("currentUser", JSON.stringify(currentUser));


const countAnswers = (arr) => {
    let count = 0;
    arr.forEach((item) => {
        if (typeof item === "string") {
            count++;
        }
    });
    return count;
}

const GamesCompleted = () => {

    const [stringCount, setStringCount] = useState(0);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let currentUserInfo = useSelector((state) => state.currentUser.currentUser)
    const myArray = currentUser.quizAnswers || [];

    useEffect(() => {
        const count = countAnswers(myArray);
        setStringCount(count)
    }, []);

    return(
        <>
        <NavbarComponent />
        <h1>{currentUserInfo.firstName}, your final score: <span>{stringCount}</span> correct answers out of 15!</h1>
        </>
    )
}

export default GamesCompleted
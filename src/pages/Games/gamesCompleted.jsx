const currentUser = JSON.parse(localStorage.getItem("currentUser"));
localStorage.setItem("currentUser", JSON.stringify(currentUser));

const GamesCompleted = () => {
    return(
        <h1>Score: {currentUser.quizAnswers}</h1>
    )
}

export default GamesCompleted
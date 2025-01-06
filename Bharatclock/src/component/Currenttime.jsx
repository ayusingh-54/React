let Currenttime = () => {
    let time = new Date().toLocaleTimeString();
    return (
        <h1>Current Time is: {time}</h1>
    )
}

export default Currenttime;
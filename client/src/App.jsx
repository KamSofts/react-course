// import Website from "./website/Website"
// import Card from "./card/Card"
// import Button1 from "./button/Button1.jsx"
// import Button2 from "./button/Button2.jsx"
// import Student from "./properties/Student.jsx"
import UserGreeting from "./conditional/UserGreeting.jsx"

const App = () => {
    return (
        <>
            {/* <Website /> */}
            {/* <Card /><Card /><Card /> */}
            {/* <Button1 /> <br /> <br /> <Button2 /> */}
            {/* <Student name="Dhamu" age={22} flag={false} />
            <Student name="Divya" age={20} flag={true} />
            <Student name="Krish" age={18} flag={false} />
            <Student name="Anu" age={16} flag={true} />
            <Student name="Ram" age={13} flag={true} />
            <Student name="Meenu" age={10} flag={true} />
            <Student /> */}
            <UserGreeting />AFTER LOGIN<UserGreeting isLoggedIn={true} username="Ram Prabu" />
        </>
    );
}

export default App
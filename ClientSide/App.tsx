import React = require("react");
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginPage } from './LoginPage/LoginPage';



const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;


/**
 * In this component we render our application
 * @param props provides the theme by reference
 */
const App = (props: any) => {
    return (
        <div style={{ top: "0", left: "0", width: "100%", height: "100%", position: "absolute", backgroundColor: "#fafafa" }}>
            <Router>
                <div>
                    <Route path="/" exact component={LoginPage} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />
                </div>
            </Router>
        </div>
    )
};
export default App;
import React from "react";
import ReactDOM from "react-dom";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export var IssueView = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <h1>Issue View</h1>
                <Footer />
            </div>

        );
    }
});
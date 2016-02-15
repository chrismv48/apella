import React from "react";
import ReactDOM from "react-dom";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export var SubmitProposalView = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <h1>Submit Proposal View</h1>
                <Footer />
            </div>

        );
    }
});
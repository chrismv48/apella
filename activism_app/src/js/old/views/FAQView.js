import React from "react";
import ReactDOM from "react-dom";

import { Header } from "../old/components/Header"
import { Footer } from "../old/components/Footer"

export var FAQView = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <h1>FAQ View</h1>
                <Footer />
            </div>

        );
    }
});

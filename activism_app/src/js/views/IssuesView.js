import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

var data = [{
    "id": 1,
    "username": "hhunter0",
    "title": "Integer ac neque.",
    "description": "Integer ac neque. Duis bibendum.",
    "supporters": 35657,
    "date_created": "2/5/2016",
    "tags": "iaculis diam erat"
}, {
    "id": 2,
    "username": "sreid1",
    "title": "Quisque ut erat.",
    "description": "Integer non velit.",
    "supporters": 3656,
    "date_created": "2/4/2016",
    "tags": "sapien quis"
}, {
    "id": 3,
    "username": "mwallace2",
    "title": "Sed accumsan felis.",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    "supporters": 47304,
    "date_created": "2/8/2016",
    "tags": "tellus"
}, {
    "id": 4,
    "username": "hgriffin3",
    "title": "Phasellus in felis.",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "supporters": 10743,
    "date_created": "2/1/2016",
    "tags": "felis sed"
}, {
    "id": 5,
    "username": "khenry4",
    "title": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    "description": "Vivamus vel nulla eget eros elementum pellentesque.",
    "supporters": 15380,
    "date_created": "2/8/2016",
    "tags": "et ultrices"
}, {
    "id": 6,
    "username": "jfisher5",
    "title": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    "description": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    "supporters": 21685,
    "date_created": "2/10/2016",
    "tags": "turpis integer"
}, {
    "id": 7,
    "username": "ecrawford6",
    "title": "In quis justo.",
    "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    "supporters": 44872,
    "date_created": "2/5/2016",
    "tags": "maecenas tincidunt lacus"
}, {
    "id": 8,
    "username": "cbradley7",
    "title": "Fusce consequat.",
    "description": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    "supporters": 40199,
    "date_created": "2/10/2016",
    "tags": "praesent blandit lacinia"
}, {
    "id": 9,
    "username": "pferguson8",
    "title": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    "supporters": 31836,
    "date_created": "2/5/2016",
    "tags": "velit id"
}, {
    "id": 10,
    "username": "tgonzalez9",
    "title": "In sagittis dui vel nisl.",
    "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    "supporters": 39249,
    "date_created": "2/5/2016",
    "tags": "consequat"
}, {
    "id": 11,
    "username": "smartina",
    "title": "Pellentesque viverra pede ac diam.",
    "description": "Proin eu mi.",
    "supporters": 10851,
    "date_created": "2/2/2016",
    "tags": "eu pede"
}, {
    "id": 12,
    "username": "nbarnesb",
    "title": "Cras non velit nec nisi vulputate nonummy.",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
    "supporters": 24722,
    "date_created": "2/9/2016",
    "tags": "ornare imperdiet sapien"
}, {
    "id": 13,
    "username": "jholmesc",
    "title": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    "description": "In sagittis dui vel nisl.",
    "supporters": 6598,
    "date_created": "2/12/2016",
    "tags": "vulputate elementum nullam varius"
}, {
    "id": 14,
    "username": "awebbd",
    "title": "Vivamus tortor.",
    "description": "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    "supporters": 23957,
    "date_created": "2/2/2016",
    "tags": "odio"
}, {
    "id": 15,
    "username": "cmorrisone",
    "title": "Donec semper sapien a libero.",
    "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
    "supporters": 15092,
    "date_created": "2/4/2016",
    "tags": "pede lobortis ligula sit"
}, {
    "id": 16,
    "username": "jwoodsf",
    "title": "Phasellus sit amet erat.",
    "description": "Sed vel enim sit amet nunc viverra dapibus.",
    "supporters": 34987,
    "date_created": "2/4/2016",
    "tags": "volutpat in"
}, {
    "id": 17,
    "username": "pgarzag",
    "title": "Vivamus vestibulum sagittis sapien.",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "supporters": 17118,
    "date_created": "2/9/2016",
    "tags": "in eleifend quam a"
}, {
    "id": 18,
    "username": "bgonzalezh",
    "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    "description": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    "supporters": 39594,
    "date_created": "2/5/2016",
    "tags": "purus eu"
}, {
    "id": 19,
    "username": "jpetersi",
    "title": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    "description": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    "supporters": 45098,
    "date_created": "2/4/2016",
    "tags": "libero nam dui proin"
}, {
    "id": 20,
    "username": "gstonej",
    "title": "In hac habitasse platea dictumst.",
    "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    "supporters": 39419,
    "date_created": "2/9/2016",
    "tags": "placerat praesent"
}]


var divInline = {
    display: 'inline'
};

var divAlignRight = {
    textAlign: 'right'
};

var IssueItem = React.createClass({
    render: function () {
        return (
            <div className="issueItem" style={divInline}>

                <div style={divInline}>
                    <Link to={`/issue/${this.props.id}`}><h3>{this.props.title}</h3></Link>
                    <p>{this.props.description}</p>
                    <p>Supporters: {this.props.supporters}</p>
                    <p>Posted by {this.props.username}</p>
                    <p>Date created: {this.props.date_created}</p>
                    <p>Tags: {this.props.tags}</p>
                </div>
                <hr/>
            </div>
        );
    }
});

var IssueList = React.createClass({
    render: function () {
        var issueSort = this.props.issueSort;
        var data = this.props.data;
        var sortedIssues = function () {
            if (issueSort === "supporters") {
                return data.sort(function (a, b) {
                    return b.supporters - a.supporters;
                });
            } else if (issueSort === "date_created") {
                return data.sort(function (a, b) {
                    return new Date(b.date_created) - new Date(a.date_created);
                });
            }
            else {
                return data;
            }
        };
        var issueItems = sortedIssues().map(function (issue) {
            return (
                <IssueItem {...issue} key={issue.id}/>
            );
        });
        return (
            <div className="issueList">
                {issueItems}
            </div>
        );
    }
});

var UserIssueFilter = React.createClass({
    handleClick: function (e) {
        this.props.onUserSort(e.target.id);
    },

    render: function () {
        return (
            <div className="userIssueFilter">
                <span>
                    <Link to={{ query: {sort:"top"} }}>
                        <button id="supporters" onClick={this.handleClick}>Top</button>
                    </Link>
                    <Link to={{ query: {sort:"date-created"} }}>
                        <button id="date_created" onClick={this.handleClick}>Newest</button>
                    </Link>
                </span>
            </div>
        );
    }
});

var FilterableIssueList = React.createClass({
    getInitialState: function () {
        return {
            issueSort: "foo"
        };
    },

    handleIssueSort: function (issueSort) {
        this.setState({
            issueSort: issueSort
        });
    },

    render: function () {
        return (
            <div className="filterableIssueList">
                <UserIssueFilter issueSort={this.state.issueSort} onUserSort={this.handleIssueSort}/>
                <IssueList data={this.props.data} issueSort={this.state.issueSort}/>
            </div>
        );
    }
});

var IssueViewButtonBar = React.createClass({
    render: function () {
        return (
            <div className="IssueViewButtonBar" style={divAlignRight}>
                <Link to="submit-proposal">
                    <button id="submit-proposal">Submit Proposal</button>
                </Link>
                <Link to="my-proposals">
                    <button id="my-proposals">My Proposals</button>
                </Link>
                <Link to="faq">
                    <button id="faq">FAQ</button>
                </Link>
                <Link to="donate">
                    <button id="donate">Donate</button>
                </Link>
            </div>
        )
    }
});

export var IssuesView = React.createClass({
    render: function () {
        return (
            <div className="issuesView">
                <Header />
                <IssueViewButtonBar/>
                <FilterableIssueList data={data}/>
                <Footer />
            </div>
        );
    }
});



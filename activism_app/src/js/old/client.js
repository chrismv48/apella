import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";

import { Base } from "old/components/Base";
import { IssuesView } from "old/views/IssuesView";
import { IssueView } from "old/views/IssueView";
import { SubmitProposalView } from "old/views/SubmitProposalView";
import { MyProposalsView } from "old/views/MyProposalsView";
import { FAQView } from "old/views/FAQView";
import { DonateView } from "old/views/DonateView";


const app = document.getElementById("app");
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={IssuesView}/>
            <Route path="/issues" component={IssuesView}/>
            <Route path="/issue/:issueId" component={IssueView}/>
            <Route path="/submit-proposal" component={SubmitProposalView}/>
            <Route path="/my-proposals" component={MyProposalsView}/>
            <Route path="/faq" component={FAQView}/>
            <Route path="/donate" component={DonateView}/>
        </Route>
    </Router>
    , app);

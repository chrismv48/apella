import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import { Base } from "./components/Base";
import { IssuesView } from "./views/IssuesView";
import { IssueView } from "./views/IssueView";
import { SubmitProposalView } from "./views/SubmitProposalView";
import { MyProposalsView } from "./views/MyProposalsView";
import { FAQView } from "./views/FAQView";
import { DonateView } from "./views/DonateView";


const app = document.getElementById("app");
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={IssuesView}/>
            <Route path="issues" component={IssuesView}/>
            <Route path="issue/:issueId" component={IssueView}/>
            <Route path="submit-proposal" component={SubmitProposalView}/>
            <Route path="my-proposals" component={MyProposalsView}/>
            <Route path="faq" component={FAQView}/>
            <Route path="donate" component={DonateView}/>
        </Route>
    </Router>
    , app);
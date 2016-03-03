import React from "react";
import ReactDOM from "react-dom";
import { PageHeader, Tab, Tabs } from "react-bootstrap";
import { data } from "./IssuesView";
import { Header } from "../old/components/Header";
import { Footer } from "../old/components/Footer";
import { AppNavbar } from "../old/components/AppNavbar";


export var IssueView = React.createClass({
  render: function () {
    var issueId = this.props.params.issueId;
    var issue_data = data.filter(function( obj ) {
      return obj.id == issueId;
    })[0];
    return (

      <div>
        <AppNavbar/>
        <PageHeader>{issue_data.title}</PageHeader>
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Description">{issue_data.description}</Tab>
          <Tab eventKey={2} title="Discussion">Discussion</Tab>
          <Tab eventKey={3} title="Action">Action</Tab>
          <Tab eventKey={4} title="Activity Feed">Activity Feed</Tab>
        </Tabs>
      </div>

    );
  }
});

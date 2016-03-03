import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

const IssueSortButtons = ({ sortOption, onSetSortOption, props }) => (

  <div className="userIssueFilter">
    <span>
      <ButtonToolbar>
        <Button bsStyle="primary"
                bsSize="small"
                id="supporters"
                onClick={() => onSetSortOption("SUPPORTERS")}
                active={sortOption === "supporters"}>Top
        </Button>
        <Button bsStyle="primary"
                bsSize="small"
                id="date_created"
                onClick={() => onSetSortOption("DATE")}
                active={sortOption === "date_created"}>Newest
        </Button>
      </ButtonToolbar>
    </span>
  </div>
);

export default IssueSortButtons;

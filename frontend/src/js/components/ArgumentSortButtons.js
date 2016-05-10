import React from 'react'
import { Button, ButtonToolbar, Row, Col } from 'react-bootstrap'

const ArgumentSortButtons = ({ sortOption, onSetSortOption, props }) => (

  <div className="userArgumentFilter">
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

export default ArgumentSortButtons;

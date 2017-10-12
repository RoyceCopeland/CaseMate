import React, {Component} from "react";
import "./Setup.css";
import {Row, Col, Collapsible, CollapsibleItem} from 'react-materialize';

class Setup extends Component {
  state = {
    background: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    //this.loadBackground();
  }

  render() {
    return (
      <div>
    <Row className='wrapper'>
      <Col m={8} offset={"m2"}>
        <Collapsible popout defaultActiveKey={1}>
          <CollapsibleItem header='First' icon='filter_drama'>
            What do you want to learn
          </CollapsibleItem>
          <CollapsibleItem header='Second' icon='place'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
          <CollapsibleItem header='Third' icon='whatshot'>
            Lorem ipsum dolor sit amet.
          </CollapsibleItem>
        </Collapsible>
      </Col>
    </Row>
  </div>
    );
  }
}

export default Setup;
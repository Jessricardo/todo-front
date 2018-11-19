/**
*
* FullPageLoader
*
*/

import React, { PropTypes } from 'react';
import {
  TaskContainer,
  CheckBox,
  Check,
  Text,
  Remove,
} from './styledComponents';

class TaskItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    hover: false,
  }
  hover = (hover) => () => {
    this.setState({ hover });
  }
  remove = () => {
    const { update, id } = this.props;
    update({ id }, 'remove');
  }
  check = () => {
    const { update, id, checked } = this.props;
    update({ status: checked ? 'nochecked' : 'checked', id }, 'update');
  }
  render() {
    const { hover } = this.state;
    const { checked, text } = this.props;
    return (
      <TaskContainer onClick={this.check} onMouseEnter={this.hover(1)} onMouseLeave={this.hover(0)}>
        <CheckBox hover={hover}>
          <Check checked={checked} src="https://image.flaticon.com/icons/svg/60/60731.svg" />
        </CheckBox>
        <Text checked={checked}>
          {text}
        </Text>
        <Remove onClick={this.remove} hover={hover}>x</Remove>
      </TaskContainer>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  update: PropTypes.func,
  checked: PropTypes.bool,
};

export default TaskItem;

import React from 'react';
import {COLOR_LIGHT_BLACK, SPACING_XSMALL} from '../../../utilities/styleGuide';
import Icon from '../../../components/Icon';

const LikeCounter = ({count, active, activeColor, handleLikes}) => (
  <a
    style={{
      color: active ? activeColor : COLOR_LIGHT_BLACK
    }}
    onClick={handleLikes}
  >
    <div>
      <span style={{marginRight: SPACING_XSMALL, display: 'inline-block'}}>
        <Icon name='thumbs-up' />
      </span>
      <span>{count} likes</span>
    </div>
  </a>
);

LikeCounter.propTypes = {
  count: React.PropTypes.number.isRequired,
  active: React.PropTypes.bool,
  activeColor: React.PropTypes.string,
  handleLikes: React.PropTypes.func
};

export default LikeCounter;

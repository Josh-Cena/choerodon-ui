import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Animate from '../../animate';
import createChainedFunction from '../util/createChainedFunction';
import classnames from 'classnames';
import Notice from './Notice';

let seed = 0;
const now = Date.now();
let maxCount;

function getUuid() {
  return `rcNotification_${now}_${seed++}`;
}

export default class Notification extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    transitionName: PropTypes.string,
    animation: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    style: PropTypes.object,
    closeIcon: PropTypes.node,
    contentClassName: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'rc-notification',
    animation: 'fade',
    style: {
      top: 65,
      left: '50%',
    },
  };

  static newInstance = function newNotificationInstance(properties, callback) {
    const { getContainer, defaultMaxCount, ...props } = properties || {};
    const div = document.createElement('div');
    if (getContainer) {
      const root = getContainer();
      root.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
    if (defaultMaxCount) {
      maxCount = defaultMaxCount;
    }
    let called = false;

    function ref(notification) {
      if (called) {
        return;
      }
      called = true;
      callback({
        notice(noticeProps) {
          notification.add(noticeProps);
        },
        removeNotice(key) {
          notification.remove(key);
        },
        component: notification,
        destroy() {
          ReactDOM.unmountComponentAtNode(div);
          div.parentNode.removeChild(div);
        },
      });
    }

    ReactDOM.render(<Notification {...props} ref={ref} />, div);
  };

  state = {
    notices: [],
  };

  getTransitionName() {
    const props = this.props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${props.prefixCls}-${props.animation}`;
    }
    return transitionName;
  }

  add = notice => {
    const key = (notice.key = notice.key || getUuid());
    this.setState(previousState => {
      const notices = previousState.notices;
      if (!notices.filter(v => v.key === key).length) {
        if (maxCount && notices && notices.length > 0 && notices.length >= maxCount) {
          notices.shift();
        }
        return {
          notices: notices.concat(notice),
        };
      }
    });
  };

  remove = key => {
    this.setState(previousState => {
      return {
        notices: previousState.notices.filter(notice => notice.key !== key),
      };
    });
  };

  render() {
    const props = this.props;
    const { contentClassName } = props
    const noticeNodes = this.state.notices.map(notice => {
      const onClose = createChainedFunction(this.remove.bind(this, notice.key), notice.onClose);
      return (
        <Notice
          prefixCls={props.prefixCls}
          contentClassName={contentClassName}
          {...notice}
          onClose={onClose}
          closeIcon={props.closeIcon}
        >
          {notice.content}
        </Notice>
      );
    });
    const className = {
      [props.prefixCls]: 1,
      [props.className]: !!props.className,
    };
    return (
      <div className={classnames(className)} style={props.style}>
        <Animate transitionName={this.getTransitionName()}>{noticeNodes}</Animate>
      </div>
    );
  }
}

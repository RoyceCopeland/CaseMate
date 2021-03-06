import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './Styles'

class TimelineEvent extends Component {
  mergeNotificationStyle(iconColor, bubbleStyle) {
    const iconColorStyle = iconColor ? {...s.eventType, ...{color: iconColor, borderColor: iconColor}} : s.eventType
    return {...iconColorStyle, ...bubbleStyle}
  }

  mergeContentStyle(contentStyle) {
    const messageStyle = this.showAsCard() ? s.cardBody : s.message
    return contentStyle ? {...messageStyle, ...contentStyle} : messageStyle
  }

  timeStyle() {
    return this.showAsCard() ? s.time : {...s.time, color: '#303e49'}
  }

  showAsCard() {
    const {container} = this.props
    return container === 'card'
  }

  containerStyle() {
    const {style} = this.props
    const containerStyle = {...s.eventContainer, ...style}
    return this.showAsCard() ? {...containerStyle, ...s.card} : containerStyle
  }

  iconStyle(iconStyle) {
    return {...s.materialIcons, ...iconStyle}
  }

  render() {
    const {
      date,
      title,
      subtitle,
      contentStyle,
      iconStyle,
      buttons,
      icon,
      iconColor,
      container,
      cardHeaderStyle,
      titleStyle,
      subtitleStyle,
      ...otherProps
    } = this.props
    return (
      <div style={s.event}>
        <div style={this.mergeNotificationStyle(iconColor, iconStyle)}>
          <span style={s.materialIcons}>
            {icon}
          </span>
        </div>
        <div {...otherProps} style={this.containerStyle()}>
          <div style={s.eventContainerBefore} />
          <div style={container === 'card' ? {...s.cardTitle, ...cardHeaderStyle} : {}}>
            {date &&
              <div style={this.timeStyle()}>
                {date}
              </div>}
            <div style={titleStyle}>
              {title}
            </div>
            {subtitle &&
              <div style={{...s.subtitle, ...subtitleStyle}}>
                {subtitle}
              </div>}
            <div style={s.actionButtons}>
              {buttons}
            </div>
          </div>
          {this.props.children &&
            <div style={this.mergeContentStyle(contentStyle)}>
              {this.props.children}
              <div style={s.messageAfter} />
            </div>}
        </div>
        <div style={s.eventAfter} />
      </div>
    )
  }
}

TimelineEvent.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  date: PropTypes.node,
  children: PropTypes.node,
  buttons: PropTypes.node,
  container: PropTypes.string,
  icon: PropTypes.node,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  cardHeaderStyle: PropTypes.object,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object
}

TimelineEvent.defaultProps = {
  date: undefined,
  iconStyle: {},
  contentStyle: {},
  cardHeaderStyle: {},
  style: {},
  titleStyle: {},
  subtitleStyle: {}
}

export default TimelineEvent
import React from 'react'
import NewWindow from 'react-new-window'

export default class WindowPortal extends React.PureComponent {
  render(){
    return (
      <NewWindow>
        {this.props.children}
      </NewWindow>
    )
  }
}
import * as React from "react";
import "./LoadButton.css";

interface ILoadButton{
  onClick: () => void;
  working?: boolean;
  text: string;
  className?: string;
  disabled?: boolean;
  iconClass?: string;
}

export default class LoadButton extends React.PureComponent<ILoadButton> {
  handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.onClick();
  }
  render() {
    const isWorking = this.props.working;
    const disabled = this.props.disabled || false;
    const className = this.props.className || "button";
    return (
      <button 
        disabled={disabled} 
        className={className + " load-button"} 
        onClick={(event) => this.handleClick(event)}>
          <div style={{display: isWorking ? "none" : ""}}>
          {
            this.props.iconClass && (
              <span className={this.props.iconClass}>&nbsp;</span>
            )
          }
            {this.props.text}
          </div>
          <div style={{display: isWorking ? "" : "none"}}>
          {/* All the extra divs are necessary for the css animation */}
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>          
      </button>);
  }
}

import React from "react";
import DropZone from "react-dropzone";
import "./steps.css";

interface IInstructions {
  updateCharacterJson: (blob: Blob) => void;
}

interface State {
  profileName: string;
  characterNumber: string;
  step: number;
  textBlob: Blob | undefined;
  buttonDisabled: boolean;
}

class Instructions extends React.Component<IInstructions, State> {
  state: State = {
    profileName: "",
    characterNumber: "",
    step: 1,
    buttonDisabled: true,
    textBlob: undefined,
  };
  componentDidMount() {
    const profileName = localStorage.getItem("profileName");
    const characterNumber = localStorage.getItem("characterNumber");
    if (profileName && characterNumber) {
      this.setState({ profileName, characterNumber, step: 3 });
    }
    else if (profileName) {
      this.setState({ profileName, step: 2 });
    }
  }
  updateProfileName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ profileName: e.target.value });
  updateTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const buttonDisabled: boolean = !e.target.value && e.target.value.length === 0;
    const textBlob = new Blob([e.target.value], { type: "text/plain" });
    this.setState({ textBlob, buttonDisabled });
  }
  updateCharacterNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const characterNumber = parseInt(e.target.value, 10.0);
    if (characterNumber > 0) {
      this.setState({ characterNumber: e.target.value });
    }
  }
  //updateCharacterJson = (e: React.ChangeEvent<HTMLTextAreaElement>) => this.props.updateCharacterJson(e.target.value);
  setProfile = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    window.localStorage.setItem("profileName", this.state.profileName);
    this.setState(prevState => ({ step: prevState.step + 1 }));
  }
  setCharNum = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.characterNumber) {
      window.localStorage.setItem("characterNumber", this.state.characterNumber.toString());
    }
    this.setState(prevState => ({ step: prevState.step + 1 }));
  }
  setCharacterJson = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.textBlob) {
      this.props.updateCharacterJson(this.state.textBlob);
    }
  }
  onDrop = (accepted: File[], rejected: File[]) => {
    console.log("DROP");
    if (accepted.length > 0) {
      this.props.updateCharacterJson(accepted[0]);
    }
    if (rejected.length > 0) {
      alert("Only JSON files can be uploaded!");
    }
  }
  render() {
    const profileAddress = `https://www.dndbeyond.com/profile/${this.state.profileName || "Example"}/characters`;
    const finalUri = `https://www.dndbeyond.com/profile/${this.state.profileName || "Example"}` +
      `/characters/${this.state.characterNumber || 1234567}/json`;
    return (
      <div className="steps">
        <div className={this.state.step >= 1 ? "step" : "step step-disabled"}>
          <div className="step-title">Step 1</div>
          <div>
            Go to <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dndbeyond.com">D&amp;D Beyond</a> and log in.
            Once you're logged in, look in the top-right corner of the page. See your profile name? Enter it here:
          </div>
          <form>
            <input
              placeholder="Your Profile Name"
              type="text" value={this.state.profileName}
              onChange={this.updateProfileName} />
            <button onClick={this.setProfile} className="done-button">Done</button>
          </form>
        </div>
        <div className={this.state.step >= 2 ? "step" : "step step-disabled"}>
          <div className="step-title">Step 2</div>
          <div>
            Go to <a
              target="_blank"
              rel="noopener noreferrer"
              href={profileAddress}>your character page</a> on D&amp;D Beyond,
            click "View" on the character who's spells you wish to print.
            Look at the URL in your browser address bar. It should end in a number.
            Enter that number below
          </div>
          <form>
            <input
              placeholder="1234567"
              type="text"
              value={this.state.characterNumber}
              onChange={this.updateCharacterNumber} />
            <button onClick={this.setCharNum} className="done-button">Done</button>
          </form>
          <div>
            For instance if your address was as follows:
            <div>
              <span className="exampleAddress">
                <span>{profileAddress}/</span>
                <span className="highlighted">1234567</span>
              </span>
            </div>
            <div>Then you would enter "1234567"</div>
          </div>
        </div>
        <div className={this.state.step >= 3 ? "step" : "step step-disabled"}>
          <div className="step-title">Step 3</div>
          <div>Follow this link:</div>
          <div className="final-link">
            <a className="final-uri" target="_blank" rel="noopener noreferrer" href={finalUri}>{finalUri}</a>
          </div>
          <div>
            Right-click on the page and save the file to your PC. The file should end with ".json".
            Then upload that file here:
          </div>
          <div>
            <DropZone
              accept=".json"
              onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="drop">
                        <div>
                          <div><span className="fa fa-file"></span>&nbsp;Drop json here</div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
            </DropZone>
          </div>
        </div>
      </div>
    );
  }
}


export default Instructions;

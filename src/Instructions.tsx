import React from "react";
import "./steps.css";
import LoadButton from "./LoadButton";

interface IInstructions {
  updateCharacterJson: (blob: string) => void;
}

interface State {
  characterNumber: string;
  loading: boolean;
}

class Instructions extends React.Component<IInstructions, State> {
  state: State = {
    loading: false,
    characterNumber: process.env.NODE_ENV === "development" ? "3312827" : "",
  };
  updateCharacterNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const characterNumber = parseInt(e.target.value, 10.0);
    if (characterNumber > 0) {
      this.setState({ characterNumber: e.target.value });
    }
  }
  getCharacterJson = async () => {
    this.setState({loading: true});
    const uri = "https://dndbeyond.azurewebsites.net/api/BeyondFile?id=" + this.state.characterNumber;
    try{
      const response = await fetch(uri);
      if (response.status !== 200){
        alert("Error fetching Beyond File");
        return;
      }
      const responseJson = await response.text();
      this.props.updateCharacterJson(responseJson);
      this.setState({loading: false});
    }
    catch (err){
      this.setState({loading: false});
      alert("Exception fetching Beyond File");
    }   
  }
  render() {
    const profileAddress = "https://www.dndbeyond.com/profile/Example/characters";
    return (
      <div className="steps">
        <div className="step">
          <div className="step-title">Load A Character</div>
          <div>
            Go to <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://www.dndbeyond.com/my-characters"}>your character page</a> on D&amp;D Beyond,
            click "View" on the character whose spells you wish to print. 
            Look at the URL in your browser address bar. It should end in a number.
            Enter that number below. Note that the character must be public.
          </div>
          <div style={{marginTop: "10px", marginBottom: "10px"}}>
            For instance if your address was as follows:
            <div>
              <span className="exampleAddress">
                <span>{profileAddress}/</span>
                <span className="highlighted">1234567</span>
              </span>
            </div>
            <div>Then you would enter "1234567"</div>
          </div>
          <form>
            <input
              placeholder="000000"
              type="text"
              value={this.state.characterNumber}
              onChange={this.updateCharacterNumber} />
            <LoadButton 
              text="Load Character" 
              className="done-button" 
              working={this.state.loading} 
              onClick={this.getCharacterJson}  />
            {/* <button onClick={this.getCharacterJson} className="done-button">Load Character</button> */}
          </form>
        </div>
      </div>
    );
  }
}


export default Instructions;

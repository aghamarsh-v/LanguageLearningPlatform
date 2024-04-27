import React, {Component} from "react";
import '../css/wordCard.css';

class Text extends Component {
    constructor (props) {
        super(props);
        this._value = props.content;
        this._className = props.clname;
    }

    render () {
        return (
            <span className={this._className}>{this._value}</span>
        )
    }
}

class WordCard extends Component {
  constructor () {
    super();
    this._wordToDisp = 'babble';
    this._wordDescription = 'verb';
    this._linguistics = '/ˈbæb.əl/'
    this._meaningToDisp = "to talk or say something in a quick, confused, excited, or silly way";
    this._usageToDisp = ['The children babbled excitedly among themselves.', 'She was babbling something about her ring being stolen.'];
  }

  disp () {
    this._value = this._wordToDisp;
    const docElement = document.getElementById("test_state");
    if (!docElement) {
      return;
    }
    docElement.textContent = this._value;
  }

  render () {
    
    return (
      <div className="WordCard">
        <Text clname="WordCardTitle" content="Word of the day !"/>
        <br />
        <Text clname="word" content={this._wordToDisp} />
        <br />
        <Text clname="WordCardDesc" content={this._wordDescription}/>
        <br />
        <Text clname="WordCardHeading" content="Meaning: "/>
        <br />
        <Text clname="WordCardMeaning" content={this._meaningToDisp} />
        <br />
        <Text clname="WordCardHeading" content="Usage: " />
        <br />
        <Text clname="WordCardUsage" content={this._usageToDisp[0]} />
        <br/>
        <button onClick={this.disp.bind(this)}> Click to hear </button>
      </div>
    )
  }
}

export default WordCard;

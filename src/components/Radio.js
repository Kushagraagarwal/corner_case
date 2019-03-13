import React from 'react';
import RadioStyles from '../css/radio.css';
const Radios = [
  {
    id:'0',
    name:'Putin FM',
    frequency:'66,6',
    image:require('../constants/images/icon.png')
  },
  {
    id:'1',
    name:'Dribbble FM',
    frequency:'101,2',
    image:require('../constants/images/icon.png')
  },
  {
    id:'2',
    name:'Doge FM',
    frequency:'99,4',
    image:require('../constants/images/icon.png')
  },
    {
      id:'3',
      name:'Ballads FM',
      frequency:'87,1',
      image:require('../constants/images/icon.png')
    },
    {
      id:'4',
      name:'Maximum FM',
      frequency:'142,2',
      image:require('../constants/images/icon.png')
    }
]
class Radio extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      name:'',
    };
  }
  toggle(index,name) {
    if(this.state.current === index){
      this.setState({
        current: null,
        name: '',
      })  
    }
    else{
      this.setState({
        current: index,
        name: name,
      })
    }
  }
  render(){
    var lastElement = Radios.length - 1;
    return (
      <div className={RadioStyles.radioWrapper}>
        <div className={RadioStyles.radioHeader}>
          <button className={RadioStyles.backButton}>
            <img src={require('../constants/images/back-arrow.png')}/>
          </button>
          <div className={RadioStyles.radioHeading}>STATIONS</div>
          <button className={RadioStyles.switch}>
            <img src={require('../constants/images/switch.png')}/>
          </button>
        </div>
        <div className={RadioStyles.radioBody}>
          {Radios.map(Radio => (
            <div key={Radio.id}>
              <div className={this.state.current == Radio.id ? RadioStyles.player : RadioStyles.displayNone}>
                <button className={RadioStyles.radioPlus}>
                  <img src={require('../constants/images/minus.png')}/>
                </button>
                <img className={RadioStyles.radioImage} src={Radio.image}/>
                <button className={RadioStyles.radioMinus}>
                  <img src={require('../constants/images/plus.png')}/>
                </button>
              </div>
              <div className={Radio.id == lastElement ? RadioStyles.radioTabLast : RadioStyles.radioTab} onClick={this.toggle.bind(this, Radio.id,Radio.name)}>
                <div className={RadioStyles.radioName}>{Radio.name}</div>
                <div className={RadioStyles.radioFrequency}>{Radio.frequency}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={RadioStyles.radioFooter}>
              <div  className={this.state.name != ''? RadioStyles.subHead : RadioStyles.displayNone}>CURRENTLY PLAYING</div>
              <div  className={this.state.name != ''? RadioStyles.currentRadio : RadioStyles.displayNone}>{this.state.name}</div>
        </div>
      </div>
    )};
  }
export default (Radio);
import React, { Component } from 'react';
import {icons} from './icons';
class Octicon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
    this.checkIcon = this.checkIcon.bind(this);
    this.checkIconExist = this.checkIconExist.bind(this);
  }

  componentDidMount() {
    this.checkIcon(this.props.icon);
  }

  checkIcon(icon){
    if (icon === undefined) {
      this.setState({
        error: true
      })
    }else{
      this.checkIconExist(icon);
    }
  }

  checkIconExist(icon){
    console.log(icon);
    let filter = icons.filter((obj) => {return obj.name == icon})
    if (filter.length > 0) {
      this.setState({
        icon: filter[0],
        error: false,
      })
    }else{
      this.setState({
        error: true
      })
    }
  }

  render() {
    console.log(this.state.icon);
    return (
      <div>
        {
          this.state.error ? null :
          this.state.icon ? <svg dangerouslySetInnerHTML={{ __html: this.state.icon.svg }} ></svg> : null
        }
      </div>
    );
  }

}

export default Octicon;

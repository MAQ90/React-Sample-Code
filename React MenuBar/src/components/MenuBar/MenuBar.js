import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
// import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

class Link extends Component{
    render() {
          let url = '/' + this.props.label.toLowerCase().trim().replace(' ','-');

        return(
            <div> <a href={url}>{this.props.label}</a><br/> </div>
        );
    }
};

class MenuBar extends Component{
   render() {
var menus = this.props.menus

       return(
      <div>
        {menus.map((v,i) => {return (<div key={i}><Link label={v}/></div>)})}
    </div>
       );
   }
};

export default MenuBar;

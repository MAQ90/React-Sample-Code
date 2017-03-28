import React, {Component} from 'react';

class Link extends Component{
    render() {
          let url = '/' + this.props.label.toLowerCase().trim().replace(' ','-');

        return(
            <div> <a href={url}>{this.props.label}</a><br/> </div>
        );
    }
};

class Menu extends Component{
   render() {
var menus = this.props.menus

       return(
      <div>
        {menus.map((v,i) => {return (<div key={i}><Link label={v}/></div>)})}
    </div>  
       );
   }
};

export default Menu;
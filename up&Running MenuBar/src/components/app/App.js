import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit
                    <code>src/App.js</code>
                    and save to reload.
                </p>
                <form >
                    <input type="text" name="todoDes"/>
                    <button type="button" name="todoadd">+</button>
                </form>
                var headers = ["Book", "Author", "Language", "Published", "Sales"]; var data = [ ["The Lord of the Rings", "J. R. R. Tolkien", "English", "1954–1955", "150 million"], ["Le Petit Prince (The Little Prince)", "Antoine de Saint-Exupéry", "French", "1943", "140 million"], ["Harry Potter and the Philosopher's Stone", "J. K. Rowling", "English", "1997", "107 million"], ["And Then There Were None", "Agatha Christie", "English", "1939", "100 million"], ["Dream of the Red Chamber", "Cao Xueqin", "Chinese", "1754–1791", "100 million"], ]; var Excel = React.createClass({propTypes : {
                    headers: React.PropTypes.arrayOf(React.PropTypes.string),
                    initialData: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string))
                },
                getInitialState : function() {
                    return {data: this.props.initialData, sortby: null, descending: false};
                },
                _sort : function() {
                    var column = e.target.cellIndex;
                    var data = this.state.data.slice();
                    var descending = this.state.sortby === column && !this.state.descending;
                    data.sort(function(a, b) {
                        return descending
                            ? (a[column] < b[column]
                                ? 1
                                : -1)
                            : (a[column] > b[column]
                                ? 1
                                : -1);
                    });
                    this.setState({data: thi.this.props.initialData, sortby: null, descending: false, edit: null});
                },
                _showEditor : function(e) {
                    this.setState({
                        edit: {
                            row: parseInt(e.target.dataset.row, 10),
                            cell: e.target.cellIndex
                        }
                    });
                },

                render : function() {
                    return React.DOM.table(null, React.DOM.thead({
                        onClick: this._sort
                    }, React.DOM.tr(null, this.props.headers.map(function(title, idx) {
                        if (this.state.sortby === idx) {
                            title += this.state.descending
                                ? ' \u2191'
                                : ' \u2193'
                        }
                        return React.DOM.th({
                            key: idx
                        }, title);
                    }, this)), React.DOM.tbody({
                        onDoubleClick: this._showEditor
                    }, this.state.data.map(function(row, rowidx) {
                        return (React.DOM.tr({
                            key: rowidx
                        }, row.map(function(cell, idx) {
                            var content = cell;
                            return React.DOM.td({
                                key: idx,
                                'data-row': rowidx
                            }, content);
                        }, this)));
                    })), ReactDOM.render(React.createElement(Excel, {
                        headers: headers,
                        initialData: this.props.initialData
                    }), document.getElementById("text"));
                    </div>
    );
  }}

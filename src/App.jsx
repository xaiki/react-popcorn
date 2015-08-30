import React, { Component } from 'react';
import Router from 'react-router';
import ReactCSS from 'reactcss';

import Item from './Item';

var testItems = require ('json!./tests/items.json');

require ("./vendor/font-awesome/css/font-awesome.min.css");
require ("./vendor/material-design-iconic-font/dist/css/material-design-iconic-font.min.css");
//require ("./css/animation.css");
//require ("./themes/Official_-_FlaX_theme.css");


var filters = [
    {value: "trending",   text:"Trending" },
    {value: "popularity", text:"Popularity" },
    {value: "last added", text:"Last Added" },
    {value: "year",       text:"Year" },
    {value: "title",      text:"Title" },
    {value: "rating",     text:"Rating" },
]

class FilterToolbar extends ReactCSS.Component {
    classes () {
        return {
            'default': {
                toolbar: {
		    position: 'relative',
		    marginTop: 100,
		    minHeight: 100,
		    backgroundColor: 'rgba(0,0,0,0)',
		    transition: 'background-color 300ms ease-in',
                },
                filterBar: {
		    width: '100%',
		    padding: '20px 76px 20px 70px',
		    webkituserselect: 'none',
		    transition: 'background-color 0.5s',
		    zIndex: 1
	        }
	    },
        }
    }
    render () {
        return (
            <div is="toolbar" id="filterbar-toolbar" className="filters-wrapper">
                <div is="filterBar" className="bottom filter-bar">
                    <pt-dropdown >
                        {
                            filters.map((f, i) => {
                                return <pt-selectable-element checkeable value={f.value} label={f.label} key={i}></pt-selectable-element>
                            })
                         }
                    </pt-dropdown>
                </div>
            </div>
        )
    }
}

class TopTools extends ReactCSS.Component {
    classes () {
        return  {
            'default': {
                topTools: {
                    position: 'relative',
                    display: 'block',
                    marginTop: 65,
                    width: '100%',
                    zIndex: 1,
                },
                title: {
                    fontSize: 42,
                    fontWeight: 500,
                    letterSpacing: 0.7,
                    color: '#fff',
                    padding: '0 80px 0 70px'
                }
            },
        }
    }
    render () {
        return (
            <div is="topTools" className="top-tools">
                <h1 is="title" id="section-title" className="title">{this.props.title}</h1>
                <FilterToolbar />
                <div className="right search">
                    <form id="filterbar-search">
                        <paper-input-decorator  floatingLabel="true" label={i18n.__("Search")}>
                            <input id="filterbar-input" isa="core-input" />
                        </paper-input-decorator>
                    </form>
                </div>
            </div>
        )
    }
}

class ListRegion extends ReactCSS.Component {
    static defaultProps = {
        type: 'movies'
    }
    constructor(props){
        super(props);
        this.state = {
            items: testItems
        }
    }

    classes() {
        return {
            'default': {
                region: {
                    height: '100vh',
                    position: 'absolute',
                    left: 100,
                    right: 0,
                    overflowY: 'auto',
                    overflowX:' hidden',
                    fontFamily: 'Roboto',
                },
                content: {
                    display: 'flex',
                    position: 'relative',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    margin: '0 76px 0 66px',
                    width: 'calc(100% - 76px - 65px)'
                }
            },
        }
    }
    render() {
        let title = i18n.__(this.props.type.capitalize())
        console.log ('region', this.props);
        return (
            <div>
                <div is="region">
                    <TopTools title={title} />
                    <div is="content">
                        {this.state.items.map ((item) => {
                            return <Item {...item} key={item._id} type={this.props.type}/>
                         })}
                    </div>
                </div>
                {this.props.children?
                 <div is="region">{this.props.children}</div>:null
                 }
            </div>)
    }
}

export class Movies extends ListRegion {
    constructor(props) {
        if (!props.type)
            props.type = 'movies';

        super(props);
    }
}

export class Shows extends ListRegion {
    constructor(props) {
        if (!props.type)
            props.type = 'shows';

        super(props);
    }
}


class MainNav extends Component {
    render () {
        return (
            <nav id="main-nav" className="main-nav">
                <ul>
                    <li id="nav-movies" className="source active showMovies providerinfo" title="YTS">
                        <a href="#" className="active">
                            <core-icon icon="maps:local-movies"></core-icon>
                            <span className="nav-text">{i18n.__("Movies")}</span>
                        </a>
                    </li>
                    <li id="nav-shows" className="source showShows providerinfo" title="TVApi">
                        <a href="#">
                            <core-icon icon="hardware:tv"></core-icon>
                            <span className="nav-text">{i18n.__("TV Series")}</span>
                        </a>
                    </li>
                    <li id="nav-anime" className="source showAnime providerinfo" title="Haruhichan">
                        <a href="#">
                            <core-icon icon="social:mood"></core-icon>
                            <span className="nav-text">{i18n.__("Anime")}</span>
                        </a>
                    </li>

                    <li id="nav-bookmarks">
                        <a href="#">
                            <core-icon icon="bookmark"></core-icon>
                            <span className="nav-text">{i18n.__("Bookmarks")}</span>
                        </a>
                    </li>

                    <li id="nav-settings">
                        <a href="#">
                            <core-icon icon="settings"></core-icon>
                            <span className="nav-text">{i18n.__("Settings")}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

var ButtonOrder = {
    'win32': ['close', 'max', 'min'],
    'darwin': ['close', 'min', 'max'],
    'linux': ['min', 'max', 'close']
}

class Header extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                header: {
                    zIndex: 10,
		    fontFamily: '\'Roboto\', sans-serif',
		    webkitappregion: 'drag',
		    width: '100vw',
		    height: 35,
		    position: 'fixed'
                },
                title: {
                    zIndex: 10,
		    textAlign: 'center',
		    position: 'fixed',
		    width: '100vw',
		    marginTop: 10,
		    color: '#f0f8ff',
		    opacity: 0.9,
		    fontSize: 16,
		    fontWeight: 500
                },
                osControls: {
                    webkitappregion: 'no-drag',
		    marginTop: 11,
		    zIndex: 11,
		    position: 'absolute',
                    cursor: 'pointer',
		    color: '#fff'
                }
            }
        }
    }

    getButtons() {
        return ButtonOrder.linux
    }

    render () {
        return (
            <header is="header">
                <span is="title">Popcorn Time</span>
                <div is="osControls">
                    {this.getButtons().map((button, i) => {
                        var name = 'zmdi-' + (button != "close" ? "window-" + button + "imize" : button)
                            return <div className={button} key={i}><i className="zmdi {name}"></i></div>
                     })}
                </div>
            </header>
        )
    }
}

export class MainWindow extends Component {
    render () {
        return (
            <div>
                <Header />
                <Router.RouteHandler />
            </div>
        )
    }
}


export class Test extends Component {
    render () {
        return (
            <Movies items={testItems} />
        )
    }
}

export class App extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                body: {
		    padding: 0,
		    border: 0,
		    outline: 0,
		    fontWeight: 'inherit',
		    fontStyle: 'inherit',
		    fontFamily: 'inherit',
		    fontSize: '100%',
		    verticalAlign: 'baseline',
                    lineHeight: 1,
		    color: '#000',
		    background: '#fff',
                    width: '100%',
		    height: '100%',
		    backgroundColor: '#191d22',
		    webkitboxshadow: '0 0 40px rgba(0,0,0,0.75)',
		    boxShadow: '0 0 40px rgba(0,0,0,0.75)',
		    marginLeft: 'auto',
		    marginRight: 'auto',
		    //fontFamily: '\'Open Sans Semibold\', \'Open Sans\', sans-serif',
		    webkitfontsmoothing: 'antialiased',
		    cursor: 'default'
                }
            }
        }
    }

    render() {
        return (
            <div is="body">
                <Header />
                {this.props.children}
            </div>
        )
    }
}




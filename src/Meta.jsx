import React from 'react';
import ReactCSS from 'reactcss';

export class Dot extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                dot: {
		    display: 'inline-block',
		    width: 5,
		    height: 5,
		    margin: '0 6px 2px 6px',
		    webkitborderradius: '50%',
		    borderRadius: '50%',
		    backgroundColor: '#fff'
                },
            },
        }
    }
    render() {
        return (<div is="dot"></div>)
    }
}

export class Divider extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                divider: {
                    width: '100%',
		    position: 'relative',
		    marginTop: 36,
		    marginBottom: 41,
		    backgroundColor: 'rgba(255,255,255,0.12)',
		    height: 1
                },
            },
        }
    }
    render() {
        return (<div is="divider"></div>)
    }
}


export class Synopsis extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                synopsis: {
		    textAlign: 'justify',
		    paddingRight: 5,
		    marginTop: 44,
		    position: 'relative',
		    color: '#fff',
		    width: '100%',
		    lineHeight: '25px',
		    fontSize: '16px',
		    textRendering: 'optimizeLegibility'
                }
            },
        }
    }
    render() {
        return (<div is="synopsis">{this.props.children}</div>)
    }
}

export class Section extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                section: {
		    position: 'absolute',
		    zIndex: 1,
		    top: 160,
		    bottom: 0,
		    left: 'calc(((100vh - 210px) * 2 / 3) + 170px)',
		    right: 60,
		    paddingLeft: 20,
		    paddingRight: 20,
		    paddingBottom: 30,
		    height: 'calc(100vh - 340px)',
		    overflowY: 'auto',
		    overflowX: 'hidden'
                }
            },
        }
    }
    render() {
        return (<div is="section">{this.props.children}</div>)
    }
}

export class Item extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                item: {
		    float: 'left',
		    color: '#fff'
                }
            },
        }
    }
    render() {
        return (<div is="item">{this.props.children}</div>)
    }
}

export class Entry extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                entry: {
		    float: 'none',
		    textTransform: 'capitalize',
		    display: 'inline-block',
		    fontSize: 15
                }
            },
        }
    }
    render() {
        return (<p is="entry">{this.props.children}</p>)
    }
}

export class Button extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                button: {
                    color: '#fff',
		    fontWeight: 500,
		    paddingTop: 2,
		    marginTop: 20,
		    opacity: 0.7,
		    transition: 'opacity 100ms linear'
                }
            },
        }
    }
    render() {
        return (
                <paper-button id={this.props.id} className="meta-btn">
                    <i className={`zmdi zmdi-${this.props.icon}`}></i>
                    {this.props.children}
                </paper-button>
        )
    }
}


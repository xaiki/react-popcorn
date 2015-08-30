import React from 'react';
import ReactCSS from 'reactcss';

var i18n = {
    __: function (a) { return a}

}

class Person extends ReactCSS.Component {
    classes() {
        return {
            'default': {
                people: {
		    position: 'relative',
		    width: '50%',
		    height: 50,
		    marginBottom: 10,
		    display: 'inline-block',
		    float: 'left',
                    color: '#fff',
		    fontSize: 15
                },
                avatar: {
                    width: 50,
		    height: 50,
		    display: 'inline-block',
		    marginRight: 10,
		    float: 'left'
                },
                avatarImg: {
		    width: '100%',
		    borderRadius: '50%'
                },
                person: {
		    padding: '10px 0 3px',
		    cursor: 'pointer',
		    transition: 'border-color, color 100ms linear'
                },
                status: {
		    color: 'rgba(255,255,255,0.65)',
		    fontSize: 15
                }
            }
        }
    }
    render() {
        console.log(this.props);
        return (
            <div data-id={this.props.imdb_code} is="people">
                <div is="avatar">
                    <img is="avatarImg" src={this.props.small_image} alt="" />
                </div>
                <p is="person">
                    {this.props.name}
                </p>
                <p is="status">
                    {this.props.status}
                </p>
            </div>
        )
    }
}

export class Director extends ReactCSS.Component {
    render () {
        return (
            <Person {...this.props} status="Director" />
        )
    }
}

export class Actor extends ReactCSS.Component {
    render () {
        return (
            <Person {...this.props} status={i18n.___('as %s', this.props.character_name)} />
        )
    }
}

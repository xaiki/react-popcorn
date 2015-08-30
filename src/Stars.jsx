import React, { Component } from 'react';
import ReactCSS from 'reactcss';

export default class Stars extends ReactCSS.Component {
    classes () {
        return {
            'default': {
                container: {
                    display: 'inline-block'
                },
                star: {
                    fontSize: 14
                }
            }
        }
    }

    render () {
        var stars = [];
        var p_rating = Math.round (this.props.percentage/10)/2;
        for (var i = 1; i <= Math.floor(p_rating); i++) {
            stars.push(<i is="star" className="zmdi zmdi-star" key={stars.length}></i>)
        }
        if (p_rating %1>0) {
            stars.push(<i is="star" className="zmdi zmdi-star-half" key={stars.length}></i>)
        }
        for (var i = Math.ceil(p_rating); i < 5; i++) {
            stars.push(<i is="star" className="zmdi zmdi-star-outline" key={stars.length}></i>)
        }

        return (
            <div is="container">{stars}</div>
        )
    }
}

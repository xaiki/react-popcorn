import React, { Component } from 'react';
import ReactCSS from 'reactcss';
import {Spring} from 'react-motion';
import {Link} from 'react-router';

//import Vibrant from 'node-vibrant';

import Stars from './Stars';
import * as Meta from './Meta';

class ItemInfo extends ReactCSS.Component {
    constructor (props) {
        super(props);
        this.updateStyleTransform = this.updateStyleTransform.bind(this)
    }

    classes() {
        return {
            'default': {
                info: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 'auto',
                    background: '#212327',
                    color: '#fff',
                    padding: '16px 20px 20px 20px',
                    textAlign: 'left',
                    transform: 'translateY(100%)',
                    transition: '0.5s transform cubic-bezier(0.55, 0, 0.1, 1), 0.1s background ease-in',
                },
                itemTitle: {
                    fontSize: 18,
		    lineHeight: '22px',
		    fontWeight: 500,
		    marginBottom: 16
                },
                meta: {
		    fontSize: 13
                },
                fab: {
                      position: 'absolute',
                      width: 48,
                      height: 48,
                      right: 8,
                      top: -24,
                      background: '#212327',
                    //		    webkittransition: '0.3s -webkit-transform cubic-bezier(0.55, 0, 0.1, 1) 0.2s, 0.1s background ease-in',
                      transition: '0.3s transform cubic-bezier(0.55, 0, 0.1, 1) 0.2s, 0.1s background ease-in',
                    //		    webkittransform: 'scale(0, 0)',
                      transform: 'scale(0, 0)'
                      }
            },
            'open': {
                info: {
                    transform: 'translateY(0)'
                },
                fab: {
                    transform: 'scale(1, 1)'
                }
            }
        }
    }

    // hello merge
    updateStyleTransform (key, transform) {
        var style = this.styles()[key];
        style.transform = transform;
        return style
    }

    render () {
        return (
            <div is="info">
                <paper-fab id="play-action" icon="av:play-arrow" title={this.props.title}></paper-fab>
                <h3 is="itemTitle">{this.props.title}</h3>
                <div is="meta" >
                    {this.props.year}
                    <Meta.Dot />
                    <Stars percentage={this.props.rating.percentage} />
                </div>
            </div>
        )
    }
}

export default class Item extends ReactCSS.Component {
    constructor (props) {
        super(props);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.getColors  = this.getColors.bind(this);
        this.state = {
            infoOpen: false
        }
    }

    mouseEnter () {
        this.setState({infoOpen: true})
    }

    mouseLeave () {
        this.setState({infoOpen: false})
    }

    getColors (e) {
        let depth = (this.props.fastVibrant)?6:4;
/*        var vibrant = new Vibrant(e.target, 64, depth);
        vibrant.getSwatches((swatches) => {
            console.log (swatches)
                for (var swatch in swatches)
                if (swatches.hasOwnProperty(swatch) && swatches[swatch])
                console.log(swatch, swatches[swatch].getHex())
        });*/
    }

    classes() {
        return {
            'default': {
                item: {
                    position: 'relative',
                    listStyle: 'none',
                    overflow: 'hidden',
                    opacity: 1,
                    margin: 3,
                    cursor: 'pointer',
                    width: '7.4%',
                    maxWidth: 200,
                    minWidth: 165,
                    borderRadius: 1,
                    boxShadow:  '0 0 3px rgba(0, 0, 0, 0.2)',
                }
            },
        }
    }

    render () {
        return (
                <Link is="item" to={`/${this.props.type}/details/${this.props._id}`}
                      onMouseEnter={this.mouseEnter}
                      onMouseLeave={this.mouseLeave}>
                <img onLoad={this.getColors} width="100%" src={this.props.images.poster} />
                <ItemInfo {...this.props} open={this.state.infoOpen}/>
                </Link>
                )
    }
}

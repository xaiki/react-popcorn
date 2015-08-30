import React, { Component } from 'react';
import ReactCSS from 'reactcss';
import {Spring} from 'react-motion';

import Stars from './Stars';
import {Director, Actor} from './Person';
import * as Meta from './Meta';

var testDetails = require ('json!./tests/movie-detail.json');

var Settings = {
    'subtitle_language': 'es'
}

var App = {
    Device: {
        Collection: {
            selected: {id: 'pt', label: 'Popcorn Time', type: 'pt'},
            models: [
                {id: 'pt', label: 'Popcorn Time', type: 'pt'},
                {id: 'vlc', label: 'Video Lan Client', type: 'vlc'},
                {id: 'mpv', label: 'MPV', type: 'mpv'},
            ]
        }
    }
}

class MovieMeta extends ReactCSS.Component {
    render () {
        return (
            <Meta.Section>

            <div className="meta-item">
                <Stars percentage={this.props.rating/20} />

                <Meta.Dot />
                <Meta.Entry>
                   {this.props.genre.join(', ')}
                </Meta.Entry>
                <Meta.Dot />
                <Meta.Entry>
                    {this.props.year}
                </Meta.Entry>
                <Meta.Dot />
                <Meta.Entry>
                    {this.props.runtime} min
            </Meta.Entry>

            </div>

            <Meta.Synopsis>
                {this.props.synopsis}
            </Meta.Synopsis>
            <Meta.Button icon="open-in-new" id="trakt-link">
                {i18n.__( 'More Info')}
            </Meta.Button>

            <Meta.Button icon="play-circle-outline" id="play-trailer">
                {i18n.__( 'Watch Trailer')}
            </Meta.Button>

            <Meta.Divider />
                <p>
                    {this.props.directors.map((person, i) => {
                        <Director {...person} key={i}/>
                     })}
                </p>
                <p>
                    {this.props.actors.map((person, i) => {
                        <Actor {...person} key={i}/>
                     })}
                </p>
            </Meta.Section>
        )
   }
}

export class MovieDetail extends ReactCSS.Component {
    static defaultProps = testDetails;

    classes() {
        return {
            'default': {
                backdrop: {
		    position: 'fixed',
		    height: '100vh',
		    width: '100vw',
		    opacity: 0,
		    webkitfilter: 'brightness(45%)',
		    backgroundSize: 'cover',
		    backgroundRepeat: 'no-repeat',
		    backgroundPosition: 'top center'
                },
                summary: {
                    position: 'relative',
		    width: '100vw',
		    height: 'calc(100vh - 180px)'
                },
                title: {
                    color: '#fff',
		    marginTop: 60,
		    marginLeft: 27,
		    float: 'left',
		    fontSize: 42,
		    fontWeight: 500
                },
                back: {
		    float: 'left',
		    marginTop: 54,
		    marginLeft: 28,
		    zIndex: 2,
		    color: '#fff',
		    cursor: 'pointer',
		    fontSize: 42
                },
                controls: {
		    position: 'absolute',
		    height: 180,
		    width: '100vw',
		    right: 0,
		    bottom: 0,
		    backgroundColor: '#111214'
                },
                watchnow: {
                    cursor: 'pointer',
		    padding: '3px 21px',
		    fontWeight: 500,
		    fontSize: 15,
		    textAlign: 'center',
		    textTransform: 'uppercase',
		    webkitborderradius: 4,
		    borderRadius: 4,
		    float: 'right',
		    position: 'absolute',
		    top: 62,
		    right: 80,
		    transition: '0.5s',
                    backgroundColor: this.props.color,
                    color: this.props.textcolor
                },
            }
        }
    }
    render() {
        return (
            <div>
                <div is="backdrop" data-bgr={this.props.backdrop}></div>
                <div is="summary">
                    <paper-icon-button is="back" icon="arrow-back"></paper-icon-button>
                    <div is="title">
                        {this.props.title}
                    </div>
                    <paper-icon-button icon="bookmark-outline" className="bookmark-toggle">
                    </paper-icon-button>
                    <paper-icon-button icon="visibility-off" className="watched-toggle">
                    </paper-icon-button>
                    <MovieMeta {...this.props}/>
                </div>
                <div is="controls">
                    <div className="meta-container-c">
                        <QualitySwitcher {...this.props.torrents} />
                        <SubtitlesSwitcher subtitle={this.props.subtitle} />
                        <DeviceSwitcher />
                    </div>
                <paper-shadow z="1">
                    <paper-button is="watchnow">
                        <i className="zmdi zmdi-play"></i>{i18n.__( "Watch Now")}
                    </paper-button>
                </paper-shadow>
                </div>
            </div>
        )
    }
}

class SubtitlesSwitcher extends ReactCSS.Component {
    render() {
        return (
            <li className="subtitles-dropdown">
                <pt-dropdown id="subtitles-selector" openDir="up" icon="av:subtitles">
                    <pt-selectable-element value="none" label={i18n.__("No subtitles")}>
                    </pt-selectable-element>
                    {Object.keys(this.props.subtitle).map((lang) => {
                        <pt-selectable-element value={lang} label="<%= App.Localization.langcodes[lang].nativeName %>"
                        selected={Settings.subtitle_language === lang}>
                        </pt-selectable-element>
                     })}
                </pt-dropdown>
            </li>
        )
    }
}

class DeviceSwitcher extends ReactCSS.Component {
    render() {
        return (
            <li id="player-option" className="device-dropdown">
                <pt-dropdown id="device-selector" openDir="up">
                    {App.Device.Collection.models.map ((player) => {
                        <pt-selectable-element
                        selected={App.Device.Collection.selected.id === player.id}
                        value={player.id} label={player.label} src={`images/icons/${player.type}-icon.png`}>
                        </pt-selectable-element>
                     })}
                </pt-dropdown>
            </li>
        )
    }
}

class QualitySwitcher extends ReactCSS.Component {
    classes() {
        return {
            'default': {

            }
        }
    }
    render() {
        var qualities = [];
        ['720p', '1080p'].map((q) => {
            this.props[q] && qualities.push(q)
        });
        return (
            <li className="quality-toggle">
                <pt-toggle id="quality-toggle" icon="av:high-quality">
                    {qualities.map((q, i) => {
                        return <pt-selectable-element value={q} label={q} key={q}>
                        </pt-selectable-element>
                     })}
                </pt-toggle>
            </li>
        )
    }
}

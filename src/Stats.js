import React, { Component } from 'react';

import './styles/Stats.css';

class Stats extends Component {
	render() {
		return (
			<div className='stats'>
				<h3>Player</h3>
				<p>Level {this.props.player.level}</p>
				<p>Exp {this.props.player.experience}</p>
				<p>Life {this.props.player.life}</p>
				<p>Weapon : {this.props.player.weapon}</p>
			</div>
		)
	}
}

export default Stats

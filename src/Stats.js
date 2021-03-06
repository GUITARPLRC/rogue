import React, { Component } from 'react';

import './styles/Stats.css';

class Stats extends Component {
	render() {
		return (
			<div className='stats'>
				<h3>Player</h3>
				<p>Level {this.props.player.level}</p>
				<p>Exp {this.props.player.experience}</p>
				<p>Health {this.props.player.life}</p>
				<p>Weapon : {this.props.player.weapon.name}</p>
			</div>
		)
	}
}

export default Stats

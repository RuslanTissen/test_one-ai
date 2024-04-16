import React from 'react'
import pic from "../src/images/test-pic.png"
import { NavLink } from 'react-router-dom'

function Start() {
	return (
		<div className='starts'>

			<header className='header'>
				<p>OneAI</p>

				<button>Sign in</button>
			</header>

			<NavLink to="Abo" className='section'>
				<div className="section__cont">
					<img src={pic} alt="" />
					<p className="lego">Lego</p>
				</div>
			</NavLink>

			<NavLink to="Abo" className='section'>
				<div className="section__cont">
					<img src={pic} alt="" />
					<p className="lego">Lego</p>
				</div>
			</NavLink>

			<footer className='footer'>
				<p className='footer__first-p'>Get help at support@avgen.me</p>

				<p className='footer__second-p'>Copyright © 2024 Mook Ltd. <br />
					All rights reserved. </p>
			</footer>

		</div>
	)
}

export default Start



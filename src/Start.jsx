import React from 'react'
import pic from "../src/images/test-pic.png"

function Start() {
	return (
		<div className='starts'>

			<header className='header'>
				<p>OneAI</p>

				<button>Sign in</button>
			</header>

			<section>
				<div className="section__cont">
					<img src={pic} alt="" />
					<p className="lego">Lego</p>
				</div>
			</section>

			<section>
				<div className="section__cont">
					<img src={pic} alt="" />
					<p className="lego">Lego</p>
				</div>
			</section>

			<footer className='footer'>
				<p className='footer__first-p'>Get help at support@avgen.me</p>

				<p className='footer__second-p'>Copyright © 2024 Mook Ltd. <br />
					All rights reserved. </p>
			</footer>

		</div>
	)
}

export default Start



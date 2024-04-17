import React, { useState } from 'react'
import pic from "../src/images/test-pic.png"
import { NavLink } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";

function Start() {
	const [show, setShow] = useState(false)
	const styleButton = {fontSize: "36px"}

	function showFunction() {
		setShow(!show)
	}

	return (
		<div className='starts'>

			<header className='header'>
				<p>OneAI</p>

				<button onClick={showFunction}>Sign in</button>
			</header>

			<NavLink to="Abo" className='section'>
				<div className="section__cont">
					<img src={pic} alt="" />
					<p className="lego__text">Lego</p>
				</div>
			</NavLink>

			<NavLink to="Abo" className='section'>
				<div className="section__cont">
					<img src={pic} alt="" />
					<p className="lego__text">Lego</p>
				</div>
			</NavLink>

			<footer className='footer'>
				<p className='footer__first-p'>Get help at support@avgen.me</p>

				<p className='footer__second-p'>Copyright © 2024 Mook Ltd. <br />
					All rights reserved. </p>
			</footer>

			{show && <div className="blur">
				<button
					className='blur__button'
					onClick={showFunction}>
					<RxCross1 style={styleButton}/>
				</button>
				<div className="blur__cont">
					<div className="email">Email</div>
					<div className="password">Password</div>
					<NavLink className="blur__sign">Sign in</NavLink>
				</div>
			</div>}

		</div>
	)
}

export default Start



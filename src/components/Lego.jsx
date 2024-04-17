import React from 'react'
import { NavLink } from 'react-router-dom'
// import lego from "../../src/images/lego.png"

function Lego() {
	return (
		<div className='lego'>

			{/* <img className='lego__img' src={lego} alt="" /> */}

			<div className="lego__img"></div>

			<button className='lego__save'>Save</button>

			<NavLink className="lego__pics" to="*">More pics</NavLink>

		</div>
	)
}

export default Lego
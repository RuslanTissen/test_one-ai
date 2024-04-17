import React from 'react'
import foto from "../src/images/test-pic.png"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineCamera } from "react-icons/hi2";
import { BsImage } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

function Abo() {
	const styleArrow = { fontSize: "3.5rem", color: "#080708"}
	const style = { color: "white", fontSize: "4rem" }

	return (
		<div className='abo'>
			<NavLink to="*" className='abo__button'>
				<MdOutlineKeyboardArrowLeft style={styleArrow} />
				<span>Go back</span>
			</NavLink>

			<img className='abo--foto' src={foto} alt="Ups, it should be your... !" />
			
			<div className="cont__images-adder">
				<NavLink to="/Lego" className="cont__images-adder--box">
					<div className="icon"><BsImage style={style} /></div>
					<p className='adder-text'>Choose photo from gallery</p>
				</NavLink>
				<NavLink to="/Lego" className="cont__images-adder--box">
					<div className="icon"><HiOutlineCamera style={style} /></div>
					<p className='adder-text'>Take photo with camera</p>
				</NavLink>
			</div>
		</div>
	)
}

export default Abo
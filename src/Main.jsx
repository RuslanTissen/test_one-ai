import React from 'react'
import { Routes, Route } from "react-router-dom"
import Start from "../src/Start.jsx"
import Abo from "../src/Abo.jsx"
import Lego from "./components/Lego.jsx"

function Main() {
	return (
		<main>
			<Routes>
				<Route path="*" element={<Start />} />
				<Route path='/Abo' element={<Abo />} />
				<Route path="/Lego" element={<Lego />} />
				
			</Routes>
		</main>
	)
}

export default Main
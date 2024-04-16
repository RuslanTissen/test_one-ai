import React from 'react'
import { Routes, Route } from "react-router-dom"
import Start from "../src/Start.jsx"
import Abo from "../src/Abo.jsx"

function Main() {
	return (
		<main>
			<Routes>
				<Route path="*" element={<Start />} />
				<Route path="Abo" element={<Abo />} />
				
			</Routes>
		</main>
	)
}

export default Main
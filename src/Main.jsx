import React from 'react'
import { Routes, Route } from "react-router-dom"
import Start from "../src/Start.jsx"

function Main() {
	return (
		<main>
			<Routes>
				<Route path="*" element={<Start />} />
				{/* <Route path="Services" element={<Services />} />
				 */}
			</Routes>
		</main>
	)
}

export default Main
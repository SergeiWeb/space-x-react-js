import React, { Component } from 'react'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './style.css'

class App extends Component {
	render() {
		return (
			<>
				<Header />
				<Main />
				<Features />
				<Footer />
			</>
		)
	}
}

export default App

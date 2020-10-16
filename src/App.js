import React, { Component } from 'react'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import FetchData from './service/FetchData'
import './style.css'

class App extends Component {
	fetchData = new FetchData()

	state = {
		rocket: 'Falcon 1',
		rocketFeatures: null,
		rockets: [],
		company: null,
	}

	componentDidMount() {
		this.updateRocket()
		this.updateCompany()
	}

	updateRocket() {
		this.fetchData
			.getRocket()
			.then(data => {
				this.setState({ rockets: data.map(item => item.name) })
				return data
			})
			.then(data => data.find(item => item.name === this.state.rocket))
			.then(rocketFeatures => this.setState({ rocketFeatures }))
	}

	changeRocket = rocket => {
		this.setState(
			{
				rocket,
			},
			this.updateRocket
		)
	}

	updateCompany = () => {
		this.fetchData.getCompany().then(company => this.setState({ company }))
	}

	render() {
		return (
			<>
				<Header rockets={this.state.rockets} changeRocket={this.changeRocket} />
				<Main rocket={this.state.rocket} />
				{this.state.rocketFeatures && (
					<Features {...this.state.rocketFeatures} />
				)}
				{this.state.company && <Footer {...this.state.company} />}
			</>
		)
	}
}

export default App

// С помощью getCompany получить данные для заполнения footer, реализуйте ссылки. Дополнительно можно вывести информацию о компании

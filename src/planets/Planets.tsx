import React from 'react';
import { Card } from 'antd';

type State = {
    marsEnglishName: string,
    marsMass: any,
    marsMoon1: any,
    marsMoon2: any,
    jupEnglishName: string,
    jupMass: any,
    jupMoon1: any,
    jupMoon2: any
    satEnglishName: string,
    satMass: any,
    satMoon1: any,
    satMoon2: any
}

export default class Planets extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            marsEnglishName: "",
            marsMass: [],
            marsMoon1: [],
            marsMoon2: [],
            jupEnglishName: "",
            jupMass: [],
            jupMoon1: [],
            jupMoon2: [],
            satEnglishName: "",
            satMass: [],
            satMoon1: [],
            satMoon2: []
        }
    }

    componentDidMount() {
        this.fetchMarsPlanet();
        this.fetchJupiterPlanet();
        this.fetchSaturnPlanet();
    }

    fetchMarsPlanet() {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/mars`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(planetData => {
                console.log(planetData);
                this.setState({
                    marsEnglishName: planetData.englishName,
                    marsMass: planetData.mass.massValue,
                    marsMoon1: planetData.moons[0].moon,
                    marsMoon2: planetData.moons[1].moon
                })
            }).then(() => {
                console.log(this.state)
            })
    }

    fetchJupiterPlanet() {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/jupiter`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(planetData => {
                console.log(planetData);
                this.setState({
                    jupEnglishName: planetData.englishName,
                    jupMass: planetData.mass.massValue,
                    jupMoon1: planetData.moons[0].moon,
                    jupMoon2: planetData.moons[1].moon
                })
            }).then(() => {
                console.log(this.state)
            })
    }

    fetchSaturnPlanet() {
        fetch(`https://api.le-systeme-solaire.net/rest/bodies/saturne`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(planetData => {
                console.log(planetData);
                this.setState({
                    satEnglishName: planetData.englishName,
                    satMass: planetData.mass.massValue,
                    satMoon1: planetData.moons[0].moon,
                    satMoon2: planetData.moons[1].moon
                })
            }).then(() => {
                console.log(this.state)
            })
    }

    render() {
        return (
            <div>
                <Card title="Mars Facts" style={{ width: 300 }}>
                    <p>Name: {this.state.marsEnglishName}</p>
                    <p>Mass: {this.state.marsMass}</p>
                    <p>Moons: {this.state.marsMoon1} and {this.state.marsMoon2}</p>
                </Card>
                <Card title="Jupiter Facts" style={{ width: 300 }}>
                    <p>Name: {this.state.jupEnglishName}</p>
                    <p>Mass: {this.state.jupMass}</p>
                    <p>Moons: {this.state.jupMoon1} and {this.state.jupMoon2} and 77 more moons. Sorry, couldn't fit them all on one card. And I would rather not do that.</p>
                </Card>
                <Card title="Saturn Facts" style={{ width: 300 }}>
                    <p>Name: {this.state.satEnglishName}</p>
                    <p>Mass: {this.state.satMass}</p>
                    <p>Moons: {this.state.satMoon1} and {this.state.satMoon2} and 80 other moons. </p>
                </Card>
            </div>
        )
    }
}
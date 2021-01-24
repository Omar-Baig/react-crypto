import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{

    state= {data:[]}
    
    async componentDidMount(){
        const response = await fetch("https://api.coinlore.net/api/tickers/?start=0&limit=100");
        const json = await response.json();

        this.setState({data:json})

        console.log(json)
    }

    render (){
        return (
            <div className="container">
                <h1 className="text-center">React Crypto Testing</h1>
                <table className="table text-center">
                    <thead>
                        <th scope="col">Rank</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Change 1h</th>
                        <th scope="col">Change 24h</th>
                        <th scope="col">Change 7D</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default App;
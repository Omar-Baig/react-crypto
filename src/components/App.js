import React from 'react';
import Coin from "./Coin";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{

    // state
    state = {currency: []}

    // Create a async await function
    async componentDidMount(){
        const response = await Coin.get("/tickers/?start=0&limit=100");
        var cleanData = response.data.data
        this.setState({currency: cleanData})
        console.log(cleanData)
    }
    
    // render App here
    render (){
        return (
            <div className="container">
                <h1 className="text-center">React Crypto Testing</h1>
                <table className="table table-striped table-hover .tabl-sm">
                    <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Change 1H</th>
                        <th scope="col">Change 24H</th>
                        <th scope="col">Change 7D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Creating a row for each crypto currency*/}
                        {this.state.currency.map(el => (
                            <tr key={el.id}>
                                <th scope="row">{el.rank}</th> 
                                <td>{el.symbol}</td>
                                <td>{el.name}</td>
                                <td>$ {el.price_usd}</td>
                                <td>$ {el.percent_change_1h}</td>
                                <td>$ {el.percent_change_24h}</td>
                                <td>$ {el.percent_change_7d}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <div>
                    {this.state.currency.map(el => (
                        <div>
                            {el.rank}
                        </div>
                    ))}
                </div> */}
            </div>
        )
    }
}

export default App;
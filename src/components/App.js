import React from 'react';
import Coin from "./Coin";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{

    // state
    state = {currency: []}

    // Create a async await function
    async componentDidMount(){
        const response = await Coin.get("/tickers/?start=0&limit=99");
        var cleanData = response.data.data
        this.setState({currency: cleanData})
        console.log(cleanData)
    }
    
    colorChange(){
        if(this.setState.currency.percent_change_1h < 0){
            console.log("negative")
        }
    }

    // render App here
    render (){
        return (
            <div className="container">
                <h1 className="text-center">React Crypto Testing</h1>
                {/*Creating a card for each crypto currency*/}
                <div className="card-wrap">
                    {this.state.currency.map(el => (
                        <div key={el.id} className="card">
                            <div className="rank">{el.rank}. </div>
                            <div className="symbol">{el.symbol}</div>
                            <div className="name">{el.name}</div>
                            <div className="price price-current">${el.price_usd}</div>
                            <div className="price price-1h" style={{color: Math.sign(el.percent_change_1h) === -1 ? "red" : "green"}}><span>1H: $</span>{el.percent_change_1h}</div>
                            <div className="price price-24h" style={{color: Math.sign(el.percent_change_1h) === -1 ? "red" : "green"}}><span>24H: $</span>{el.percent_change_24h}</div>
                            <div className="price price-7d" style={{color: Math.sign(el.percent_change_1h) === -1 ? "red" : "green"}}><span>7D: $</span>{el.percent_change_7d}</div>
                        </div>
                    ))}
                </div>
            </div>
        )}
}

export default App;
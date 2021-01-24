import React from 'react';
import Card from "./Card";
import Coin from "./Coin";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component{

    state = {currency: []}

    async componentDidMount(){
        const response = await Coin.get("/tickers/?start=0&limit=100");
        console.log(response.data.data)
    }


    render (){
        return (
            <div className="container">
                <h1 className="text-center">React Crypto Testing</h1>
                <Card />
            </div>
        )
    }
}

export default App;
import './css/Main.css'
const Main = () => {
    /* var axios = require("axios").default;

    var options = {
    method: 'GET',
    url: 'https://rest.yahoofinanceapi.com/v11/finance/quoteSummary/AAPL',
    params: {modules: 'defaultKeyStatistics,assetProfile'},
    headers: {
        'x-api-key': 'YOUR-PERSONAL-API-KEY'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    }); */
   
    return ( 
        <div className="main">
            {/* Search bar */}
            <div className="main__searchContainer">
                <ion-icon name="search-outline"></ion-icon>
                <input type="search" placeholder="Search" />
            </div>
            {/* Welcome  */}
            <section className="main__welcome">
                <h1>Hi, <span>Ore</span></h1>
                <div className="main__welcomeTray">
                    <div className="card">
                        <div className="card-header">
                            <h3>Bitcoin</h3>
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </div>
                        <ion-icon name="logo-bitcoin"></ion-icon>
                        <p className="asset-value">{`0.233467576532 BTC`}</p>
                        <p className="usd-equip">{`11,032.24 USD`}</p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Bitcoin</h3>
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </div>
                        <ion-icon name="logo-bitcoin"></ion-icon>
                        <p className="asset-value">{`0.233467576532 BTC`}</p>
                        <p className="usd-equip">{`11,032.24 USD`}</p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <h3>Bitcoin</h3>
                            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                        </div>
                        <ion-icon name="logo-bitcoin"></ion-icon>
                        <p className="asset-value">{`0.233467576532 BTC`}</p>
                        <p className="usd-equip">{`11,032.24 USD`}</p>
                    </div>
                </div>
            </section>
            {/* Latest */}
            <section className="main__latest">
                <div className="main__latestHeader">
                    <div className="main__latestLeftHeader">
                        <h2>Latest Activity</h2>
                        <p>Updated 12 minutes ago</p>
                    </div>
                    <div className="main__latestRightHeader">
                        <ion-icon name="settings-outline"></ion-icon>
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                </div>
                <div className="main__latestTiles">
                    <div className="main__latestTile">
                        <ion-icon name="shield-half-outline"></ion-icon>
                        <div className="tileColumn">
                            <p><b>Insurance</b></p>
                            <p>Property Coverage</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>LTC Wallet</b></p>
                            <p>Personal account</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>7 Jun, 21</b></p>
                            <p>Last payment</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>-10.24 LTC</b></p>
                            <p>Balance</p>
                        </div>
                    </div>
                    <div className="main__latestTile">
                        <ion-icon name="flash-outline"></ion-icon>
                        <div className="tileColumn">
                            <p><b>Electricity</b></p>
                            <p>Utility payments</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>ETH Wallet</b></p>
                            <p>Personal account</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>9 Jun, 21</b></p>
                            <p>Last payment</p>
                        </div>
                        <div className="tileColumn">
                            <p><b>-3.543 ETH</b></p>
                            <p>Balance</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Main;
import './css/ActionBar.css'
const ActionBar = () => {
    return ( 
        <div className="actionbar">
            <h1 className="actionbar__logo">Axe Cap</h1>
            <div className="actionbar__row top">
                <ion-icon name="grid-outline" className="actionbar__active"></ion-icon>
                <ion-icon name="calculator-outline"></ion-icon>
                <ion-icon name="wallet-outline"></ion-icon>
                <ion-icon name="card-outline"></ion-icon>
                <ion-icon name="cash-outline"></ion-icon>
                <ion-icon name="bag-handle-outline"></ion-icon>
            </div>
            <br /><br />
            <div className="actionbar__row">
                <ion-icon name="flame-outline"></ion-icon>
                <ion-icon name="cafe-outline"></ion-icon>
                <ion-icon name="medkit-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
            <div className="actionbar__cta">
                <ion-icon name="logo-xing"></ion-icon>
                <a href="#">Get Pro Now</a>
            </div>
        </div>
     );
}
 
export default ActionBar;
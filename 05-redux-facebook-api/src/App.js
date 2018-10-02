import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
    render() {
        const { user, allPhotoQuantity = 0 } = this.props.user;
        return(
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Facebook App</h1>
                </header>
                <p className="App-intro">App body</p>
                <p>{user}, добро пожаловать!</p>
                <p>Сейчас на вашей странице {allPhotoQuantity} фото.</p>
            </div>
        )
    }    
}

const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
    }
}

export default connect(mapStateToProps)(App)
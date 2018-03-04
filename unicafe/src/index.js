import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers/reducer'

const store = createStore(reducer)

const Statistiikka = ({onClick}) => {
    const initialStore = {
        good: 0,
        ok: 0,
        bad: 0
    }
    if (store.getState().good === 0 &&
        store.getState().ok === 0 &&
        store.getState().bad === 0) {
        return (
            <div>
                <h2>statistiikka</h2>
                <div>ei yhtään palautetta annettu</div>
            </div>
        )
    }

    const keskiarvo = (store.getState().good - store.getState().bad) /
    (store.getState().good + store.getState().ok + store.getState().bad)

    return (
        <div>
            <h2>statistiikka</h2>
            <table>
                <tbody>
                    <tr>
                        <td>hyvä</td>
                        <td>{store.getState().good}</td>
                    </tr>
                    <tr>
                        <td>neutraali</td>
                        <td>{store.getState().ok}</td>
                    </tr>
                    <tr>
                        <td>huono</td>
                        <td>{store.getState().bad}</td>
                    </tr>
                    <tr>
                        <td>keskiarvo</td>
                        <td>{keskiarvo}</td>
                    </tr>
                    <tr>
                        <td>positiivisia</td>
                        <td>{store.getState().good
                            + store.getState().ok}</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={onClick} >
                nollaa tilasto
            </button>
        </div >
    )
}

class App extends React.Component {
    klik = (nappi) => () => {
        store.dispatch({ type: nappi })
    }

    onClickZero = () => {
        return (
            store.dispatch({ type: 'ZERO' })
        )
    }

    render() {
        return (
            <div>
                <h2>anna palautetta</h2>
                <button onClick={this.klik('GOOD')}>hyvä</button>
                <button onClick={this.klik('OK')}>neutraali</button>
                <button onClick={this.klik('BAD')}>huono</button>
                <Statistiikka onClick = {this.klik('ZERO')}/>
            </div>
        )
    }
}

const renderApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp()
store.subscribe(renderApp)
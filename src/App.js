import './App.css';
import React from 'react'
import {connect} from 'react-redux'

import ModalWindow from './ModalWindow/ModalWindow'

function App(props) {

    const {modal, changeCreatModal} = props


    const deleteButtonHandler = (id) => {
        props.deleteCounter(id)
    }
    const addButtonCounter = (number, id) => {
        props.createCounter(number, id)
    }
    const plusMinusButtonHandler = (id, value) => {
        props.mathActions(id, value)
    }

    return (
        <div className="App">

            {props.counters.map(el =>
                <p>
                    <button onClick={() => plusMinusButtonHandler(el.id, -1)}> -1</button>
                    {el.number}
                    <button onClick={() => plusMinusButtonHandler(el.id, 1)}> +1</button>
                    &nbsp;
                    <button onClick={() => deleteButtonHandler(el.id)}>delete</button>
                    {modal.modalsIsOpen && <ModalWindow/>}
                </p>
            )}
            <button onClick={() => addButtonCounter(100, Math.random() * Math.random())}>add counter</button>
            <button onClick={() => changeCreatModal(true)}>add redux count</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    counters: state.counters,

})

const mapDispatchToProps = (dispatch) => ({
    deleteCounter: (counterId) => dispatch({
        type: 'DELETE',
        payload: {counterId: counterId}
    }),
    createCounter: (number, idx) => dispatch({
        type: 'ADD_COUNTER',
        payload: {number: 100, id: idx}
    }),
    mathActions: (id, value) => dispatch({
        type: 'MATH_ACTION',
        payload: {
            id: id, value: value
        }
    }),
    changeCreatModal: (value) => dispatch({
        type: 'CHANG_CREAT_MODAL',
        payload: {
            value: value
        }
    }),

})


export default connect(mapStateToProps, mapDispatchToProps)(App);

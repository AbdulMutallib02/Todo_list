import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([])

    const itemEvents = (event) => {
        setInputList(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    }

    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }

  return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h2>ToDo List</h2>
            <br />
            <input type="text" placeholder='Add a Items' onChange={itemEvents} value={inputList} />
            <button onClick={listOfItems}> + </button>
            <ol>
                {items.map((itemval, index) => {
                    return <ToDoList
                    key={index}
                    id={index}
                    text={itemval}
                    onSelect={deleteItems}
                    />;
                })}
            </ol>
        </div>
    </div>
    </>
  )
}

export default App
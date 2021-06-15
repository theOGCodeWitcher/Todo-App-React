import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List'

function App() {

  const [listItem, setlistItem] = useState("")
  const [addedLI, setaddedLI] = useState([])

  const updateList = (e) => {
    setlistItem(e.target.value);
  }

  const insertListItem = () => {
    setaddedLI((olditems) => {
      return [...olditems, listItem]
    })
    setlistItem("");
  }
  const deletelistItem = (id) => {
    console.log('deleted');
    setaddedLI((olditems)=>{
      return olditems.filter((currentval2 , index)=>{
        return index!= id
      })
    })
  }




  return (
    <>
      <div className="container">
        <div className="appFrame">
          <h1>Todoist App</h1>
          <div className="inp_button">
            <input type="text" placeholder='Enter here' onChange={updateList} value={listItem} />
            <button className='btn' onClick={insertListItem}> Add</button>
          </div>
          <div className="listArea">
            <ul className='list'>
              {/* <li>{listItem}</li> */}
              {addedLI.map((currentVal, index) => {
                return <List
                  text={currentVal} key={index}
                  id={index}
                  onselect={deletelistItem} />
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

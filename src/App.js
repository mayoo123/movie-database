import React, {useState} from 'react';
import './App.css';
import Search from './components/Search';
import Axios from 'axios';
import Results from './components/Results'
import Popup from './components/popup'

function App() {

const [state, setState] = useState({
  s:  "",
  results: [],
  selected: {}
});

//api reference 
const apikey = "http://www.omdbapi.com/?apikey=e9fd6dee";

const handleInput  = (e) => {
  let s = e.target.value;

  console.log(s);
  setState(prevState => {
    return {...prevState, s:s}
  });

}

const search = (e) =>{
  if(e.key === "Enter"){
    Axios(apikey + "&s="+state.s).then((data) => {

      let results = data.data.Search;
      setState(prevState => {
        return {...prevState, results: results}
      });

    });
  }

  // console.log(state.results);
}

const popup = id => {

  Axios(apikey + "&i=" + id).then(({ data }) => {
    let result = data;

    setState(prevState => {
      return {...prevState, selected : result }
    });
  });
}

const closePopup = () => {
  setState( prevState => {
    return { ...prevState, selected : {} }
  });
}


  return (

    <div className="App">
     <header>
       <h1>
         Movie Database
       </h1>
     </header>
     <main>
       <Search handleInput= {handleInput} search = {search} />
       <Results results = {state.results} popup = { popup } />
       { (typeof state.selected.Title !== "undefined" )  ? <Popup selected = { state.selected } closePopup = { closePopup } /> : false }
     </main>
    </div>
  );
}

export default App;


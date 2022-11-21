import React from 'react';
import './App.css';
import Button from './components/Button';
import ButtonStyle from './components/ButtonStyle';
import DataFetch from './components/DataFetch';
import Langauge from './components/Langauge';
import Post from './components/Post';
import UserDemo from './components/UserDemo';
import Userst from './components/Userst';

const user1 = {
  name: "asad",
  age: 20,
  isregister: false,
  lang: ['Bangla', 'English']

}
const users = [
  {
    id: 1,
    name: "asaduzzaman",
    email: 'asad@gmail.com',
    age: 21
  },
  {
    id: 2,
    name: "asaduzzaman",
    email: 'asad@gmail.com',
    age: 22
  },
  {
    id: 3,
    name: "asaduzzaman",
    email: 'asad@gmail.com',
    age: 23
  }
]

function App() {
  return (
    <div className="App">
      {/* <Userst name="asaduzzaman" name1="asad" age={20} id={101} isActive={true} /> */}

      {/* <Langauge
        name="asad"
        age={20}
        lang={["bangala", "English", "Hindi"]}
      /> */}


      {/* <Langauge user={user1}></Langauge> */}
      {/* <UserDemo users={users} /> */}
      {/* <DataFetch statuss='error' /> */}

      {/* <h2>Children props</h2> */}
      {/* <Button>Click Me</Button> */}
      {/* <Post></Post> */}


      <h1>style props</h1>
      <ButtonStyle btnStyle={{ color: "red", backgroundColor: "green", padding: "10px" }}></ButtonStyle>
    </div>
  );
}

export default App;

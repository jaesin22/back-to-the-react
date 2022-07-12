import { useState, useEffect } from 'react';
import Button from './Button'

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value)
  console.log("i run all the time")

  useEffect(() => {
    console.log("I run only once")
  }, [])
  useEffect(() => {
      console.log("I run when 'keyword' changes.")
  }, [keyword])
  useEffect(() => {
      console.log("I run when 'counter' changes.")
  }, [counter])

  return (
    <div>
      <input value={keyword} type="text" onChange={onChange} placeholder="search"/>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;

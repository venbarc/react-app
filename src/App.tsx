import Message from "./Message"

function App(){
  const name = '';
  if(name)
    return <h1 className="text-green-300">Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default App;
import './App.css'
// import Plane from './components/Plane'
import Tree from './components/Tree'

function App() {
  return (
    <div className=''>
      <h1 className='text-white font-bold p-5'>P5 Playground</h1>
      <div className='border-4 border-white overflow-hidden rounded-2xl'>
        {/* <Plane /> */}
        <Tree />
      </div>
    </div>
  )
}

export default App

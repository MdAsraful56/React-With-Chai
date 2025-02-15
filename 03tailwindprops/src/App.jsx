import './App.css'
import Card9 from './components/card'


function App() {


  return (
    <>
      <h1 className="text-5xl font-semibold bg-green-500 mb-10 rounded-xl p-3">Tailwind CSS Test</h1>

      <div className="flex gap-10 items-center justify-center">
        <Card9 songName='Love' />
        <Card9 songName='Paier' />
        <Card9 songName='Sad' />
      </div>
    </>
  )
}

export default App

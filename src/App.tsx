import { useState } from 'react'
import './App.css'
import JsonEditor from './editor/json-editor'

function App() {

  const [editorValue, setEditorValue] = useState({});

  return (
    <>
      <div className='full-width'>
        <JsonEditor onChange={setEditorValue}/>
      </div>
      <div>
      {JSON.stringify(editorValue)}
      </div>
    </>
  )
}

export default App

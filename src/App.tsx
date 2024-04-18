import { useState } from 'react'
import "./index.css";
import RegistrationForm from './RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RegistrationForm />
      </div>
    </>
  );
}

export default App

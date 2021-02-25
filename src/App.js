import { ChatEngine } from 'react-chat-engine';
import 'Style.css';


export default function App() {
  return (
    <div>
      <ChatEngine
        height='100vh'
        projectID='8573f163-7af7-41b6-b883-14195ffd904f'
        userName='Leandro'
        userSecret='password'
      />
    </div>
  )
}


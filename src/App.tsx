import {Header} from './shared/components/layout/Header/Header'
import {Content} from './shared/components/layout/Content/Content'
import {Footer} from './shared/components/layout/Footer/Footer'
import {Todo} from './components/Todo/Todo'
import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>

      <Content>
        <Todo/>
      </Content>

      <Footer/>
    </div>
  )
}

export default App

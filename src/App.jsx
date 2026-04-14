
import './App.css'
import Topo from './components/Topo'
import Produtos from './components/Produtos'
import Capa from './components/Capa'

function App() {
  

  return (
      <div>

       <header>
        <Topo/>
       </header>

       <main>
        <Capa/>
        <section>
          <Produtos/>
        </section>
       </main>

      </div>
  )
}

export default App

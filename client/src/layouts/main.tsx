import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function Main() {
  return (
    <section>
            <Header></Header>
            <Outlet></Outlet>
    </section>

  )
}

export default Main
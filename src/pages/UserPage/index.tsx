
import { Outlet } from 'react-router-dom'
import Footers from '../../components/Footer'
import Headers from '../../components/Headers'

export default function UserTemplate() {
  return (
    <div>
        <Headers/>
        <Outlet/>
        <Footers/>
    </div>
  )
}

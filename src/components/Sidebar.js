import { NavLink } from "react-router-dom"
import * as FaIcons from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => 'text-dark rounded py-2 w-100 d-inline-block px-3' + (isActive ?' active' : '')}><FaIcons.FaHome className="me-2"/> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/clients" className={({isActive}) => 'text-dark rounded py-2 w-100 d-inline-block px-3' + (isActive ?' active' : '')}><FaIcons.FaUsers className="me-2"/> Clients</NavLink>
                </li>
                <li>
                    <NavLink to="/sales" className={({isActive}) => 'text-dark rounded py-2 w-100 d-inline-block px-3' + (isActive ?' active' : '')}><FaIcons.FaRegChartBar className="me-2"/> Sales</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
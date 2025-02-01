import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { useContext } from 'react'
import { DataContext } from '../App'
function NavBar() {
  let {axiosData, setAxiosData, selectProduct} = useContext(DataContext)
  function filtering(e){
    if(e.target.value){
      setAxiosData(axiosData.filter((value) => value.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }else{
      setAxiosData(axiosData)
    }
  }
  return (
    <>
      <div className='navMain'>
        <div>
          Shoping Cart 
        </div>
        <div className='navLinks'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          {/* <NavLink to={"/products"}>Products</NavLink> */}
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/myorders"}>My Orders</NavLink>
        </div>
        <div>
          <input className='form-control' onChange={filtering} type='text' placeholder='Search...'/>
        </div>
        <div style={{display:"flex"}}>
        <div className='navCart'>
          <NavLink to={"/cart"}>Cart <span><i className="bi bi-cart"></i></span></NavLink>
        </div>
        <div>
        <span style={{backgroundColor:"red", borderRadius:"50%", padding:"3px"}}>{selectProduct.length}</span>
        </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
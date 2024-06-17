import { Button, Navbar } from 'flowbite-react'
const NavbarComponent = () => {
  return (
     <Navbar fluid rounded className=' bg-red-50 p-5'>
       <Navbar.Brand  >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Ecommerce Product List</span>
       </Navbar.Brand>
       <div>
       
        <Navbar.Toggle/>
       </div>
       <Navbar.Collapse className=''>
        <Navbar.Link href='/' active className='text-xl'>
          Home
        </Navbar.Link>
        <Navbar.Link href='#' className='text-xl'></Navbar.Link>
        <Navbar.Link href='#' className='text-xl'>Categories</Navbar.Link>

       </Navbar.Collapse>
       <Button className='text-xl'>Get Started</Button>
     </Navbar>
  )
}

export default NavbarComponent
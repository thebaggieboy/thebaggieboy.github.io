import NavBar from "./NavBar"
import Footer from "./Footer"
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
       <div style={{backgroundColor:"#14213d", fontSize:"Helvetica Nue"}}>
       <NavBar />
          {children}
        <Footer/>
       </div>
      </>
      
       
      
      
    )
  }
  
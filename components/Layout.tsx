import NavBar from "./NavBar"
import Footer from "./Footer"
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
       <div style={{backgroundColor:"#14213d"}}>
       <NavBar />
          {children}
        <Footer/>
       </div>
      </>
      
       
      
      
    )
  }
  
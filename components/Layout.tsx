import NavBar from "./NavBar"
import Footer from "./Footer"
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
       <div style={{backgroundColor:"#14213d", lineHeight: "100%", letterSpacing: 1, fontFamily: "Poppins, sans-serif"}}>
       <NavBar />
          {children}
        <Footer/>
       </div>
      </>
      
       
      
      
    )
  }
  
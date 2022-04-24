
export const Navbar=(props)=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.name}</a>
   
  </div>
</nav>
    )
}
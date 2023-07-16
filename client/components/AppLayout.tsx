import { Link, Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className="background">
      <header className="header">
        <h1 className="title">Red Ping</h1>
        <nav className="nav">
          <Link className="Link" to="/home">
            <h3>Home</h3>
          </Link>
          <br></br>
          <Link className="Link" to="/">
            <h3>Alert List</h3>
          </Link>
          <br></br>
          <Link className="Link" to="/profile">
            <h3>Profile</h3>
          </Link>
        </nav>
      </header>
      <section className="main">
        <Outlet />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

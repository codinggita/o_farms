// Navbar component


import './appnavtest.css'; // Import your CSS file

const Navbartest = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href='/' className="logo">O-Farms</a>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/videos">Videos</a>
        <a href="/Aboutus">About Us</a>
      </div>

      <div className="login-container">
      <img
             className="login-icon"
             alt="Vector"
             src="https://cdn.animaapp.com/projects/65bbd071206cc4fa9aea7174/releases/65bbd0ea4ef69e7c65ae2c52/img/vector.svg"
           />
        <a href="/login" className="login-text">Login</a>
      </div>
    </div>
  );
};

export default Navbartest;

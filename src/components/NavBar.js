import React, { Component } from "react";

class NavBar extends Component {

    render() {

        let stylesNavbar = { width: '100%'};
        let stylesMenu = { textAlign: 'left' ,width: '100%', position: 'absolute', left: '0px', top: '0px',color: 'white', backgroundColor: '#3498DB' };

        function dropdown(e) {
          document.getElementById("myDropdown").classList.toggle("show");
        }
        
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }

        return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark mb-3" style={stylesNavbar}>
          <div className="dropdown" style={stylesMenu}>
            <button onClick={dropdown} className="dropbtn">Tienda de Ricardo</button>
            <div id="myDropdown" className="dropdown-content">
              <a href="#">DVDs</a>
              <a href="#">Libros</a>
              <a href="#">Videojuegos</a>
            </div>
          </div>          
        </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;






import React from 'react';
import "./Header.css"

function Header() {
  return (
    <header>
        <h1> Osiobe Ajiri<br />  Enoch</h1>
        <section>
            <div>
                <h2>Address:</h2>
                <p>No 9 Joe Noe Street</p>
            </div>

            <div>
                <h2>Phone:</h2>
                <p>08178365472</p>
            </div>

            <div>
                <h2>Email:</h2>
                <p>ajirienoch@gmail.com</p>
            </div>
        </section>
    </header>
  )
}

export default Header
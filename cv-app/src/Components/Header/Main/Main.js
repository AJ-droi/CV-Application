import React from "react";
import "./Main.css";

function Main() {
  return (
    <main>
      <div className="Summary">
        <h3>Summary</h3>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
            illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
        </p>
      </div>

      <div className="Experience">
            <h3>Experience</h3>
            <div>
                <h4>Web Developer</h4>
                <ul>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                    <li> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                    <li> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                </ul>
            </div>

            <div>
                <h4>Technical Writer</h4>
                <ul>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                    <li> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                    <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                    <li> Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
                </ul>
            </div>
        </div>

        <div className="Education">
            <h3>Education</h3>
            <p>Bachelor of Science: Computer Studies </p>
        </div>
    </main>

    
  );
}

export default Main;

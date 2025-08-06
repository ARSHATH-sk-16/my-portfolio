import'./App.css';
import react from "react";
function app(){
  return(
    <div style={{ fontFamily:"arial,sans-serif",padding: "20px"}}>
      <header style={{textAlign:"center",marginbottom:"40px"}}>
        <h1>Hi,Iam ARSHATH</h1>
        <p>Frontedn Developer | React | Firebase </p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>I am a CSE student passionate about building beautiful and secure web apps using morden frontend tools.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Secure chat app - React naative + firebase</li>
          <li>Resume screening system - python + NLP</li>
        </ul>
      </section>
      <section>
        <h2>contact</h2>
        <p>email: skarshath16@gmail.com</p>
        <p>
          linkedin:<a href="https://www.linkedin.com/in/arshath-sk" target="_blank"> view profile</a>
        </p>
      </section>
    </div>
  );
}
export default app;
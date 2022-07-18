import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          <ul>
            {data.map((question) => {
              return <SingleQuestion key={question.id} {...question} />;
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;

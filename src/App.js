
import { useState } from 'react';
import { faq } from './faq';
import mobile from './images/illustration-woman-online-mobile.svg';
import desktop from './images/illustration-woman-online-desktop.svg';
import Question from './Question';

function App() {

  const [questions] = useState(faq);

  return (
    <div className="App" >
      <article>
        <picture>
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>
      <article>
        <h1>FaQ</h1>
        {questions.map((question) => {return <Question key={question.id} question={question.question} answer={question.answer} />})}
      </article>

    </div>
  
  );
}

export default App;

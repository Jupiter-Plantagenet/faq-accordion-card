
import mobile from './images/illustration-woman-online-mobile.svg';
import desktop from './images/illustration-woman-online-desktop.svg';
import Question from './Question';

function App() {
  return (
    <div className="App" >
      <article>
        <picture>
          <source media="(min-width: 768px)" srcset={desktop} />
          <img src={mobile} alt="" />
        </picture>
      </article>
      <article>
        <h1>FaQ</h1>

        <Question />
      </article>

    </div>
   
  );
}

export default App;

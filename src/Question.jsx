import {FaChevronUp, FaChevronDown} from 'react-icons/fa'
import { useState } from 'react';

const Question = ({ question, answer}) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
    <div className='question'>
        <article onClick={() => setIsShowing(!isShowing)}>
          {/**Give it a class of clicked of isShowing is true, else no class */}
          <h2 className={`${isShowing && "clicked"}`}>{question}</h2>
          {isShowing ? <FaChevronUp className= 'icon'/> : <FaChevronDown className= 'icon'/>}
        </article>

      {/**Show paragraph only when isShowing is true */}
        {isShowing && <p>{answer}</p>}

    </div>
   
    
    </>
    
  )
}

export default Question
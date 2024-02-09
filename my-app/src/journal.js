import React from 'react';
import './journal.css';
import App from './threedcarousel';

const JournalPage = () => {
  return (
    <div className='jsMainParent mt-28'>

      <div className='jsLeft'>
        <h1>THE O-FARMS JOURNAL</h1>
        <p className='mt-8'> Farming is a diverse and important activity<br/>
         that covers various aspects of human life, such as food, economy,<br/>
          environment, culture, and health. You can choose a specific topic<br/>
           or theme related to farming that interests you and write about it <br/>
           in an informative and engaging way</p>

        <button className='readBtn'> READ THE JOURNAL </button>
      </div>

      <div className='jsRight flex flex-row gap-24'>
        <App/>

      </div>

    
    </div>
  );
}

export default JournalPage;


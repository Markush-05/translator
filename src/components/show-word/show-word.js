import React, { Children } from 'react';

import './show-word.css';


const ShowWord = ({children, props}) => {
  const styl = children ? 'show-word show-word--blur' :'show-word  '

  return (
      <h2 className={styl}>{props}</h2>
    
  );
};

export default ShowWord;

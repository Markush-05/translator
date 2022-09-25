const deletItem = (id,list) => {
    
    const idx = list.findIndex((el) => el.id === id);
      const newMash = [
          ... list.slice(0, idx), 
          ...list.slice(idx + 1)
    ];

    return newMash   
}

export default deletItem
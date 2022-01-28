const handleObject = (target, stateObj, setObj) => {
    const newValue = {...stateObj[target.id], value: target.value};
    setObj({...stateObj, [target.id]: newValue});
} 


export {handleObject};
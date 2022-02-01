const handleObject = (target, stateObj, setObj) => {
    const newValue = {...stateObj[target.id], value: target.value};
    setObj({...stateObj, [target.id]: newValue});
} 


const clearInputs = (stateObj, setStateObj) => {
    const updatedFields = {};

    for (const field in stateObj) {
        updatedFields[field] = {};

        for (const detail in stateObj[field]) {
            if (detail === 'value') {
                updatedFields[field][detail] = '';
            } else {
                updatedFields[field][detail] = stateObj[field][detail];
            }
        }
    }

    setStateObj(updatedFields);
}


export {handleObject, clearInputs};
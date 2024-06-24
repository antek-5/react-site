


const strContains = (innerStr, Str) => {

    if(innerStr === '') {
        return true;
    }
    else if(Str.includes(innerStr)) {
        return true;
    }
    else {
        return false;
    }
    
}

export default strContains;
const findProp = (prop) => {
    let propValue;
    if(locals[prop])
        return propValue = locals[prop];
    locals.options.forEach(
        option => {
            if(option[0] === prop){
                return propValue = option[1]
            }
        })
    if(propValue)
        return propValue
    return null;
}
const shortFinding = (prop, def) => findProp(prop) ? findProp(prop) : def
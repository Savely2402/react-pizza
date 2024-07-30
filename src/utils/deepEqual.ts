export const isDeepEqual = function (obj1, obj2) {
    if (obj1 === obj2) {
        return true
    }

    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return false
    }

    if (
        obj1 === null ||
        obj2 === null ||
        typeof obj1 !== 'object' ||
        typeof obj2 !== 'object'
    ) {
        return false
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
            return false
        }
    }
    return true
}

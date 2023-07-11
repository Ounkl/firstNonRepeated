function firstNonRepeated(s: string) {
    let hashmap = new Map<string, number>()

    for(let i = 0; i < s.length; i++) {
        if(hashmap.has(s[i])) {
            hashmap.set(s[i], hashmap.get(s[i])! + 1)
        }
        else {
            hashmap.set(s[i], 1)
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(hashmap.get(s[i]) == 1) {
            return s[i]
        }
    }
    return ''
}

if(firstNonRepeated('hello') != 'h') {
    console.log("Error hello")
    console.log(firstNonRepeated('hello'))
}

if(firstNonRepeated('aabcc') != 'b') {
    console.log("Error aabcc")
    console.log(firstNonRepeated('aabcc'))
}

if(firstNonRepeated('jjslc') != 's') {
    console.log("Error jjslc")
    console.log(firstNonRepeated('jjslc'))
}

if(firstNonRepeated('aabbcc') != '') {
    console.log("Error aabbcc")
    console.log(firstNonRepeated('aabbcc'))
}


if(firstNonRepeated('aAbbcc') != 'a') {
    console.log("Error aAbbcc")
    console.log(firstNonRepeated('aAbbcc'))
}

if(firstNonRepeated('jjoohhnna') != 'a') {
    console.log("Error jjoohhnna")
    console.log(firstNonRepeated('jjoohhnna'))
}

if(firstNonRepeated('AAbbbCCCCCCEEEeeeddFFFF') != '') {
    console.log("Error AAbbbCCCCCCEEEeeeddFFFF")
    console.log(firstNonRepeated('AAbbbCCCCCCEEEeeeddFFFF'))
}

if(firstNonRepeated('') != '') {
    console.log("Error empty")
    console.log(firstNonRepeated(''))
}

if(firstNonRepeated('Aabbcc') != 'A') {
    console.log("Error Aabbcc")
    console.log(firstNonRepeated('aAbbcc'))
}

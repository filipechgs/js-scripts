function firstLetterToUpperCase (name) {
    const words = String(name).toLowerCase().split(" ");
    const PREPOSITIONS = ["de", "do", "dos", "da", "das",];
    
    let nameToUpperCaseArr = [];

    for (let w = 0; w < words.length; w++) {
        if (!PREPOSITIONS.includes(words[w])) {

            let letters = words[w].split('');
            let letterToUpperCase = letters[0].toUpperCase();
            letters[0] = letterToUpperCase;
            let propperName = letters.join("");
            nameToUpperCaseArr.push(propperName);
        
        } else {
            nameToUpperCaseArr.push(words[w]);
        }
    }
    return nameToUpperCaseArr.join(" ");
} 

console.log(
    firstLetterToUpperCase("Cláudia dos anjos")
)
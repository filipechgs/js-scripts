//PRIMEIRAS LETRAS MAIÚSCULA
/* Converte strings para que a primeira letra de cada palavra seja maiúscula e o restante minúscula.*/

function firstLetterToUp(string) {
  	let finalResultString = ""; 
    let arrayOfStr = string.split(" ");
  
    // Separar a primeira letra de cada palavra
    for (let i = 0; i < arrayOfStr.length; i++) {
        let firstLetter = arrayOfStr[i].slice(0,1);
      	
		// Tornar a primeira letra maiúscula
      	// Separar o restante de cada palavra
		// Colocar o restanta da plava em letras minúsculas
		let toUperCase = firstLetter.toUpperCase();	
      	let wordRemaider = arrayOfStr[i].slice(1, i.length);
      	let toLowerCase = wordRemaider.toLowerCase();
		
		//Juntar, em uma array, a primeira letra maúscula com restante da palavra , em letras minúsculas
      	let correctedWord = "";
      	correctedWord += toUperCase;
      	correctedWord += toLowerCase; 
      	correctedWord += " ";
		
		// Verificar se algumas das palavras é pronome posessivo, se sim deixar em letrasminúsculas;
		//?????
      	
		// Juntar palavras na array partialResultArray
      	finalResultString += correctedWord;
    }
  	//console.log(finalResultString);
	return finalResultString;
};

console.log(firstLetterToUp("riTa DE cassia LIMA"));

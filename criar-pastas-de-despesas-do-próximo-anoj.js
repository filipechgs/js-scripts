const DATE = new Date();
const CURRENT_YEAR = DATE.getFullYear();
const NEXT_YR = parseInt(CURRENT_YEAR) +1;

createYearExpensesFolders(NEXT_YR);

function createYearExpensesFolders(yearNum) {
  const fs = require('fs');
  const childrenFoldersNames = ["Agilize", "Contracheques", "DAS_Simples_Nacional", "INSS", "TFF_CRP", "Telefone_Internet", "Transporte_Alimentação"];
  const folderName = `${__dirname}/${yearNum}/`;

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);

      for(let i = 0; i < childrenFoldersNames.length; i++) {
        fs.mkdirSync(`${folderName}${childrenFoldersNames[i]}/`);
      }
    }
  } catch (err) {
    console.error(err);
  }
};
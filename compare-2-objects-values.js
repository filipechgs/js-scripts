'use strict'

function compareObjects (obj1, obj2, callbackFunc) {
    const OBJ1_KEYS_ARR = Object.keys(obj1);
    const DIFFERENCES = [];
    
    for (let k = 0; k < OBJ1_KEYS_ARR.length; k++) {
        const OBJ1_KEY = OBJ1_KEYS_ARR[k];

        if (obj1.hasOwnProperty(OBJ1_KEY) && obj2.hasOwnProperty(OBJ1_KEY)) {         
            const OBJ1_VALUE = obj1[OBJ1_KEYS_ARR[k]];
            const OBJ2_VALUE = obj2[OBJ1_KEYS_ARR[k]];
  
            if (OBJ1_VALUE !== OBJ2_VALUE) {

                if (callbackFunc === undefined) {
                    DIFFERENCES.push(`${OBJ1_KEY}: ${OBJ1_VALUE} | ${OBJ2_VALUE}`);
                } 
                else {
                    return callbackFunc();     
                }
            }
        } else {
            return  'Apparently there is no differences between the objects.';
        }
    }
    return DIFFERENCES;
};

// TESTING
const PatientNewData = {}; 
PatientNewData.patient_name = "Filipe"
PatientNewData.birth_date = "oi"
PatientNewData.tel = "71 9999"

const patientOldData = {}; 
patientOldData.patient_name = "Milena"; 
patientOldData.birth_date = "to";
patientOldData.tel = "71 888"

// let answer = compareObjects(PatientNewData, patientOldData);
// console.log(answer);

compareObjects(PatientNewData, patientOldData, ()=>{
    console.log("function called");
})

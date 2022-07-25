library TestArtifact version '1'

using FHIR version '4.0.0'

include "FHIRHelpers" version '4.0.0' called FHIRHelpers

//Importing codes
codesystem "SNOMED": 'http://snomed.info/sct'
codesystem "CONDCLINSTATUS": 'http://terminology.hl7.org/CodeSystem/condition-clinical'
codesystem "CONDVERSTATUS": 'http://terminology.hl7.org/CodeSystem/condition-ver-status'


// conditions we are checking for:

code "Atrial fibrillation (disorder)": '49436004' from "SNOMED" display 'Atrial fibrillation'
// can't find a Non-Valvular version of this disorder


// possible prescriptions for this condition:

code "": '' from "SNOMED" display ''


// what we want to mesure: 

INR
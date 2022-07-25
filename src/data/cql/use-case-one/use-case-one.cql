library TestArtifact version '1'

using FHIR version '4.0.0'

include "FHIRHelpers" version '4.0.0' called FHIRHelpers

//Importing codes
codesystem "SNOMED": 'http://snomed.info/sct'
codesystem "CONDCLINSTATUS": 'http://terminology.hl7.org/CodeSystem/condition-clinical'
codesystem "CONDVERSTATUS": 'http://terminology.hl7.org/CodeSystem/condition-ver-status'


// conditions we are checking for 

code "Diabetes mellitus type 2 (disorder)": '44054006' from "SNOMED" display 'Type 2 Diabetes'


// symptom codes

code "Dipsogenic diabetes insipidus (disorder)": '82800008' from "SNOMED" display 'Primary polydipsia'
code "Polyuria (finding)": '28442001' from "SNOMED" display 'Polyuria'
code "Blurred vision (disorder)": '240091000000105' from "SNOMED" display 'Blurred vision (disorder)'
code "Unexplained weight loss (finding)": '422868009' from "SNOMED" display 'Unexplained weight loss'
code //recurrent infection code pending
code "Tired (finding)": '224960004' from "SNOMED" display 'Tired (finding)'
code "Acanthosis nigricans (disorder)": '402599005' from "SNOMED" display 'Acanthosis nigricans'


// codes for measurements 

code "Ordinal level of hemoglobin A1c (observable entity)": '443911005' from "SNOMED" display 'Ordinal level of hemoglobin A1c'
code "Plasma fasting glucose level (observable entity)": '1003141000000105' from "SNOMED" display 'Plasma fasting glucose level'
code "Plasma random glucose level (observable entity)": '1031331000000106' from "SNOMED" display 'Plasma random glucose level'


// set measurement period for the whole of 2022
parameter "Measurement Period" Interval<DateTime>
    default Interval[@2022-01-01T00:00:00.0, @2022-12-31T00:00:00.0)  




// check for exclusion criteria 


define "AcceptableAgeRange":
  AgeInYearsAt(end of "Measurement Period") between 60 and 11
 
define "IsPregnant":
    exists(ActiveCondition([Condition:"<insert condition name>"]))

define "IsTwoMonthsPostpartum":
    exists(ActiveCondition([Condition:"<insert condition name>"]))

define "HasExperiencedDiabetesSymptomsForLessThanTwoMonths":
    exists(ActiveCondition([Condition:"<insert condition name>"]))

define "IsAtHighDiabetesRiskAndIsAcutelyIll":
    exists(ActiveCondition([Condition:"<insert condition name>"]))

define "IsTakingMedicationThatMayCauseHyperglycaemia":
    exists(ActiveCondition([Condition:"<insert condition name>"]))


define "HasAcutePancreaticDamage":
    exists(ActiveCondition([Condition:"<insert condition name>"]))

define "HasESRD":
    exists(ActiveCondition([Condition:"<insert condition name>"]))

define "HasHIV":
    exists(ActiveCondition([Condition:"<insert condition name>"]))

define "MeetsExclusionCriteria":
    "IsPregnant" or 
    "IsTwoMonthsPostpartum" or 
    "HasExperiencedDiabetesSymptomsForLessThanTwoMonths" or 
    "IsAtHighDiabetesRiskAndIsAcutelyIll" or
    "IsTakingMedicationThatMayCauseHyperglycaemia" or
    "HasAcutePancreaticDamage" or
    "HasESRD" or
    "HasHIV" or 
    not "AcceptableAgeRange"




// symptoms we need to check for


define "HasPolydipsia": 
    exists(ActiveCondition([Condition:"Dipsogenic diabetes insipidus (disorder)"]))

define "HasPolyuria": 
    exists(ActiveCondition([Condition:"Polyuria (finding)"]))

define "HasBlurredVision": 
    exists(ActiveCondition([Condition:"Blurred vision (disorder)"]))

define "HasUnexplainedWeightLoss":
    exists(ActiveCondition([Condition:"Unexplained weight loss (finding)"]))

define "HasRecurrentInfections": //waiting for code
    exists(ActiveCondition([Condition:""]))

define "HasTiredness": 
    exists(ActiveCondition([Condition:"Tired (finding)"]))

define "HasAcanthosisNigricans":
    exists(ActiveCondition([Condition:"Acanthosis nigricans (disorder)"]))

define "IsSymptomatic":
    ("HasPolydipsia") or 
    ("HasPolyuria") or 
    ("HasBlurredVision") or 
    ("HasUnexplainedWeightLoss") or 
    ("HasRecurrentInfections") or 
    ("HasTiredness") or 
    ("HasAcanthosisNigricans")


define "PersistentHyperglycaemia":
    if (
            "Ordinal level of hemoglobin A1c (observable entity)" >= 48
        ) or 
        (
            "Plasma fasting glucose level (observable entity)" >= 7
        ) or 
        (
            ("Plasma random glucose level (observable entity)" >= 11.1) and (IsSymptomatic)
        )
        then 
            if ("MeetsExclusionCriteria" = 'False') 
                then 'True'
    else 'False'
    

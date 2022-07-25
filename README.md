# FHIR Analytics

This application has been developed to provide analytical feedback on FHIR server requests.

This application is reliant on the [FHIR API Tool](https://github.com/MatthewNobes/fhir-API-tool), designed as a middleman for executing requests on the FHIR server.

This has been developed as part of a project to study the feasibility of integrating FHIR server with CQL (Clinical Quality Language) to help identify individuals who may be at risk of long term conditions, based upon their previous test data.

## Setup

This project is dependent on input from a FHIR connection API [FHIR API Tool](https://github.com/MatthewNobes/fhir-API-tool). This has been created to add the CORS package to each response, allowing it to be displayed in a web app. Once the API tool has been cloned, setup and running, you can setup this application, starting with installing all necessary packages using either of the following commands:

```bash
npm i

npm install
```

Upon installation of all required NPM packages, the web app can be started using either of the two commands:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## FHIR-CQL

This repository contains a series of CQL scripts to test the feasibility of using CQL to a query FHIR server for diagnosis. The scripts are located under src/data/cql. Each script has been designed to identify patients that meet the requirements for certain long-term conditions.

## Use case 1

The first use case is designed to identify Type 2 diabetes within a patient based upon a series of parameters for test data and symptoms the patient may be experiencing.

More details on diagnosing Type 2 diabetes in adults can be found here: https://cks.nice.org.uk/topics/diabetes-type-2/diagnosis/diagnosis-in-adults/

## Use case 2

Coming soon!

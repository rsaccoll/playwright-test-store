# Playwright-test-store
Project, using playwright, to evaluate the demand and insertion of a product to the cart

## Stack
Playwright and javascript

## Installation
To be able to run the project, you must have nodeJS installed or docker installed

`Local`: With node already installed, you need to run `npm install`

`Docker` : first it is necessary to build the image with the following command: `docker build -t store-test-playwright .`

## Execution
To run the tests, you need to inform two environment variables:
`BASE_URL`: url target that will be tested
`LOCALE`: in which country will the test be performed. Case sensitive, inform in lower case. e.g. `en-us`

Informing the two variables, just run the following command:
`BASE_URL=https://site.to.test LOCALE=en-us npm run test:e2e`
 
If you want to view the execution through the browser, just run the following command:

`BASE_URL=https:/site.to.test LOCALE=en-us npm run test:e2e:headed`

For docker execution, just run the following command:
`docker run -it --rm -e BASE_URL=https://site.to.test/ -e LOCALE=en-us store-test-playwright`

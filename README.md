[![Netlify Status](https://api.netlify.com/api/v1/badges/a0eedb4e-8218-4237-b0d5-2329cbb249a4/deploy-status)](https://app.netlify.com/sites/keen-davinci-0ff8a8/deploys)

# Summary

* this project is a redo of my work for nyc MOIA with a good friend in graduate studies
this combines paypal, globalize.js, and react-intl, and either SSO SAML  or google log in
* either the user creates an account somehow not to difficult we just need a simple auth method than they see the brochure
    once they see the brouche they can choose any language to display the brochure
    once finalized the click pay and submit the payment through mock paypal api 
    wanna include java we'll stick to flask dont want this project to take too long

## Features include 

Only members of the project can read the README.md from the ignore folder

# Stack 

## Frontend
* Reactjs 17.0.2
* react router dom 5.0.2
* okta 
* react-paypal-js 7.3.3
* gh-pages 3.2.3
* jspdf : 2.3.1
* html2canvs: 1.3.2
## Backend


## Testing
* Docker, (tes in docker containers from linux VM) v20.10.7

### Unit
* rspec    v3.10.0
* capybara v3.35.3

### Integration
* rspec    v3.10.0
* capybara v3.35.3

### E2E
* rspec    v3.10.0
* capybara v3.35.3
* puffing billy v2.4.1

## Hosting
* Netlify

## Logging
* SpringBoot
* DigitalOcean
### CMS



## CI/CD
* CircleCI
* Docker v20.10.7
* Virtual Box v 6.1.22
* Ubuntu VM 20.04.1


# Structure

## Linting Rules
* for each commit, we append "WORKING COMMIT" so we know the commit is free of bugs
* ruby indentation 2 lines
* ts indentation 4 lines
* we prefix all our styles with "a_p_p_" a judima methodlogy so as not to confunse with 3rd party libs


## Project Directory Mapping

### Frotend
#### Configurations


### Backend

#### Configurations
* refer to README.md in ignore


### Testing 

### CI/CD


### Issues

### Future Plans
refer to README.md in ignore


## Site Navigation


### Login Page
* the users signs in with okta SSO

### Home Page 
* the user sees the brouchure

### Checkout
* the  user pays for the item using paypal custom checkout

# Aspects

## Challenges
* dealing with props and typescript
* understanding how I needed to use useHistory and place BrowoserRouter in the index.tsx
so I can use the histroy getter in App.tsx
    * I understand we need [get,set] = useState(val), to use set to update the val
    *  I understand we need get to see changes we made to the val
    * I understand we need the useEffect with deps array to watch for certain changes, and make side effects as needed 
    * I understand if we dont use react-router the state resets when we navigate using the browser API

## Mistakes/Failures


## Enjoyed
* building a major project in React
* even though i needed more components still fun
## Leadership

## Conflict


## Done Different


# Issues 
* SecureRoute is not working I login however I get redirected to the login callback whenever I go to a secure router

# TODO

## Template Updates

## Notes
* new year for bengali in april 14th
    * new year is for many communities in some parts of india , thalind 
* dialects
    * bangla
    Sylheti
    Chittagonian
* currencies
    * taka 
    * .85 for 1 dollar 
    * max taka that a porsha can hold is 5 taka 
* addresses in bengali
    * same as US 
    * in bengali they never use city they use district
    * distrinct, provinces 
    * cities even they sound the same Dhaka
    * starts in Dhaka university , make huge structures to celebrate the 
* festivities 
    * Pohela Boishakh the new year
        * white and red clothes
        * fish rice, illish ( also national fish)
        * add water to the rice a cultural way to make it last longer, panta bhat 
        * people would carry big birds and owls and bring it out
        * they also paint the road ( this happens at 12am)
            * Alpona done in front of parliament buidlign
            * Alpona in Kolkata for Mahalaya!
            * largest in the world


# Resources
[](https://www.brooklyn-usa.org/bulletins-events/bengali-new-year-celebration-2020/)
[purple hex codes](https://www.rapidtables.com/web/color/purple-color.html)
[explore chinatown](http://www.explorechinatown.com/PDF/ExploreChinatown.pdf)
* https://www.latestly.com/lifestyle/festivals-events/poila-baisakh-pohela-boishakh-2019-date-know-history-significance-behind-the-celebration-of-bengali-new-year-744890.html
* https://www.shutterstock.com/search/bengali+new+year
 pricing for translation
* [add paypal to react SDK](https://developer.paypal.com/docs/business/checkout/configure-payments/single-page-app/#react)
* [paypal script provider](https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default)


## Snippets
* build an image
```sh
sudo docker build -t windmillcode/angular-tornado-capybara:0.1.9 ruby-python-node
```



## Media 
<!-- bunch of links -->

Photo by Sebastian Voortman from Pexels



# Metrics

## User

## Networking

## Storage










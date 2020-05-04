## App Challenges
### Need to get search term from the user
### Need to use that search term to make a ..
### .. request to an outside API and fetch data
### Need to take the fetched images and show ..
### .. them on the screen in a list

## Property names and corresponding functions
### User Click   --> onClick
### User Changes --> onChange
### User submits --> onSubmit

## controlled (stored in react) vs uncontrolled (stored in html)
### | user type in input
### | callback get invoked
### | we call setState with the new value
### | component rerenders
### v Input is told what its value is (coming from state)

## Api call timeline
### | Component renders itself one time with no list of images
### | onSearchSubmit method called
### | Request made to unsplash
### | ... wait ...
### | Request complete
### | Set image data on state of App component
### v App component rerenders and shows images
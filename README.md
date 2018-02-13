# Project Title

Keeper Track App


### Description

Project, built using React, allows motels to keep track of housekeepers productivity and which rooms are checked out and need cleaning.

Motel Managers can select which rooms need to be cleaned, by clicking the room button which turns red and then un clicking it back to green to mark the room as ready for checkout.

There is a timer component to use after the housekeeper is assigned a room to measure how long the Keeper took to clean the room. This data can be entered into a separate application for data analysis such as Excel or an HR tracker.


### Challenges or things learned while writing the app

1. Initially the code violated the DRY principle in the Keeper.js file, but I was able to refactor it to follow the DRY principle.

2. I had a hard time finding the best way to toggle the room colors, but settled on css class changes using JavaScript because of it's ease of use.

3. Finding the best way to test the functions in the app.

4. Figuring out why npm start didn't start the development server. It was because I didn't have react-scripts installed


## Author

* **Elisheba Wiggins**


## License

This project is licensed under the MIT License

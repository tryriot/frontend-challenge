<p align="center">
  <img alt="Riot logo" src="https://tryriot.com/wp-content/themes/riot-2020-production/images/logo-purple.svg" />
  <br>
  <br>
</p>

# Riot frontend challenge

Hi there!

Since you're here, you're probably taking part in our recruitment process for a front-end developer position, right?

We're super happy to hear that! Getting right to it — the main purpose of this test is to check out your front-end skills. We'd like to get to know your approach of solving the following problems:

- Implement functionalities from user stories.
- Use Vuejs library with Typescript.
- Use the GraphQL api endpoint to get the data.
- Provide the best possible User Experience (being strict with the designs, responsiveness, hover/focus states of interactive elements everything to your liking and ideas).

Feel free to open an issue if you got any questions or suggestions! Once it's ready, send us a repository link at louis@tryriot.com.

Happy coding and cheers,

Louis, CTO @ Riot

## Table of Contents

- [Riot frontend challenge](#riot-frontend-challenge)
  - [Table of Contents](#table-of-contents)
    - [User stories](#user-stories)
    - [Design](#design)
    - [API](#api)
    - [Technicall: 30 minutes debriefing](#technicall-30-minutes-debriefing)

### User stories

- [ ] The count on the top represent the total number of employees
- [ ] I am able to list the employees with paginated 10 by 10.
- [ ] When I click on load more, it loads 10 more employees if there are some.
- [ ] When I use the search, it will show me results based on employee name. If no employee found it will show the "No result for "search string"" with the icon.
- [ ] By using the select on the right, I can filter employees based on their status (All employees - active employees - deactivated employees - archived employees)
- [ ] I can select multiple employees or select all using the top checkbox, when I'm in selection mode (right screen), it will remove the filter select and show the number of selected employees with the button deactivate/activate.
- [ ] The button "deactivate" is shown if the selection contains a majority of active employees and vice versa.
- [ ] When the data is loading, I can see a skeleton
- [ ] If an employee does not have a profile picture, it should show a circle with his/her initials and a random color based on his/her initals.

### Design

You can find a Figma file of the User Interface [here](https://www.figma.com/community/file/1042474100556545669).

### API

You will find a graphQL API on this endpoint: <https://riot-technical-test-api.herokuapp.com/v1/graphql>

you can use a Graphiql online website: <https://lucasconstantino.github.io/graphiql-online/> to preview and try the API.

### Technicall: 30 minutes debriefing

Once finished, send me your repository link by email: louis@tryriot.com & book a call [HERE](https://calendly.com/louis-cibot/code)

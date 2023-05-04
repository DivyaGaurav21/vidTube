
# vTuBe 

A frontend project (web application) that fetches data from the YouTube API v3 using the Rapid API service. The purpose of the project is to create a YouTube-like platform, which can display and play videos, search and browse video content, and manage user accounts.

The project uses the React library as its frontend framework, which allows for building a responsive, dynamic user interface with reusable components. Material UI is used as the design system to provide a consistent look and feel throughout the application. This helps to create a modern and intuitive user experience.

In addition, the YouTube API is integrated into the project, allowing users to search for videos and view their details such as title, description, and duration. Users can also play videos directly from the app and browse related content.

Overall, this project leverages modern technologies and design principles to create a robust and user-friendly platform for consuming YouTube content.

## Hoisted Link on netlify:- https://divyagaurav-vtube.netlify.app/

## API Reference

#### Get all items

```http
  GET /search/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | 144cee50bfmshb43713f1c85811ep164433jsn972d85b733e7 |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## Rapid Api (YouTube v3) api
![homePage](https://github.com/DivyaGaurav21/vidTube/blob/master/github_img/Screenshot%20(10).png?raw=true)
## some demo image
@home
![homePage](https://github.com/DivyaGaurav21/vidTube/blob/master/github_img/Screenshot%20(6).png?raw=true)

@channel page

![homePage](https://github.com/DivyaGaurav21/vidTube/blob/master/github_img/Screenshot%20(7).png?raw=true)

@video play page

![homePage](https://github.com/DivyaGaurav21/vidTube/blob/master/github_img/Screenshot%20(5).png?raw=true)

@search results

![homePage](https://github.com/DivyaGaurav21/vidTube/blob/master/github_img/Screenshot%20(8).png?raw=true)



## Folder Structure
```bash

ecommerce-react-app
    |
    |----->node_modules 
    |----->public
    |         |----->logo.png
    |         |----->index.html    
    |
    |-->src
    |   | 
    |   |         
    |   |______COMPONENTS         
    |            |--->Feed
    |            |     |--->SideBar.jsx
    |            |     |--->Feed.jsx
    |            |
    |            |           
    |            |--->navSection
    |            |       |---> Navbar.jsx
    |            |       |---> SearchBar.jsx
    |            |
    |            |
    |            |----videos
    |            |      |---> ChannelCard.jsx
    |            |      |---> ChannelDetail.jsx
    |            |      |---> VideoCard.jsx
    |            |      |---> Videos.jsx
    |            |
    |            |
    |            |----> SearchFeed.jsx
    |            |----> VideoDetail.jsx          
    |            |       
    |            |-->App.js
    |            |-->App.css
    |            |-->Index.js
    |            |-->Index.css
    |
    |--->.env
    |-->.gitignore
    |-->package.json
    |
```  
## Authors

- [@Divya Gauav]( https://divyagaurav-vtube.netlify.app/)


# Hi, I'm Divya gaurav👋 React Developer

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

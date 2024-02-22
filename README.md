This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Overview

This is a mobile application developed using React Native that allows users to browse and search for movies. The app utilizes The Movie Database (TMDb) API to fetch movie information, including details, ratings, and images.

# Features

- **Browse Movies**: Explore a wide range of movies with information such as title, release date, and poster images.

- **Search Functionality**: Easily search for specific movies using the search feature.

- **Movie Details**: View detailed information about a selected movie, including synopsis, ratings, and cast.

- **Add to Favorites**: Save your favorite movies for quick access.


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Modifying your App

First, inside your android folder create file with name "local.properties" inside it place the sdk path for react native.

Inside src/constants/index.js change the MOVIE_BASE_URL and ACCESS_TOKEN

## Step 2: Start the Metro Server

Second, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 4: Login

Login with the dummy credential to make session with the app.

# Demo

https://github.com/MuhammadTahir786/Movie-App/assets/122633773/618476c9-bd1b-40b6-b4c6-bae2e40c4a99



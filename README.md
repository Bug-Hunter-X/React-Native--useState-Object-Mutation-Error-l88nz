# React Native: useState Object Mutation Bug

This repository demonstrates a common error in React Native when using the `useState` hook with object state. Directly mutating the state object prevents the component from re-rendering, leading to unexpected behavior.  The solution involves creating a copy of the state object before making modifications.

## Bug Description
Directly modifying properties of an object held within `useState` does not trigger a re-render because React compares object references.  Mutating the object in place keeps the reference the same, resulting in the component not updating in the UI.

## How to reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npx react-native run-android` or `npx react-native run-ios`. 
4. Observe the incorrect behavior in the app.
5. Refer to `bugSolution.js` for the correct implementation.
## ❌ Remove Favorite button
Update the Favorites Gallery to display a "Remove" button alongside each item you've added. Here's how I'd recommend approaching this:
1. In App.jsx, inside the App component, make a `removeFromFavs` function. It should take one parameter called `imgUrl`. Inside the function:

    a. use the [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method to filter out all the urls in your favorites array in state, then
    b. use the setter function to update the favorites array to be your new filtered array.
2. In the Gallery component, in the first line of the component definition, define a props object with one prop called `removeFunction`.
3. Back in App.jsx, pass the `removeFromFavs` function you made as the `removeFunction` prop where you use the Gallery component.
4. In the Gallery component, wrap a `<section>` tag around the `<img/>` we're creating in the `.map()` function.
5. Inside the section you just made, make a `<button>` element (either before or after the image -- up to you) with the text "Remove". Give the button an `onClick` function. It should be an anonymous arrow function that calls the function this component received as the `removeFunction` prop. (Remember to pass in the image URL we get from the `.map()` function, so the remove function knows which image to remove!)

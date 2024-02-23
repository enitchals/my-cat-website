## 🐕 Dog Mode
[The Cat API](https://thecatapi.com/) is great, but what about our canine friends? Let's add a "dog mode" to our cat website using [The Dog API](https://thedogapi.com/)!

The great thing about this API is that it offers exactly the same API endpoints and data structures as the API we're already using. The only difference is that we'll be sending our requests to `thedogapi.com` instead of `thecatapi.com`.

Here's my recommended plan of attack:

1. In the App component, add a new piece of state called `mode` that tracks whether we're in `dog` mode or `cat` mode.
2. Create a new component called `Mode`.

    - The component should accept one prop called `setMode` (which will be the same as our `setMode` function we made with useState())

    - The component should include an HTML element or MUI component that allows the user to choose between Cat Mode and Dog Mode.

    - The input that toggles between the two modes should have an `onChange` function. It should be an anonymous arrow function that calls `setMode`. Don't forget to pass either `'cat'` or `'dog'`.

3. In your App component, we use the `thecatapi.com` in our URL to get a random cat. Update this string to use `${template literal}` syntax to say either `thecatapi` or `thedogapi`, depending on the current value of the `mode` variable.
4. Your SelectBreed component also uses a URL that has `thecatapi.com` in it. We'll need a way to update that.

    - In `SelectBreed`, add a new prop called `mode` to the component definition.

    - In `App`, where we use the `<SelectBreed/>` component, pass in our `mode` state variable as the `mode` prop.

    - Back in `SelectBreed`, use a `${template literal}` to update our URL string to say either `thecatapi` or `thedogapi` based on the value of the `mode` prop that's being passed in from App.

Next, you have a decision to make -- do you want to keep one unified list of favorites, or do you want to keep your favorite dogs and your favorite cats in separate lists?

If you want to keep them all together, there's nothing else to do -- you're done with Dog Mode!

If you'd like to keep two separate lists, you'll need to do a few more things:

1. First, update your App component's state so you have two separate state variables called `favCats` and `favDogs`.
2. Next, update the `addToFavs` function. You'll need to check the current mode. If it's in `cat` mode, add the image to `favCats`. If it's in `dog` mode, add the image to `favDogs`.
3. You'll also need to update the value of the prop you're passing into the Gallery component accordingly. If you're in `dog` mode, pass in `favDogs`, otherwise pass in `favCats`.

## 🚫 Don't Duplicate Favorites
Notice how if you click the "Add Favorite" button more than once for the same image, it will get added multiple times? Let's prevent that from happening!

The code for this should be pretty simple -- the trick is figuring out the logic and where to apply it. Here's my hint: in the `addToFavs` function, we only want to create the newArray value and update state _if_ the `favCats` array does not [include](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) the image URL we pass into the function.

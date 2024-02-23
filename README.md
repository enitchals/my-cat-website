# My Cat Website
A demo with extension problems using [The Cat API](https://thecatapi.com/)

## Branches

### demo-notes
The [demo-notes branch](https://github.com/enitchals/my-cat-website/tree/demo-notes) is a cleaned-up, annotated version of the code from the live demo. If you're wondering what a specific line of code from the demo does, this is a great place to learn more!

### demo
The [demo branch](https://github.com/enitchals/my-cat-website/tree/demo) has code from the first part of the live demo. This code covered:
- fetching a random cat pic from The Cat API and displaying it on the page
- updating the random cat pic using a button
- adding a "breed" input to select a random cat pic by breed

### demo-2
The [demo-2 branch](https://github.com/enitchals/my-cat-website/tree/demo-2) started with the code from the demo branch, then added the "favorites" list. Here's what we did:
- added a `favorites` list to the App component and an "Add Favorite" button in the RandomPic component
- added a Gallery component to display our favorite cats
- organized our App component so the Gallery and RandomPic components are displayed one at a time, and the user can toggle between the views with buttons

## Extension Problems
These can be done in whatever order you want! They are more or less sorted by difficulty, but that's subjective -- so if you get stuck, feel free to move on to another one.

**Remember to `git commit` frequently!**

- [Change Gallery List Order](./extension-instructions/change-order.md)
- [Remove Favorite Button](./extension-instructions/remove-favorite.md)
- [Don't Duplicate Favorites](./extension-instructions/no-duplicates.md)
- [Dog Mode](./extension-instructions/dog-mode.md)
- [Local Storage](./extension-instructions/local-storage.md)

## 💾 LocalStorage
Warning: A bit of new stuff ahead!

### 🧠 Context
localStorage is a kind of memory that lives within your browser. We can persist things here short-term, saving your application state even when you refresh or close and reopen your app.

You can use the following syntax to set a key/value pair in localStorage:

`localStorage.setItem("favCats", JSON.stringify(newArray))`

Notice the use of `JSON.stringify()` — this is because localStorage will only let you store a string. You can use `JSON.parse()` to turn the string back into a javascript object when you retrieve it from localStorage like this:

`const favCats = localStorage.getItem("favCats")`

- review the MDN documentation on [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for more info and syntax examples.

### 🗺️ Plan of Attack
To complete this task, you'll need to do two things:

1. use `localStorage.setItem()` to create or update a saved localStorage value representing the list of favorite cats when the favorites list is updated (hint: we made a function to handle adding to favs)
2. use `localStorage.getItem()` in App.jsx to get data from state (if it exists) and set it as your `favCats` state when the component first loads. This will go inside your useEffect callback function.

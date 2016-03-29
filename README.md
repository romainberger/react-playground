react-hot-boilerplate
=====================

The minimal dev environment to enable live-editing React components.

### Usage

```
git clone 
npm install
npm start
open http://localhost:3000
```

Now edit `src/field.js`.  
Your changes will appear without reloading the browser


### Todo list
1. Write the Ball Component class
2. Refactor the Ball Component as a functional component
3. Write fetchUsers method (it will hit ```https://api.dailymotion.com/users?fields=username,avatar_120_url,fans_total&sort=popular&limit=100```)
4. Write newBallFromUser (size will be relative to fans_total)
5. Make a better ball component (use user avatar, username...)

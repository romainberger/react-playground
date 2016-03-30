React Test
=====================

Here is a small test to have fun with react, we hope you'll enjoy it!

### Usage

```
git clone https://github.com/Youpinadi/react-playground.git
npm install
npm start
open http://localhost:3000
```

Now edit `src/field.js`.
Your changes will appear without reloading the browser


### Todo list
1. Write the Ball Component class
2. Refactor the Ball Component as a functional component
3. Write fetchUsers method (it will hit ```https://api.dailymotion.com/users?fields=username,avatar_120_url,fans_total&sort=popular&limit=100```). Documentation here: https://github.com/github/fetch
4. Write newBallFromUser (size will be relative to fans_total)
5. Make a better ball component (use avatar_120_url, username...)


### SVG help:
SVG circle
```xml
<circle cx="" cy="" r="" fill=""/>
```

SVG image and text
```xml
  <g transform="translate(0,0)">
    <image xlinkHref="" height="10" width="10"/>
    <text fontFamily="sans-serif" fontSize="20px" dx="-10px" fill="red">text</text>
  </g>
```

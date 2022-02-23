This process documents all steps followed to start this project 

    SETTING UP NPM 
    npm init / npm init -y (this setup your package.json file )


ADDING DEPPENDENCIES :

DevDeppendencies:

1. a.) prettier : npm i --save-dev prettier, 
b.) Add a prettier script to your package.json file:  "prettier": "prettier --config prettierrc 'src/**/*.js' --write"
c.) Create a .prettierrc file for any custom configurations.

{
    "extends": ["prettier:prettier/recommended"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "no-retun-await": "off", 
      "consistente-retun": "off"
    }
  }
d.) create an empty config file to let editors and other tools know you are using Prettier:
echo {}> .prettierrc.json
e.) create a .prettierignore file to let the Prettier CLI and editors know which files to not format.
    node_modules,

    Tip: If your project isn’t ready to format, say, HTML files yet, add *.html.
f.) format all files with Prettier: npx prettier --write .
d.) Run npm run prettier to run prettier (or whatever you named your script).

1.1. Install eslint

a.) npm install eslint --save-dev
b.) set up a configuration file : npm init @eslint/config
after install set in your eslintrc.json 
set the rule as : 

{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
c.) add : {
  "extends": ["plugin:prettier/recommended"]
}   in the .eslintrc.json

2. a.) install Eslint: npm --save-dev eslint
b.) add eslint to script in package.json file : "lint": "eslint", "eslint": "eslint",
    
    INSTALLING AND CONFIGURING TYPESCRIPT
3. a.) install Typescript to your devdependency : npm i typescript --save-dev
b.) add the script to package.json file : "build": "npx tsc"
C.) To install the config file, run : npx tsc --init
d.) adjust the tsconfig.json file accordingly.
Helpful configurations to note:
{
  "compilerOptions": {
    "target": "es5",                          
    "module": "commonjs",                     
    "lib": ["ES2018", "DOM"], 
    "outDir": "./build",  // This is where typescript to. Usually a main.js file in build                     
    "strict": true,   // This turns on all the strict typing configuration                     
    "noImplicitAny": true, // forces us to not use the Any type in our code.                
  },
  "exclude": ["node_modules", "tests"] // exclude typechecking for node_modules and tests folder
}

e.) install ts-node: npm i @types/node, npm i ts-node
f.) you can run the project with : npm run build
and change your test script to 



 INSTALL EXPRESS
4. a.) install express: npm i express,
 and also the type definition :npm install --save-dev @types/express

5. a.) install nodemone: npm i --save-dev nodemon
b.) add watch to the package.json file : "watch": "nodemon ./src/index.ts"
c.) start your server with : npm run watch


6.    CONFIGURING GIT
a.) use git init to initialize git 
b.) add .gitignore file and insert : node_modules and other files you don't want to track to git hub
c.) create your git repository 
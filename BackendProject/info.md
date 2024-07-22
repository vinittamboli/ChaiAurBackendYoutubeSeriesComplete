npm init // package.json file gets generated after this commend

npm i -D nodemon // nodemon gets installed as well as node_modules folder is created.

package.json file's script section is updated with key and value dev : "nodemon src/index.js"
to run the project using "npm start dev" query

npm i -D prettier // To install prettier

created .prettierrc file and added the format of how it should format the code:
{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 2,
"semi": true,
"trailingComma": "es5"
}

Created .prettierignore to ignore folders from getting formatted

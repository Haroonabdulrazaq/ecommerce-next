# Scalebale Architecture

The project is to create a template to be use to build a Scalable Archietecture for `Nextjs + TypeScript` Applications. This is created so that you can enforce the team to work with the same style and Best practice.

STEP 1: SETTING UP ENVIRONMENT

- Created a .nvmrc file in the root folder to declare the engine we will use for this project
- Created a .npmrc file in the root folder and declared that the engine should be strictly used
- Add engines to package.json file declaring the engines and npm version supported, while yarn would be disbaled

<code>
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0",
    "yarn": "please use npm"
  },```
</code>

# STEP 2: SETTING UP GIT

- Create the project on Github
- Add the remote origin in your project `git remote add origin git@....`
- Add the changes to local git `git add .`
- Make a commit to local git with a custom commit message `git commit -m 'commit message' .`
- Push this changes to github(while making the "main branch" the default push branch ) `git push -u origin main`
-

# STEP 3: ESLINT CONFIGURATION

To run lint in this project( which comes preconfigured with nextjs template) `npm run lint`

- Add some extend configuration
- Add globals configuration to declare React in all file so we dont have to repeat it in all components
- Add rules, this is the part where we declare our eslint rule

Lastly run `npm run lint` to check for linting errors.

# STEP 4: CONFIGURING PRETTIER

You can configure your prettier base on your team's preference. It would ensure you have the same formatting like tabWidth, doubleQuote check [pretteir docs](https://prettier.io/docs/en/options.html) form more options

- Add `.prettierrc` file in your root project directory and options base on your preferrence.
- Add `.prettierignore` file in your root project directory to ignore those file you dont want prettier to format; example node_modules, /dist folder. etc.

Lastly, run `npm run prettier` or `yarn prettier` to format your project

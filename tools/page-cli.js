import fs from 'fs-extra';
import inquirer from 'inquirer';
import replace from 'replace-in-file';

const updateFileVariables = (pageName) => ({
  files: [
    `src/pages/${pageName}/__tests__/${pageName}.test.tsx`,
    `src/pages/${pageName}/types.tsx`,
    `src/pages/${pageName}/styles.ts`,
    `src/pages/${pageName}/skeleton.tsx`,
    `src/pages/${pageName}/index.tsx`
  ],
  from: /MyComponent/g,
  to: pageName
});

const addRouterImport = (pageName) => {
  const newImport = `import ${pageName} from "../pages/${pageName}"; 
  // Insert new import here - Please do not remove this line`;
  return ({
    files: ['src/navigation/router.tsx'],
    from: "/* Insert new import here - Please do not remove this line */",
    to: newImport
  });
};

const updateRouterFile = (pageName, pagePath) => {
  const newRoute = `<Route path="${pagePath}" element={<${pageName} />}/>,
  /* Add new pages here - Please do not remove this line */`;
  return ({
    files: ['src/navigation/router.tsx'],
    from: "/* Add new pages here - Please do not remove this line */",
    to: newRoute
  });
};

const createCopy = async (src, dest) => {
  await fs.copySync(src, dest);
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'pageName',
      message: 'Please, name your new and awesome page',
      validate: (value) => {
        if (/^[aA-zZ0-9-_]+$/g.test(value)) {
          return true;
        }
        console.log(
          "\n\n That's an invalid page name 🤨, use only letters and -, no spaces and weird stuffs. \n"
        );
        return false;
      }
    },
    {
      type: 'input',
      name: 'pagePath',
      message: "What's the path for this awesome page?"
    },
  ])
  .then(async ({ pageName, pagePath }) => {
    try {
      await createCopy(
        `./tools/mockTest`,
        `./src/pages/${pageName}/__tests__/${pageName}.test.tsx`
      );

      await createCopy(
        `./tools/mockTypes`,
        `./src/pages/${pageName}/types.tsx`
      );

      await createCopy(
        `./tools/mockStyles`,
        `./src/pages/${pageName}/styles.ts`
      );

      await createCopy(
        `./tools/mockSkeleton`,
        `./src/pages/${pageName}/skeleton.tsx`
      );

      await createCopy(
        `./tools/mockPage`,
        `./src/pages/${pageName}/index.tsx`
      );


      await replace(updateFileVariables(pageName));
      await replace(addRouterImport(pageName));
      await replace(updateRouterFile(pageName, pagePath));

      console.log(`Congratulation, your page is ready to go 🚀!`);
      console.log(`You can check it out at /src/page/${pageName}`);
      console.log(`Now, the fun part 🤓`);
      console.log('Start coding!!! \n');
      console.log('Happy hacking 🙃 \n');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




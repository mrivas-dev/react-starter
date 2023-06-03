import fs from 'fs-extra';
import inquirer from 'inquirer';
import replace from 'replace-in-file';

const updateFileVariables = (componentName, isShared) => ({
 files: [
   `src/${isShared ? 'shared' : 'components'}/${componentName}/__tests__/${componentName}.test.tsx`,
   `src/${isShared ? 'shared' : 'components'}/${componentName}/types.tsx`,
   `src/${isShared ? 'shared' : 'components'}/${componentName}/styles.ts`,
   `src/${isShared ? 'shared' : 'components'}/${componentName}/skeleton.tsx`,
   `src/${isShared ? 'shared' : 'components'}/${componentName}/index.tsx`
 ],
 from: /MyComponent/g,
 to: componentName
});

const createCopy = async (src, dest) => {
 await fs.copySync(src, dest);
};

inquirer
 .prompt([
   {
     type: 'input',
     name: 'componentName',
     message: 'Please, name your new and awesome component',
     validate: (value) => {
       if (/^[aA-zZ0-9-_]+$/g.test(value)) {
         return true;
       }
       console.log(
         "\n\n That's an invalid component name 🤨, use only letters and -, no spaces and weird stuffs. \n"
       );
       return false;
     }
   },
   {
     type: 'confirm',
     name: 'isShared',
     message: 'Is this new and fancy component, going to be used by other components?',
   },
 ])
 .then(async ({ componentName, isShared }) => {
   try {
     await createCopy(
       `./tools/mockTest`,
       `./src/${isShared ? 'shared' : 'components'}/${componentName}/__tests__/${componentName}.test.tsx`
     );

     await createCopy(
       `./tools/mockTypes`,
       `./src/${isShared ? 'shared' : 'components'}/${componentName}/types.tsx`
     );

     await createCopy(
       `./tools/mockStyles`,
       `./src/${isShared ? 'shared' : 'components'}/${componentName}/styles.ts`
     );

     await createCopy(
       `./tools/mockSkeleton`,
       `./src/${isShared ? 'shared' : 'components'}/${componentName}/skeleton.tsx`
     );

     await createCopy(
       `./tools/mockComponent`,
       `./src/${isShared ? 'shared' : 'components'}/${componentName}/index.tsx`
     );


     await replace(updateFileVariables(componentName, isShared));

     console.log(`Congratulation, your component is ready to go 🚀!`);
     console.log(`You can check it out at /src/${isShared ? 'shared' : 'components'}/${componentName}`);
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




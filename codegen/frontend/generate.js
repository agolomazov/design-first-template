const { execSync } = require('child_process')
const { render } = require('mustache');
const fs = require('fs');
const path = require('path');
const config = require('./config');

// Очищаем каталог
console.log('Очищаю каталог');
execSync(`npx rimraf ${config.targetPath}`);

// Гененрируем спеку по каждому сервису
console.log('Генерирую код');

const pathOpenapiGenConfigModel = path.resolve(__dirname, './openapi-gen-config.models.json');
const pathTemplate = path.resolve(__dirname, './template');
const packageTemplateFolderBase = path.resolve(__dirname, './template')
const packageTemplateFolder = path.resolve(__dirname, './package-template');

config.services.forEach((el) => {
  execSync(
    `npx openapi-generator-cli generate --global-property models -g typescript-axios -o ${config.targetPath} --type-mappings=array=Array,set=Array -c ${pathOpenapiGenConfigModel} -i ${el.specPath} -t ${pathTemplate}`,
    (err) => console.log(err)
  );
  execSync(
    `npx openapi-generator-cli generate --global-property apis -g typescript-axios -o ${config.targetPath} --type-mappings=array=Array,set=Array -c ${pathOpenapiGenConfigModel} -i ${el.specPath} -t ${pathTemplate}`,
    (err) => console.log(err)
  );
});

// Генерируем индексы
console.log(`Обновляю индексы`);
execSync(`npx cti ${config.targetPath}/api ${config.targetPath}/models --filefirst`)


//Генерируем вспомогательные файлы
console.log(`Генерирую вспомогательные файлы`);
fs.copyFile(`${packageTemplateFolderBase}/configuration.mustache`, `${config.targetPath}/configuration.ts`, (err) => err ? console.log(err) : null);
fs.copyFile(`${packageTemplateFolderBase}/baseApi.mustache`, `${config.targetPath}/base.ts`, (err) => err ? console.log(err) : null);
fs.copyFile(`${packageTemplateFolderBase}/common.mustache`, `${config.targetPath}/common.ts`, (err) => err ? console.log(err) : null);


console.log('Создаю файлы нужные для генерации NPM пакета');

// Генерируем index.js по шаблону
fs.copyFile(
  `${packageTemplateFolder}/index.mustache`,
  `${config.targetPath}/index.ts`,
  (err) => (err ? console.log(err) : null)
);


// Генерируем package.json по шаблону
const packageTemplate = fs
  .readFileSync(`${packageTemplateFolder}/package.mustache`)
  .toString();
const package = render(packageTemplate, config);
fs.writeFileSync(`${config.targetPath}/package.json`, package);


// Генерируем tsconfig.json по шаблону
const tsconfigTemplate = fs
  .readFileSync(`${packageTemplateFolder}/tsconfig.mustache`)
  .toString();
const tsconfig = render(tsconfigTemplate, config);
fs.writeFileSync(`${config.targetPath}/tsconfig.json`, tsconfig);


// Генерируем README.md по шаблону
const readmeTemplate = fs
  .readFileSync(`${packageTemplateFolder}/README.mustache`)
  .toString();
const readme = render(readmeTemplate, config);
fs.writeFileSync(`${config.targetPath}/README.md`, readme);


// Генерируем .gitignore по шаблону
fs.copyFile(
  `${packageTemplateFolder}/gitignore`,
  `${config.targetPath}/.gitignore`,
  (err) => (err ? console.log(err) : null)
);

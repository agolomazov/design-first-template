# Exon Design API

В данном репозитории храниться спецификация API в формате OpenAPI

### Регламенты работы с репозиторием
1. [Общие правила для работы с репозиторием](./documentation/REGULATIONS.md)
### Полезные ссылки
1. [Stoplight Studio](https://stoplight.io/studio/) - IDE для проектирования API
1. [Spectral](https://stoplight.io/open-source/spectral/) - линтен для проверки качества написанных спецификаций
1. [Prism CLI](https://stoplight.io/open-source/prism/) - Mock-сервер
1. [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) - code-generator из спецификаций OpenAPI
1. [openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli)
1. [Список генераторов](https://openapi-generator.tech/docs/generators)
1. [Генератор для typescript-axios](https://openapi-generator.tech/docs/generators/typescript-axios/)
1. [Документация Stoplight](https://meta.stoplight.io/docs/platform/ZG9jOjIwNjk2MQ-welcome-to-the-stoplight-docs)
1. [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj) - расширение для Google Chrome для отправки кастомных заголовков
1. [Конфиги генератора для Typescript](https://openapi-generator.tech/docs/generators/typescript-axios/)
1. [Styleguide по работе с репозиторием](./documentation/STYLEGUIDE.md)


### Необходимые технологии для запуска

1. [Java 1.8](https://openjdk.java.net/install/)
1. [NodeJS](https://nodejs.org/en/)


## NPM скрипты

| Скрипт                   | Описание                                                                 |
| :----------------------- | ------------------------------------------------------------------------ |
| `npm run lint`           | Запуск линтера для проверки качества спецификации                        |
| `npm run mock`           | Запуск mock-сервера                                                      |
| `npm run postman`        | Генерация postman-коллекций из спецификаций                              |

## Установка Java

- для работы OpenApi Generator необходимо установить [java](https://jdk.java.net/archive/)
- добавить в системную переменную PATH следующий путь:

```
<PATH_TO_JAVA>\jdk-11\bin
```

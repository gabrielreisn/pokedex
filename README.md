# pokedex

This repo is a side-project for testing some a few technologies and building a cool pokemon fetch using graphql pokemon API

![image](https://user-images.githubusercontent.com/13686332/62811434-fe60c300-bad7-11e9-839b-1ca509de8bf7.png)

The final production version can be used here:
https://ts-pokedex.netlify.com/

Running the project:

- Using Node:

  - requrements:

    - node
    - yarn

  - `$ yarn` ( for instaling the depdendencies )
  - `$ yarn start`

- Using Docker:

  - requirements:

    - Docker
    - Docker-compose

  - `$ docker-compose build`
  - `$ docker-compose up`

Tech used:

```
 - React
 - TypeScript
 - Urql/graphql
 - Styled-components
```

Future steps:

- [x] Add docker support
- [x] Add unit/integrtion tests with RTL (react-testing-library)
- [x] Image lazy-loading at browser level https://www.loom.com/share/fa7f0c8223324155bbdce72c7735ff50
- [ ] Add virtual / infinite scroll

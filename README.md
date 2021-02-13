# learn_angular_cli

- To install Angular CLI 

```bash
npm install -g @angular/cli

ng --version

ng --help
```

- Create a new project

```bash
ng new <projectName> 
```

- Serve in localhost:4200

```bash
ng serve --open
```

- Generating components and modules 

```bash
ng generate component contact-list --dry-runner --flat

ng generate module shared

ng generate component shared/avatar --module=shared
```

- Generating directives 

```bash
ng generate directive shared/directives/non-numeric --module=shared
```

- Generating services

```bash
ng generate service service/api
```

- Generating pipes

```bash
ng generate pipe pipes/phone
```

- Generating interfaces and enums

```bash
ng generate interface models/contact
```

- Generating route guards

```bash
ng generate guard auth
```

- The ng build command 

```bash
ng build

ng build --prod

ng build --prod --stats-json
```


- The ng test command

```bash
ng test 

ng test --single-run

ng test --single-run --code-coverage

ng e2e
```

- Ejecting from the Angular CLI

```bash
ng eject
```

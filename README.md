# Headquaters AngularJS Client

## Konfiguracja
Strona stoi na nodejs więc żeby ją postawić należy: 
* Pobrać nodejs https://nodejs.org 5.8.0 (w mojej wersji ubuntu nie ma go w repo).
* przejść do katalogu głównego projektu i wykonać:
  * ```npm install -g npm@latest grunt-cli bower yo  generator-karma generator-angular```
  * ```npm install grunt karma grunt-karma --save-dev```
  * ```npm install```
  * ```bower install```
  * ```grunt serve```

## Testy
```grunt test```

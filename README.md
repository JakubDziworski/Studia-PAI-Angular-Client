# Analyzer Client Web Application

## Konfiguracja
Strona stoi na nodejs więc żeby ją postawić należy: 
* Pobrać manualnie nodejs z 5.8.0 https://nodejs.org/dist/v5.8.0/  (a przynajmniej w mojej wersji ubuntu nie ma go w repo).
* Dodać do zmiennej PATH katalog nodejs/bin (znajduja sie tam niezbędne  binarki node i npm)
* przejść do katalogu głównego tego projektu i wykonać:
  * ```npm install -g npm@latest grunt-cli```
  * ```npm install```
  * ```bower install```
  * ```grunt serve```

## Testy
```grunt test```

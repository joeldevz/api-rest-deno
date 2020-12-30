# api-rest-deno
## Drun
_Libreria que nos ayuda a reiniciar la aplicación mienstras estamos desarrollando (Parecida a NODEMON)_
```
deno install -qAf --unstable https://deno.land/x/denon@2.4.4/denon.ts
```
_Creamos un archivo en la raiz (drun.json) y colocamos el siguiente codigo_
```
{
  "entryPoint": "./server.ts",
  "cwd": "./",
  "excludes": [""],
  "runtimeOptions": ["--allow-net", "--allow-read"]
}
```
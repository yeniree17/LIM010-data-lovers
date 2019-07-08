# Proyecto N° 2 Data Lovers
## Nombre: Latam Statistics 360° 

## Índice

- [Índice](#índice)
- [Resumen](#resumen)
- [Investigación UX](#investigación-UX)
    - [Historias de Usuario](#historia-de-usuario)
    - [Prototipo de baja Fidelidad](#prototipo-baja-fidelidad)
    - [Prototipo Final en Figma y Zeplin](#prototipo-final-en-figma-y-Zeplin)


***

## Resumen

## Investigación UX

Esta interfaz Web permitirá visualizar y manipular indicadores socioeconómicos y demográficos de los siguientes países Latinoamericanos: **Brasil, Chile, México y Perú**; que son considerados por especialistas económicos como _"Mercados Emergentes"_, debido a que cuentan con un rápido crecimiento de su actividad económica por diversos factores: riqueza de materias primas y recursos, industrialización, creciente número de trabajadores jóvenes, fuerte inversión extranjera directa, crecimiento de consumidores locales, influencia política y económica en los países de su espacio económico, entre otros. Por ende, influyen positivamente en su Producto Interno Bruto (PIB).

Los principales usuarios de **LATAM Statistics 360°** son estudiantes universitarios en el área de Economía, Geografía, Trabajo Social, empresarios de PYMES, y aquellos profesionales que requieren utilizar indicadores demográficos y socioeconómicos para realizar sus estudios de mercado, investigación y otros análisis económicos.

Cabe destacar, que esta Base de Datos ha sido tomada del [Banco Mundial](https://www.bancomundial.org/), una organización internacional que ofrece asesoría técnica y financimiento para que los Gobiernos y empresas privadas lleven a cabo proyectos para el Desarrollo e Inclusión Social y favorezca un crecimiento sostenibles de sus países. Sin embargo, nuestra base de datos tedrá un alcance a los Países Latinoamericanos antes mencionados. 

De esta manera, se facilita el acceso a la información de los usuarios que requieren datos estadísticos de forma frecuente para estar actualizados. Todo esto permite un acceso fácil de la información gratuita y estadísticas de los paises emergentes de America Latina (LATAM).

El objetivo de nuestra interfaz **LATAM Statistics 360°** es acceder a datos confiables de Indicadores Socioeconómicos de los países LATAM, presentados de forma sencilla y fácil de entender, que le permita organizar la data por años y porcentajes (%) para una mejor comprensión.

### Historias de Usuario
Para el diseño y la implementación de nuestra interfaz, se consideraron las cinco (5) historias de usuario definidas en el proyecto. A partir de ellas, se establecieron los Criterios de Aceptación y Definición de Terminado.
 ____
- Historia de Usuario N° 1: _"Como usuaria quiero poder loguearme con mi usuario y contraseña para acceder al sitio web"_ 

#### Criterios de Aceptación:
- [x] **DADO** que el usuario ingresa LABORATORIA como usuario y contraseña **CUANDO** va a hacer Login, **ENTONCES** accederá exitosamente al buscador de datos (siguiente sección).

- [x] **DADO** si el usuario no ingresa un nombre **CUANDO** va a hacer Login, **ENTONCES** el sistema le genera un aviso que le indica que debe rellenar el campo para poder ingresar.

- [x] **DADO** si el usuario no digita una clave en el recuadro indicado **CUANDO** va a hacer Login **ENTONCES** el sistema le genera un aviso que es obligatorio rellenar este campo para poder ingresar.

- [x] **DADO** que el usuario coloque incorrectamente la contraseña **CUANDO** quiere hacer Login, **ENTONCES** el sistema le hará un recordatorio que tiene 3 intentos para poder ingresar.

- [x] **DADO** que el usuario intenta 3 veces ingresar la contraseña de forma incorrecta **CUANDO** quiere hacer Login, **ENTONCES** el sistema le bloqueará el acceso y tendrá que reiniciar la página.

#### Definición de Terminado

- [x] Cuando el diseño del Login sea una replica exacta al prototipo de alta fidelidad de FIGMA

- [x] Que se despliegue correctamente cuando se ingresa el Usuario y contraseña

- [x] Que pase el Test de pruebas unitarias.

- [x] Que el diseño sea Responsive Web Designer
_____
- Historia de Usuario N° 2: _"Como usuaria quiero poder seleccionar un país y visualizar la data de sus respectivos indicadores para analizar el comportamiento demográfico/económico de cada región"_ 

#### CRITERIOS DE ACEPTACIÓN:
- [ ] **DADO** que el usuario selecciona un país dando *click* al recuadro **CUANDO** se encuentra en el Campo de `Países` , **ENTONCES**  podrá escoger el siguiente campo de `Indicadores`

- [ ] **DADO** si el usuario no selecciona ningún país **CUANDO** se encuentra en el Campo de  `Países`  **ENTONCES** el sistema no realizará ninguna acción.

#### DEFINICIÓN DE TERMINADO

- [ ] Que se visualice los diferentes indicadores cuando el usuario seleccione uno o varios países. 

- [ ] Que pase el Test de pruebas unitarias.

- [ ] Que el diseño sea Responsive Web Designer.

- [ ] Que este publicado en GH-Pages 
____
- Historia de Usuario N° 3: _"Como usuaria quiero poder ordenar los datos de los indicadores de manera ascendente (menor a mayor) o descendente (mayor a menor) para entender su evolución por años y porcentaje"_

#### CRITERIOS DE ACEPTACIÓN:
- [ ] **DADO** si el usuario da *click* en el botón `Consultar` en el Portal de Datos **CUANDO** selecciona todos los parámetros que desea buscar **ENTONCES** el Sistema le reflejará su consulta en formato de tabla y gráfico y los datos de años ordenados de forma *Ascendente* (menor a mayor).

- [ ] **DADO** que el usuario quiere visualizar los datos de años y porcentajes del `Indicador` seleccionado de forma *Descendiente* (mayor a menor) **CUANDO** hace *click* en el botón de `Ordenar de Mayor a Menor` en el buscador de datos **ENTONCES** el Sistema reorganizará la tabla de datos resultante empezando desde el año mas reciente hasta el más antiguo.

- [ ] **DADO** si el usuario no hace *click* en el botón de `Ordenar Descendiente` en el buscador de datos **CUANDO** visualice la tabla y gráfico resultante luego de dar *Click* en `Consultar` **ENTONCES** sólo visualizara la data de años ordenado por defecto de forma *Ascendente*.

#### DEFINICIÓN DE TERMINADO

- [ ] Que se visualice los datos de años de forma *Ascendente*, luego de dar *Click* en `Consultar`.

- [ ] Que se visualice los datos de años de forma *Descendente*, luego de dar *Click* al boton `Ordenar de Mayor a Menor`.

- [ ] Que pase el Test de pruebas unitarias.

- [ ] Que el diseño sea Responsive Web Designer.

- [ ] Que este publicado en GH-Pages 
____
- Historia de Usuario N° 4: _"Como usuaria quiero poder filtrar los datos de los indicadores por año o rango de años para entender su evolución en un tiempo definido."_

#### CRITERIOS DE ACEPTACIÓN:
- [ ] **DADO** que el usuario quiere visualizar los años disponibles, luego de seleccionar el `Indicador` de su interés  **CUANDO** se encuentra en la sección de parámetros para su consulta, **ENTONCES** la interfaz debe mostrar dos inputs *(Desde y Hasta)* con una lista de los años, que le permita establecer el rango de su preferencia.

- [ ] **DADO** que el usuario selecciona el año o el rango de años que desea consultar **CUANDO** ingresa el valor deseado en los dos input del campo `Periodo` , antes de dar *click* en  `Consultar`  **ENTONCES** el Sistema le reflejará su consulta, en formato de tabla y gráfico, con los años que ha seleccionado previamente.

- [ ] **DADO** si el usuario no define el año o el rango de años **CUANDO** esta seleccionando los parámetros para su Consulta en el Portal de Datos **ENTONCES** el Sistema no visualizara los resultados de su Consulta, generando una alerta de rellenar este campo.

#### DEFINICIÓN DE TERMINADO

- [ ] Que  se visualice los datos en tabla y gráfico con el rango de años seleccionado por el usuario en su Consulta.

- [ ] Que pase el Test de pruebas unitarias.

- [ ] Que el diseño sea Responsive Web Designer.

- [ ] Que este publicado en GH-Pages 
___
- Historia de Usuario N° 5: _"Como usuario quiero poder ver el promedio de los porcentajes del indicador seleccionado para tomar decisiones nuevas"_

#### CRITERIOS DE ACEPTACIÓN:
- [ ] **DADO** si el usuario da *click*  en el botón `Calcular Promedio` **CUANDO** visualiza los datos en la tabla ordenado por años  **ENTONCES** el Sistema le reflejará su consulta en formato de tabla devolviendo el promedio expresado en porcentaje (%).

- [ ] **DADO** si el usuario no hace *click* en el botón de `Calcular Promedio`  **CUANDO** visualiza la tabla y gráfico resultante **ENTONCES** el sistema no realizará ninguna acción y no mostrará el promedio calculado.

#### DEFINICIÓN DE TERMINADO

- [ ] Que se visualice el promedio de los datos en una tabla nueva, luego de dar *Click* en `Calcular promedio`.

- [ ] Que pase el Test de pruebas unitarias.

- [ ] Que el diseño sea Responsive Web Designer.

- [ ] Que este publicado en GH-Pages

## Prototipo de Baja Fidelidad
Luego de evaluar las historias de usuario, como parte de la investigación UX para sastifacer las necesidades del usuario, se diseño un prototipo de baja fidelidad *(lápiz y papel)* de la interfaz de nuestro producto digital. A continuación se visualiza la versión desktop y mobile:

### Versión Desktop
![Desktop-Papel](https://user-images.githubusercontent.com/50186958/60815784-fa025c80-a15d-11e9-899c-515ad17eb581.jpeg)

### Versión Mobile
![Mobile-Papel](https://user-images.githubusercontent.com/50186958/60816132-a5131600-a15e-11e9-834a-70af78dba3e6.jpeg)

## Prototipo Final en Figma y Zeplin
Luego de culminar el prototipo de baja fidelidad, se procede a elaborar el diseño de la interfaz usando Figma  luego exportandolo a Zeplin.
A continuación se presenta la Imagen y link del prototipo de alta fidelidad final (mobile y desktop) en Figma.

### Versión Desktop
![image-Desktop](https://user-images.githubusercontent.com/50186958/60820060-4a7db800-a166-11e9-981a-2ed3c5f8cd09.png)

### Versión Mobile
![image-mobile](https://user-images.githubusercontent.com/50186958/60820172-8153ce00-a166-11e9-895a-265be7bb527b.png)

[Diseño en FIGMA](https://www.figma.com/file/Ra64evFuBm5ixXRYDjIQOvtz/Proyecto-Data-Lovers?node-id=19%3A0)

[Diseño exportado a Zeplin](https://zpl.io/ankBB0A)
 
# 1ª AVALIACIÓN DWEC (2º DAW)
Feito por: **Mateo Fernández Rivera**.

Este proxecto é un xogo de atopar parellas feito en _Javascript_. O usuario terá en pantalla unha serie de caixas brancas que, ao clicar encima delas, amósase unha letra e unha cor concreta. O obxectivo do xogo é ir memorizando as posicións das distintas caixas e ir emparellándoas entre sí según a súa letra e cor ata que non queden máis.

## FUNCIÓNS
Estas son as _funcións mínimas_ que ten este xogo para que sexa xogábel:

- Cando se **abre o xogo** este selecciona a dificuldade 'fácil', é decir, unha dificuldade que xera 12 caixas en 3 e 4 filas e columnas respectivamente.
- Se o usuario desexa cambiar a dificuldade do xogo, ao lado dereito ten un **selector de dificuldade** con catro opcións, cada unha xerando máis caixas ca a anterior: fácil (12), medio (20), difícil (36) e personalizado.
- Coa dificuldade **'Personalizado'** o xogador pode xerar o número de caixas que desexe cun número de filas e de columnas.
- O script **comprobará** que ditas columnas e filas son xerábels. Para iso ten que cumprir unha serie de regras:
    - O número total das caixas (filas por columnas) ten que ser par.
    - O número das filas e columnas deben ser enteiros distintos a 0.
    - O número total non pode ser maior ao número máximo de letras posíbels (actualmente __1404__).
- O usuario ao clicar nunha caixa baleira **escríbese unha letra e cambia de cor** determinada. Por cada letra hai outra parella que está agochada e ten que ser descuberta polo usuario.
- Se a seguinte caixa seleccionada polo usuario coincide na letra e na cor entón daráse por **parella atopada** e quedarán amosadas súa cor e letra polo resto da partida.
- Por cada parella que forme o usuario, **restaráse un punto ás parellas por atopar**.
- Porén, se isto non é así, o script entenderá que as dúas caixas **non son iguais**. A letra e a cor de ambas caixas quedarán amosadas na pantalla durante 1 segundo para que o usuario poda memorizar a súa posición e seguir xogando.
- En calquera caso (facendo parella ou non), por cada 2 caixas clicadas **sumaráse un punto aos intentos** que leva feito o usuario.
- Abaixo da zona das caixas, hai dúas liñas que amosan os números de **intentos totáis** e das parellas **por atopar**.
- Ao lado dereito destas dúas liñas hai un espazo branco que amosa **textos de xeración**: cantas caixas xera o usuario, se hai un erro nómbrase cal ou cales son e ao destapar todas as caixas tamén amosa un **texto de victoria**.

## EXTRA
Aquí hai algunhas características ou _gimmicks_ que quixen introducirlle ao xogo a maiores das mínimas requeridas por mera curiosidade e querer aprender máis das funcionalidades que ofrece esta linguaxe de programación:

### Dúas letras posíbels
A primeira que puiden engadir foi a posibilidade de engadir **dúas letras ás caixas**. Quixen usar letras en vez de números para diferenciar as caixas entre sí, e, como no abecedario (sen contar a _'ñ'_) só hai 26 letras, a partires de xerar no índice a 'Z' comeza a engadir a continuación as letras 'AA', 'AB', 'AC' sucesivamente. Con isto, o xogo pode xerar ata un total de _702 parellas_ nun máximo de _1404 caixas_.

### Tamaño das caixas seleccionábel
A maiores dos multiples estilos e selectores de atributos, tamén puiden engadir un **selector de tamaño**. Este atópase na zona baixa central do xogo e conta de dous botóns, 'S', 'M' e 'L' ~~(en realidade son divs LOL)~~
Ao clicar nun deles, todas as caixas aumentan ou disminúen seu ancho e alto, dependendo de qué botón foi presionado. Hai un total de 3 tamaños seleccionábels para as caixas e o usuario pode xogar e ir alternándo entre eles como él goste. Como dato adicional, quixen meter un carto tamaño, o 'XL', pero quedou descartado xa que o tamaño 'L' é suficientemente grande, polo que non é preciso engadir un máis grande.

### Reloxo funcionábel
Ao carón do selector de tamaño, engadín un **timer ou reloxo**. Cando o usuario, por primeira vez na partida, clica nunha caixa, o timer comeza a contar. Este reloxo ten 3 campos: minutos, segundos e milisegundos. A función que o controla iníciase nun intervalo de 100 segundos e vai sumando un milisegundo cada vez. Cando os milisegundos chegan a 10, volven a 0, súmase un segundo e se estes chegan a 60 pois volven a 0 e súmase un minuto. Hai certas situacións nas que o timer párase:
    - Cando o botón de seleccionar dificuldade é presionado e este pode xerar (sen erros) un novo _set_ de caixas con distintas letras e posicións. Neste caso todos os campos do reloxo son reseteados.
    - Cando todas as parellas do xogos foron atopadas.
    - Cando o botón de darse por vencido é pulsado e confirmado.

### Botón para rendirse
A última función que puiden engadir ao proxecto é un botón cunha bandeira branca ao carón do de 'Seleccionar' no menú de dificuldade. Ao ser clicado, lanza un prompt con confirmación que pregunta ao usuario se este quere **rendirse e revelar todas as caixas do xogo**. Se o usuario elixe 'Aceptar', todas as letras e cor de cada caixa son amosadas, polo que non se pode seguir xogando ata que unha dificuldade non é seleccionada de novo.

### Sons no xogo
O xogo ten almacenados uns arquivos .mp3 que soarán cando o usuario faga unha acción coma seleccionar unha caixa e, dependendo de se fai parella ou non, soará un son ou outro. Tamén hai sons para cando o usuario gaña a partida e para cada vez que cambia o tamaño das caixas, hai efectos de sons para case todo.
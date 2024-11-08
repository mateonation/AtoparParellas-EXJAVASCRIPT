# 1ª AVALIACIÓN DWES (2º DAW)
Feito por: **Mateo Fernández Rivera**.

## EN QUÉ ESTÁ BASEADO?
Este proxecto é un xogo de atopar parellas feito en __Javascript__. O usuario terá en pantalla unha serie de caixas brancas que, ao clicar encima delas, amósase unha letra e unha cor concreta. O obxectivo do xogo é ir memorizando as posicións das distintas caixas e ir emparellándoas entre sí según a súa letra e cor ata que non queden máis.

### FUNCIÓNS
Estas son as __funcións mínimas__ que ten este xogo para que sexa xogábel:

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
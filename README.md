###### ***Эта документация доступна на русском языке. Если хотите прочитать, прокрутите вниз***

# NumberRush `English version`
**NumberRush** is a free plugin that allows you to implement the
effect of ***"Running numbers"*** inside html markup.

You can use our plugin many times on the site to different tags, and not be afraid of conflict. 
Also, the very effect of ***"Running numbers"*** begins
when the element appears on the screen. The maximum number and the speed of dialing the
number to the maximum is easily configurable through the parameters.

## Connection

To get started, you need to download and connect before the closing `body` tag
the file `number-rush.js`, be sure to check the paths in your project.

```
<body>
    <!-- Plug-in is connected before the main script-->
    <script src="./js/number-rush.js"></script> 

    <!-- The main script-->
    <script src="./js/script.js"></script> 
</body>
```

## Initialization
First we need to create a markup with a unique 'id` and the digit '0' inside.

```
<div class="number" id="numberOne">0</div>
```

Next, we need to initialize the
object by specifying the tag's 'id' in the parameters.

```
new numberRush('numberOne')
```

## Initializing multiple objects

To initialize two or more tags, we
just need to register the creation of a new tag and specify the `id` of the new tag in it

HTML:

```
<div class="number" id="numberOne">0</div>
<div class="number" id="numberTwo">0</div>
```

JS:
```
new numberRush('numberOne')

new numberRush('numberTwo')
```

## Parameters

* speed - The speed of adding a number. Specified in milliseconds.
* steps - Adding a number.
* maxNumber - The maximum number.

For example, below is the code, using
it we configure the effect of ***'Running numbers'***. 
In the parameters we specified that every 3ms (speed
) the number 10(steps) will be added
Until there is a maximum number (max Number)

```
new numberRush('numberOne', {
    speed: 3,
    steep: 10,
    maxNumber: 2023
})
```
In this way, you can flexibly adjust the effect for any number.

You can also specify the maximum number in the html markup,
for this you need to specify data-attribute: `data-max-number=""`, for example:

```
<div class="number" id="numberThree" data-max-number="500">0</div>
```

It is important to understand that if you specify the maximum number
in the js file and in the html markup,
the value with data-attribute will be applied, since it has a higher priority.

## Default Settings

If you do not specify any parameters in the NumberRush plugin, for example:

```
new numberRush('numberOne')
```
or:
```
new numberRush('numberOne', {
})
```


the following default values will be applied automatically:
* speed : 5
* steep : 1
* maxNumber : 300

# NumberRush `Russian version`
**NumberRush** - Это бесплатный плагин который позволяет реализовать
эффект ***"Бегущих цифр"*** внутри html разметки.

Использовать наш плагин можно много раз на сайте к разным тегам, и не бояться конфликта. 
Так же само эффект ***"Бегущих цифр"*** начинается тогда, 
когда элемент появляется на экране. Максимальное число и скорость набора 
числа до максимального легко настраиваетсяч через параметры.

## Подключение

Для начала работы необходимо скачать и подключить перед закрывающимся тегом `body`
 файл `number-rush.js`, обязательно проверьте пути в своем проекте.

```
<body>
    <!-- Плагин подключаем перед основным скриптом-->
    <script src="./js/number-rush.js"></script> 

    <!-- Основной скрипт-->
    <script src="./js/script.js"></script> 
</body>
```

## Инициализация
Для начала нам необходимо создать разметку с уникальным `id` и цифрой `0` внутри.

```
<div class="number" id="numberOne">0</div>
```


Далее нам необходимо инициализировать 
объект указав в параметрах `id` тега.

```
new numberRush('numberOne')
```

## Инициализация нескольких объектов

Для инициалиации двух и более тегов нам необходимо 
просто прописать создание нового тега и указать в нем `id` нового тега

HTML:

```
<div class="number" id="numberOne">0</div>
<div class="number" id="numberTwo">0</div>
```

JS:
```
new numberRush('numberOne')

new numberRush('numberTwo')
```
 
## Параметры

* speed - Скорость добавления числа. Указывается в миллисекундах.
* steps - Добавление числа. 
* maxNumber - Максимальное число.

Например ниже приведен код, 
по нему мы настраиваем эффект ***"Бегущих цифр"***. 
В параметрах мы указали что каждые 3мс(speed) 
будет добавляться число 10(steps) 
До тех пор пока не станет максимальное число(maxNumber)

```
new numberRush('numberOne', {
    speed: 3,
    steep: 10,
    maxNumber: 2023
})
```
Таким образом можно гибко настроить эффект для любого числа.

Так же можно указать максимальное число в html разметки, 
для этого нужно указать data-attribute: `data-max-number=""`, например:

```
<div class="number" id="numberThree" data-max-number="500">0</div>
```

Важно понимать, если указать максимальное число
 в js файле и в html разметки,
 будет применяться значение с data-attribute, так как у него выше приоритет.

## Параметры по умолчанию

Если в плагине NumberRush не указать какие либо параметры, например:

```
new numberRush('numberOne')
```
либо:
```
new numberRush('numberOne', {
})
```

автоматически будут применяться
следующие значения которые указаны по умолчанию:
* speed : 5
* steep : 1
* maxNumber : 300

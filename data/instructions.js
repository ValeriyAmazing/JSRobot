/*jshint esversion: 6 */
define(['mozart'], function (mozart) {
	var instructionData = mozart(function(prototype, _, _protected, __, __private) {
		prototype.ru = [

//////////// УРОВЕНЬ 1 /////////////////////////////////////////////////////////
`
<h1>Уровень 1: Введение</h1>
Бип-буп!
JavaScript — это очень популярный язык программирования для веб-разработки.
Практически каждый веб-сайт (и, конечно же, этот!) использует JavaScript для динамического отображения контента в вашем браузере.
<br><br>
<h2>Вкладка консоли</h2>
Прежде чем приступить к написанию кода, начнем с основ: использования консоли. Консоль — это инструмент, который разработчики используют для проверки работы программы. Она позволяет выводить результаты работы программы и взаимодействовать с ней.
<br><br>
Во <b>вкладке консоли</b> введите <code>5 + 8</code> в текстовое поле, нажмите Enter и посмотрите, что произойдет.<br>
Первая строка (<code>&rarr; 5 + 8</code>) — это ваш ввод,
а вторая строка (<code class="console-out">&larr; 13</code>) — это результат выполнения вашего ввода JavaScript.
<br><br>
Теперь попробуем что-то поинтереснее. Введите в консоли <code>robot.info().x</code>, результат <code class="console-out">&larr; 80</code> покажет <b>x</b>-координату робота в игре.<br><br>

У робота есть и другие свойства, попробуйте следующие команды:<br>
<code>robot.info().y</code> <code>robot.info().health</code> <code>robot.info().energy</code> <code>robot.info().width</code>

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/API/Console" target="_blank" class="learn-more">Узнать больше о консоли</a>
<br><br>
<h2>Вкладка скриптов</h2>
Отлично, теперь мы знаем, как работать с консолью. Давай заставим робота общаться с консолью!<br>
Во <b>вкладке скриптов</b> вы увидите следующий код:
<div class="code">function init(robot) {
	// ваш код здесь
}

function loop(robot) {
	// ваш код здесь
}</div>

Это функции JavaScript, с помощью которых мы будем управлять роботом!<br>
Строки, начинающиеся с двух слэшей <code>\/\/</code>, — это комментарии. Они предназначены для людей, чтобы лучше понимать код. Программа их игнорирует.<br><br>

Функция <code>init(robot)</code> — это сокращение от «инициализация». Она выполняется один раз при запуске программы.<br>
Функция <code>loop(robot)</code> выполняется непрерывно, пока программа работает.
<br><br><br><br>
Отредактируйте функцию <code>init(robot)</code>, чтобы код выглядел так:<br>
<div class="code">function init(robot) {
	console.log("Робот инициализируется...");
}

function loop(robot) {
	// ваш код здесь
}</div>
Нажмите <b>кнопку запуска</b> вверху страницы, затем откройте <b>вкладку консоли</b>.<br>
Вы увидите вывод <code class="console-out">&larr; Робот инициализируется...</code>.<br>
Команда <code>console.log(<i>что-то</i>);</code> выводит в консоль содержимое, указанное в скобках.<br>
Нажмите <b>кнопку сброса</b> вверху страницы, чтобы перезапустить уровень и очистить консоль.

<br><br><br><br>
Теперь сделайте то же самое с функцией <code>loop(robot)</code>, ваш код должен выглядеть так:
<div class="code">function init(robot) {
	console.log("Робот инициализируется...");
}

function loop(robot) {
	console.log("Робот выполняет цикл...");
}</div>
Нажмите <b>кнопку запуска</b> и снова откройте <b>вкладку консоли</b>.<br>
Вы увидите <code class="console-out">&larr; Робот инициализируется...</code>, как и раньше, но теперь <code class="console-out">&larr; Робот выполняет цикл...</code> будет выводиться снова и снова (три раза в секунду).<br>
Нажмите <b>кнопку паузы</b>, чтобы остановить выполнение.
Нажмите <b>кнопку сброса</b>, чтобы очистить консоль.<br><br>

<h2>Управление роботом</h2>
Цwель игры — достичь флага в конце каждого уровня. Робот может получать урон и терять заряд батареи при выполнении различных действий. Вы проигрываете уровень, если у робота заканчивается энергия или он получает слишком много урона.<br><br>

У робота есть несколько <b>действий:</b> <code>move</code>, <code>jump</code>, <code>shoot</code>, <code>turn</code> и <code>wait</code>.<br><br>
Действие <code>move</code> принимает <b>значение</b> от <b>-40</b> до <b>40</b>. Положительное значение перемещает робота вправо, отрицательное — влево.<br>
Действие <code>jump</code> также принимает <b>значение</b> от <b>-10</b> до <b>10</b>. Положительное значение заставляет робота прыгать вправо, отрицательное — влево.<br><br>

Чтобы управлять роботом, задайте его действие в функции loop, как показано ниже:
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
Этот код заставит робота перемещаться на 40 пикселей вправо каждый раз, когда выполняется функция loop (три раза в секунду).<br>Введите этот код во <b>вкладке скриптов</b> и нажмите <b>кнопку запуска</b>.<br><br>
Готово!
`,


//////////// УРОВЕНЬ 2 /////////////////////////////////////////////////////////
`
<h1>Уровень 2: Продолжение введения (и переменные)</h1>

<h2>HUD и вкладка свойств</h2>
В правом верхнем углу экрана вы увидите полезную информацию в <b>интерфейсе (HUD):</b><br>
Здоровье и энергия робота, количество Собранных монет и позиция курсора мыши.<br>
Это облегчит игру.<br><br>
Также есть <b>вкладка свойств</b>, где отображается более подробная информация о роботе.<br>
Пока она вам не понадобится, но полезно знать, что она существует!

<h2>Режим практики</h2>
<h3>Управление с клавиатуры</h3>
В левом верхнем углу вы увидите кнопку с изображением стрелок клавиатуры, она включает <b>управление с клавиатуры</b>.<br>
Нажмите на неё, и вы сможете управлять роботом с помощью клавиатуры. По умолчанию используются следующие клавиши:
	<table>
	<tr><td>
	Движение влево
	</td><td>
	A
</td></tr><tr><td>
	Движение вправо
	</td><td>
	D
</td></tr><tr><td>
	Прыжок
	</td><td>
	W
</td></tr><tr><td>
	Прыжок влево
	</td><td>
	Q
</td></tr><tr><td>
	Прыжок вправо
	</td><td>
	E
</td></tr><tr><td>
	Поворот
	</td><td>
	T
</td></tr><tr><td>
	Выстрел
	</td><td>
	G
</td></tr></table>
После активации <b>управления с клавиатуры</b> появится сообщение о «режиме практики».<br>
<b>Режим практики</b> — это когда вы тренируетесь проходить уровень перед написанием кода.<br>
Цель игры — решать уровни, используя только код, написанный во <b>вкладке скриптов</b>.<br><br>

Вы войдете в режим практики, если используете управление с клавиатуры, вкладку консоли или приостанавливаете текущий скрипт.<br>
Когда закончите практиковаться и захотите завершить уровень, запустите свой скрипт и избегайте использования консоли и клавиатуры.
<br><br>

<h3>Управление роботом из консоли</h3>
Консоль может отправлять команды роботу, попробуйте их:
	<table>
	<tr><td>
	<code>robot.move(<i>n</i>)</code>
	</td><td>
	Где <b><i>n</i></b> — число от <b>-40</b> до <b>40</b>.
	Робот движется вперед или назад на <b><i>n</i></b> пикселей.
</td></tr><tr><td>
	<code>robot.jump(<i>n</i>)</code>
	</td><td>
	Где <b><i>n</i></b> — число от <b>-10</b> до <b>10</b>.
	Робот прыгает вперед или назад со скоростью <b><i>n</i></b>. 
</td></tr><tr><td>
	<code>robot.jump()</code>
	</td><td>
	Робот прыгает прямо вверх. Эквивалентно <b>robot.jump(0)</b>.
</td></tr><tr><td>
	<code>robot.turn()</code>
	</td><td>
	Робот поворачивается, это влияет только на направление команды <b>robot.shoot()</b>.
</td></tr><tr><td>
	<code>robot.shoot()</code>
	</td><td>
	Робот стреляет!
</td></tr></table>


<h2>Горячие клавиши</h2>
	<table>
	<tr><td>
<b>Вкладка инструкций: </b>
	</td><td>
	Ctrl + 1
</td></tr><tr><td>
<b>Вкладка скриптов: </b>
	</td><td>
	Ctrl + 2
</td></tr><tr><td>
<b>Вкладка консоли: </b>
	</td><td>
	Ctrl + 3
</td></tr><tr><td>
<b>Вкладка свойств: </b>
	</td><td>
	Ctrl + 4
</td></tr><tr><td>
<b>Управление с клавиатуры: </b>
	</td><td>
	Ctrl + 5
</td></tr><tr><td>
<b>Запуск/Пауза скрипта: </b>
	</td><td>
	Ctrl + Enter
</td></tr></table>
Если вы используете Mac, замените Ctrl на Command.

<h2>Типы данных</h2>
Типы данных — основа работы языков программирования. Самые простые встроенные типы данных называются примитивными.<br>
Полный список примитивных типов в JavaScript:
	<table>
	<tr><td>
<b>Число</b>
	</td><td>
	Любое число (целое или с плавающей точкой, положительное или отрицательное).<br>
	Примеры: <code>12</code> <code>7.25</code> <code>0</code> <code>-10023</code>
</td></tr><tr><td>
	<b>Строка</b>
	</td><td>
	Любая последовательность символов, заключенная в одинарные или двойные кавычки.<br>
	Выбор между одинарными и двойными кавычками не имеет значения, главное, чтобы они совпадали в начале и конце.
	Примеры: <code>'Смотри, фейерверк!'</code> <code>"Итого: $25"</code>
</td></tr><tr><td>
	<b>Булевый тип</b>
	</td><td>
	Булевый тип может быть либо <code>true</code>, либо <code>false</code> — всё просто.
</td></tr><tr><td>
	<b>undefined</b>
	</td><td>
	<code>undefined</code> — странный тип, означает, что у чего-то нет значения.<br>
	Чаще всего <b>undefined</b> встречается, когда что-то пошло не так.
</td></tr><tr><td>
	<b>null</b>
	</td><td>
	На первый взгляд может показаться: «Зачем нужен <code>null</code>, если есть <b>undefined</b>?»<br>
	Разница в намерении: <b>undefined</b> означает, что у объекта нет значения по какой-то причине.<br>
	А <b>null</b> означает, что объект намеренно не имеет значения, и это сделано сознательно.

</td></tr></table>

Вы можете использовать <code>typeof()</code>, чтобы узнать тип данных.<br>
Попробуйте следующие команды в консоли:
<table><tr><td>
<code>typeof(51.72)</code>
	</td><td>Должно вывести
	<code class="console-out">&larr; "number"</code>
</td></tr><tr><td>
<code>typeof('Я люблю желе')</code>
	</td><td>Должно вывести
	<code class="console-out">&larr; "string"</code>
</td></tr><tr><td>
<code>typeof(true)</code>
	</td><td>Должно вывести
	<code class="console-out">&larr; "boolean"</code>
</td></tr><tr><td>
<code>typeof(undefined)</code>
	</td><td>Должно вывести
	<code class="console-out">&larr; "undefined"</code>
</td></tr><tr><td>
<code>typeof(null)</code>
	</td><td>Должно вывести
	<code class="console-out">&larr; "object"</code><br>
	Многие считают это ошибкой языка.<br>
	Слишком поздно исправлять, так что придется с этим мириться.
</td></tr></table>

<br><h3>Краткий курс по объектам:</h3>

Примитивы можно комбинировать, чтобы создавать более сложные типы данных — <b>объекты</b>.<br>
Вы уже видели объекты: <code>robot.action = {type: 'move', amount: 40}</code><br><br>
Здесь у нас объект, представляющий действие:<br>
он состоит из строкового <b>свойства</b> <code>type</code> и числового свойства <code>amount</code>.
	<br><br>
	Мы обсудим объекты подробнее позже, так что не переживайте, если пока не всё понятно.

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables#Типы_переменных" target="_blank" class="learn-more">Узнать больше о типах данных</a>
<br><br>

<h2>Переменные</h2>

Переменная — это имя, которое ссылается на значение, например: <code>favoriteFood = 'Лазанья';</code>.<br>
Здесь у нас переменная <code>favoriteFood</code> со строковым значением <code>'Лазанья'</code>.<br><br>

Переменная может содержать значение любого типа данных: число, строку, булевый тип, даже undefined и null!<br>
<code>favoriteColor = null;</code> В этом примере переменная установлена в <b>null</b>, что означает:<br>
«Эй, у меня есть переменная <b>favoriteColor</b>, но у меня нет любимого цвета, я сообщу позже, если выберу один».
<br><br>
А что насчет <code>undefined</code>? Когда мы устанавливаем переменную в <b>undefined</b>? Никогда, по крайней мере, не специально.<br>
До сих пор мы создавали переменные так: <code><i>переменная</i> = <i>значение</i></code>.<br>Но это не совсем правильный способ.<br><br>

В JavaScript правильный способ: <code>var <i>переменная</i> = <i>значение</i>;</code>. Ключевое здесь — слово <b>var</b>.<br>
<b>var</b> означает: «Создай мне переменную с именем: ». Таким образом, предыдущее выражение можно разделить на две части:<br>
	<code>var <i>переменная</i>;</code> и <code><i>переменная</i> = <i>значение</i>;</code>.<br><br>

Техническое название для создания переменной (первое выражение) — <b>объявление</b>.<br>
А процесс присвоения значения переменной впервые (второе выражение) называется <b>определением</b>.<br>
И вот кульминация: до определения переменной её значение... <code>undefined</code>.<br>

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables#Объявление_переменной" target="_blank" class="learn-more">Узнать больше о переменных</a>
<br><br>

Победный код для этого уровня такой же, как и для предыдущего.<br>
Уровни станут намного интереснее, как только мы разберем больше JavaScript, обещаю!

<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
`,


//////////// УРОВЕНЬ 3 /////////////////////////////////////////////////////////
`
<h1>Уровень 3: Математика и управление потоком</h1>

<h2>Математика</h2>
<h3>Арифметические операторы</h3>
JavaScript поддерживает базовые арифметические операции: <code>+  -  *  /  %  **</code>.<br>
Сложение, вычитание, умножение, деление, остаток от деления (модуло) и возведение в степень.<br><br>

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" target="_blank" class="learn-more">Узнать больше об арифметических операторах</a>
<br><br>	

<h3>Операторы присваивания</h3>
В программировании следующие операции очень популярны: <code>i = i + 1;</code>, <code>m = m / 2;</code>.<br>
Для удобства была разработана сокращенная запись, эти выражения можно переписать как: <code>i += 1;</code> и <code>m /= 2;</code>.<br>
Операции <code>i += 1;</code> и <code>i -= 1;</code> используются настолько часто, что их сократили еще больше до <code>i++;</code> и <code>i--;</code>.<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Assignment_Operators" target="_blank" class="learn-more">Узнать больше об операторах присваивания</a>
<br><br>	

<h3>Конкатенация строк</h3>
Сложение строк — это не совсем математика, но очень полезная операция. Вы можете соединять строки с помощью оператора <code>+</code>:<br>
<code>"Роботы " + "это " + "круто" + '!'</code> даст строку <code>"Роботы это круто!"</code>.<br><br>
Числа можно добавлять к строкам, явный способ — использовать конструктор <b>String()</b>.<br>
<code>String(47)</code> преобразует число 47 в строку "47". После этого можно выполнить конкатенацию строк.<br>
<code>"В пакете " + String(47) + " мармеладок."</code><br><br>
Но часто очевидно, что мы хотим сделать, поэтому в JavaScript работает и так:<br>
<code>"В пакете " + 47 + " мармеладок."</code> Правило: при сложении числа и строки число сначала преобразуется в строку.<br><br>
Это имеет смысл, но иногда результат не тот, что мы ожидаем. Например, <code>"7" + 3</code> даст строку <code>"73"</code>, что может быть неожиданным, так что будьте осторожны.

	<br><br>
<h3>Преобразование строк в числа</h3>
Что будет, если вместо сложения мы попробуем вычитание, например <code>"7" - 3</code>? Попробуйте, вы получите <code>4</code>.<br>
Интересно, JavaScript понял, что строка "7" — это замаскированное число.<br>
Хотя это полезный результат, и JavaScript довольно умен, лучше избегать смешивания чисел и строк.<br>
Если вы знаете, что у вас строка с числом, преобразуйте её в числовой тип с помощью одной из следующих функций:<br>
<table>
<tr><td>
	<code>Number.parseInt()</code>
</td><td>
	Преобразует строку, представляющую целое число, в число, игнорируя лишние символы.<br>
	Вызов <code>Number.parseInt()</code> для <code>"23"</code> <code>"7.25 литров"</code> <code>"1.995"</code> и <code>"3 яблока."</code>
	<br>Дает <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7</code>
	<code class="console-out">&larr; 1</code>
	<code class="console-out">&larr; 3</code>

</td></tr><tr><td>
	<code>Number.parseFloat()</code>
</td><td>
	Преобразует строку, представляющую число с плавающей точкой, в число, игнорируя лишние символы.<br>
	Вызов <code>Number.parseFloat()</code> для <code>"23"</code> <code>"7.25 литров"</code> <code>"1.995"</code> <code>"3 яблока."</code><br>
	Дает <code class="console-out">&larr; 23</code>
	<code class="console-out">&larr; 7.25</code>
	<code class="console-out">&larr; 1.995</code>
	<code class="console-out">&larr; 3</code>
</td></tr></table>

<br><br>
<h3>NaN</h3>
Что происходит, если мы пытаемся сделать что-то нелепое с числами?<br>
Например, <code>'апельсин' - 4</code> <code>Number.parseInt('футбол');</code> <code>0 / 0</code> <code> (-1) ** 0.5</code><br>
Мы получаем <code class="console-out">&larr; NaN</code>, что означает <b>не число</b>. <br><br>
<b>NaN</b> интересен тем, что <code>typeof(NaN);</code> возвращает <code class="console-out">&larr; "number"</code>... То есть «не число» на самом деле является числом.<br>
Для проверки на NaN существует встроенная функция <code>Number.isNaN()</code>.<br>

<h3>Бесконечность</h3>
Некоторые свойства <code>Infinity</code>:
	<table><tr><td>
<code>1 / 0</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr><tr><td>
<code>1 / Infinity</code> 
	</td><td>
	<code class="console-out">&larr; 0</code>
	</td></tr><tr><td>
<code>Infinity + 1</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr><tr><td>
<code>10 ** 1000</code> 
	</td><td>
	<code class="console-out">&larr; Infinity</code>
	</td></tr></table>

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" class="learn-more">Узнать больше об объекте Number</a><br><br>

<h3>Продвинутые математические функции</h3>
	<table><tr><td>
<code>Math.round(<i>число</i>)</code> 
	</td><td>
	Возвращает <i>число</i>, округленное до ближайшего целого.
	</td></tr><tr><td>
<code>Math.abs(<i>число</i>)</code> 
	</td><td>
	Возвращает абсолютное значение <i>числа</i>.
	</td></tr><tr><td>
<code>Math.sin(<i>число</i>)</code> 
	</td><td>
	Возвращает синус <i>числа</i>.
	</td></tr><tr><td>
<code>Math.cos(<i>число</i>)</code> 
	</td><td>
	Возвращает косинус <i>числа</i>.
	</td></tr><tr><td>
<code>Math.sqrt(<i>число</i>)</code> 
	</td><td>
	Возвращает квадратный корень <i>числа</i>.
	</td></tr><tr><td>
<code>Math.pow(<i>основание</i>, <i>степень</i>)</code> 
	</td><td>
	Возвращает <i>основание</i> в степени <i>степень</i>.
	</td></tr><tr><td>
<code>Math.log(<i>число</i>)</code> 
	</td><td>
	Возвращает натуральный логарифм ln() <i>числа</i>.
	</td></tr><tr><td>
<code>Math.max(<i>x</i>, <i>y</i>, ...)</code> 
	</td><td>
	Возвращает наибольшее из переданных чисел.<br><code>Math.min(<i>x</i>, <i>y</i>, ...)</code> возвращает наименьшее.
	</td></tr></table>

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Узнать больше о математических функциях</a><br><br>

<h2>Булевы значения</h2>
Следующие операторы возвращают <code>true</code> или <code>false</code>. Они необходимы для управления потоком программы, что является главной темой этого уровня.
<br><br>

	<h3>Операторы равенства</h3>
<table><tr><td>
	<code><i>a</i> == <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> и <i>b</i> равны по значению, иначе false.<br>
	Обратите внимание, что <i>a</i> и <i>b</i> могут быть разных типов и всё равно считаться равными.<br>
	Примеры:
	<code>3.25 == 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 == "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 == 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> === <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> и <i>b</i> равны по значению <b>и имеют одинаковый тип</b>, иначе false.<br>
	Примеры:
	<code>3.25 === 3.25</code> <code class="console-out">&larr; true</code> , 
	<code>3 === "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 === 0.2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> != <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> и <i>b</i> не равны по значению, независимо от типа, иначе false.<br>
	Примеры:
	<code>3.25 != 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 != "3"</code> <code class="console-out">&larr; false</code> , 
	<code>12 != 0.2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> !== <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> и <i>b</i> не равны по значению или типу, иначе false.<br>
	Примеры:
	<code>3.25 !== 3.25</code> <code class="console-out">&larr; false</code> , 
	<code>3 !== "3"</code> <code class="console-out">&larr; true</code> , 
	<code>12 !== 0.2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Операторы сравнения</h3>
	
<table><tr><td>
	<code><i>a</i> < <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> меньше <i>b</i>, иначе false.<br>
	Примеры: 
	<code>1 < 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 < 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 < 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> <= <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> меньше или равно <i>b</i>, иначе false.<br>
	Примеры: 
	<code>1 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>2 <= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 <= 2</code> <code class="console-out">&larr; false</code>
</td></tr><tr><td>
	<code><i>a</i> > <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> больше <i>b</i>, иначе false.<br>
	Примеры: 
	<code>1 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 > 2</code> <code class="console-out">&larr; false</code> , 
	<code>3 > 2</code> <code class="console-out">&larr; true</code>
</td></tr><tr><td>
	<code><i>a</i> >= <i>b</i></code>
</td><td>
	Возвращает true, если <i>a</i> больше или равно <i>b</i>, иначе false.<br>
	Примеры: 
	<code>1 >= 2</code> <code class="console-out">&larr; false</code> , 
	<code>2 >= 2</code> <code class="console-out">&larr; true</code> , 
	<code>3 >= 2</code> <code class="console-out">&larr; true</code>
</td></tr></table>

<h3>Логические операторы</h3>
	
<table><tr><td>
	<code>!<i>a</i></code>
</td><td>
	Оператор <b>НЕ</b>, меняет true на false и наоборот.<br>
	Примеры: 
	<code>!true</code> <code class="console-out">&larr; false</code> , 
	<code>!false</code> <code class="console-out">&larr; true</code>

</td></tr><tr><td>
	<code><i>a</i> && <i>b</i></code>
</td><td>
	Оператор <b>И</b>, возвращает true, если оба <i>a</i> и <i>b</i> равны true, иначе false.<br>
	Примеры: 
	<code>true && true</code> <code class="console-out">&larr; true</code> , 
	<code>true && false</code> <code class="console-out">&larr; false</code> , 
	<code>false && false</code> <code class="console-out">&larr; false</code>

</td></tr><tr><td>
	<code><i>a</i> || <i>b</i></code>
</td><td>
	Оператор <b>ИЛИ</b>, возвращает true, если хотя бы одно из <i>a</i> или <i>b</i> равно true, иначе false.<br>
	Примеры: 
	<code>true || true</code> <code class="console-out">&larr; true</code> , 
	<code>true || false</code> <code class="console-out">&larr; true</code> , 
	<code>false || false</code> <code class="console-out">&larr; false</code>

</td></tr></table>

<h3>Ложные значения</h3>
Ложное значение — это значение, которое ведет себя как <code>false</code>.
В JavaScript есть шесть «ложных» значений:<br>
<ol><li>
<code>false</code> — очевидно<br>
	</li><li>
<code>0</code> и <code>-0</code><br>
	</li><li>
<code>""</code> или <code>''</code> — пустая строка<br>
	</li><li>
<code>NaN</code> — не число<br>
	</li><li>
<code>undefined</code><br>
	</li><li>
<code>null</code><br>
	</li></ol>

Попробуйте следующие команды с ложными значениями, чтобы увидеть, как они ведут себя как false:<br><br>
	<code>!(<i>значение</i>)</code><br>
	<code><i>значение</i> && true</code><br>
	<code><i>значение</i> || false</code><br><br>
Затем попробуйте их с обычными числами и строками и посмотрите, как меняется поведение.

<br><br><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank" class="learn-more">Узнать больше о логических операторах и ложных значениях</a><br><br>


<h2>Управление потоком</h2>
<h3>If-Else</h3>
Операторы управления потоком позволяют программе выполнять разный код в зависимости от условия.<br>
Если условие истинно, выполняется один блок кода; если ложно — другой.<br>
<br>
Пример оператора <b>if-else</b>:
<div class="code">var rollsOfToiletPaper = 5;
if (rollsOfToiletPaper <= 1) {
	console.log("Нужно купить больше туалетной бумаги!");
} else if (rollsOfToiletPaper > 50){
	console.log("Зачем я купил столько туалетной бумаги??");
} else {
	console.log("Всё в порядке.");
}</div>
Этот код понятен:<br>
Если значение <code>rollsOfToiletPaper</code> меньше или равно 1, выполняется код в первых фигурных скобках.<br> Если больше 50, выполняется код во вторых фигурных скобках.<br>
В противном случае выполняется код в последнем блоке.<br><br>
<b>Примечание:</b> Код, написанный в фигурных скобках, называется <b>блоком</b> кода.
<br><br>

Формально, ключевое слово <code>if</code> всегда сопровождается условием в скобках <code>(<i>условие</i>)</code>, после которого идет блок кода <code>{ <i>действия здесь</i> }</code>.<br>
Опционально можно добавить <code>else if</code>, который ведет себя как <code>if</code>, или просто <code>else</code>, который не требует условия, только блок.<br>
Как только первое условие выполнено, выполняется соответствующий блок, а все остальные <code>else</code> игнорируются.

	<br><br>
<h3>Switch</h3>
Иногда приходится писать программы вроде этой:
<div class="code">var letter = 'C';
if (letter === 'A') {
	console.log('A — Аллигатор');
} else if (letter === 'B') {
	console.log('B — Бобёр');
} else if (letter === 'C') {
	console.log('C — Хамелеон');
} else if (letter === 'D') {
	console.log('D — Посудомоечная машина');
} else if (letter === 'E') {
	console.log('E — Слон');
} else {
	console.log('Неподдерживаемая буква, попробуйте снова');
}</div>

Это утомительно и трудно читаемо. Более удобный и читаемый способ — использовать оператор <code>switch</code>:
<div class="code">var letter = 'C';
switch (letter) {
	case 'A':
		console.log('A — Аллигатор');
		break;
	case 'B':
		console.log('B — Бобёр');
		break
	case 'C':
		console.log('C — Хамелеон');
		break;
	case 'D':
		console.log('D — Посудомоечная машина');
		break;
	case 'E':
		console.log('E — Слон');
		break;
	default:
		console.log('Неподдерживаемая буква, попробуйте снова');
}</div>

<h3>Условный оператор (или тернарный оператор)</h3>
<code><i>условие</i> ? <i>выражение1</i> : <i>выражение2</i>;</code><br><br>
Если <i>условие</i> истинно, выполняется <i>выражение1</i>, иначе — <i>выражение2</i>.<br>
Рассмотрим следующий код:
<div class="code">var milkExpired = false;
if (milkExpired) {
	console.log("Сегодня без завтрака :(");
} else {
	console.log("Время для хлопьев!");
}</div>

С использованием условного оператора это можно сократить до:
<div class="code">var milkExpired = false;
milkExpired ? console.log("Сегодня без завтрака.") : console.log("Время для хлопьев!");
</div>
Или даже ещё короче:
<div class="code">var milkExpired = false;
console.log( milkExpired ? "Сегодня без завтрака." : "Время для хлопьев!");
</div>

<h2>Время играть на уровне</h2>
Очевидно, что роботу придется прыгать, попробуйте это: перейдите во <b>вкладку консоли</b> и введите:<br>
<code>robot.jump(10);</code> Это максимальная дальность прыжка вперед.
<br><br>
Попробуйте чередовать прыжки и движение вперед? <code>robot.move(40);</code>
<br>
Кстати, когда текстовое поле в консоли активно, используйте клавиши вверх и вниз, чтобы перемещаться по истории выполненных команд.
<br><br>
Если можете, попробуйте написать решение во <b>вкладке скриптов</b>.<br><br>

Имейте в виду, что если вы объявите переменную внутри <code>function init()</code>,
она не будет доступна в <code>function loop()</code>. Объяснение этому появится на следующих уровнях.<br>
Пока, если вы хотите создать переменную и использовать её позже, создайте свойство объекта <b>robot</b> так:<br>
	<code>robot.myNewProperty = "какое-то значение";</code>
	
	Удачи!<br><br>
Если вы долго пытались и не можете разобраться, то:<br>

	<br><br>
	<a id="showSolution" class="show-solution">Показать решение</a>
	<br><br>

	<div id="solution">
<div class="code">function init(robot) {
	robot.jumpNext = true;
}

function loop(robot) {
	if (robot.jumpNext) {
		robot.action = {type: 'jump', amount: 10};
		robot.jumpNext = false;
	} else {
		robot.action = {type: 'move', amount: 40};
		robot.jumpNext = true;
	}
}</div>
</div>
`,


//////////// УРОВЕНЬ 4 /////////////////////////////////////////////////////////
`
<h1>Уровень 4: Функции и их виды</h1>

<h2>Функции в JavaScript</h2>
Функции — это один из ключевых элементов JavaScript, позволяющий организовать код в виде переиспользуемых блоков. Вы уже использовали функции <code>init</code> и <code>loop</code> для управления роботом. Давайте разберем, как создавать и использовать функции, а также их различные формы.

<h3>Объявление функций</h3>
Функции можно объявлять с помощью ключевого слова <code>function</code>. Например:
<div class="code">function sayHello() {
	console.log("Привет, мир!");
}</div>
Эта функция, вызванная как <code>sayHello()</code>, выведет в консоль строку <code>Привет, мир!</code>.

<h3>Функции с параметрами</h3>
Функции могут принимать параметры, чтобы работать с различными данными. Например:
<div class="code">function moveRobot(robot, distance) {
	robot.action = {type: 'move', amount: distance};
}</div>
Здесь функция <code>moveRobot</code> принимает два параметра: <code>robot</code> и <code>distance</code>. Вызов <code>moveRobot(robot, 40)</code> заставит робота двигаться на 40 пикселей.

<h3>Возврат значений</h3>
Функции могут возвращать значения с помощью ключевого слова <code>return</code>. Например:
<div class="code">function addNumbers(a, b) {
	return a + b;
}</div>
Вызов <code>console.log(addNumbers(5, 3))</code> выведет <code class="console-out">&larr; 8</code>. Если функция не возвращает значение явно, она возвращает <code>undefined</code>.

<h3>Функциональные выражения</h3>
Функции можно также определять как выражения, присваивая их переменным:
<div class="code">var greet = function(name) {
	console.log("Привет, " + name + "!");
};</div>
Эта функция вызывается так же: <code>greet("Алекс")</code> выведет <code class="console-out">&larr; Привет, Алекс!</code>.

<h3>Стрелочные функции</h3>
Стрелочные функции — это современный и компактный способ записи функций, введенный в ES6:
<div class="code">const multiply = (a, b) => a * b;</div>
Вызов <code>console.log(multiply(4, 5))</code> выведет <code class="console-out">&larr; 20</code>. Стрелочные функции особенно полезны для коротких функций и работы с массивами.

<h3>Различия между объявлением и выражением</h3>
- **Объявление функции** (с <code>function</code>) доступно в коде до её определения благодаря «всплытию» (hoisting).
- **Функциональное выражение** доступно только после присваивания переменной.
- **Стрелочные функции** не имеют собственного <code>this</code> и часто используются в обработчиках событий или функциях высшего порядка.

<h3>Встроенные функции</h3>
JavaScript предоставляет множество встроенных функций и объектов, таких как <code>String</code>, <code>Number</code>, и <code>Math</code>. Например:
- <code>String.prototype.toUpperCase()</code>: преобразует строку в верхний регистр. Попробуйте <code>"привет".toUpperCase()</code> в консоли, получите <code class="console-out">&larr; "ПРИВЕТ"</code>.
- <code>Number.isFinite(42)</code>: проверяет, является ли значение конечным числом, возвращает <code class="console-out">&larr; true</code>.
- <code>Math.random()</code>: возвращает случайное число от 0 до 1.

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions" target="_blank" class="learn-more">Узнать больше о функциях</a>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" class="learn-more">Узнать больше о String</a>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" class="learn-more">Узнать больше о Number</a>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Узнать больше о Math</a>
<br><br>

<h2>Управление роботом</h2>
На этом уровне вам нужно заставить робота прыгать в определенной зоне (между координатами x=400 и x=500). Используйте функцию <code>robot.info().x</code>, чтобы проверить текущую позицию робота, и условные операторы для выбора действия.

Попробуйте в консоли:
- <code>robot.move(40)</code> для движения вперед.
- <code>robot.jump(10)</code> для прыжка вперед.

<h2>Совет по уровню</h2>
Используйте условный оператор <code>if</code>, чтобы проверить, находится ли робот в зоне прыжка. Например, если <code>robot.info().x</code> находится между 400 и 500, задайте действие <code>jump</code>, иначе — <code>move</code>.

<br><br>
<a id="showSolution" class="show-solution">Показать решение</a>
<br><br>
<div id="solution">
<div class="code">function loop(robot) {
	if (400 < robot.info().x  && robot.info().x < 500) {
		robot.action = {type: 'jump', amount: 10};
	} else {
		robot.action = {type: 'move', amount: 40};
	}
}</div>
</div>
`,


//////////// УРОВЕНЬ 5 /////////////////////////////////////////////////////////
`
<h1>Уровень 5: Массивы и циклы</h1>

<h2>Массивы</h2>
Массивы — это упорядоченные списки данных, которые могут содержать любые типы данных: числа, строки, объекты и даже другие массивы. Они идеально подходят для хранения и обработки наборов данных.

<h3>Создание и доступ к массивам</h3>
Массив создается с помощью квадратных скобок <code>[]</code>. Например:
<div class="code">var fruits = ['яблоко', 'банан', 'груша'];</div>
Доступ к элементам массива осуществляется по индексу (начинается с 0):
- <code>fruits[0]</code> вернет <code class="console-out">&larr; 'яблоко'</code>.
- <code>fruits[2]</code> вернет <code class="console-out">&larr; 'груша'</code>.

<h3>Методы массивов</h3>
Массивы имеют множество встроенных методов:
- <code>push()</code>: добавляет элемент в конец массива. Например, <code>fruits.push('апельсин')</code>.
- <code>pop()</code>: удаляет и возвращает последний элемент массива.
- <code>length</code>: возвращает количество элементов в массиве, например, <code>fruits.length</code> вернет <code class="console-out">&larr; 3</code>.

<h3>Циклы</h3>
Циклы позволяют выполнять код многократно. В JavaScript есть несколько видов циклов:

<h4>Цикл for</h4>
Цикл <code>for</code> идеально подходит для перебора элементов массива:
<div class="code">for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}</div>
Этот код выведет все элементы массива <code>fruits</code> по одному.

<h4>Цикл while</h4>
Цикл <code>while</code> выполняется, пока условие истинно:
<div class="code">var i = 0;
while (i < fruits.length) {
	console.log(fruits[i]);
	i++;
}</div>

<h4>Цикл for...of</h4>
Более современный способ перебора массива:
<div class="code">for (let fruit of fruits) {
	console.log(fruit);
}</div>
Этот цикл проще и читаемее, так как не требует работы с индексами.

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" class="learn-more">Узнать больше о массивах</a>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration" target="_blank" class="learn-more">Узнать больше о циклах</a>
<br><br>

<h2>Управление роботом</h2>
На этом уровне роботу нужно прыгать в двух зонах: между x=360 и x=500, а также между x=560 и x=760. Используйте массив для хранения этих координат и логические операторы для проверки, находится ли робот в одной из этих зон.

Попробуйте в консоли:
- <code>robot.info().x</code>, чтобы узнать текущую позицию.
- <code>robot.jump(10)</code> для прыжка.
- <code>robot.move(40)</code> для движения.

<h2>Совет по уровню</h2>
Создайте массив с границами зон прыжка. Используйте цикл или логические операторы, чтобы проверить, находится ли <code>robot.info().x</code> в одной из зон, и задайте соответствующее действие.

<br><br>
<a id="showSolution" class="show-solution">Показать решение</a>
<br><br>
<div id="solution">
<div class="code">function loop(robot) {
	let robotX = robot.info().x;
	let landmarks = [360, 500, 560, 760];
  
  	robot.action = {type: 'move', amount: 40};
 	if (landmarks[0] < robotX && robotX < landmarks[1] ||
		 landmarks[2] < robotX && robotX < landmarks[3]) {
      	robot.action = {type: 'jump', amount: 10};
	}
}</div>
</div>
`,


//////////// УРОВЕНЬ 6 /////////////////////////////////////////////////////////
`
<h1>Уровень 6: Работа с состоянием</h1>

<h2>Состояние робота</h2>
Робот имеет свойства, такие как <code>robot.info().coins</code>, которые отслеживают его состояние (например, количество собранных монет). Использование состояния позволяет принимать решения на основе текущих данных.

<h3>Модуло для чередования действий</h3>
Оператор <code>%</code> (модуло) возвращает остаток от деления. Например, <code>5 % 2</code> возвращает <code class="console-out">&larr; 1</code>, так как 5 делится на 2 с остатком 1. Это полезно для чередования действий. Например:
<div class="code">if (robot.info().coins % 2 == 1) {
	console.log("Нечетное количество монет!");
}</div>
Этот код проверяет, является ли количество монет нечетным.

<h3>Сохранение состояния</h3>
Чтобы отслеживать изменения, вы можете сохранять данные в свойствах объекта <code>robot</code>. Например:
<div class="code">robot.myState = 0;</div>
Эти свойства сохраняются между вызовами функций <code>init</code> и <code>loop</code>.

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Остаток_()" target="_blank" class="learn-more">Узнать больше о модуло</a>
<br><br>

<h2>Управление роботом</h2>
На этом уровне роботу нужно двигаться вперед, если количество собранных монет четное, и назад, если нечетное. Используйте <code>robot.info().coins</code> и оператор модуло для принятия решения.

Попробуйте в консоли:
- <code>robot.info().coins</code>, чтобы узнать количество монет.
- <code>robot.move(40)</code> для движения вперед.
- <code>robot.move(-40)</code> для движения назад.

<h2>Совет по уровню</h2>
Проверьте, является ли <code>robot.info().coins % 2</code> равным 1 (нечетное) или 0 (четное), и задайте соответствующее действие <code>move</code>.

<br><br>
<a id="showSolution" class="show-solution">Показать решение</a>
<br><br>
<div id="solution">
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins % 2 == 1) {
		robot.action.amount = -40;
	}
}</div>
</div>
`,


//////////// УРОВЕНЬ 7 /////////////////////////////////////////////////////////
`
<h1>Уровень 7: Отслеживание изменений состояния</h1>

<h2>Сравнение состояний</h2>
Чтобы реагировать на изменения, можно сравнивать текущее состояние робота с предыдущим. Например, если количество монет увеличилось, это значит, что робот только что собрал монету.

<h3>Сохранение предыдущего состояния</h3>
Используйте функцию <code>init</code> для инициализации начальных значений свойств робота:
<div class="code">function init(robot) {
	robot.oldValue = 0;
}</div>
Затем в <code>loop</code> обновляйте эти значения после каждого цикла:
<div class="code">function loop(robot) {
	var currentValue = robot.info().someProperty;
	if (currentValue > robot.oldValue) {
		console.log("Значение увеличилось!");
	}
	robot.oldValue = currentValue;
}</div>

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects" target="_blank" class="learn-more">Узнать больше о работе с объектами</a>
<br><br>

<h2>Управление роботом</h2>
На этом уровне роботу нужно прыгать, если он собрал новую монету или его энергия увеличилась. В противном случае он должен двигаться вперед. Используйте свойства <code>robot.oldCoins</code> и <code>robot.oldEnergy</code> для отслеживания предыдущих значений.

Попробуйте в консоли:
- <code>robot.info().coins</code> для проверки монет.
- <code>robot.info().energy</code> для проверки энергии.
- <code>robot.jump(10)</code> для прыжка.

<h2>Совет по уровню</h2>
Инициализируйте <code>robot.oldCoins</code> и <code>robot.oldEnergy</code> в <code>init</code>. В <code>loop</code> сравнивайте текущее состояние с предыдущим и обновляйте свойства после проверки.

<br><br>
<a id="showSolution" class="show-solution">Показать решение</a>
<br><br>
<div id="solution">
<div class="code">function init(robot) {
	robot.oldCoins = 0;
	robot.oldEnergy = 100;
}

function loop(robot) {
	robot.action = {type: 'move', amount: 40};
	if (robot.info().coins > robot.oldCoins ||
		 robot.info().energy > robot.oldEnergy) {
		robot.action = {type: 'jump', amount: 10};
	}
	robot.oldCoins = robot.info().coins;
	robot.oldEnergy = robot.info().energy;
}</div>
</div>
`,


//////////// УРОВЕНЬ 8 /////////////////////////////////////////////////////////
`
<h1>Уровень 8: Счетчики и таймеры</h1>

<h2>Использование счетчиков</h2>
Счетчики позволяют отслеживать, сколько раз произошло определенное событие или сколько итераций цикла прошло. Это полезно для выполнения действий через определенные промежутки времени.

<h3>Создание счетчика</h3>
Вы можете создать счетчик как свойство объекта <code>robot</code>:
<div class="code">function init(robot) {
	robot.counter = 0;
}</div>
И увеличивать его в <code>loop</code>:
<div class="code">function loop(robot) {
	robot.counter++;
	console.log("Итерация: " + robot.counter);
}</div>

<h3>Условные действия на основе счетчика</h3>
Счетчик можно использовать для выполнения действий после определенного количества итераций:
<div class="code">if (robot.counter > 5) {
	robot.action = {type: 'jump', amount: 10};
}</div>

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration" target="_blank" class="learn-more">Узнать больше о циклах и счетчиках</a>
<br><br>

<h2>Управление роботом</h2>
На этом уровне роботу нужно прыгать после того, как он соберет монету и пройдет 4 итерации цикла. Используйте счетчик для отслеживания итераций после сбора монеты.

Попробуйте в консоли:
- <code>robot.info().coins</code> для проверки количества монет.
- <code>robot.jump(10)</code> для прыжка.

<h2>Совет по уровню</h2>
Инициализируйте счетчик в <code>init</code>. Увеличивайте его в <code>loop</code>, если собрана хотя бы одна монета, и выполняйте прыжок, когда счетчик превысит 4.

<br><br>
<a id="showSolution" class="show-solution">Показать решение</a>
<br><br>
<div id="solution">
<div class="code">function init(robot) {
	robot.iterationsAfterCoin = 0;
}

function loop(robot) {
	if (robot.iterationsAfterCoin > 4) {
		robot.action = {type: 'jump', amount: 10};
	}
	if (robot.info().coins > 0) {
		robot.iterationsAfterCoin++;
	}
}</div>
</div>
`,


//////////// УРОВЕНЬ 9 /////////////////////////////////////////////////////////
`
<h1>Уровень 9: Модули и очереди</h1>

<h2>Модули в JavaScript</h2>
Модули позволяют организовать код в отдельные файлы, которые можно подключать с помощью <code>require</code>. Это улучшает читаемость и переиспользуемость кода. На этом уровне используется модуль <code>action-queue</code>, который реализует очередь действий.

<h3>Работа с очередью</h3>
Очередь — это структура данных, работающая по принципу «первым пришел — первым ушел» (FIFO). Модуль <code>action-queue</code> предоставляет следующие методы:
- <code>push(item, t)</code>: добавляет элемент <code>item</code> в очередь <code>t</code> раз.
- <code>pop()</code>: извлекает и возвращает первый элемент очереди.
- <code>peek()</code>: возвращает первый элемент без его удаления.
- <code>clear()</code>: очищает очередь.
- <code>size()</code>: возвращает количество элементов в очереди.
- <code>empty()</code>: возвращает <code>true</code>, если очередь пуста.

<h3>Пример использования</h3>
<div class="code">var queue = require('action-queue');
queue.push({type: 'move', amount: 40}, 2);
console.log(queue.pop()); // {type: 'move', amount: 40}</div>

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules" target="_blank" class="learn-more">Узнать больше о модулях</a>
<br><br>

<h2>Управление роботом</h2>
На этом уровне нужно запрограммировать последовательность действий: 12 выстрелов, 4 движения вперед, прыжок, 5 ожиданий и 6 движений вперед. Используйте очередь, чтобы задать эту последовательность.

Попробуйте в консоли:
- <code>robot.shoot()</code> для выстрела.
- <code>robot.wait()</code> для ожидания.

<h2>Совет по уровню</h2>
В <code>init</code> добавьте действия в очередь с помощью <code>robot.actionQueue.push</code>. В <code>loop</code> извлекайте следующее действие с помощью <code>robot.actionQueue.pop()</code>.

<br><br>
<a id="showSolution" class="show-solution">Показать решение</a>
<br><br>
<div id="solution">
<code>action-queue:</code>
<div class="code">module.exports = {
  	queue: [],
  	push: function(item, t){
		t = t || 1;
    	for (let i = 0; i < t; i++) {
			this.queue.push(item);
      }
	},
	pop: function(){
     	if(this.empty()){
			return null;
		}
     	return this.queue.splice(0, 1)[0];
	},
	peek: function(){
     	if(this.empty()){
			return null;
		}
     	return this.queue[0];
	},
	clear: function(){
		this.queue = [];
	},
	size: function(){
		return this.queue.length;
	},
	empty: function(){
		return (this.size() === 0);
	},
	log: function(){console.log(this.queue);}
};</div>

<br><br>
<code>level-9:</code>
<div class="code">function init(robot) {
	robot.actionQueue = require('action-queue');
  	robot.actionQueue.push({type: 'shoot'}, 12);
  	robot.actionQueue.push({type: 'move', amount: 40}, 4);
  	robot.actionQueue.push({type: 'jump', amount: 10});
  	robot.actionQueue.push({type: 'wait'}, 5);
  	robot.actionQueue.push({type: 'jump'});
  	robot.actionQueue.push({type: 'move', amount: 40}, 6);
}

function loop(robot) {
  	if (!robot.actionQueue.empty()) {
		robot.action = robot.actionQueue.pop();
   }
}</div>
</div>
`,


//////////// УРОВЕНЬ 10 /////////////////////////////////////////////////////////
`
<h1>Уровень 10: События и сложная логика</h1>

<h2>Обработка событий</h2>
События позволяют реагировать на определенные действия, например, столкновение робота с объектом. В JavaScript события обрабатываются с помощью метода <code>on</code>.

<h3>Пример обработки события</h3>
<div class="code">robot.on('collide', function(event) {
	console.log("Робот столкнулся с: " + event.with.t);
});</div>
Здесь <code>robot.on('collide', ...)</code> регистрирует обработчик для события столкновения. Параметр <code>event.with.t</code> указывает тип объекта, с которым произошло столкновение.

<h2>Работа с модулем find</h2>
Модуль <code>find</code> предоставляет функцию <code>closestNext</code>, которая находит ближайший объект (например, лифт) впереди робота:
<div class="code">var closest = require('find').closestNext(x, y, items);</div>
Функция принимает текущие координаты <code>x</code>, <code>y</code> и массив объектов <code>items</code>, возвращая ближайший объект с <code>x</code> больше текущего.

<h3>Пример использования</h3>
<div class="code">var closestLift = require('find').closestNext(robot.info().x, robot.info().y, Game.lifts);</div>
Это возвращает ближайший лифт, расположенный впереди робота.

<br><br>
<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" class="learn-more">Узнать больше о событиях</a>
<br><br>

<h2>Управление роботом</h2>
На этом уровне роботу нужно двигаться к ближайшему лифту. Если робот находится на лифте и его <code>y</code>-координата больше 90, он должен ждать. Если расстояние до лифта слишком большое, робот должен двигаться вперед.

Попробуйте в консоли:
- <code>robot.info().x</code> и <code>robot.info().y</code> для проверки координат.
- <code>robot.wait()</code> для ожидания.

<h2>Совет по уровню</h2>
Используйте <code>robot.on('collide', ...)</code> для отслеживания столкновений с лифтом. Проверьте расстояние до ближайшего лифта с помощью <code>require('find').closestNext</code> и задайте действия на основе условий.

<br><br>
<a id="showSolution" class="show-solution">Показать решение</a>
<br><br>
<div id="solution">
<code>find:</code>
<div class="code">module.exports = {
  	closestNext:
    	function(x, y, items){
			let minDistance = null;
      		let closest = null;
    		for (let i = 0; i < items.length; i++) {
              	if (items[i].x <= x) continue;
            	let distance = Math.abs(x - items[i].x) + Math.abs(y - items[i].y);
              	if (minDistance == null ||
                    distance < minDistance) {
                	minDistance = distance;
                  	closest = items[i];
				}
        	}
        	return closest;
		}
};</div>
<code>level-10:</code>
<div class="code">function loop(robot) {
  	let onLift = false;
  	robot.on('collide', function(e){
    	if (e.with.t == 'lift') {
	  		onLift = true;
        }
    });
  
  	let closestNextLift = require('find').closestNext(robot.info().x,
                                                      robot.info().y,
                                                      Game.lifts);
  	if (closestNextLift == null) {
      	robot.action = {type: 'move', amount: 20};
    } else {
      	let xDist = closestNextLift.x - robot.info().x;
		let yDist = closestNextLift.y - robot.info().y;
      	if (onLift) {
      		if (robot.info().y > 90) {
      			robot.action = {type: 'wait'};
        	} else {
      			robot.action = {type: 'move', amount: 20};
            }
        } else if (xDist > 80 || yDist > 10) {
			robot.action = {type: 'move', amount: 20};
       	}
	}
}</div>
</div>
`,


			];

	});
	return instructionData;
});
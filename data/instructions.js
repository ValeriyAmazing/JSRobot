/*jshint esversion: 6 */
define(['mozart'], function (mozart) {
	var instructionData = mozart(function(prototype, _, _protected, __, __private) {
		prototype.ru = [

//////////// УРОВЕНЬ 1 /////////////////////////////////////////////////////////
`
<h1>Уровень 1: Введение в JavaScript и управление роботом</h1>
Бип-буп! Добро пожаловать в увлекательный мир программирования на JavaScript!  
JavaScript — это мощный и популярный язык, который используется для создания интерактивных веб-сайтов, включая эту игру. В этом уроке вы познакомитесь с основами JavaScript, научитесь использовать консоль и начнете управлять роботом, чтобы достичь флага на уровне.

<h2>Что вы узнаете</h2>
- Как использовать консоль для выполнения JavaScript-кода.
- Как писать базовый код для управления роботом.
- Основы функций <code>init</code> и <code>loop</code> для программирования робота.

<h2>Вкладка консоли</h2>
Консоль — это ваш первый инструмент для взаимодействия с JavaScript. Она позволяет выполнять команды и видеть их результаты в реальном времени. Давайте попробуем!

1. Перейдите во <b>вкладку консоли</b> (используйте сочетание клавиш <code>Ctrl + 3</code> или <code>Command + 3</code> на Mac).
2. В текстовом поле введите <code>5 + 8</code> и нажмите Enter.
3. Вы увидите результат: <code class="console-out">&larr; 13</code>. Первая строка (<code>&rarr; 5 + 8</code>) — это ваш ввод, а вторая — результат выполнения.

Теперь давайте получим информацию о роботе:
- Введите <code>robot.info().x</code> в консоли. Вы получите <code class="console-out">&larr; 80</code> — это текущая <b>x</b>-координата робота в игре.
- Попробуйте другие свойства робота:
  - <code>robot.info().y</code> — <b>y</b>-координата.
  - <code>robot.info().health</code> — здоровье робота.
  - <code>robot.info().energy</code> — энергия робота.
  - <code>robot.info().width</code> — ширина робота.

Эти команды позволяют вам "заглянуть" в состояние робота. Экспериментируйте с ними, чтобы понять, как они работают!

<a href="https://developer.mozilla.org/ru/docs/Web/API/Console" target="_blank" class="learn-more">Узнать больше о консоли</a>

<h2>Вкладка скриптов</h2>
Теперь перейдем к написанию кода для управления роботом. Перейдите во <b>вкладку скриптов</b> (<code>Ctrl + 2</code> или <code>Command + 2</code> на Mac). Вы увидите следующий код:

<div class="code">function init(robot) {
	// ваш код здесь
}

function loop(robot) {
	// ваш код здесь
}</div>

Это две основные функции для управления роботом:
- **<code>init(robot)</code>**: Выполняется один раз при запуске уровня. Используйте её для начальной настройки робота.
- **<code>loop(robot)</code>**: Выполняется многократно (примерно 3 раза в секунду) во время работы программы. Здесь вы задаете действия робота.

**Комментарии**: Строки, начинающиеся с <code>//</code>, — это комментарии. Они предназначены для пояснений и не влияют на выполнение кода.

<h3>Задание 1: Вывод сообщения в консоль</h3>
Давайте заставим робота "говорить" через консоль:
1. Отредактируйте функцию <code>init(robot)</code>, чтобы она выглядела так:
<div class="code">function init(robot) {
	console.log("Робот инициализируется...");
}</div>
2. Нажмите <b>кнопку запуска</b> (Кнопка "ЗАПУСК" вверху страницы или <code>Ctrl + Enter</code>).
3. Перейдите во вкладку консоли и убедитесь, что вы видите сообщение <code class="console-out">&larr; Робот инициализируется...</code>.
4. Нажмите <b>кнопку сброса</b> (круглая стрелка), чтобы очистить консоль и перезапустить уровень.

<h3>Задание 2: Работа с функцией loop</h3>
Теперь добавим сообщение в функцию <code>loop</code>:
1. Измените код так, чтобы он выглядел следующим образом:
<div class="code">function init(robot) {
	console.log("Робот инициализируется...");
}

function loop(robot) {
	console.log("Робот выполняет цикл...");
}</div>
2. Нажмите <b>кнопку запуска</b> и откройте вкладку консоли.
3. Вы увидите, что сообщение <code class="console-out">&larr; Робот выполняет цикл...</code> появляется многократно, так как <code>loop</code> выполняется 3 раза в секунду.
4. Нажмите <b>кнопку паузы</b> (квадрат), чтобы остановить выполнение, и <b>кнопку сброса</b>, чтобы очистить консоль.

<h2>Управление роботом</h2>
Цель игры — довести робота до флага на каждом уровне. У робота есть здоровье и энергия, которые уменьшаются при выполнении действий или получении урона. Если энергия или здоровье достигнут нуля, уровень будет провален.

Робот может выполнять следующие действия:
- <code>move</code>: Перемещение влево (от -40 до 0) или вправо (от 0 до 40). Например, <code>{type: 'move', amount: 40}</code> перемещает робота вправо на 40 пикселей.
- <code>jump</code>: Прыжок влево (от -10 до 0) или вправо (от 0 до 10). Например, <code>{type: 'jump', amount: 10}</code> — прыжок вправо.
- <code>shoot</code>: Выстрел в текущем направлении.
- <code>turn</code>: Поворот (меняет направление выстрела).
- <code>wait</code>: Пропуск действия.

<h3>Задание 3: Движение робота</h3>
Чтобы робот двигался вправо, измените функцию <code>loop</code>:
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
1. Введите этот код во вкладке скриптов.
2. Нажмите <b>кнопку запуска</b> и наблюдайте, как робот движется вправо.
3. Если робот достиг флага, поздравляем — вы прошли уровень! Если нет, попробуйте в консоли команды <code>robot.move(40)</code> или <code>robot.jump(10)</code>, чтобы понять, как робот реагирует.

<h2>Совет по уровню</h2>
- Используйте консоль для тестирования команд перед их добавлением в скрипт.
- Если робот не доходит до флага, проверьте, нет ли препятствий. Возможно, потребуется прыжок!
- Нажмите <b>кнопку паузы</b>, чтобы остановить выполнение, если что-то пошло не так.

<a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" class="learn-more">Узнать больше о JavaScript</a>
`,

//////////// УРОВЕНЬ 2 /////////////////////////////////////////////////////////
`
<h1>Уровень 2: Основы данных и управление с клавиатуры</h1>
На этом уровне вы углубитесь в основы JavaScript, изучите типы данных и переменные, а также научитесь использовать клавиатуру для управления роботом в режиме практики.

<h2>Что вы узнаете</h2>
- Как использовать интерфейс (HUD) и вкладку свойств для получения информации о роботе.
- Как управлять роботом с помощью клавиатуры в режиме практики.
- Основы типов данных и переменных в JavaScript.

<h2>Интерфейс и вкладка свойств</h2>
В правом верхнем углу экрана находится <b>интерфейс (HUD)</b>, который показывает:
- Здоровье и энергию робота.
- Количество собранных монет.
- Позицию курсора мыши.

Эти данные помогут вам следить за состоянием робота во время игры. Также есть <b>вкладка свойств</b> (<code>Ctrl + 4</code> или <code>Command + 4</code>), где отображается подробная информация о роботе, такая как его координаты, здоровье и энергия. Попробуйте открыть её, чтобы ознакомиться.

<h2>Режим практики и управление с клавиатуры</h2>
Режим практики позволяет тестировать уровень перед написанием кода. Для его активации используйте <b>управление с клавиатуры</b>:
1. Нажмите кнопку с изображением стрелок клавиатуры в левом верхнем углу (<code>Ctrl + 5</code> или <code>Command + 5</code>).
2. Появится сообщение о входе в <b>режим практики</b>.
3. Используйте следующие клавиши для управления роботом:
   <table>
   <tr><td>Движение влево</td><td>A</td></tr>
   <tr><td>Движение вправо</td><td>D</td></tr>
   <tr><td>Прыжок вверх</td><td>W</td></tr>
   <tr><td>Прыжок влево</td><td>Q</td></tr>
   <tr><td>Прыжок вправо</td><td>E</td></tr>
   <tr><td>Поворот</td><td>T</td></tr>
   <tr><td>Выстрел</td><td>G</td></tr>
   </table>
4. Попробуйте пройти уровень вручную, чтобы понять, какие действия нужны для достижения флага.

<b>Важно</b>: Чтобы завершить уровень, вы должны использовать код во вкладке скриптов, а не клавиатуру или консоль. Режим практики предназначен только для тренировки.

<h2>Управление роботом из консоли</h2>
Консоль также позволяет управлять роботом. Попробуйте следующие команды:
<table>
<tr><td><code>robot.move(<i>n</i>)</code></td><td>Движение на <i>n</i> пикселей (-40 до 40).</td></tr>
<tr><td><code>robot.jump(<i>n</i>)</code></td><td>Прыжок на <i>n</i> единиц (-10 до 10).</td></tr>
<tr><td><code>robot.jump()</code></td><td>Прыжок вверх (равно <code>robot.jump(0)</code>).</td></tr>
<tr><td><code>robot.turn()</code></td><td>Поворот (меняет направление выстрела).</td></tr>
<tr><td><code>robot.shoot()</code></td><td>Выстрел в текущем направлении.</td></tr>
</table>
Попробуйте ввести <code>robot.move(40)</code>, а затем <code>robot.jump(10)</code>, чтобы увидеть, как робот реагирует.

<h2>Горячие клавиши</h2>
Для удобства используйте следующие сочетания:
<table>
<tr><td>Вкладка инструкций</td><td>Ctrl + 1</td></tr>
<tr><td>Вкладка скриптов</td><td>Ctrl + 2</td></tr>
<tr><td>Вкладка консоли</td><td>Ctrl + 3</td></tr>
<tr><td>Вкладка свойств</td><td>Ctrl + 4</td></tr>
<tr><td>Управление с клавиатуры</td><td>Ctrl + 5</td></tr>
<tr><td>Запуск/Пауза скрипта</td><td>Ctrl + Enter</td></tr>
</table>
На Mac замените <code>Ctrl</code> на <code>Command</code>.

<h2>Типы данных</h2>
Типы данных — это основа программирования. В JavaScript есть несколько примитивных типов:
<table>
<tr><td><b>Число</b></td><td>Целые числа или числа с плавающей точкой, например: <code>42</code>, <code>3.14</code>, <code>-100</code>.</td></tr>
<tr><td><b>Строка</b></td><td>Последовательность символов в кавычках, например: <code>"Привет!"</code>, <code>'Робот'</code>.</td></tr>
<tr><td><b>Булевый тип</b></td><td><code>true</code> или <code>false</code>.</td></tr>
<tr><td><b>undefined</b></td><td>Значение, которое указывает на отсутствие данных. Например, переменная без значения.</td></tr>
<tr><td><b>null</b></td><td>Намеренное отсутствие значения, например: <code>favoriteColor = null</code>.</td></tr>
</table>

Проверьте типы данных в консоли:
- <code>typeof(42)</code> → <code class="console-out">&larr; "number"</code>
- <code>typeof("Привет")</code> → <code class="console-out">&larr; "string"</code>
- <code>typeof(true)</code> → <code class="console-out">&larr; "boolean"</code>
- <code>typeof(undefined)</code> → <code class="console-out">&larr; "undefined"</code>
- <code>typeof(null)</code> → <code class="console-out">&larr; "object"</code> (это особенность JavaScript).

<h2>Объекты</h2>
Объекты — это сложные типы данных, которые объединяют несколько значений. Например, вы уже использовали объект действия робота:
<div class="code">robot.action = {type: 'move', amount: 40};</div>
Здесь <code>type</code> — строка, а <code>amount</code> — число. Объекты позволяют хранить и передавать связанные данные.

<h2>Переменные</h2>
Переменные позволяют сохранять данные для последующего использования. Например:
<div class="code">var favoriteFood = "Пицца";</div>
Здесь <code>favoriteFood</code> — это переменная, а <code>"Пицца"</code> — её значение.

Чтобы создать переменную, используйте ключевое слово <code>var</code>:
1. **Объявление**: <code>var myVariable;</code> — создает переменную без значения (по умолчанию <code>undefined</code>).
2. **Присваивание**: <code>myVariable = 42;</code> — задает значение.

Пример:
<div class="code">var speed = 40;
robot.action = {type: 'move', amount: speed};</div>
Переменные можно использовать для упрощения кода и повторного использования значений.

<h2>Задание</h2>
Ваша цель — довести робота до флага, двигаясь вправо. Используйте код из предыдущего уровня:
<div class="code">function loop(robot) {
	robot.action = {type: 'move', amount: 40};
}</div>
1. Введите этот код во вкладке скриптов.
2. Нажмите <b>кнопку запуска</b> и проверьте, достигает ли робот флага.
3. Если нужно, используйте режим практики (клавиатура) или консоль, чтобы протестировать другие действия, например, <code>robot.jump(10)</code>.

<h2>Совет по уровню</h2>
- Если робот застревает, проверьте HUD или вкладку свойств, чтобы узнать его координаты и состояние.
- Переменные можно использовать для хранения значений, таких как <code>var speed = 40;</code>, чтобы упростить изменение кода.
- Если вы хотите сохранить данные между вызовами функций, используйте свойства робота, например: <code>robot.mySpeed = 40;</code>.

<a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables" target="_blank" class="learn-more">Узнать больше о переменных</a>
`,

//////////// УРОВЕНЬ 3 /////////////////////////////////////////////////////////
`
<h1>Уровень 3: Математика и управление потоком</h1>
На этом уровне вы изучите арифметические операции, преобразование типов данных и управление потоком программы с помощью условных операторов. Это позволит роботу принимать решения, например, когда прыгать, а когда двигаться.

<h2>Что вы узнаете</h2>
- Как использовать арифметические и логические операторы.
- Как управлять поведением робота с помощью условий <code>if-else</code> и <code>switch</code>.
- Как преобразовывать строки в числа и работать с <code>NaN</code> и <code>Infinity</code>.

<h2>Математика в JavaScript</h2>
<h3>Арифметические операторы</h3>
JavaScript поддерживает следующие операции:
- <code>+</code>: Сложение, например, <code>5 + 3</code> → <code class="console-out">&larr; 8</code>.
- <code>-</code>: Вычитание, например, <code>5 - 3</code> → <code class="console-out">&larr; 2</code>.
- <code>*</code>: Умножение, например, <code>5 * 3</code> → <code class="console-out">&larr; 15</code>.
- <code>/</code>: Деление, например, <code>6 / 2</code> → <code class="console-out">&larr; 3</code>.
- <code>%</code>: Остаток от деления, например, <code>5 % 2</code> → <code class="console-out">&larr; 1</code>.
- <code>**</code>: Возведение в степень, например, <code>2 ** 3</code> → <code class="console-out">&larr; 8</code>.

<h3>Операторы присваивания</h3>
Для изменения значений переменных используйте:
- <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>: Сокращения для операций, например, <code>x += 1</code> эквивалентно <code>x = x + 1</code>.
- <code>++</code>, <code>--</code>: Увеличение или уменьшение на 1, например, <code>x++</code>.

<h3>Конкатенация строк</h3>
Сложение строк объединяет их:
<div class="code">"Робот " + "движется!"</div> → <code class="console-out">&larr; "Робот движется!"</code>
Если добавить число к строке, число преобразуется в строку:
<div class="code">"Скорость: " + 40</div> → <code class="console-out">&larr; "Скорость: 40"</code>
Будьте осторожны: <code>"7" + 3</code> даст <code>"73"</code>, а не <code>10</code>.

<h3>Преобразование строк в числа</h3>
Для преобразования строк в числа используйте:
- <code>Number.parseInt("123")</code> → <code class="console-out">&larr; 123</code> (целое число).
- <code>Number.parseFloat("3.14")</code> → <code class="console-out">&larr; 3.14</code> (число с плавающей точкой).
Пример: <code>Number.parseInt("7.25 литров")</code> → <code class="console-out">&larr; 7</code>.

<h3>Специальные значения</h3>
- <code>NaN</code>: "Не число", результат некорректных операций, например, <code>"апельсин" - 4</code>. Проверить: <code>Number.isNaN(x)</code>.
- <code>Infinity</code>: Результат деления на ноль или очень больших вычислений, например, <code>1 / 0</code>.

<h3>Математические функции</h3>
Объект <code>Math</code> предоставляет полезные функции:
- <code>Math.round(3.7)</code> → <code class="console-out">&larr; 4</code> (округление).
- <code>Math.abs(-5)</code> → <code class="console-out">&larr; 5</code> (абсолютное значение).
- <code>Math.max(1, 5, 3)</code> → <code class="console-out">&larr; 5</code> (максимум).
- <code>Math.random()</code> → случайное число от 0 до 1.

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math" target="_blank" class="learn-more">Узнать больше о Math</a>

<h2>Логические операторы и булевы значения</h2>
Логические операторы возвращают <code>true</code> или <code>false</code>:
- <code>==</code>: Проверяет равенство значений (разные типы допускаются), например, <code>3 == "3"</code> → <code class="console-out">&larr; true</code>.
- <code>===</code>: Проверяет равенство значений и типов, например, <code>3 === "3"</code> → <code class="console-out">&larr; false</code>.
- <code>!=</code>, <code>!==</code>: Проверяют неравенство.
- <code><</code>, <code>></code>, <code><=</code>, <code>>=</code>: Сравнение чисел.
- <code>&&</code>: Логическое И (оба условия истинны).
- <code>||</code>: Логическое ИЛИ (хотя бы одно условие истинно).
- <code>!</code>: Логическое НЕ (меняет <code>true</code> на <code>false</code> и наоборот).

<h3>Ложные значения</h3>
Следующие значения считаются ложными:
- <code>false</code>, <code>0</code>, <code>""</code>, <code>NaN</code>, <code>undefined</code>, <code>null</code>.
Проверьте в консоли: <code>!0</code> → <code class="console-out">&larr; true</code>.

<h2>Управление потоком</h2>
<h3>Оператор if-else</h3>
Условные операторы позволяют выполнять разный код в зависимости от условий:
<div class="code">var energy = robot.info().energy;
if (energy < 50) {
	console.log("Низкий заряд батареи!");
} else {
	console.log("Энергия в норме.");
}</div>
Можно добавить <code>else if</code> для дополнительных условий.

<h3>Оператор switch</h3>
Для множественных условий используйте <code>switch</code>:
<div class="code">var action = "move";
switch (action) {
	case "move":
		console.log("Робот движется!");
		break;
	case "jump":
		console.log("Робот прыгает!");
		break;
	default:
		console.log("Неизвестное действие.");
}</div>
Ключевое слово <code>break</code> предотвращает выполнение следующих блоков.

<h3>Тернарный оператор</h3>
Сокращенная форма <code>if-else</code>:
<div class="code">var direction = robot.info().x > 100 ? "вправо" : "влево";
console.log(direction);</div>

<h2>Задание</h2>
Роботу нужно прыгать через препятствия. Используйте чередование действий:
1. В <code>init</code> создайте свойство <code>robot.jumpNext</code> и установите его в <code>true</code>.
2. В <code>loop</code> используйте <code>if-else</code>, чтобы чередовать прыжки (<code>jump, 10</code>) и движение (<code>move, 40</code>), обновляя <code>robot.jumpNext</code>.

Попробуйте в консоли:
- <code>robot.jump(10)</code> для прыжка.
- <code>robot.move(40)</code> для движения.
- Используйте клавиши вверх/вниз в консоли для повторения команд.

<h2>Совет по уровню</h2>
- Переменные, объявленные внутри <code>init</code>, не доступны в <code>loop</code>. Используйте свойства робота, например, <code>robot.jumpNext</code>.
- Проверьте HUD, чтобы следить за координатами робота.
- Если застряли, используйте режим практики, чтобы понять, где нужен прыжок.

<a id="showSolution" class="show-solution">Показать решение</a>
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
<h1>Уровень 4: Функции и условное управление</h1>
Этот уровень познакомит вас с функциями в JavaScript и их применением для управления роботом. Вы научитесь создавать функции и использовать условия для выполнения действий в определенных зонах.

<h2>Что вы узнаете</h2>
- Как создавать и использовать функции в JavaScript.
- Различия между типами функций (объявления, выражения, стрелочные).
- Как управлять роботом на основе его позиции.

<h2>Функции в JavaScript</h2>
Функции — это переиспользуемые блоки кода, которые выполняют определенную задачу.

<h3>Объявление функций</h3>
<div class="code">function sayHello() {
	console.log("Привет, робот!");
}</div>
Вызов: <code>sayHello()</code> → <code class="console-out">&larr; Привет, робот!</code>.

<h3>Функции с параметрами</h3>
Функции могут принимать параметры:
<div class="code">function moveRobot(robot, distance) {
	robot.action = {type: 'move', amount: distance};
}</div>
Вызов: <code>moveRobot(robot, 40)</code>.

<h3>Возврат значений</h3>
Функции могут возвращать результаты:
<div class="code">function add(a, b) {
	return a + b;
}</div>
Вызов: <code>console.log(add(5, 3))</code> → <code class="console-out">&larr; 8</code>.

<h3>Функциональные выражения</h3>
Функции можно присваивать переменным:
<div class="code">var greet = function(name) {
	return "Привет, " + name + "!";
};</div>
Вызов: <code>greet("Робот")</code> → <code class="console-out">&larr; Привет, Робот!</code>.

<h3>Стрелочные функции</h3>
Компактная форма функций:
<div class="code">const multiply = (a, b) => a * b;</div>
Вызов: <code>multiply(4, 5)</code> → <code class="console-out">&larr; 20</code>.

<h3>Встроенные функции</h3>
Попробуйте:
- <code>"привет".toUpperCase()</code> → <code class="console-out">&larr; "ПРИВЕТ"</code>.
- <code>Math.random()</code> → случайное число от 0 до 1.

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions" target="_blank" class="learn-more">Узнать больше о функциях</a>

<h2>Задание</h2>
Роботу нужно прыгать, когда он находится между <code>x=400</code> и <code>x=500</code>, и двигаться в остальных случаях.
1. Используйте <code>robot.info().x</code> для получения текущей позиции.
2. Примените <code>if</code> с логическим оператором <code>&&</code> для проверки зоны.

Попробуйте в консоли:
- <code>robot.info().x</code> для проверки позиции.
- <code>robot.jump(10)</code> и <code>robot.move(40)</code>.

<h2>Совет по уровню</h2>
- Создайте функцию, например, <code>checkPosition</code>, для проверки координат робота.
- Используйте режим практики, чтобы определить границы зоны прыжка.
- Проверьте HUD для отслеживания позиции.

<a id="showSolution" class="show-solution">Показать решение</a>
<div id="solution">
<div class="code">function loop(robot) {
	if (400 < robot.info().x && robot.info().x < 500) {
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
На этом уровне вы изучите массивы и циклы, которые помогут роботу прыгать в нескольких зонах. Это сделает ваш код более гибким и мощным.

<h2>Что вы узнаете</h2>
- Как создавать и использовать массивы для хранения данных.
- Как применять циклы для обработки данных.
- Как управлять роботом в нескольких зонах.

<h2>Массивы</h2>
Массивы — это списки данных, которые хранятся под индексами (начинаются с 0):
<div class="code">var zones = [360, 500, 560, 760];</div>
- <code>zones[0]</code> → <code class="console-out">&larr; 360</code>.
- <code>zones.length</code> → <code class="console-out">&larr; 4</code>.

<h3>Методы массивов</h3>
- <code>push(item)</code>: Добавляет элемент в конец.
- <code>pop()</code>: Удаляет последний элемент.
- <code>length</code>: Возвращает количество элементов.

<h2>Циклы</h2>
<h3>Цикл for</h3>
<div class="code">var zones = [360, 500];
for (var i = 0; i < zones.length; i++) {
	console.log(zones[i]);
}</div>

<h3>Цикл while</h3>
<div class="code">var i = 0;
while (i < zones.length) {
	console.log(zones[i]);
	i++;
}</div>

<h3>Цикл for...of</h3>
<div class="code">for (let zone of zones) {
	console.log(zone);
}</div>

<a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration" target="_blank" class="learn-more">Узнать больше о циклах</a>

<h2>Задание</h2>
Роботу нужно прыгать в двух зонах: между <code>x=360</code> и <code>x=500</code>, а также между <code>x=560</code> и <code>x=760</code>.
1. Создайте массив с границами зон.
2. Проверьте, находится ли <code>robot.info().x</code> в одной из зон, используя <code>||</code>.

<h2>Совет по уровню</h2>
- Храните границы зон в массиве для удобства.
- Используйте цикл или логические операторы для проверки зон.
- Тестируйте в режиме практики, чтобы определить точные координаты.

<a id="showSolution" class="show-solution">Показать решение</a>
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
<h1>Уровень 6: Управление состоянием</h1>
Этот уровень научит вас использовать состояние робота (например, количество монет) для принятия решений. Вы также узнаете, как применять оператор модуло для чередования действий.

<h2>Что вы узнаете</h2>
- Как использовать свойства робота для отслеживания состояния.
- Как применять оператор <code>%</code> для чередования.
- Как управлять движением робота вперед и назад.

<h2>Состояние робота</h2>
Робот имеет свойства, доступные через <code>robot.info()</code>:
- <code>robot.info().coins</code>: Количество собранных монет.
- <code>robot.info().energy</code>: Текущая энергия.

<h3>Оператор модуло</h3>
Оператор <code>%</code> возвращает остаток от деления:
<div class="code">console.log(5 % 2);</div> → <code class="console-out">&larr; 1</code>
Используйте его для чередования:
<div class="code">if (robot.info().coins % 2 === 0) {
	console.log("Четное количество монет!");
}</div>

<h2>Сохранение данных</h2>
Сохраняйте данные в свойствах робота:
<div class="code">robot.direction = "forward";</div>
Эти свойства доступны в <code>init</code> и <code>loop</code>.

<h2>Задание</h2>
Робот должен двигаться вперед, если количество монет четное, и назад, если нечетное.
1. Используйте <code>robot.info().coins % 2</code> для проверки.
2. Задайте <code>robot.action</code> с <code>move</code> и <code>amount: 40</code> или <code>-40</code>.

<h2>Совет по уровню</h2>
- Проверьте <code>robot.info().coins</code> в консоли.
- Используйте режим практики, чтобы увидеть, как меняется количество монет.
- Если робот застревает, проверьте HUD для контроля состояния.

<a id="showSolution" class="show-solution">Показать решение</a>
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
На этом уровне вы научитесь отслеживать изменения состояния робота, такие как сбор новых монет или изменение энергии, чтобы принимать решения.

<h2>Что вы узнаете</h2>
- Как сравнивать текущее и предыдущее состояние.
- Как сохранять данные между циклами.
- Как использовать условия для динамического управления.

<h2>Отслеживание состояния</h2>
Чтобы реагировать на изменения, сохраняйте предыдущее состояние в свойствах робота:
<div class="code">function init(robot) {
	robot.oldCoins = 0;
}</div>
Сравнивайте в <code>loop</code>:
<div class="code">function loop(robot) {
	if (robot.info().coins > robot.oldCoins) {
		console.log("Новая монета!");
	}
	robot.oldCoins = robot.info().coins;
}</div>

<h2>Задание</h2>
Робот должен прыгать, если собрал новую монету или его энергия увеличилась, иначе двигаться вперед.
1. В <code>init</code> задайте <code>robot.oldCoins</code> и <code>robot.oldEnergy</code>.
2. В <code>loop</code> сравните текущее состояние с предыдущим.

<h2>Совет по уровню</h2>
- Используйте <code>robot.info().coins</code> и <code>robot.info().energy</code>.
- Обновляйте свойства после каждой проверки.
- Тестируйте в консоли: <code>robot.info().coins</code>, <code>robot.jump(10)</code>.

<a id="showSolution" class="show-solution">Показать решение</a>
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
Этот уровень научит вас использовать счетчики для отслеживания итераций и выполнения действий через определенные промежутки.

<h2>Что вы узнаете</h2>
- Как создавать и использовать счетчики.
- Как выполнять действия на основе количества итераций.
- Как управлять роботом с учетом собранных монет.

<h2>Счетчики</h2>
Счетчик — это переменная, которая увеличивается с каждой итерацией:
<div class="code">function init(robot) {
	robot.counter = 0;
}
function loop(robot) {
	robot.counter++;
	console.log("Итерация: " + robot.counter);
}</div>

<h2>Условные действия</h2>
Используйте счетчик для выполнения действий:
<div class="code">if (robot.counter >= 5) {
	robot.action = {type: 'jump', amount: 10};
}</div>

<h2>Задание</h2>
Робот должен прыгать после сбора монеты и прохождения 4 итераций цикла.
1. В <code>init</code> создайте <code>robot.iterationsAfterCoin</code>.
2. В <code>loop</code> увеличивайте счетчик, если есть монеты, и прыгайте после 4 итераций.

<h2>Совет по уровню</h2>
- Проверьте <code>robot.info().coins</code> в консоли.
- Используйте режим практики для тестирования.
- Сбрасывайте счетчик, если нужно, чтобы начать заново.

<a id="showSolution" class="show-solution">Показать решение</a>
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
На этом уровне вы научитесь использовать модули для организации кода и реализуете очередь действий, чтобы запрограммировать сложную последовательность движений робота.

<h2>Что вы узнаете</h2>
- Как создавать и подключать модули в JavaScript.
- Как использовать очередь для выполнения последовательности действий.
- Как управлять роботом с помощью модуля <code>action-queue</code>.

<h2>Модули в JavaScript</h2>
Модули позволяют разделять код на отдельные файлы, что упрощает его организацию и повторное использование. В этой игре вы будете создавать модули в <b>вкладке скриптов</b>.

<h3>Создание модуля</h3>
1. Перейдите во <b>вкладку скриптов</b> (<code>Ctrl + 2</code> или <code>Command + 2</code>).
2. Слева нажмите на кнопку <code>></code>, чтобы открыть панель файлов.
3. Нажмите кнопку <b>Новый файл</b> и введите имя модуля, например, <code>action-queue</code> (без расширения <code>.js</code>).
4. В открывшемся файле напишите код модуля (пример ниже).
5. Переключайтесь между файлами (например, <code>action-queue</code> и <code>level-9</code>) в панели файлов для редактирования.

<h3>Пример модуля action-queue</h3>
Модуль <code>action-queue</code> реализует очередь действий (FIFO — первым пришел, первым ушел). Вот его структура:
<div class="code">module.exports = {
	queue: [],
	push: function(item, t) {
		t = t || 1;
		for (let i = 0; i < t; i++) {
			this.queue.push(item);
		}
	},
	pop: function() {
		if (this.empty()) {
			return null;
		}
		return this.queue.splice(0, 1)[0];
	},
	peek: function() {
		if (this.empty()) {
			return null;
		}
		return this.queue[0];
	},
	clear: function() {
		this.queue = [];
	},
	size: function() {
		return this.queue.length;
	},
	empty: function() {
		return this.size() === 0;
	},
	log: function() {
		console.log(this.queue);
	}
};</div>
- <code>push(item, t)</code>: Добавляет действие <code>item</code> в очередь <code>t</code> раз.
- <code>pop()</code>: Извлекает первое действие.
- <code>empty()</code>: Проверяет, пуста ли очередь.

<h2>Задание</h2>
Роботу нужно выполнить последовательность: 12 выстрелов, 4 движения вперед, 1 прыжок, 5 ожиданий, 6 движений вперед.
1. Создайте файл <code>action-queue</code> в панели файлов и вставьте код модуля.
2. В файле <code>level-9</code> настройте очередь в <code>init</code> и извлекайте действия в <code>loop</code>.

<h2>Совет по уровню</h2>
- Используйте <code>robot.actionQueue = require('action-queue')</code> для подключения модуля.
- В <code>init</code> добавьте действия в <code>robot.actionQueue</code>.
- В <code>loop</code> проверяйте, не пуста ли очередь, и извлекайте следующее действие.
- Тестируйте в консоли: <code>robot.shoot()</code>, <code>robot.wait()</code>.

<a id="showSolution" class="show-solution">Показать решение</a>
<div id="solution">
<code>action-queue:</code>
<div class="code">module.exports = {
	queue: [],
	push: function(item, t) {
		t = t || 1;
		for (let i = 0; i < t; i++) {
			this.queue.push(item);
		}
	},
	pop: function() {
		if (this.empty()) {
			return null;
		}
		return this.queue.splice(0, 1)[0];
	},
	peek: function() {
		if (this.empty()) {
			return null;
		}
		return this.queue[0];
	},
	clear: function() {
		this.queue = [];
	},
	size: function() {
		return this.queue.length;
	},
	empty: function() {
		return this.size() === 0;
	},
	log: function() {
		console.log(this.queue);
	}
};</div>
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
Этот уровень научит вас обрабатывать события и использовать модуль <code>find</code> для поиска ближайших объектов, таких как лифты. Вы создадите сложную логику для управления роботом.

<h2>Что вы узнаете</h2>
- Как обрабатывать события столкновений.
- Как создавать и использовать модуль <code>find</code>.
- Как принимать решения на основе расстояния до объектов.

<h2>Обработка событий</h2>
События позволяют реагировать на действия, например, столкновение робота с лифтом:
<div class="code">robot.on('collide', function(event) {
	console.log("Столкновение с: " + event.with.t);
});</div>
Здесь <code>event.with.t</code> возвращает тип объекта, например, <code>"lift"</code>.

<h2>Модуль find</h2>
Модуль <code>find</code> содержит функцию <code>closestNext</code>, которая находит ближайший объект впереди робота:
<div class="code">var closest = require('find').closestNext(x, y, items);</div>

<h3>Создание модуля find</h3>
1. Во <b>вкладке скриптов</b> нажмите <code>></code> для открытия панели файлов.
2. Создайте файл <code>find</code> через кнопку <b>Новый файл</b>.
3. Вставьте код модуля:
<div class="code">module.exports = {
	closestNext: function(x, y, items) {
		let minDistance = null;
		let closest = null;
		for (let i = 0; i < items.length; i++) {
			if (items[i].x <= x) continue;
			let distance = Math.abs(x - items[i].x) + Math.abs(y - items[i].y);
			if (minDistance == null || distance < minDistance) {
				minDistance = distance;
				closest = items[i];
			}
		}
		return closest;
	}
};</div>

<h2>Задание</h2>
Робот должен двигаться к ближайшему лифту. Если он на лифте и <code>y > 90</code>, он должен ждать. Если расстояние до лифта большое, двигаться вперед.
1. Создайте модуль <code>find</code>.
2. В <code>loop</code> используйте <code>robot.on('collide')</code> и <code>require('find').closestNext</code>.

<h2>Совет по уровню</h2>
- Проверьте <code>robot.info().x</code> и <code>robot.info().y</code> в консоли.
- Используйте режим практики для определения положения лифтов.
- Переключайтесь между файлами <code>find</code> и <code>level-10</code> в панели файлов.

<a id="showSolution" class="show-solution">Показать решение</a>
<div id="solution">
<code>find:</code>
<div class="code">module.exports = {
	closestNext: function(x, y, items) {
		let minDistance = null;
		let closest = null;
		for (let i = 0; i < items.length; i++) {
			if (items[i].x <= x) continue;
			let distance = Math.abs(x - items[i].x) + Math.abs(y - items[i].y);
			if (minDistance == null || distance < minDistance) {
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
	robot.on('collide', function(e) {
		if (e.with.t == 'lift') {
			onLift = true;
		}
	});
	let closestNextLift = require('find').closestNext(robot.info().x, robot.info().y, Game.lifts);
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
`
		];
	});
	return instructionData;
});
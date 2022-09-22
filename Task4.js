
function intervalCounter(from, to) { // 1. Объявляем функцию счетчика от одного числа до другого с интервалом
  
  let current = from; // 2. Объявляем переменную current и присваеваем ей значение параметра from из функции intervalCounter
     
  let invervalId = setInterval(function() { // 3. Записываем в переменную invervalId выполнение метода setInterval(), которому передается в качестве аргумента анонимная функция, выполняющая вывод в консоль с интервалом 1000 миллисекунд переменной current и затем увеличивающая ее на единицу, если значение переменной current достигает значения параметра to из функции intervalCounter срабатывет метод clearInterval() и вывод в консоль прекращается

      console.log(current);

      if (current == to) {
      clearInterval(invervalId);
      }

      current++;
      
  }, 1000);
 
}

intervalCounter(23, 54); // 4. Выполнение функции с переданными аргументами
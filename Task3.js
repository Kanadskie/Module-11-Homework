function getSumNumbers(num1) { // 1. Объявление функции для получения сумм чисел, которая принимает одно число как аргумент
  
    return function(num2) { // 2. Возвращаем анонимную функцию, которая принимает одно число как аргумент и в свою очередь возвращет сумму переданных в функции аргументов
      
      return num1 + num2;

    }
    
  }
  
  let sumResult = getSumNumbers(99)(1); // 3. Объявляем переменную sumResult, которой присваеваем результат выполенния функций getSumNumbers и анонимной функции при заданных параметрах
  
  console.log(sumResult); // 4. Выводим результат в консоль
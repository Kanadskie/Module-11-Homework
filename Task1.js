const arr = [542, 0, 'git', 88, 1, false, 'top', 'bot', 4, 90, 0, 11, 13, 0, null, 'root', true];
   
function findTypeOfElements() { // 1. Объявляем функцию для поиска типов/значений элементов массива

  let even = 0, // 2. Задаем переменные в которых будет храниться количество типов/значений элементов массива
      odd = 0,
      zero = 0,
      str = 0,
      booleans = 0;
  
  for (let i = 0; i < arr.length; i++) { // 3. Перебираем элементы массива

    if (typeof(arr[i]) === 'number' && !isNaN(arr[i])) { // 4. Проверка элемента массива на принадлежность к множеству Number и проверка на NaN

      if (arr[i] === 0) { // 5. Если элемент массива равен 0 - прибавляем 1 к значению переменной zero
        zero += 1;

      } else if (arr[i]% 2 === 0) { // 6. Если элемент массива четное число - прибавляем 1 к значению переменной even
        even += 1;

      } else { // 7. Если элемент массива нечетное число - прибавляем 1 к значению переменной odd
          odd += 1;
      }
      
    }
  
    if (typeof(arr[i]) === 'string') { // 8. Если элемент массива строка - прибавляем 1 к значению переменной str
      str += 1;
    }
  
    if (typeof(arr[i]) === 'boolean') { // 9. Если элемент массива булев - прибавляем 1 к значению переменной booleans
    booleans += 1;
    }
  
  }

  console.log(`В массиве четных элементов - ` + even); // 10. Вывод в консоль количества найденных типов/значений элементов
  console.log(`В массиве нечетных элементов - ` + odd);
  console.log(`В массиве нулей - ` + zero);
  console.log(`В массиве строк - ` + str);
  console.log(`В массиве булев - ` + booleans);

}

findTypeOfElements() // 10. Выполнение функции
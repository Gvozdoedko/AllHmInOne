function main() {
    do {
        let hm = +prompt(`Какую домашку показать?
1. ДЗ 7. Фильтрация по диапазону
2. ДЗ 8. Трансформация в массив имен
3. ДЗ 9. Средняя оценка группы студентов
4. ДЗ 10. Fibonacci recursion`);
        switch (hm) {
            case 1:
                HM7();
                break;
            case 2:
                HM8();
                break;
            case 3:
                HM9();
                break;
            case 4:
                let f = +prompt(`Порядковый номер числа:`);
                HM10(f);
                break;

            default:
                break;
        }
    } while (confirm('Do you want to continue?'));
}

main();





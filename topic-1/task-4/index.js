/**
 * Задача 4 - посчитать количество уникальных имен.
 * Напишите функцию, которая принимает массив имен,
 * нужно, чтобы функция вернула количество не повторяющихся(уникальных) имен.
 * Постарайтесь решить задачу наиболее оптимальным способом.
 * @param {string[]} nameArray - массив имён.
 * @return {number} Количество уникальных имён
 * */
function countUniqueName(nameArray) {
    if (!Array.isArray(nameArray) || nameArray.some(item => typeof item !== "string"))
        return 0;
    return new Set(nameArray.map(name => name.toLowerCase())).size;
}

module.exports.countUniqueName = countUniqueName;
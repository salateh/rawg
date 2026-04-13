export function debounce(func, wait) {
    let timeoutId = null;
    return function (...args) {
        // Очищаем предыдущий таймер, если он был
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // Устанавливаем новый таймер
        timeoutId = setTimeout(() => {
            func(...args);
        }, wait);
    };
}
// Пример использования:
//# sourceMappingURL=debounce.js.map
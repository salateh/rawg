export function el(tagName, attributes = {}, children = []) {
    const element = document.createElement(tagName);
    Object.assign(element, attributes);
    if (event)
        Object.assign(element, event);
    children.forEach((child) => {
        element.append(child);
    });
    return element;
}
//# sourceMappingURL=el.js.map
function mapper(obj, mapperObj) {
    const arr = Object.keys(mapperObj);
    let result = arr.reduce((acc, key) => {
        acc[key] = obj[mapperObj[key]];
        return acc;
    }, {});
    return result;
}
export {};
//# sourceMappingURL=mapper.js.map
function networkFetch(url) {
    // mock of real request
    return `${url} - Server response`;
}

const cache = new Set();
const proxyFetch = new Proxy(networkFetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0];
        if (cache.has(url)) {
            return `${url} - Cache response`;
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, argArray);
        }
    }
});

console.log(proxyFetch('angular.io')); // angular.io - Server response
console.log(proxyFetch('angular.io')); // angular.io - Cache response

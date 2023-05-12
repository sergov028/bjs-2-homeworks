//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  const cacheValueCount = 5;
  return (...args) => {
    const hash = md5(args);
    let objectCache = cache.find((item) => item.hash === hash);
    if (objectCache) {
      console.log("Из кэша: " + objectCache.result);
      return "Из кэша: " + objectCache.result;
    }

    let result = func(...args);
    cache.push({ hash, result });
    if (cache.length > cacheValueCount) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

//Задача № 2

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = true;
      func(...args);
      wrapper.count++;
    }, delay);
    wrapper.allCount++;
  }
  return wrapper;
}

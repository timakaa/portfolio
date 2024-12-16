export function throttle(func, limit) {
  let inThrottle;
  let lastFunc;
  let lastRan;

  const throttled = function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };

  throttled.cancel = () => {
    clearTimeout(lastFunc);
    inThrottle = false;
    lastFunc = null;
    lastRan = null;
  };

  return throttled;
}

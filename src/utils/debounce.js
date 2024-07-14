export function debounce(callee, timeoutMs) {
    let lastCall
    let lastCallTimer

    return function perform(...args) {
        let previousCall = lastCall

        lastCall = Date.now()

        if (previousCall && lastCall - previousCall <= timeoutMs) {
            clearTimeout(lastCallTimer)
        }

        lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
    }
}

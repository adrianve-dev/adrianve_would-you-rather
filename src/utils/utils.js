export const getPercentage = (first, second) => {
    return ((first / (first + second)) * 100).toFixed(2)
}
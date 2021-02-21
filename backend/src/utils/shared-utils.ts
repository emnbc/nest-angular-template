export const randomName = () => {
    return Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
}
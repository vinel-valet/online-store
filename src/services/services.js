export const data = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            if (!response.ok) {
                throw new Error('Ошибка при выполнении запроса');
            }
            const data = await response.json();
            resolve(data);
        } catch (error) {
            console.error('Ошибка:', error);
            reject(error);
        }
    });
}
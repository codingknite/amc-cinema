export async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data) return data;
        } else {
            throw response;
        }
    } catch (error) {
        console.log('WE HAVE AN ERROR ===>', error);
        throw error;
    }
};
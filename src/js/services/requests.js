const postData = async (url, data) => {
    let res = await fetsh(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const getResourse = async (url) => {
    let res = await fetsh(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
        
    return await res.json();
};

export {postData, getResourse};
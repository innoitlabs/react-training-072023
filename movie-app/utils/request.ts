export const requestDB =async ({params}:{params:any}) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=e320329b&${new URLSearchParams(
            params
        ).toString()}`
        );
        const json = await response.json();
        console.log(json);
        if (json.Error) {
            throw json.Error;
        }
        else { 
            return json;
        }
    }
    catch (error) { 
        console.log(error);
        return error;
    }
}

import baseUrl from "../Api/baseURL";


const useInsertData = async (url, params) => {

    const response = await baseUrl.post(url, params);
    return response;

}

export default useInsertData;
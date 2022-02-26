//importing API URL from the .env file
import { API } from "../backend";


// helper function to get all the call logs
export const getCallLogs = () => {
    return fetch(`${API}calllogs`).then(res => {
        return res.json()})
}

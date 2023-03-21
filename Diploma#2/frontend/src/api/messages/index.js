import {$api} from "../../boot/axios";

const apiMessages = {
    get: page => $api.post(`/messages/get_all_messages/${page}`, {}),
}

export default apiMessages;
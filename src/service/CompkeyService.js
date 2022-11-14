import axios from "@/components/axios";

let compKeyService = {
    getCompWordList : function (param){
        return axios({
            url: 'http://localhost:8089/message/send',
            method: 'post',
            params: param
        })
    },

    sendSelectedWord : function (param){
        return axios({
            url: 'http://localhost:8089/message/mylist',
            method: 'post',
            params: param
        })
    },
    sendScore : function (param){
        return axios({
            url: 'http://localhost:8089/message/score',
            method: 'post',
            params: param
        })
    }
}

export default compKeyService

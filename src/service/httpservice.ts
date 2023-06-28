//**********************************************************************
//    Purpose: <contains the base url and interseptor calling for every api call >
//   SN  Date       Change Description      created By
//   1   15/09/2021     Base Version        Krishan Sharma
//**********************************************************************

import { Interseptor } from './Interseptor';
import { constants } from '../constants/constant';

import axios from 'axios'

const instanceUrl = axios.create({
    baseURL: constants.API_URL,
    transformRequest: [
        function (data: any, headers: { [x: string]: string; }) {
            let accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                if (accessToken) {
                    headers['Authorization'] = 'Bearer ' + accessToken;
                }
            }
            return JSON.stringify(data);
        }
    ],
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    }
});

const instanceUrlWithMultipart = axios.create({
    baseURL: constants.API_URL,
    transformRequest: [
        function (data: any, headers: { [x: string]: string; }) {
            let accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                if (accessToken) {
                    headers['Authorization'] = 'Bearer ' + accessToken;
                }
            }
            return data;
        }
    ],
    headers: {
        'Content-Type': 'multipart/form-data',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    }
});
/**
 * httpservice for get and post json formatted data
 * @returns {*}
 */
export const httpservice = () => {
    instanceUrl.interceptors.request.use((request: any) => Interseptor.requestHandler(request));
    instanceUrl.interceptors.response.use(
        (response: any) => Interseptor.successHandler(response),
        (error: any) => Interseptor.errorHandler(error)
    );
    return instanceUrl;
};

/**
 * httpserviceWithMultipart for sending form data
 * @returns {*}
 */
export const httpserviceWithMultipart = () => {
    instanceUrlWithMultipart.interceptors.request.use((request: any) => Interseptor.requestHandler(request));
    instanceUrlWithMultipart.interceptors.response.use(
        (response: any) => Interseptor.successHandler(response),
        (error: any) => Interseptor.errorHandler(error)
    );
    return instanceUrlWithMultipart;
};

import { httpservice } from "./httpservice";
import { constants } from "../constants/constant";

export function getMsBookingTenantId(tenantName: String) {
    return httpservice()
        .get(`${constants.TENANT_URL}${tenantName}${constants.API.TENANT_URL_CONFIG}`)
        .then(function ({ data }: any) {
            if (data?.authorization_endpoint) {
                let code = data?.authorization_endpoint?.split('/')[3];
                return code;
            }

        })
        .catch(function (error: { data: any; }) {
            return error.data;
        });
}
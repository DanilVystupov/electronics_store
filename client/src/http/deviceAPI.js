import { $host, $authHost } from "./index";

export const createDevice = async (device) => {
    const { data } = await $authHost.post('api/device/', device)
    return data
}

export const getDevices = async (typeId, brandId, page, limit = 3) => {
    const { data } = await $host.get('api/device', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const getOneDevice = async (id) => {
    const { data } = await $host.get('api/device/' + id)
    return data
}  
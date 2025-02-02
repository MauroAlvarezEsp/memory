import { unflippedStatus } from "../../../commons/constants/general.constans";
import { ImageResponse } from "../types/ImageResponse.type";

export const mapper = (data: any) => {
    const mappedData = data?.entries.map((entry: ImageResponse, index: number) => ({
        uuid: entry.fields.image.uuid,
        url: entry.fields.image.url,
        status: unflippedStatus,
        index
    }))

    const duplicatedMappedData = mappedData.map((data: ImageResponse, index: number) => {
        return {...data, index: mappedData.length + index}
    })

    return mappedData.concat(duplicatedMappedData)
}
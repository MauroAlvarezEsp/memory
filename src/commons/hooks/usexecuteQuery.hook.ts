import { useQuery } from "@tanstack/react-query"
import { RestClient } from "../http/requests"
import { ReactQueryType } from "../types/react-query.type";
import { ImageResponse } from "../../modules/memory/types/ImageResponse.type";
import { generatePaginationObject } from "../utils/utils";

export const useExecuteQuery = (cacheKey: string, url: string, selector: Function, attempt: number): ReactQueryType => {
    const _restClient = new RestClient();
    
    const { data, error, isPending, refetch } = useQuery({
        queryKey: [cacheKey, attempt],
        queryFn: () => _restClient.get(url, generatePaginationObject()),
        refetchOnWindowFocus: false,
        select(data) {
            return selector(data);
        },

    })

    return { data, error, isPending }
}
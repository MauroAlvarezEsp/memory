import { useQuery } from "@tanstack/react-query"
import { RestClient } from "../http/requests"
import { ReactQueryType } from "../types/react-query.type";

export const useExecuteQuery = (cacheKey: string, url: string, pagination: any): ReactQueryType => {
    const _restClient = new RestClient();
    
    const { data, error, isPending } = useQuery({
        queryKey: [cacheKey],
        queryFn: () => _restClient.get(url, pagination),
        refetchOnWindowFocus: false
    })

    return { data, error, isPending }
}
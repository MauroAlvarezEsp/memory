import React from "react"
import { useExecuteQuery } from "../../commons/hooks/usexecuteQuery.hook"
import { cacheKeyImages, defaultPagintation, fallbackUrl } from "../../commons/constants/general.constans"
import { imagesPath } from "../../commons/constants/paths.contats"
import { ReactQueryType } from "../../commons/types/react-query.type"

export const MemoryComponent = () => {
    const url = (process.env.REACT_APP_URL_MODYO || fallbackUrl).concat(imagesPath)
    const imagesQuery: ReactQueryType = useExecuteQuery(cacheKeyImages, url, defaultPagintation)

    return (
        imagesQuery.isPending 
        ? <h1>Loading...</h1>
        : <h1>Hi</h1>
    )
}
export const getUserName = (): string | null => {
    return localStorage.getItem("memoryUserName")
}

export const setUserName = (value: string): void => {
    localStorage.setItem("memoryUserName", value)
}

export const generatePaginationObject = () => {
    return {per_page: 9, page: Math.floor(Math.random() * 2) + 1}
}

export const shuffleArray = (array: Array<any>) => {
    if(array){
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }
    else return []
}

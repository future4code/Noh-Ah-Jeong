export const formatDate = (date: Date) => {
    let month = '' + (date.getMonth() + 1)
    let day = '' + date.getDate()
    let year = date.getFullYear()

    let hours = '' + date.getHours()
    let minutes = '' + date.getMinutes()
    let seconds = '' + date.getSeconds()

    const addZero = (variable: string) => {
        if (variable.length < 2) {
            variable = '0' + variable
        }
    }

    [month, day, hours, minutes, seconds].forEach(addZero)
    
    const YMD = [year, month, day].join('-')

    const HMS = [hours, minutes, seconds].join(':')

    return [YMD, HMS].join(' ')
}
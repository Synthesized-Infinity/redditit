export default class ReddititError extends Error {

    constructor(public message: string) {
        super()
        this.name = `ReddititError`
    }
}
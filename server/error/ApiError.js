class ApiError extends Error{
    constructor(status, message){
        super()
        this.status = status
        this.message = message
    }

    static badRequest(message){
        return new ApiError(404, message)
    }

    static internal(message){
        return new ApiError(500, message)
    }

    static forbiddsen(message){
        return new ApiError(403, message)
    }

    static unauthorized(message){
        return new ApiError(401, message)
    }
}

module.exports = ApiError
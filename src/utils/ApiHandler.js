class ApiError extends Error{
    constructor(
        StatusCode,
        message = "something went wrong",
        errors = [],
        stackt = ""
        
    ){
        super(message)
        this.StatusCode = StatusCode,
        this.data = null,
        this.message = message,
        this.success = false,
        this.errors = errors

        if(stackt){
            this.stackt = stackt
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}

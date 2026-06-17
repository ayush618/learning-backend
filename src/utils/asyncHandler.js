import express from "express"

const asyncHandler = (requestHandler) => { (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
}}



export {asyncHandler}

// wrapper with try catch

// const asyncHandler = async(fn) => (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (err) {
//         res.status(err.code || 500). json({
//             success: false,
//             message: err.message
//         })
//     }
// }

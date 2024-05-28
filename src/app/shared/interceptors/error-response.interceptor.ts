import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

// interceptor de angular que llama funcion pura
export const ErrorResponseInterceptor : HttpInterceptorFn = (req, next) =>
  next(req).pipe(catchError(handleErrorResponse))



//funcion pura
function handleErrorResponse (error : HttpErrorResponse) : ReturnType<typeof throwError>{
  const errorResponse = `Error code : ${error.status}, message: ${error.message}`
  return throwError(()=> errorResponse)

}

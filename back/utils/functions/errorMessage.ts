export default function getErrorMessage(error: unknown) {
    if(error instanceof Error) return error.message
    console.log(error)
}
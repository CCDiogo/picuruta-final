export type ResponseAction = 
| {
    success: true;
    message: string;
} | 
{
    success: false;
    error: string;
}
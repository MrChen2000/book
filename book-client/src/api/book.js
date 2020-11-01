import { postRequest,getRequest } from '@/utils/httpRequest';

export const bookList = (params) => {
    return getRequest('books/getBookList', params)
}
export const bookDetail = (params) => {
    return getRequest('books/getBookDetail', params)
}
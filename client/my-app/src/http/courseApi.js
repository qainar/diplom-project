import { $authHost, $host } from './index'
import axios from "axios";

export const createType = async (type) => {
    const { data } = await $host.post('api/type', type)
    return data
}

export const createNews = async (news)=>{
    const {data} = await $authHost.post('api/news', news)
    return data
}

export const fetchNews = async ()=>{
    const {data} = await $host.get('api/news')
    return data
}
export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    return data
}
export const addCard = async (id, basketId) => {
    const { data } = await $authHost.post('api/basket-course', { basketId, courseId: id })
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand',)
    return data
}

export const createCourse = async (course) => {
    try {
        const { data } = await $authHost.post('api/course', course)
        return data
    } catch (e) {
        console.log(e)
    }


}
export const fetchCourses = async (typeId, brandId, page, limit = 5) => {
    const { data } = await $host.get('api/course', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const fetchOneCourse = async (id) => {
    const { data } = await $host.get('api/course/' + id)
    return data
}

export const fetchOneUser = async (id) => {
    const { data } = await $host.get('api/user/' + id)
    return data
}

export const fetchBasket = async (userId) => {
    const { data } = await $host.get('api/basket/ ' + userId)
    return data
}

export const fetchBasketCourses = async (basketId) => {
    const { data } = await $host.get('api/basket-course/' + basketId)
    return data
}

export const fetchCoursesByBasketId = async (courses) => {
    const { data } = await $host.post('api/my-courses', { data: courses })
    return data
}

export const fetchdeleteCourse = async (basketCourseId) => {
    const { data } = await $host.delete('api/my-courses/' + basketCourseId)
    return data
}

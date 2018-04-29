import {get} from './index';
export const getSliders = () => get('/sliders');
export const getLessons = (params: any = {}) => get(`/lessons/${params.type}/${params.page_number || 1}/${params.page_size || 5}/`);
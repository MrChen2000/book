import axios from 'axios';
// 统一请求路径前缀
const base = 'http://47.101.178.181:3000/'; // 服务器地址/
// 超时设定
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		Message.error('请求超时');
		return Promise.reject(err);
	}
);


export const getRequest = (url, params) => {
	return axios({
		method: 'get',
		url: `${base}${url}`,
		params: params,
		headers: {
		}
	});
};



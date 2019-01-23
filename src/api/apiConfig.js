export default {
	baseURL: process.env.BASE_URL,
	headers: {
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
	},
	transformRequest: [function (data) {
		let ret = ''
		for (let it in data) {
			ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
		}
		return ret
	}],
	onUploadProgress: function (progressEvent) {
	    // Do whatever you want with the native progress event
	},
	onDownloadProgress: function (progressEvent) {
	    // Do whatever you want with the native progress event
	},
	maxContentLength: 2000,
	validateStatus: function (status) {
	    return status >= 200 && status < 300; // default
	}
}

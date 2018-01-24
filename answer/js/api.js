
(function(owner){
    Vue.use(VueResource);
    Vue.http.options.emulateJSON = true;
    Vue.http.options.emulateHTTP = true;
    owner.post = function(url,params,success,error){
        Vue.http.post('http://zuche.ueepub.cn/'+url,params)
            .then(success,error)
    };
    owner.get = function(url,params,success,error){
        Vue.http.get('http://zuche.ueepub.cn/'+url + "?" + toQueryString(params))
            .then(success,error)
    };
    function toQueryString(obj) {
        return obj
            ? Object.keys(obj)
            .sort()
            .map(function(key) {
                var val = obj[key];
                if (Array.isArray(val)) {
                    return val
                        .sort()
                        .map(function(val2) {
                            return encodeURIComponent(key) +
                                "[]=" +
                                encodeURIComponent(val2);
                        })
                        .join("&");
                }
                if (val) {
                    return encodeURIComponent(key) +
                        "=" +
                        encodeURIComponent(val);
                } else {
                    return encodeURIComponent(key) + "=";
                }
            })
            .join("&")
            : "";
    };

}(window.http = {}));
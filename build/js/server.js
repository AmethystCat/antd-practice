(function(){

window.server = {};

var contextPath = "";
/**
 * 发起请求方法
 * @param type{get|post}    请求类型
 * @param api               请求地址 url
 * @param parameters        请求发布参数
 * @param success           回调方法,(错误也会调用)
 * @param async             事后异步请求
 * @returns {*}             ajax对象
 */
var send = function (type, api, parameters, success, async) {
    typeof success == 'function' || (success = function () {
    });
    var request = $.ajax({
        url: api + "?r=" + Math.random(),
        data: parameters,
        type: type,
        dataType: 'json',
        async: true,
        cache: false,
        headers: {"Cache-Control": "no-cache", "Accept": "application/json"},
        timeout: 300000,
        success: function (data, textStatus, jqXHR) {
            success.call(this, data, textStatus, jqXHR);
        },
        error: function (jqXHR, textStatus, errorThrown) {

            //alert(jqXHR+errorThrown+textStatus);
            if (jqXHR.status == 401) {
                location.href = contextPath;
            } else {
                if (!errorThrown) {
                    return false;
                }
                var errors = {
                    101: "网络不稳定或不畅通，请检查网络设置",
                    403: "服务器禁止此操作！",
                    500: "服务器遭遇异常阻止了当前请求的执行<br/><br/><br/>"
                };

                var msg = null;
                switch (textStatus) {
                    case "timeout":
                        msg = "网络连接超时，请检查网络是否畅通！";
                        break;
                    case "error":
                        if (errors[jqXHR.status]) {
                            var data = null;
                            try {
                                data = jQuery.parseJSON(jqXHR.responseText);
                            } catch (e) {
                            }
                            if (data && data.message) {
                                msg = data.message;
                            } else {
                                msg = errors[jqXHR.status];
                            }
                        } else {
                            msg = "服务器响应异常<br/><br/>" + (jqXHR.status == 0 ? "" : jqXHR.status) + "&nbsp;" + errorThrown;
                        }
                        break;
                    case "abort":
                        msg = null;//"数据连接已被取消！";
                        break;
                    case "parsererror":
                        msg = "数据解析错误！";
                        break;
                    default:
                        msg = "出现错误:" + textStatus + "！";
                }
                if (errorThrown.code != null && errorThrown.message != null && !errors[errorThrown.code]) {
                    msg += "</br>[code:" + errorThrown.code + "][message:" + errorThrown.message + "]" + (null == errorThrown.stack ? "" : errorThrown.stack);
                }
                if (msg == null) {
                    msg = '';
                }
                success.call(this, {code: jqXHR.status, message: msg}, textStatus, jqXHR, errorThrown);
            }
        }
    });
    return request;
};  

    // 创建商铺
    server.web_merchant_create = function (data, callback) {
        return send('post', contextPath + '/web/merchant/create', data, callback);
    };

    // 修改商户
    server.web_merchant_update = function (data, callback) {
        return send('post', contextPath + '/web/merchant/create', data, callback);
    };

    // 商户列表（业务员）
    server.web_merchant_operator_list = function (data, callback) {
        return send('post', contextPath + '/web/merchant/create', data, callback);
    };

    // 商户提审（管理员）
    // server.web_merchant_submit = function (data, callback) {
    //     return send('post', contextPath + '/web/merchant/submit', data, callback);
    // };

    // 商户审核（管理员）
    // server.web_merchant_audit = function (data, callback) {
    //     return send('post', contextPath + '/web/merchant/audit', data, callback);
    // };

    // 商户列表（管理员）
    // server.web_merchant_admin_list = function (data, callback) {
    //     return send('post', contextPath + '/web/merchant/admin/list', data, callback);
    // };

    // 商户下线（管理员）
    // server.web_merchant_offline = function (data, callback) {
    //     return send('post', contextPath + '/web/merchant/offline', data, callback);
    // };

    // 商户重新上线（管理员）
    // server.web_merchant_online = function (data, callback) {
    //     return send('post', contextPath + '/web/merchant/online', data, callback);
    // };

    // 创建店铺
    server.web_shop_create = function (data, callback) {
        return send('post', contextPath + '/web/shop/create', data, callback);
    };

    // 修改店铺 （admin|operator）
    server.web_shop_update = function (data, callback) {
        return send('post', contextPath + '/web/shop/update', data, callback);
    };

    // 店铺列表 （admin|operator）
    server.web_shop_list = function (data, callback) {
        return send('post', contextPath + '/web/shop/list', data, callback);
    };

    // 店铺提审
    server.web_shop_submit = function (data, callback) {
        return send('post', contextPath + '/web/shop/submit', data, callback);
    };

    // 店铺审核（admin）
    // server.web_shop_audit = function (data, callback) {
    //     return send('post', contextPath + '/web/shop/audit', data, callback);
    // };

    // 店铺下线（admin）
    // server.web_shop_offline = function (data, callback) {
    //     return send('post', contextPath + '/web/shop/offline', data, callback);
    // };

    // 店铺重新上线（admin
    // server.web_shop_online = function (data, callback) {
    //     return send('post', contextPath + '/web/shop/online', data, callback);
    // };）

    // 省市类表（admin|operator）
    server.web_area_provinces = function (data, callback) {
        return send('post', contextPath + '/web/area/provinces', data, callback);
    };

    // 城市列表（admin|operator）
    server.web_area_cities = function (data, callback) {
        return send('post', contextPath + '/web/area/cities', data, callback);
    };

    // 银行列表（admin|operator）
    server.web_bank_list = function (data, callback) {
        return send('post', contextPath + '/web/bank/list', data, callback);
    };

    // 商圈列表（admin|operator） 
    server.web_cbd_list = function (data, callback) {
        return send('post', contextPath + '/web/cbd/list', data, callback);
    };

    // 添加商圈（admin）
    // server.api_cbd_create = function (data, callback) {
    //     return send('post', contextPath + '/api/cbd/create', data, callback);
    // };

    // 删除商圈（admin）
    // server.api_cbd_delete = function (data, callback) {
    //     return send('post', contextPath + '/api/cbd/delete', data, callback);
    // };

    // 获取店铺类型列表（admin|operator）
    server.api_shop_type_list = function (data, callback) {
        return send('post', contextPath + '/api/shop/type/list', data, callback);
    };

    // 添加店铺类型（admin）
    // server.api_shop_type_create = function (data, callback) {
    //     return send('post', contextPath + '/api/shop/type/create', data, callback);
    // };

    // 删除店铺类型（admin）
    // server.api_shop_type_delete = function (data, callback) {
    //     return send('post', contextPath + '/api/shop/type/delete', data, callback);
    // };

    // 添加业务员（admin）
    // server.api_admin_salesman_create = function (data, callback) {
    //     return send('post', contextPath + '/api/admin/salesman/create', data, callback);
    // };

    // 重置业务员密码（admin）
    // server.api_admin_salesman_passwd = function (data, callback) {
    //     return send('post', contextPath + '/api/admin/salesman/passwd', data, callback);
    // };

    // 冻结业务员账号（admin）
    // server.api_admin_salesman_frozen = function (data, callback) {
    //     return send('post', contextPath + '/api/admin/salesman/frozen', data, callback);
    // };

    // 业务员修改密码
    server.api_salesman_passwd = function (data, callback) {
        return send('post', contextPath + '/api/salesman/passwd', data, callback);
    };

    // 登录（admin|operator）
    server.api_admin_login = function (data, callback) {
        return send('post', contextPath + '/api/admin/login', data, callback);
    };

    // 登录（admin|operator）
    server.api_admin_logout = function (data, callback) {
        return send('post', contextPath + '/api/admin/logout', data, callback);
    };

})();
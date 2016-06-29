var path = require('path'),
    express = require('express'),
    router = express.Router();

// 过滤掉路径中的‘\route’
var static_root = __dirname.replace(/\\tools$/,'') + '/mock/';
var index_root = __dirname.replace(/\\tools$/,'') + '/build/';

function getOptions(){
    return {
        root: static_root,
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        } 
    }
};

router.use(function timeLog(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

router.get('/',function(req, res){
    console.log('index');
    res.sendFile('/index.html', {
        root: index_root,
        headers: {'x-timestamp': Date.now(), 'x-sent': true}
    });
});

router.post('/web/merchant/create',function(req, res){
    console.log('创建商铺');
    res.sendFile('/web_merchant_create.json', getOptions());
});

router.post('/web/merchant/update',function(req, res){
    console.log('修改商户');
    res.sendFile('/web_merchant_update.json', getOptions());
});

router.post('/web/merchant/operator/list',function(req, res){
    console.log('商户列表');
    res.sendFile('/web_merchant_operator_list.json', getOptions());
});

router.post('/web/merchant/submit',function(req, res){
    console.log('商户提审（管理员）');
    res.sendFile('/web_merchant_submit.json', getOptions());
});

router.post('/web/merchant/audit',function(req, res){
    console.log('商户审核（管理员）');
    res.sendFile('/web_merchant_audit.json', getOptions());
});

router.post('/web/merchant/admin/list',function(req, res){
    console.log('商户列表（管理员）');
    res.sendFile('/web_merchant_admin_list.json', getOptions());
});

router.post('/web/merchant/offline',function(req, res){
    console.log('商户下线（管理员）');
    res.sendFile('/web_merchant_offline.json', getOptions());
});

router.post('/web/merchant/online',function(req, res){
    console.log('商户重新上线（管理员）');
    res.sendFile('/web_merchant_online.json', getOptions());
});

router.post('/web/shop/create',function(req, res){
    console.log('创建店铺');
    res.sendFile('/web_shop_create.json', getOptions());
});

router.post('/web/shop/update',function(req, res){
    console.log('修改店铺 （admin|operator）');
    res.sendFile('/web_shop_update.json', getOptions());
});

router.post('/web/shop/list',function(req, res){
    console.log('店铺列表 （admin|operator）');
    res.sendFile('/web_shop_list.json', getOptions());
});

router.post('/web/shop/submit',function(req, res){
    console.log('店铺提审');
    res.sendFile('/web_shop_submit.json', getOptions());
});

router.post('/web/shop/audit',function(req, res){
    console.log('店铺审核（admin）');
    res.sendFile('/web_shop_audit.json', getOptions());
});

router.post('/web/shop/offline',function(req, res){
    console.log('店铺下线（admin）');
    res.sendFile('/web_shop_offline.json', getOptions());
});

router.post('/web/shop/online',function(req, res){
    console.log('店铺重新上线（admin）');
    res.sendFile('/web_shop_online.json', getOptions());
});

router.post('/web/area/provinces',function(req, res){
    console.log('省份列表（admin|operator）');
    res.sendFile('/web_area_provinces.json', getOptions());
});

router.post('/web/area/cities',function(req, res){
    console.log('城市列表（admin|operator）');
    res.sendFile('/web_area_cities.json', getOptions());
});

router.post('/web/bank/list',function(req, res){
    console.log('银行列表（admin|operator）');
    res.sendFile('/web_bank_list.json', getOptions());
});

router.post('/web/cbd/list',function(req, res){
    console.log('商圈列表（admin|operator）');
    res.sendFile('/web_cbd_list.json', getOptions());
});

router.post('/api/cbd/create',function(req, res){
    console.log('添加商圈（admin）');
    res.sendFile('/api_cbd_create.json', getOptions());
});

router.post('/api/cbd/delete',function(req, res){
    console.log('删除商圈（admin）');
    res.sendFile('/api_cbd_delete.json', getOptions());
});

router.post('/api/shop/type/list',function(req, res){
    console.log('获取店铺类型列表（admin|operator）');
    res.sendFile('/api_shop_type_list.json', getOptions());
});

router.post('/api/shop/type/create',function(req, res){
    console.log('添加店铺类型（admin）');
    res.sendFile('/api_shop_type_create.json', getOptions());
});

router.post('/api/shop/type/delete',function(req, res){
    console.log('删除店铺类型（admin）');
    res.sendFile('/api_shop_type_delete.json', getOptions());
});

router.post('/api/admin/salesman/create',function(req, res){
    console.log('添加业务员（admin）');
    res.sendFile('/api_admin_salesman_create.json', getOptions());
});

router.post('/api/admin/salesman/passwd',function(req, res){
    console.log('重置业务员密码（admin）');
    res.sendFile('/api_admin_salesman_passwd.json', getOptions());
});

router.post('/api/admin/salesman/frozen',function(req, res){
    console.log('冻结业务员账号（admin）');
    res.sendFile('/api_admin_salesman_frozen.json', getOptions());
});

router.post('/api/salesman/passwd',function(req, res){
    console.log('业务员修改密码');
    res.sendFile('/api_salesman_passwd.json', getOptions());
});

router.post('/api/admin/login',function(req, res){
    console.log('登录（admin|operator）');
    res.sendFile('/api_admin_login.json', getOptions());
});

router.post('/api/admin/logout',function(req, res){
    console.log('登录（admin|operator）');
    res.sendFile('/api_admin_logout.json', getOptions());
});

module.exports = router;

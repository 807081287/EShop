<%@ page language="java" import="java.util.*,java.math.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String base = request.getContextPath();
	String orderNumber = request.getParameter("out_trade_no");
	String orderAmount = request.getParameter("total_fee");
	/* BigDecimal bd =new BigDecimal(orderAmount); 
	orderAmount = bd.divide(new BigDecimal(100)).setScale(2).toString(); */
	String url=base+"/onlinepaysimulator/alipay/step2.jsp?orderAmount="+orderAmount+"&orderNumber="+orderNumber;
%>
<html>
<head>

<meta charset="gb2312">
<meta content="" name="keywords">
<meta content="" name="description">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<title>支付宝 - 网上支付 安全快速！</title>



<!-- uitpl:/component/trackerTime.vm -->
    <!-- CMS:全站公共 cms/tracker/iconfont.vm开始:tracker/iconfont.vm --><style>
@font-face {
    font-family: "rei";
    src: url("https://i.alipayobjects.com/common/fonts/rei.eot?20150616"); /* IE9 */
    src: url("https://i.alipayobjects.com/common/fonts/rei.eot?20150616#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://i.alipayobjects.com/common/fonts/rei.woff?20150616") format("woff"), /* chrome 6+、firefox 3.6+、Safari5.1+、Opera 11+ */
    url("https://i.alipayobjects.com/common/fonts/rei.ttf?20150616")  format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+ */
    url("https://i.alipayobjects.com/common/fonts/rei.svg?20150616#rei") format("svg"); /* iOS 4.1- */
}
.iconfont {
    font-family:"rei";
    font-style: normal;
    font-weight: normal;
    cursor: default;
    -webkit-font-smoothing: antialiased;
}
</style>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta content="webkit" name="renderer"><!-- CMS:全站公共 cms/tracker/iconfont.vm结束:tracker/iconfont.vm -->

<link href="css/2ACTshL8Vh.css" rel="stylesheet" type="text/css">
<link href="css/alice.components.security-core-2.1-src.css" rel="stylesheet" type="text/css">
<link href="css/front-old.css" rel="stylesheet" type="text/css">
<style>
    #header {
        height: 60px;
        background-color: #fff;
        border-bottom: 1px solid #d9d9d9;
        margin-top: 0px;
    }
    #header .header-title {
        width: 250px;
        height: 60px;
        float: left;
    }
    #header .logo {
        float: left;
        height: 31px;
        width: 95px;
        margin-top: 14px;
        text-indent: -9999px;
        background: none; !important
    }
    #header .logo-title {
        font-size: 16px;
        font-weight: normal;
        font-family: "Microsoft YaHei",微软雅黑,"宋体";
        border-left: 1px solid #676d70;
        color: #676d70;
        height: 20px;
        float: left;
        margin-top: 15px;
        margin-left: 10px;
        padding-top: 10px;
        padding-left: 10px;
    }
    .header-container {
        width: 950px;
        margin: 0 auto;
    }

    body,
    #footer{
        background-color: #eff0f1;
    }

    #footer #ServerNum {
        color: #eff0f1;
    }
    .login-switchable-container {
        background-color: #fff;
    }

    #order.order-bow .orderDetail-base,
    #order.order-bow .ui-detail {
        border-bottom: 3px solid #bbb;
        background: #eff0f1;
        color: #000;
    }

    .order-ext-trigger {
        position: absolute;
        right: 20px;
        bottom: 0;
        height: 22px;
        padding: 2px 8px 1px;
        font-weight: 700;
        border-top: 0;
        background: #b3b3b3;
        z-index: 100;
        color: #fff;
    }

    #partner {
        margin-top: 0;
        padding-top: 0;
        background-color: #eff0f1;
    }

    #order.order-bow .orderDetail-base, #order.order-bow .ui-detail {
        border-bottom: 3px solid #b3b3b3;
    }

    .payAmount-area {
        bottom: 36px;
    }

    .alipay-logo {
        display: block;
        width: 114px;
        position: relative;
        left: 0;
        top: 10px;
        float: left;
        height: 40px;
        background-position: 0 0;
        background-repeat: no-repeat;
        background-image: url(images/T1HHFgXXVeXXXXXXXX.png);
    }
</style>
<script type="text/javascript" src="<%=base%>/resources/shop/js/jquery.js"></script>
<script>
$(function(){
	$("#pwd-explain").hide();
	$("#account-explain").hide();
});
function validateAccount(){
	var account = $("#accountId").val();
	if (account.match(/^(((13[0-9]{1})|159|153)+\d{8})$/)) 
	{
	
	    return true
	}
	else
	{
	    reg=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;
	    if(reg.test(account))
	    {
	        return true;
	    }
	}
	$("#account-explain").show();
	return false;
}

function validatePWD(){
	var password = $("#pwdINPUT").val();
	if(password.length==6){
		return true;
		$("#pwd-explain").hide();
	}
	$("#pwd-explain").show();
	return false;
}

function submitForm(){
	if(validateAccount()){
		$("#account-explain").hide();
		if(validatePWD()){
			var account = $("#accountId").val();
			window.location="<%=url%>"+"&account="+account;	
		}
			
	}else{
		$("#account-explain").show();
	}
}


</script>
</head>
<body>
<div class="topbar">
    <div class="topbar-wrap fn-clear">
        <a seed="goToHelp" target="_blank" class="topbar-link-last" href="https://help.alipay.com/lab/help_detail.htm?help_id=258086">常见问题</a>
        <span class="topbar-link-first">你好，欢迎使用支付宝付款！</span>
    </div>
</div>

<div id="header">
    <div class="header-container fn-clear">
        <div class="header-title">
            <div class="alipay-logo"></div>
            <span class="logo-title">我的收银台</span>
        </div>
    </div>
</div>
<div id="container">



<style>

.ui-securitycore .ui-label, .mi-label {
    text-align: left;
    height: auto;
    line-height: 18px;
    padding: 0;
    display: block;
    padding-bottom: 8px;
    margin: 0;
    width: auto;
    float: none;
    font:14px/1.5 tahoma,arial,\5b8b\4f53;
}

.ui-securitycore .ui-form-item {
    position: relative;
    padding: 0 0 10px 0;
    width: 350px;

}

.ui-securitycore .ui-form-explain {
    height: 18px;
    /*display: block;*/
    font-family:tahoma,arial,\5b8b\4f53;
}

.ui-securitycore .edit-link {
    position: absolute;
    top: -3px;
    right: 0;
}

.ui-securitycore .ui-input {
    height: 28px;
    font-size: 14px;
}

.ui-securitycore .standardPwdContainer .ui-input {
    width: 340px;
}

.ui-securitycore .mobile-section.checkcode-section {
    margin-top: 10px;
}

/*安全服务化必将覆盖的样式*/
.mobile-form .ui-securitycore .ui-form-item-mobile {
    display: none;
}

.mobile-form .ui-securitycore .ui-form-item-mobile .ui-label {

}

.mobile-form .ui-securitycore .ui-form-item-mobile .ui-form-text {
    display: none;
}

.mobile-form .ui-securitycore .ui-form-item-counter {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 20px;
    position: relative;
    height: 87px;
}

.mobile-form .ui-securitycore .ui-form-item-counter .ui-label {
    display: block;
    float: none;
    margin-left: 0;
    text-align: left;
    line-height: 18px !important;
    padding: 0 0 8px 0;
}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-form-field {
    /*display: block;*/
    zoom: 1;
}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-form-field:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-checkcode-input {
    height: 24px;
    line-height: 24px;
    width: 148px;
    border: 1px solid #ccc;
    padding: 7px 10px;
    float: left;
    display: block;
    font-size: 14px;
}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-checkcode-input:focus {
    color: #4d4d4d;
    border-color: #07f;
    outline: 1px solid #8cddff;
}
.mobile-form .ui-securitycore .ui-form-item-counter .eSend-btn {
    float: left;
    color: #08c;
}

#mobileSend {
    position: absolute;
    right: 0;
    top: 26px;
}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-checkcode-messagecode-btn {
    float: left;
    width: 178px;
    height: 40px;
    _height: 38px;
    line-height: 38px;
    _line-height: 35px;
    color: #676d70;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 1px;
    background: #f3f3f3;
    margin-left: 2px;
    padding-left: 0;
    padding-right: 0;

}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-checkcode-messagecode-disabled-btn {
    background: #cacccd;
    border: 1px solid #cacccd;
    color: #aeb1b3;
    font-weight: normal;
    cursor: default;
}

.mobile-form .ui-securitycore .ui-form-item-counter .reSend-btn {
    float: left;
    margin-top: 10px;
    color: #08c;
}

.ui-checkcode-messagecode-disabled-btn {

}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-form-field {
    display: block;
}
.mobile-form .ui-securitycore .ui-form-item-counter .ui-form-field .fn-hide,
.mobile-form .ui-securitycore .ui-form-item-counter .fn-hide .reSend-btn {
    display: none;
}

/*安全服务化必将覆盖的样式*/


.alieditContainer object {
    width: 348px;
    height:38px;
}

#container .alieditContainer {
    width: 348px;
    height: 38px;
}

#container .alieditContainer a.aliedit-install {
    line-height: 38px;
}

/* 安全服务化去控件升级 特木 temu.psc@alipay.com */
#container .alieditContainer .ui-input {
    width:324px;
    padding:7px 10px;
    font-size:14px;
    height: 20px;
    line-height: 24px;
}

#container .alieditContainer .ui-input:focus {
    color:#4D4D4D;
    border-color:#07F;
    outline:1px solid #8CDDFF;
    *padding:7px 3px 4px;
    *border:2px solid #07F;
}


.teBox {
    height: auto;
}

#J_loginPwdMemberT {
    padding: 20px 0 60px 0;
}

#J_loginPwdMemberT #teLogin {
    height: auto;
}

#J_loginPwdMemberT .mi-form-item{
    padding: 0 0 10px 0;
}

#J_loginPwdMemberT .teBox-in {
    padding: 0;
    width: 350px;
    margin: 0 auto;
}

.t-contract-container {
    width: 76%;
}

.contract-container {
    width: 450px;
    margin: 0 auto;
    text-align: left;
    position: relative;
}
.contract-container .contract-container-label {
    width: 450px;
}

.mb-text {
    font-size: 14px;
    padding-top: 10px;
}

.ml5 {
    margin-left: 5px;
}

.user-login-account {
    font-size: 16px;
}

.mi-mobile-button {
    font-weight: bold;
}

.alipay-agreement-link {
    margin-left: 5px;
    color: #999;
}

.alipay-agreement {
    width: 600px;
    height: 270px;
    padding: 10px;
    text-align: center;
}

.alipay-agreement-content {
    height: 230px;
    width: 600px;
    margin-bottom: 5px;
}

#container .order-timeout-notice {
    margin-top: 30px;
    display: none;
}

.login-panel .fn-mb8{
    margin-bottom: 8px;
}

.login-panel .fn-mt8{
    margin-top: 8px;
}

/* 新版扫码页面样式 */


.order-area {
    position: relative;
    z-index: 10;
}

.cashier-center-container {
    overflow: hidden;
    position: relative;
    z-index: 1;
    width: 950px;
    min-height: 460px;
    background-color: #fff;

    border-bottom: 3px solid #b3b3b3;
}

.cashiser-switch-wrapper {
    width: 1800px;
}

.cashier-center-view {
    position: relative;
    width: 803px;
}

.cashier-center-view.view-pc {
    display: block;
}

.cashier-center-view.view-pc .loginBox {
    padding: 60px 0 20px 238px;
    width: 350px;
    margin: 0;
}

.loginBox .login-title-area {
    margin: 0;
    margin-bottom: 30px;
}

.login-title .rt-text {
    font-size: 14px;
}

.teForm {
    padding: 0;
}

.mi-form-item {
    padding: 0 0 12px 0;
}

.submitContainer {
    margin-top: 6px;
}

/* 切换按钮 */
.view-switch {
    width: 146px;
    height: 400px;
    padding-top: 126px;
    background-color: #e6e6e6;
    cursor: pointer;

    /* 禁止选中 */
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    user-select: none;
}

.view-switch.qrcode-show {
    border-left: 1px solid #d9d9d9;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.view-switch.qrcode-hide {
    border-right: 1px solid #d9d9d9;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.switch-tip {
    text-align: center;
}

.switch-tip-font {
    font-size: 16px;
    font-family: tahoma, arial, '\5FAE\8F6F\96C5\9ED1', '\5B8B\4F53';
}

.switch-tip-icon {
    position: relative;
    z-index: 10;
    display: block;
    margin-top: 4px;
    font-size: 78px;
    color: #a6a6a6;
    cursor: pointer;
}

.switch-tip-btn {
    display: block;
    width: 106px;
    height: 36px;
    margin: 6px auto 0;
    border: 1px solid #0fa4db;
    background-color: #00aeef;
    border-radius: 5px;

    font-size: 12px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    color: #fff;
    text-decoration: none;
}

.switch-tip-btn:hover {
    color: #fff;
    text-decoration: none;
}

.view-switch.qrcode-hide .view-switch-content {
    height: 334px;
    padding-top: 126px;
}

.switch-pc-tip .switch-tip-icon {
    position: relative;
    z-index: 10;
    margin-top: 4px;
    font-size: 78px;
}

.switch-tip-icon-wrapper {
    position: relative;
}

.switch-tip-icon-wrapper:before {
    content: '';
    position: absolute;
    left: 47px;
    top: 24px;
    z-index: 0;
    width: 50px;
    height: 70px;
    background-color: #fff;
}

.switch-qrcode-tip .switch-tip-icon-wrapper:before {
    left: 38px;
    top: 25px;
    width: 70px;
    height: 47px;
}

.switch-tip-icon-img {
    position: absolute;
    left: 58px;
    top: 35px;
    z-index: 11;
}

.switch-qrcode-tip .switch-tip-icon-img {
    left: 48px;
    top: 39px;
}

.standardPwdContainer object {
    width: 348px;
    height:38px;
}

#container .standardPwdContainer {
    width: 348px;
    height: 38px;
}

#container .standardPwdContainer a.aliedit-install {
    line-height: 38px;
}

#container .standardPwdContainer .ui-input {
    width:324px;
    padding:7px 10px;
    font-size:14px;
    height: 20px;
    line-height: 24px;
}

#container .standardPwdContainer .ui-input:focus {
    color:#4D4D4D;
    border-color:#07F;
    outline:1px solid #8CDDFF;
    *padding:7px 3px 4px;
    *border:2px solid #07F;
}
.mi-form-explain {
    background-position: -368px -626px;
    color: #ff5243;
}
</style>

<div id="J_orderPaySuccessNotice" class="mi-notice mi-notice-success mi-notice-titleonly order-timeout-notice">
    <div class="mi-notice-cnt">
        <div class="mi-notice-title">
            <i title="支付成功" class="iconfont">?</i>

            <h3>支付成功，<span id="J_countDownSecond" class="ft-orange">3</span> 秒后自动返回商户。</h3>
        </div>
    </div>
</div>

<div id="J_orderDeadlineNotice" class="mi-notice mi-notice-error mi-notice-titleonly order-timeout-notice">
    <div class="mi-notice-cnt">
        <div class="mi-notice-title">
            <i title="交易超时" class="iconfont">?</i>

            <h3>抱歉，您的交易因超时已失败。</h3>

            <p class="mi-notice-explain-other">
                您订单的最晚付款时间为： <span id="J_orderDeadline"></span>，目前已过期，交易关闭。
            </p>
        </div>
    </div>
</div>

<!-- CMS:全站公共 cms/tracker/um.vm开始:tracker/um.vm -->



<style type="text/css">
.umidWrapper{display:block; height:1px;}
</style>
<span style="display:inline;width:1px;height:1px;overflow:hidden">


<script charset="utf-8" src="https://assets.alicdn.com/g/security/umscript/3.0.11/um.js" type="text/javascript"></script>


</span>
<!-- CMS:全站公共 cms/tracker/um.vm结束:tracker/um.vm -->

<!-- 页面主体 -->
<div class="fn-clear" id="content">
        
<div data-module="excashier/login/2015.08.01/orderDetail" class="order-area" id="J_order">


        
        
                
        <div class="order order-bow" data-role="order" id="order">
                            <form class="fn-hide" id="J_timeoutForm" method="post" action="https://excashier.alipay.com:443/standard/timeOutErrorPage.htm" data-module="excashier/login/2015.08.01/checkTimeout">
                    	<input type="hidden" value="ziwC80zZa8T2mstDYC71ITI9WWSaqW0O" name="_form_token">
                    <input type="hidden" id="orderId" value="exc_51ffa801dfe648938a9963b3e588e288" name="orderId">
                    <input type="hidden" id="J_orderTimeoutRequestInterval" value="" name="orderTimeoutRequestInterval">
                    <input type="hidden" value="https://excashier.alipay.com:443/standard/payOrderClosedCountDown.json" name="timeoutCheckUrl">
                    <input type="hidden" id="J_timeoutMillseconds" value="3599747" name="timeoutMillseconds">
                    <input type="hidden" id="J_timeoutUrl" value="https://excashier.alipay.com:443/standard/timeOutPage.htm?auth_order_id=exc_51ffa801dfe648938a9963b3e588e288" name="timeoutUrl">
                    <input type="submit" value="">
                </form>
                        <div data-role="J_orderDetailBase" class="orderDetail-base">
                <div class="order-extand-explain fn-clear">
            <span data-role="J_orderTypeQuestion" style="cursor: auto" class="fn-left explain-trigger-area order-type-navigator">

            <span>正在使用即时到账交易</span>
    
    <span style="cursor: pointer;color: #08c;" seed="order-type-detail" data-role="J_questionIcon">[?]</span>
            </span>
                                            <span id="teDelay" class="fn-left create-time">
                <span>交易将在<span id="teOrderDelayText">59分钟</span>后关闭，请及时付款！</span>
            </span>
                                    </div>
                <div class="commodity-message-row">
            <span class="first long-content">
                天购网订单-<%=orderNumber %>
            </span>
                                            <span class="second short-content">
                                                                    收款方：天购网有限公司
                            </span>
                                    </div>
                                                <span id="J_basePriceArea" class="payAmount-area">
                                                     <strong class=" amount-font-22 "><%=orderAmount%></strong> 元
                
        </span>
            </div>
            
<div data-role="J_orderTypeTip" seed="question-tip" class="ui-tip ui-question-tip fn-hide">
    <div class="ui-dialog-container">
        <div class="ui-dialog-head-text">
            <span>付款后资金直接进入对方账户</span>
        </div>

        <ul class="ui-dialog-content">
            <li>
                若发生退款需联系收款方协商，如付款给陌生人，请谨慎操作。
            </li>
        </ul>
    </div>
    <div class="ui-icon-dialog-arrow">
        ↓
    </div>
</div>


<div data-role="J_exchangeTip" class="ui-tip ui-question-tip fn-hide">
    <div style="width: 280px;" class="ui-dialog-container">
        <ul class="ui-dialog-content">
            <li>
                1、支付宝不收取任何货币兑换手续费。
            </li>
            <li>
                2、最终支付金额为人民币金额，非外币金额。
            </li>
			        </ul>
    </div>
    <div class="ui-icon-dialog-arrow">
        ↓
    </div>
</div>

            
            
            

                <div id="J-orderDetail" data-role="J_orderDetailCnt" class="ui-detail fn-hide">
                    <div class="ajax-Account od-more-cnt fn-clear">
                        <div class="first  long-content">天购网订单-<%=orderNumber %></div>
                        <ul class="order-detail-container">
                            <li class="order-item">
                                                                                                             <table>
    <tbody>
                <tr>
            <th class="sub-th">收款方：</th>
            <td>
                                    天购网
                                            </td>
        </tr>
                        <tr>
            <th class="sub-th">订单号：</th>
            <td><%=orderNumber%></td>
        </tr>
                        <tr>
            <th class="sub-th">商品名称：</th>
            <td>
                                    天购网-<%=orderNumber%>
                            </td>
        </tr>
                        <tr>
            <th class="sub-th">商品描述：</th>
            <td>天购网-<%=orderNumber%></td>
        </tr>
                        <tr>
            <th class="sub-th">交易金额：</th>
            <td><%=orderAmount%></td>
        </tr>
                            </tbody>
</table>

                                                                    
                            </li>
                        </ul>
                    </div>
        <span class="payAmount-area">
                <strong class=" amount-font-22 "><%=orderAmount %></strong> 元
        </span>
                    <iframe data-role="J_orderDetailFrameFix" class="ui-detail-iframe-fix" src="javascript:''"></iframe>
                </div>

            <a data-role="J_oderDetailShrink" seed="order-detail-more" href="#" class="order-ext-trigger fn-hide" id="J_OrderExtTrigger">
                订单详情
            </a>
		        </div>
        <input type="hidden" id="J_orderId" value="exc_51ffa801dfe648938a9963b3e588e288" name="oid">
        <input type="hidden" id="J_partnerId" value="2088201962473581" name="pid">
        <input type="hidden" id="J_outBizID" value="<%=orderNumber%>" name="pid">
        <input type="hidden" id="J_qrContextId" value="snapshot2015121900600033czc4a8bdc409a0fa56" name="qrContextId">
        <input type="hidden" id="J_qrPayLoopCheckUrl" value="https://tradeexprod.alipay.com/fastpay/qrPayLoopCheck.json" name="qrPayLoopCheckUrl">
        <input type="hidden" id="J_qrDiscountText" value="" name="qrDiscountText">
        <input type="hidden" id="J_qrDiscountDesc" value="" name="qrDiscountDesc">

</div>




    <!-- 操作区 -->
    <div class="cashier-center-container">
        
        <div class="cashiser-switch-wrapper fn-clear" id="J_loginPwdMemberTModule" data-module="excashier/login/2015.08.02/loginPwdMemberT">

            <!-- 扫码支付页面 -->
            

                        
<!-- 点击切换区域 -->

            <!-- PC 付款登录页面 -->
            <div id="J_view_pc" class="cashier-center-view view-pc fn-left">
                <form id="J_TloginForm" method="post" action="https://excashier.alipay.com:443/standard/securityPost.json?auth_order_id=exc_51ffa801dfe648938a9963b3e588e288&amp;viewModel=payerPwdLoginViewModel">
                    <input type="hidden" value="https://excashier.alipay.com:443/standard/securityRender.phtm?auth_order_id=exc_51ffa801dfe648938a9963b3e588e288&amp;viewModel=payerPwdLoginViewModel" name="commonAccountIdentiAuthUrl">
                                        	<input type="hidden" value="eCGkO42EsGYZuqDI1ceaBYIQCFDuGZHe" name="_form_token">
                        <input type="hidden" value="" name="viewModelId">

                                        


<div class="loginBox">

    <div class="login-title-area">
        <div class="login-title">
            <div class="login-title-left">
                <p class="lt-text ft-yh">登录支付宝账户付款</p>
            </div>

        </div>
    </div>

    <div class="teForm">
        <div class="login-panel">
            
            <div id="J_commonAccountContainer" class="mi-form-item commonAccountContainer">
                <label class="mi-label">账户名：</label>
                <span class="user-login-account fn-hide"></span>
                <input type="email" placeholder="手机号码/邮箱" seed="NewQr_tAccountInput" id="accountId" value="" class="mi-input mi-input-account" name="loginId">
                <div id="account-explain" class="mi-form-explain">请输入正确的Email地址或11位手机号码</div>
            </div>

            <div id="J_commonAccountFixedContainer" class="mi-form-item commonAccountFixedContainer fn-mb8 fn-hide">
                <label class="mi-label">账户名：</label>
                <div class="fn-mt8"><span id="J_userLoginText" class="user-login-account"></span><span id="J_userLoginExplain" class="fn-ml5 fn-hide">已创建订单</span></div>
                <div class="mi-form-explain"></div>
            </div>

            <div class="mi-form-item" id="J_passwordContainer">
                <label class="mi-label">支付密码：</label>
                <span>
				<input id="pwdINPUT" type="password" name="loginId" class="mi-input mi-input-account" value="" id="J_tLoginId" seed="NewQr_tAccountInput">


            <!-- CMS:cms/公共模块/multiPolicyEditScript开始:common/multiPolicyEditScript.vm -->
<style type="text/css">
  input.sixDigitPassword {
    position: absolute;
    color: #fff;
    opacity: 0;
    width: 1px;
    height: 1px;
    font-size: 1px;
    left: 0;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-user-select:initial; /* 取消禁用选择页面元素 */
    outline: 'none';
    margin-left: '-9999px';
  }

  div.sixDigitPassword {
    cursor:text;
    background: #fff;
    outline: none;
    position: relative;
    padding: 8px 0;
    height: 14px;
    border: 1px solid #cccccc;
    border-radius: 2px;
  }

  div.sixDigitPassword i {
    float: left;
    display: block;
    padding: 4px 0;
    height: 7px;
    border-left: 1px solid #cccccc;
  }

  div.sixDigitPassword i.active {
    background-image: url("images/T1nYJhXalXXXXXXXXX.gif");
    background-repeat: no-repeat;
    background-position: center center;
  }

  div.sixDigitPassword b {
    display: block;
    margin: 0 auto;
    width: 7px;
    height: 7px;
    overflow: hidden;
    visibility:hidden;
    background-image: url("images/T1sl0fXcBnXXXXXXXX.png");
  }

  div.sixDigitPassword span {
    position: absolute;
    display: block;
    left: 0px;
    top: -1px;
    height: 30px;
    border: 1px solid rgba(82, 168, 236, .8);
    border: 1px solid #00ffff\9;
    border-radius: 2px;
    visibility: hidden;
    -webkit-box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.75), 0 0 8px rgba(82, 168, 236, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
  </style>


<!-- CMS:cms/common/script_layout.vm开始:common/script_layout.vm --><!-- CMS:sSnapshot.vm开始:securitycore/common/script_snapshot.vm -->
<!-- CMS:sSnapshot.vm结束:securitycore/common/script_snapshot.vm -->



<!-- CMS:cms/common/script_layout.vm结束:common/script_layout.vm -->








      

                </span>
 
                <div id="pwd-explain" class="mi-form-explain">
                    <p>
                       	 请输入账户的 <span class="ft-red">6位支付密码</span>，不是登录密码。
                    </p>
                </div>
            </div>
            


            <div class="fn-hide" data-role="alieditContainer"></div>

            <div class="submitContainer fn-clear">
                <div class="t-contract-container fn-left">
									
                    								</div>
                <div class="left-submitContainer fn-left">
                    <a data-submittext="提交中..." data-defaulttext="下一步" seed="NewQr_tAccountSubmit" data-role="submitBtn" id="J_newBtn" class="newBtn-blue newBtn-long" href="javascript:void(0);" onclick="submitForm();">
                        <span>下一步</span>
                    </a>
                </div>
            </div>
			<div id="J_agreementForexprod" class="fn-hide">
                <div class="alipay-agreement" data-role="J_alipayForexprodAgreement">
        <textarea class="alipay-agreement-content" readonly="readonly">&#12288;&#12288;鉴于您有通过支付宝（中国）网络技术有限公司（以下简称支付宝）的支付宝系统向支付宝合作银行发送购买外汇信息的需求，您同意在签订本协议之前已充分阅读本协议条款，并同意接受本协议条款的约束。
1、您声明，您满足与支付宝签订的《支付宝服务协议》中约定的支付宝用户的身份要求，且按照支付宝的要求通过了您的支付宝账户实名认证，具有签订和履行本协议的法律资格。
2、您同意，由支付宝合作银行提供的发布在支付宝网站支付页面的外汇牌价是您自愿接受的，而不论该外汇牌价是否是最新的（支付宝在支付宝网站支付页面发布的外汇牌价是支付宝合作银行根据双方约定提供的，但支付宝不保证该牌价是您向支付宝合作银行购买外汇时最新的牌价），一旦您在支付宝网站支付页面点击确认购买，即代表您同意选择支付宝的支付宝系统按照该牌价中相应外汇的汇率向支付宝合作银行发送外汇购买信息并确定购买。
3、支付宝通过与支付宝合作银行之间的合作关系确保您按照您选择的牌价成功购买指定的外汇，且您不对其选择的牌价中标明的汇率与实际购买时执行的汇率之间的汇兑损益负责（不承担汇兑损失也不享有汇兑收益），该汇兑损益由支付宝与支付宝合作银行协商确定。
4、双方明确，在您通过支付宝的支付宝系统向支付宝合作银行发送外汇购买信息后，您即与支付宝合作银行直接形成外汇购买协议，相应的权利义务即由您与支付宝合作银行负责履行与承担，支付宝不对此提供任何形式的担保或承担任何其他法律责任。同时，支付宝有权将您支付宝账户中与购汇指令等值的人民币资金支付给支付宝合作银行。若您发送的购汇指令中所购外汇等值的人民币金额超出您支付宝账户内人民币资金的，该购汇指令自动无效。
5、您同意，您每天通过支付宝系统在支付宝合作银行成功购买外汇所支付的人民币资金不超过3万元，您每年购买外汇的限额应符合外汇相关法律法规的规定。
6、本协议未予约定的，以双方签订的《支付宝服务协议》《支付宝认证服务协议》的约定为准。
7、本协议在您在勾选“本人已阅读协议内容并同意接受”复选框时生效。
        </textarea>
                    <a data-role="J_forexprodConfirmAgreement" class="mi-button mi-button-lorange" href="javascript:;">
                        <span seed="NewQr_agreement-confirm-btn" class="mi-button-text">确定</span>
                    </a>

                </div>
            </div>
        </div>
    </div>

</div>
<input type="hidden" id="J_pwdLoginFront" name="pwdLoginFront" value="false">
                </form>
            </div>

        </div>
    </div>
    <!-- 操作区 结束 -->

</div>

<!-- CMS:全站公共 cms/安全cms/外部收银台信息采集结束:security/sensorSdk.vm -->



<input type="hidden" value="https://excashier.alipay.com:443/standard/agreementDetail.phtm?auth_order_id=exc_51ffa801dfe648938a9963b3e588e288&amp;viewModel=standard%3AcommonAgreementViewModel.vm" name="commonAgreementUrl">
<input type="hidden" value="https://excashier.alipay.com:443/standard/agreementDetail.phtm?auth_order_id=exc_51ffa801dfe648938a9963b3e588e288&amp;viewModel=standard%3AmemoryPayAgreementViewModel.vm" name="memoryPayAgreementUrl">




<div id="footer">
    <!-- CMS:全站公共 cms/foot/copyright.vm开始:foot/copyright.vm --><style>
.copyright,.copyright a,.copyright a:hover{color:#808080;}
</style>
<div class="copyright">
      支付宝版权所有 2004-2015 <a target="_blank" href="http://fun.alipay.com/certificate/jyxkz.htm">ICP证：沪B2-20150087</a>
  </div>
<div id="ServerNum" class="server">
  excashier-60-29 &nbsp; 0ae46e5614505367704266956_0
</div><!-- CMS:全站公共 cms/foot/copyright.vm结束:foot/copyright.vm --></div>
</div><!-- /container -->
<div id="partner"><img src="images/2R3cKfrKqS.png" alt="合作机构"></div>





<div id="J_qrPayTip" class="ui-poptip ui-poptip-white qrpay-discount-tip fn-hide">
    <div class="ui-poptip-shadow">
        <div class="ui-poptip-container qrpay-discount-container">
            <div class="ui-poptip-arrow ui-poptip-arrow-10">
                <em></em>
                <span></span>
            </div>
            <div class="ui-poptip-content">
                <p>使用扫码支付，不可与</p>
                <p>支付宝其他优惠同时使用。</p>
            </div>
        </div>
    </div>
</div>




</body></html>
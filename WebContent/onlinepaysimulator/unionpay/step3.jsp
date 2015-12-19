<%@ page language="java" import="java.util.*,java.math.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
	String base = request.getContextPath();
	String orderNumber = request.getParameter("orderNumber");
	String orderAmount = request.getParameter("orderAmount");
	final BigDecimal amountB = new BigDecimal(orderAmount);
	final String amount = amountB.multiply(new BigDecimal(100)).toString();
	String action=base+"/s-unionpay/notify/unionpay/general/"+orderNumber+"/"+amount
			+".jhtml?merId=eshop&orderCurrency=156&respCode=00&orderAmount="+amount+"&orderNumber="+orderNumber;
%>
<!DOCTYPE html>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>银联在线支付-银行卡综合性网上交易转接清算平台！</title>
        <meta http-equiv="X-UA-Compatible" content="requiresActiveX=true"/>
    <meta name="renderer" content="webkit">
    <meta name="keywords" content='银联,银联在线,中国银联,银联支付,银联在线支付,中国银联在线,中国银联在线支付,银联支付平台'/>
    <meta content='银联在线支付是中国银联联合商业银行共同推出的集成化、综合性、开放性网上支付平台,全面支持各类型银联卡,可为银联卡持卡人的购物缴费、商旅预定、慈善捐款、转账还款等提供安全、快捷、多选择、全球化的支付服务.' name="description"/>
<link rel="shortcut icon" href="https://static.95516.com/gw/b2c/resources/upop/zh_CN/images/global/favicon.ico" type="image/x-icon" />
<link href='<%=base%>/resources/paymentsimulator/css/up.pos.css' rel="stylesheet" type="text/css" />
<link href='<%=base%>/resources/paymentsimulator/css/up.card.css' rel="stylesheet" type="text/css" />
<link href='<%=base%>/resources/paymentsimulator/css/up.global.upop.css' rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<%=base%>/resources/shop/js/jquery.js"></script>
<script>
$(function() {	
    jump(2);
});
function jump(count) {
    window.setTimeout(function(){
        count--;
        if(count > 0) {
            jump(count);
        } else {
            location.href="<%=action%>";
        }
    }, 1000);
}
function notify(){
window.location="<%=action%>";
}
</script>
</head>

<body>

<div class="header_wrap">
    <div class="header">
        <div class="fl">
            <a id="header-online-unionpay-href-id2" href="https://www.95516.com/" target="_blank" class="logo_unionPay">银联在线支付</a>
            <div id="upgg_location-87"></div>
        </div>
        <div class="fr">
            <p class="userlogin">
                <a id="header-online-unionpay-href-id" href="https://www.95516.com/" target="_blank">首页</a>|<a id="header-help-center-id" href="https://static.95516.com/static/help/index.html" target="_blank">帮助中心</a>
                <em>|</em><div class="select_box" locale="en_US" ><span id="laguage_select" class="laguage_select" locale="en_US" title="Change language&#13;更改语言">English</span><ul class="select_item dn"><li><a href="#" locale="zh_TW">繁體中文</a></li><li><a href="#" locale="ja_JP">日本語</a></li><li><a href="#" locale="ko_KR">한국어</a></li><li><a href="#" locale="fr_FR">Français</a></li><li><a href="#" locale="es_ES">Español</a></li><li><a href="#" locale="ru_RU">русский</a></li><li><a href="#" locale="pt_PT">Português</a></li><li><a href="#" locale="ar_AR">عربي </a></li></ul></div>            </p>
            <strong>24小时客服热线95516</strong>
        </div>
    </div>
</div>



<style type="text/css">
.alert_box {color:#333; width:700px; margin:0 auto; padding-left:40px; min-height:40px; position:relative; padding:40px 0 0;}
.alert_box a {color: #4b7caf}
.icon_success, .icon_fail,.icon_error{ width:32px; height:32px;position: relative;top:0px; /*position:absolute; top:5px; left:0; */display:inline-block; float:left; padding-right:10px; margin-top:4px;}
.icon_success{ background-position:0 -406px;}
.ocx_style{border:1px solid #7F9DB9; width:189px; height:29px;line-height:29px;_margin-left:3px;}
.write_success{background:url(https://static.95516.com/gw/b2c/resources/upop/zh_CN/images/global/success_16px.gif) left 50% no-repeat; text-indent:20px; color:#008000;}
.write_error{ background:url(https://static.95516.com/gw/b2c/resources/upop/zh_CN/images/global/fail_16px.gif) left 50% no-repeat; text-indent:20px; color:#df3234;}
.notice_boxerror{  border:1px solid #ff8e8e; background-color:#ffeded; line-height:20px;   padding: 0 10px 0 3px;   margin: 0px 50px 10px 50px;}
.read_ct{ margin-top:10px;}
.read_ct a{ text-decoration:underline; color:#4d7cb2;}
.upoint_msg span{ font-weight:bold; color:#e86105;}
</style>

    <input type="hidden" id="PageEname" name="PageEname" value="paySuccess" />
	<input type="hidden" id="upCookieBanks" name="upCookieBanks" value="" />
	<input type="hidden" id="B2BFlag" name="B2BFlag" value="" />
    <input type="hidden" id="merCode" name="merCode" value="898111148990267" />

    <form action="/b2c/showCard.action?transNumber=201512191515575581038" id="cardPayForm" method="post" class="dn">
        <input type="hidden" name="reOpenCard" id="reOpenCard" value="">
    </form>


    <div class="blue_box border1p">
        <div class="bgwhite clearfix">
        <div class="read_ct">
                           	<strong>页面将在3秒后跳转通知商户...</strong>
        </div>
        <div class="alert_box clearfix">
            <span class="icon_success"></span>
            <div class="fl">
                  <p class="main_word" style="width: 656px">您已成功支付<em class="money"><%=orderAmount %></em>元！
                                                    
                              <!--<s:if test="#instalmentResult.feeType.toString() =='allInfirst'"> 分期提示 信息 后端提供-->
                                  <!--<s:text name="installment_first">-->
                                      <!--<s:param ><s:property value="#instalmentResult.periods"></s:property></s:param>-->
                                      <!--<s:param ><s:property value="#instalmentResult.feeDisplay"></s:property></s:param>-->
                                      <!--<s:param ><s:property value="#instalmentResult.firstDisplay"></s:property></s:param>-->
                                      <!--<s:param ><s:property value="#instalmentResult.averageDisplay"></s:property></s:param>-->
                                  <!--</s:text>-->
                                <!--</s:if><s:else>-->
                                      <!--<s:text name="installment_average">-->
                                          <!--<s:param ><s:property value="#instalmentResult.periods"></s:property></s:param>-->
                                          <!--<s:param ><s:property value="#instalmentResult.feeDisplay"></s:property></s:param>-->
                                          <!--<s:param ><s:property value="#instalmentResult.averageDisplay"></s:property></s:param>-->
                                      <!--</s:text>-->
                                <!--</s:else>-->
                                        </p>
                
                                  <p class="sub_word" style="margin-top:15px;">
                      为方便您查看商户订单状态，请点击                      <input id="btnBack" name="btnBack" type="button" value='返回商户' class="btn_blue139p" onclick="notify();"/>
                  </p>
                                  

                
                    <div class="trans_search_tips">
                        <span class="trans_search_tips_icon"></span>为方便后续查询交易，建议留存该笔交易的商户订单号：<%=orderNumber %>

                                            </div>

                


            </div>
        </div>

       

            <div class="dn" id="promotionEntry"></div>

                    </div>


    </div>
        <div class="activ clearfix">
        <h2>热门活动：</h2>
        <div class="activ_box">
            <div>
                <div id="upgg_location-44"></div>
                <div id="upgg_location-45"></div>
                <div id="upgg_location-46"></div>
            </div>
        </div>
    </div>
    
<div class="app_ad">
    <h2>银联在线支付精品服务:</h2>
    <div class="app_ct clearfix">
        <div class="app_box bg_fix">
            <a id="hot-app-huankuan-id" class="credit" href="https://app.95516.com/huankuan/main.do" target="_blank">
                <p class="title">信用卡还款</p>
                <p class="word_ad">无需登录网银、跨行免费</p>
            </a>
        </div>
        <div class="app_box">
            <a id="hot-app-phone-id" class="phone" href="https://app.95516.com/sjcz/main.do" target="_blank">
                <p class="title">手机充值</p>
                <p class="word_ad">在线充值、即充即到账</p>
            </a>
        </div>
        <div class="app_box">
            <a id="hot-app-film-id" class="film" href="https://app.95516.com/movie/main.do" target="_blank">
                <p class="title">影视票务</p>
                <p class="word_ad">在线购票，享受超值优惠</p>
            </a>
        </div>
        <div class="app_box">
            <a id="hot-app-train-id" class="integral" href="https://www.95516.com/portal/app/train.do" target="_blank">
                <p class="title">购买火车票</p>
                <p class="word_ad">无需排队，轻松在线购票</p>
            </a>
        </div>

    </div>
</div>




</script>

由于您的银行卡尚未通过发卡银行的手机号验证，仅能使用临时支付功能。




</div>

<div class="footer">
    <div><a id="china-unionpay-href-id" href="http://cn.unionpay.com/" target="_blank">银联官网</a>|<a id="footer-online-unionpay-href-id" href="https://www.95516.com/" target="_blank">银联在线支付</a>|<a id="online-unionpay-about-href-id" href="http://static.95516.com/static/page/177.html" target="_blank">关于我们</a>|<a id="online-unionpay-terms-href-id" href="http://static.95516.com/static/page/183.html" target="_blank">网站使用条款</a></div>
    <p>中国银联股份有限公司版权所有 &copy; 2002-2015 <em>沪ICP备07032180号</em></p>
</div>

<div class="dn" id="hidden_area">
    <input type="hidden" name="devTrace" value="[151.70, 151.70]">
    <input type="hidden" name="upop_release_version" value="r_1_0_0">
    <div class="dn" id="upeditorMachineInfo_area"></div>
    <input type="hidden" name="secureKey_id" id="secureKey_id" value="">
</div>
<div id="upeditorMachineInfo_area"></div>

</body>
</html>
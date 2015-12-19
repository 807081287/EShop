<%@ page language="java" import="java.util.*,java.math.*"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String base = request.getContextPath();
	String orderNumber = request.getParameter("orderNumber");
	String orderAmount = request.getParameter("orderAmount");
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
$(function(){
	$("#cardNumberTip").hide();
});

function validateCard(){
	var cardNumber = $("#mockLoginPassword").val();
	if(cardNumber.length<6){
		$("#cardNumberTip").show();
		return false;
	}else{
		$("#cardNumberTip").hide();
		return true;
	}
}
function submitForm(){
	if(validateCard()){
		$("#cardPay").submit();
	}
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
                <a id="header-online-unionpay-href-id" href="https://www.95516.com/" target="_blank">首页</a><em>|</em>
                <a id="header-user-login-href-id" class="pop_login">登录</a>|
                <a id="header-user-reg-href-id"  class="pop_reg">注册</a>|
                <a id="header-help-center-id" href="https://static.95516.com/static/help/index.html" target="_blank">帮助中心</a>
                <em>|</em><div class="select_box" locale="en_US" ><span id="laguage_select" class="laguage_select" locale="en_US" title="Change language&#13;更改语言">English</span><ul class="select_item dn"><li><a href="#" locale="zh_TW">繁體中文</a></li><li><a href="#" locale="ja_JP">日本語</a></li><li><a href="#" locale="ko_KR">한국어</a></li><li><a href="#" locale="fr_FR">Français</a></li><li><a href="#" locale="es_ES">Español</a></li><li><a href="#" locale="ru_RU">русский</a></li><li><a href="#" locale="pt_PT">Português</a></li><li><a href="#" locale="ar_AR">عربي </a></li></ul></div>            </p>
                        <strong>24小时客服热线95516</strong>
        </div>
    </div>
</div>
<script type="text/javascript">window._UPOP_ENTER_TIME = new Date().getTime();</script><div class="content clearfix">



<style type="text/css">
    .txt_error {text-indent: 20px;color: #df3234;background:url(https://static.95516.com/gw/b2c/resources/upop/zh_CN/images/global/fail_16px.gif) no-repeat left 1px;line-height: 18px;}
</style>


<div class="order clearfix" id="order-detail-info">
    <input type="hidden" id="merCode" name="merCode" value="898111148990267" />
    <input type="hidden" id="orderAmount" name="orderAmount" value="<%=orderAmount %>" />
    <input type="hidden" id="discountBizOpen" name="discountBizOpen" value="true" />



    

        <div class="order_main">
        <p class=" order_sum ">
            <span class="item_title">
                                    订单金额：
                            </span><em class="order_money"><%=orderAmount %></em>
            <em id="pay-currency-type">
                                    元
                            </em>
        </p>
        <p class=" order_num " title="38234593931450509705" >订单编号：<%=orderNumber %></p>
        <p class="fl txt_over" title="天购网" ><span class="item_title">商户名称：</span><img src="https://static.95516.com/static/merchant/logos4gateway/898111148990267.gif" onerror="this.style.display='none';document.getElementById('merchantNameDisplay_id').style.width='240px';"/><em id="merchantNameDisplay_id">天购网</em></p>
                    <!-- <div class="order_flag">
                <a id="order-details-down-id" class="down">订单详情<span>[+]</span></a><a id="order-details-up-id" class="up dn">订单详情<span>[-]</span></a>



            </div> -->
        





    </div>
    <div class="order_detail dn">
        <div class="order_others">
            <p class=" order_date ">交易日期：2015-12-19</p>
            <p class=" order_sort ">
                交易种类：
                                    直接消费                            </p>
            <p class="order_mon">
                交易币种：
                                    人民币
                            </p>
        </div>
                <div class="order_jigou">本商户由银联合作机构提供收单服务：北京银联商务</div>
    </div>


    <div class="upgg_location_242_class"   >
        <div id="upgg_location-242"></div>
    </div>


</div>



<div class="installment_u_pop dn">      <div class="ebank_link inner_pop">
        <span class="icon_error"></span>
        <p class="main_word">使用银联红包或其它积分抵扣时，无法使用分期付款</p><!--使用分期付款时，无法使用U点抵扣-->
        <p class="sub_word">如您放弃银联红包或银行卡积分抵扣，请点击继续按钮选择分期付款</p>
        <div class="btn_in" style="margin-left:50px">
            <input id="installment_continuePay" type="button" class="btn_blue" value="继 续"  style="margin-right:20px"/>
            <input id="installment_back" type="button" class="btn_gray92p" value="返 回" />
        </div>
    </div>
</div>



<div class="order_prompt clearfix">
    <div class="pos_notify">
        <div id="upgg_location-41"></div>
    </div>
    </div><input type="hidden" id="PageEname" name="PageEname" value="cardPay"/>
<input type="hidden" name="data-mcp-white" id="data-mcp-white"  value="" />
<input type="hidden" name="data-mcp-black" id="data-mcp-black" value='' />
    <form id="showCardForm" class="dn" action="/b2c/showCard.action?transNumber=201512191521451896848" method="post">
        <input type="hidden" name="reOpenCard"  value="false">
        <input type="hidden" name="conversionType" value="" />
        <input type="hidden" name="fromBankOpenCard"  value="false" />
        <input type="hidden" id="showCardForm_cardNumber" name="cardNumber" value="6217857600016919644"/>
    </form>
<form id="switchCardForm" class="dn" action="/b2c/switchCard.action?transNumber=201512191521451896848" method="post">
            <input type="hidden" id="returnCardNumber" name="returnCardNumber" value="6217857600016919644"/>
    </form>


<div class="blue_tab">
    
<div class="blue_title">
    <span class="blue_lf"></span>
    <div class="pay_tab"><span class="tab_lf"></span><span class="tab_txt">银联卡支付</span><span class="tab_rt"></span></div>
                                                    
            
    <span class="blue_rt"></span>
</div>    <div class="tab_content">
        <div id="content-tips-security-id"><div class="content-tips-security dn" id="content-tips-security"><span></span>系统已成功加载了安全控件，保障您在当前页面输入信息的安全！</div></div>
        <div id="content-tips-smscode-id" class="dn"></div>
    <div class="content_main" id="content-div-id">
        <div class="notice_fail dn">        <span></span><div class="fr" id="notice_fail_msg"></div><div class="clear"></div>
    </div>
    <div class="notice_alarm dn">        <span></span><div class="fr">该卡在银行端已关闭银联在线支付业务，<a id="return57supportauth" ><img src="https://static.95516.com/gw/b2c/resources/upop/zh_CN/images/global/toopen.png" class="btn_imgopen" id="btn_imgopen"></a></div>
        <div class="clear"></div>
    </div>
    <div class="notice_alarm_blue dn">        <span></span><div class="fr"></div>
        <div class="clear"></div>
    </div>
                <div class="notice_boxerror dn">
            <div class="iconerr"></div><div class="errct" id="notice_boxerror_ur"></div><div class="clear"></div>
        </div>
        <div class="clear"></div>    
<div class="list" id="content-list">
    <form id="cardPay" action="step3.jsp?orderNumber=<%=orderNumber %>&orderAmount=<%=orderAmount%>" method="post">
        <input type="hidden" id="cardNumber" name="cardNumber" value="6217857600016919644"/>
<input type="hidden"  id="mobileDisplayMode" name="mobileDisplayMode" value="MOBILE_AND_SMSCODE"/>
    <input type="hidden" id="discountAmount" name="discountAmount" value=""/>
    <input type="hidden" id="activityName" name="activityName" value=""/>
    <input type="hidden" id="discountId" name="discountId" value=""/>
    <input type="hidden" id="couponAmount" name="couponAmount" value=""/>
    <input type="hidden" id="couponCode" name="couponCode" value=""/>

<input type="hidden" name="foreignCard" id="foreignCard" value="false"/><input type="hidden" name="initSourceType" id="initSourceType" value="Litepay"/><input type="hidden" name="showCCBAggrement" id="showCCBAggrement" value="false"/>
<input type="hidden" name="restrictPayDisplay" id="restrictPayDisplay" value="unsupported"/><input type="hidden" name="restrictPayQueryId" id="restrictPayQueryId" value=""/>
<input type="hidden" name="existsTips" id="existsTips" value="false"/><input type="hidden" name="bankActivatePhoneNumberDisplay" id="bankActivatePhoneNumberDisplay" value=""/>
<input type="hidden" name="showCaptcha" id="showCaptcha" value="false"/><input type="hidden" name="cardDateExpired" id="cardDateExpired" value="false"/>    <input type="hidden" name="sourceType" id="sourceType" value="Litepay"/>
<input type="hidden" name="backendUser" id="backendUser" value="false"/>
<input type="hidden" name="aggrementType" id="aggrementType" value="BOTH_AGREEMENT"/>
<input type="hidden" name="aggrementDesc" id="aggrementDesc" value="中国银行借记卡银联在线支付业务服务协议"/>
<input type="hidden" name="bankNo" id="bankNo" value="01040000"/>
<input type="hidden" name="cardNumberDisplay" id="cardNumberDisplay" value="6217****9644"/>
<input type="hidden" name="cardType" id="cardType" value="DebitCard"/>
<input type="hidden" id="fromUserLogin" name="fromUserLogin" value="false"/>


    <input type="hidden" name="foreignMerchant" id="foreignMerchant" value="false" />

<input type="hidden" name="conversionType" id="conversionType" value="" /><input type="hidden" name="protocolVersion" id="protocolVersion" value="2.1" /><input type="hidden" name="defaultOpen" id="defaultOpen" value="false" /><input type="hidden" name="smsVerifyEnabled" id="smsVerifyEnabled" value="true" />
<input type="hidden" name="authronization" id="authronization" value="true" /><input type="hidden" name="fromBankOpenCard" id="fromBankOpenCard" value="false" />
<input type="hidden" name="verifyPolicys_credential" id="verifyPolicys_credential" value="false" />
<input type="hidden" name="verifyPolicys_mobile" id="verifyPolicys_mobile" value="true" />
<input type="hidden" name="verifyPolicys_cardNo" id="verifyPolicys_cardNo" value="true" />
<input type="hidden" name="verifyPolicys_smsCode" id="verifyPolicys_smsCode" value="false" />
<input type="hidden" name="verifyPolicys_password" id="verifyPolicys_password" value="true" />
<input type="hidden" name="verifyPolicys_name" id="verifyPolicys_name" value="false" />
<input type="hidden" name="verifyPolicys_expire" id="verifyPolicys_expire" value="false" />
<input type="hidden" name="verifyPolicys_cvn2" id="verifyPolicys_cvn2" value="false" />
    <input type="hidden" id="instalmentOptionsAble" name="instalmentOptionsAble" value="false"/>
<input type="hidden" id="useInstalment" name="useInstalment" value="" />
<input type="hidden" id="instalmentPeriods" name="instalmentPeriods" value=""/>
<input type="hidden" name="reOpenCard" id="reOpenCard" value="false"> <input type="hidden" name="SMSBankCode_QID" id="SMSBankCode_QID" value=""> <input type="hidden" name="machineInfo" id="machineInfo" />    <div class="listrow cardrow" style="margin-bottom:14px;width: 650px;">
    <div class="list_left pt5px">银联卡号：</div>
    <div class="list_right">
        <div class="cardinfo">
            <div class="card_num">
                <div class="card_left">
                    <span style="margin-top: 0px"><img class="dn" src="https://static.95516.com/static/v3_i18/up/zh_CN/images/bank/123_33/01040000.gif" onLoad="this.className='';" onerror="this.src='<%=base%>/resources/paymentsimulator/images/default.gif';onerror=null;this.className='';" width="122" height="33"></span><em>6217****9644
                    (储蓄卡)</em>
                </div>
                                <div class="card_down dn"></div>
                                </div>
            <div class="card_other">
                                        <div style="display: block;" class="integral_icon" id="topPoint-icon-id"></div>
                                                                        
                                    <span id="loading-card-info-request"></span>
</div>
<div class="more_list dn">
    <iframe frameborder="0" src="javascript:false" style="border:none;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:300; filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';"></iframe>
    <ul style="position:relative;z-index:300000">
                                    <li cardType="DebitCard" bindId="${CardInfoVO.bindId}" bankNo="01040000" cardNumberDisplay="6217****9644" >
                    <span><img class="dn" src="https://static.95516.com/static/v3_i18/up/zh_CN/images/bank/123_33/01040000.gif" onLoad="this.className='';" onerror="this.src='https://static.95516.com/static/v3_i18/up/zh_CN/images/bankbind/default.gif';onerror=null;this.className='';" width="122" height="33"></span>
                    <em>6217****9644 (储蓄卡)</em>
                </li>
                        </ul>
</div>
</div>
<div id="mer-pay-ctrl-info">    <div id="white" class="mer-pay-ctrl-info-white" style="display: none;"></div>
    <div id="black" class="mer-pay-ctrl-info-black" style="display: none;"></div>
</div>
<div class="creditCard-expired-info" id="creditCard-expired-info" style="display: none;">如该银行卡已过期，您可以<a href="#">重新开通</a>后支付</div><div id="container_top-exchange-info"></div>
<div class="dn" id="container-creditCard-installment-pay"></div>
    <div class="bankmobile dn">
<em></em><span>修改银行预留手机号需重新填写银联卡信息</span><a>取消修改</a>
</div>
</div>
<div class="clear"></div>
    <div class="promptBanksInfo dn">
<div class="cardDate"></div>
<div class="cardCvn2"></div>
</div></div>
<div id="certifyDisplayImage" class="promptBanksInfo dn">
    <div class="card_ct_id dn"></div>
    <div class="card_ct_military dn"></div>
    <div class="card_ct_passport dn"></div>
    <div class="card_ct_taiwan dn"></div>
    <div class="card_ct_returnhome dn"></div>
    <div class="card_ct_police dn"></div>
    <div class="card_ct_soldier dn"></div>
</div>
<div class="cardmsg">
        <div class="listrow listword CardName dn">
        <div class="list_left">姓名：</div>
    <div class="list_right">
        <div>
            <input type="text" id="realName" name="realName" class="txt" style="width:175px" maxlength="30" value="" autocomplete="off"/>
        </div>
        <div id="realNameTip" class="text_c dn" style="height: 20px;">&nbsp;</div>
    </div>
    <div class="clear"></div>
</div>
    <div class="listrow listword credential dn">
<div class="list_left">证件号：</div>
<div class="list_right" style="height: 46px;">
    <div class="idsort_Wrap" style="position: relative;z-index:8000">
        <div class="idsort_item" certValue="01" style="float:left;margin-right: 4px;display: inline-block;"><span>身份证</span><a id="identify-choice-id" class="show_idsort">选择</a></div>
        <input type="text" id="credentialNo" name="credentialNo" class="txt" style="width:175px" value="" maxlength="20" autocomplete="off"/>
        <input type="hidden" id="credentialType" name="credentialType"  value="" autocomplete="off"/>
        <div class="idsort_list dn">
            <iframe frameborder="0" src="javascript:false" style="border:none;position:absolute; visibility:inherit; top:0px; left:0px; width:100%; height:100%; z-index:200; filter='progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';"></iframe>
            <ul >
                <li certValue="01" certID="card_ct_id">身份证</li>
                <li certValue="02" certID="card_ct_military">军官证</li>
                <li certValue="03" certID="card_ct_passport">护照</li>
                <li certValue="04" certID="card_ct_returnhome">回乡证</li>
                <li certValue="05" certID="card_ct_taiwan">台胞证</li>
                <li certValue="06" certID="card_ct_police">警官证</li>
                <li certValue="07" certID="card_ct_soldier">士兵证</li>
            </ul>
        </div>
    </div>
    <div class="clear"></div>
    <div id="credentialNoTip" class="text_c" style="height: 20px;">请选择开户人的证件类型，并输入证件号码</div>
</div>
<div class="clear"></div>
</div>
        <div class="listrow listword creditCard CardExpire dn">
<div class="list_left">有效期：</div>
<div class="list_right">
    <div class="expire">
        <input type="text" id="expireMonth" name="expireMonth" class="txt Card_Date" maxlength="2" tabindex="2" autocomplete="off" value=""/>
        <span>月</span>
        <input type="text" id="expireYear" name="expireYear" class="txt Card_Date" maxlength="2" tabindex="3" autocomplete="off" value=""/>
        <span>年</span></div>
    <div class="clear"></div>
    <div class="text_c CardTimeText" id="expireMonthTip">请输入信用卡正面的有效期，如：09/13</div>
</div>
<div class="clear"></div>
</div>
        <div class="listrow listword creditCard CardCVN2 dn">
<div class="list_left">卡背面末三位数：</div>
<div class="list_right">
    <div class="cvn">
        <div class="cvnobject">


                                    <input id="cvn2" name="cvn2" type="hidden"/>
                <div id="credit_cvn2">
                    <input type="text" name="mockCVN2" id="mockCVN2" class="ipt_txt CardDefault dn" style="height:25px;width:73px" maxlength="3"/>
                

            </div>
        </div>
    </div>
    <div class="clear"></div>
    <div class="text_c CardCvnText" id="cvn2Tip">请输入信用卡背面的末三位数字</div>
</div>
<div class="clear"></div>
</div>
            <div class="listrow listword debitCard CardPassword">
    <div class="list_left">银行卡密码：</div>
<div class="list_right">
    <input name="atmPassword" id="atmPassword" type="hidden"/>
    <div id="debitCard_password">

        <input type="password" name="mockLoginPassword" id="mockLoginPassword" class="ipt_txt" style="height:28px;width: 189px;" maxlength="64"/>
    </div>
    <div id="cardNumberTip"
		style="margin: 0px; padding: 0px; background: transparent none repeat scroll 0% 0%;">
		<div class="note_info user txt_error_index">请输入您的银行卡取款密码,六位以上</div>
	</div>
</div>
<div class="clear"></div>
</div>
                <div class="listrow CardMobile dn">
        <div class="list_left">银行预留手机号：</div>
    <div class="list_right">
        <div class="mbrow_re">
            <input type="text" id="cellPhoneNumber" name="cellPhoneNumber" class="txt CardDefault" width="187" tabindex="5" value="" maxlength="13" autocomplete="off"/>
            <a id="cancelmobileid" href="javascript:void(0)" class="cancelmobile">取消修改手机号</a><span class="mbtips"></span>
            <div class="mb_dir"><span></span>银行预留手机号是您申请银行卡或办理银行卡相关业务时在银行登记的手机号。</div>
        </div>
        
        <div class="text_c CardMobileText dn" id="cellPhoneNumberTip">请输入您在银行预留的手机号码</div>
    </div>
    <!-- <div class="clear"></div>
    </div>
            <div class="listrow CardMobileShow">
        <div class="list_left">银行预留手机号：</div>
    <div class="list_right">
        <div class="getMoible"><span>180*****133</span><a href="javascript:void(0)">预留手机号已变更？</a></div>
        <input type="hidden" value="" name="phoneNumber" id="phoneNumber"/>
    </div>
    <div class="clear"></div>
    </div>
    <div id="cardPay_all_need" class="listrow"> <div class="list_left" id="smsCodeTitle">
            短信验证码：    
     </div> -->
<div class="list_right">
    <div>
        <div class="yanzheng">
            <input id="smsCode" name="smsCode" type="text" class="txt CardDefault" maxlength="6" tabindex="6" autocomplete="off"/>
        </div>
        <div class="yanzheng_btn">
            <input type="button" value='免费获取' class="yzm_btn_s yzm" id="btnGetCode"/>
            <img class="dn" id="smsCode_ajax_loading" src="https://static.95516.com/gw/b2c/resources/upop/zh_CN/images/global/loading_sms.gif">
        </div>
        <div class="clear"></div>
    </div>
    <div class="text_msg2">
        <div class="text_c CardSmsText dn" id="smsCodeTip"></div>
    </div>
</div>
<div class="clear"></div>
</div>
    <div class="listrow jym dn" id="captchaCodeListRow">
<div class="list_left">校验码：</div>
<div class="list_right">
    <input id="captchaCode" maxlength="4" style="vertical-align:middle;" name="jCaptchaResponse" tabindex="7" type="text" autocomplete="off" size="10" class="txt CardDefault"/>
    &nbsp;<img style="vertical-align: middle;" id="captchaImg" class="code" title='不区分大小写，点击更换' width="67" height="24" src="/b2c/checkcode.action?r=1450509715210"/>
    <div class="text_c CardCodeText dn" id="captchaCodeTip"></div>
</div>
<div class="clear"></div>
</div>
    <div class="listrow Card_agr dn">
<div class="agr">
    <input name="isCheckAgreement" type="checkbox" class="CardDefault" id="isCheckAgreement" checked="checked"/><span>我已阅读并接受</span><a></a>
    <div id="isCheckAgreementTip">请确认您已阅读并接受</div>
</div>
</div>
    <div class="listrow dn" id="CCBAggrement">
<div class="CCBagr">
    <input name="isCheckCCBAgreement" type="checkbox" class="CardDefault" id="isCheckCCBAgreement" checked="checked"/><span>建行“银联在线支付”用户服务协议</span><a></a>
    <div id="isCheckCCBAgreementTip"></div>
</div>
</div>
<div class="payrow">
    <p style="padding-top:0px">
        <input id="btnCardPay" name="btnCardPay" type="button" value='确认付款' class="btn_blue139p CardDefault" onclick="submitForm();">
    </p>
</div>
</div>
</div>
</div>
<div class="clear"></div>
</div>
</div>
</form>

<form action="/b2c/showCard.action?transNumber=201512191521451896848" id="cardPayForm" method="post" class="dn">
    <input type="hidden" name="reOpenCard" id="reOpenCard" value="true"></form>
    <form name="csPay" id="csPay" class="dn" action="/b2c/card.action?transNumber=201512191521451896848" target="_blank" method="post">
    <input type="hidden" id="csPay_cardNumber" name="cardNumber" value="6217857600016919644"/>
    <div class="ebank clearfix">
        <div class="fl">
            <span>您可以使用网银支付：</span>
            <span class="bank_big"><span><img class="dn" src="https://static.95516.com/static/v3_i18/up/zh_CN/images/bank/123_33/01040000.gif" onLoad="this.className='';" onerror="this.src='https://static.95516.com/static/v3_i18/up/zh_CN/images/bankbind/default.gif';onerror=null;this.className='';" width="122" height="33"></span></span>
            <a id="bank-limit-view-id" class="view_ebanknum">查看支付限额</a>
        </div>
        <div class="fr">
            <a class="go_ebank" id="ID_go_ebank_pop">到网上银行付款</a>
        </div>
        <div class="ebank_tips" id="cardpay4ebank-tips">
            <span class="ebank_arrdown"></span>
            <div></div>
        </div>
    </div>
</form>

<div class="pay_qa">
    <h2>支付遇到问题？</h2>
            <dl class="ordipay">
            <dt>1.什么是银行预留手机号？</dt>
            <dd style="display:block">答：银行预留手机号是您申请银行卡或办理银行卡相关业务时在银行登记的手机号。</dd>
                    <dt>2.为什么要安装控件？控件不能下载，我该如何解决？</dt>
            <dd>答：安装输入控件可以保障您输入信息的安全，防止密码被窃取；点击密码输入框中的提示链接或<a id="upeditor-download-id" class="installUPEditor" >这里</a>下载安装。</dd>
            <dt>3.付款时，遇到提示"网站安全证书有问题"，我该如何解决？</dt>
            <dd>答：您需要点击<a id="basic-certification-download-id" href="https://static.95516.com/static/basis/cer/root.zip" target="_blank">这里</a>重新安装浏览器根证书，安装具体过程可以点击<a id="basic-certification-download-helpview-id" href="https://static.95516.com/static/page/help2/help/detail_16.html#active_mail_1" target="_blank">这里</a>到帮助中心中查看。浏览器根证书可用来保障您的网络购物环境更安全，让您的银联在线支付付款体验更顺畅。
            </dd>
        
        </dl>
        <p class="pay_qa_more">如需查看更多问题，请点击<a id="help-center-id" target="_blank" href="https://static.95516.com/static/help/index.html">帮助中心</a>
            或联系<a id="unionpay-customer-service-url-id" target="_blank" href="https://95516.unionpay.com/web/icc/chat/chat?c=1&s=4&st=1&depid=ff8080813daaa230013de380641900ec&">在线客服</a>
    </p>
</div>
</div></div></div></div></div>
<div class="reg_pop dn">
    <p class="ebank_title">快速注册</p>
    <div class="ebank_link">
        <p style="padding:0 0 20px 95px;">请在新开页面完成注册</p>
        <input id="reg_pop_button" type="button" class="btn_blue btn_reg" value='注册成功，继续支付' style="margin-left:90px"/>
        <a id="reg_pop_cancelbtn" style="font-size:12px;color:#497DA4;padding-left:10px;">取消注册</a>
    </div>
</div>
<div class="ebank_pop dn" id="ebank_pop_id">
    <p class="ebank_title">请在新开网银页面完成付款后选择：</p>
    <div class="ebank_link">
        <p><strong>付款成功</strong><a id="ebank_pop_sucess" href="?transNumber=201512191521451896848">付款成功</a></p>
        <p><strong>付款失败</strong><a id="switch-bankcard-id" class="switchCard" href="#">使用其他卡付款</a><a id="ebank-pop-view-help-id" target="_blank" href="https://static.95516.com/static/help/index.html">查看帮助中心</a></p>
    </div>
</div>
<div class="ebank_pop dn" id="upiont_pop">
    <div class="ebank_link inner_pop">
        <span class="icon_error"></span>
        <p class="main_word">网银支付时不支持U点或其他积分抵扣</p>
        <p class="sub_word">如您放弃使用U点或其他积分抵扣，请点击以下按钮继续付款</p>
    </div>
    <div class="btn_in" style="padding-left:43px;">
        <input type="button" class="btn_blue" id="upoint_pop_repay" value='继续付款' style="margin-left:50px;" />
        <input type="button" class="btn_gray92p" id="upoint_pop_reback" value='返 回' style="margin-left:10px;" />
    </div>
</div>

</div>


<div class="footer">
    <div><a id="china-unionpay-href-id" href="http://cn.unionpay.com/" target="_blank">银联官网</a>|<a id="footer-online-unionpay-href-id" href="https://www.95516.com/" target="_blank">银联在线支付</a>|<a id="online-unionpay-about-href-id" href="http://static.95516.com/static/page/177.html" target="_blank">关于我们</a>|<a id="online-unionpay-terms-href-id" href="http://static.95516.com/static/page/183.html" target="_blank">网站使用条款</a></div>
    <p>中国银联股份有限公司版权所有 &copy; 2002-2015 <em>沪ICP备07032180号</em></p>
</div>

<div class="dn" id="hidden_area">
    <input type="hidden" name="devTrace" value="[151.70, 151.70]">
    <input type="hidden" name="upop_release_version" value="r_1_0_0">
    <div class="dn" id="upeditorMachineInfo_area"></div>
    <input type="hidden" name="secureKey_id" id="secureKey_id" value="RBuLAjiU">
</div>
<div id="upeditorMachineInfo_area"></div>


</body>
</html>
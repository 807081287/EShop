<%@ page language="java" import="java.util.*,java.math.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String base = request.getContextPath();
	String orderNumber = request.getParameter("orderNumber");
	String orderAmount = request.getParameter("orderAmount");
	String account = request.getParameter("account");
	/* BigDecimal bd =new BigDecimal(orderAmount); 
	orderAmount = bd.divide(new BigDecimal(100)).setScale(2).toString(); */
	String url=base+"/onlinepaysimulator/alipay/step3.jsp?account="+account+"&orderAmount="+orderAmount+"&orderNumber="+orderNumber;
%>
<html><head>
<meta charset="GBK">
<title>支付宝 - 网上支付 安全快速！</title>
<meta content="webkit" name="renderer">
<meta content="IE=Edge" http-equiv="X-UA-Compatible">
<meta content="中国最大的第三方电子支付服务提供商" name="description">
<link type="image/x-icon" href="https://i.alipayobjects.com/common/favicon/favicon.ico" rel="shortcut icon">

<!-- CMS:收银台cms/公用CMS/公用配置结束:cashier/common/var.vm --> 
<link rel="dns-prefetch" href="https://a.alipayobjects.com">
<link rel="dns-prefetch" href="https://app.alipay.com">
<link rel="dns-prefetch" href="https://my.alipay.com">
<link rel="dns-prefetch" href="https://lab.alipay.com">
<link rel="dns-prefetch" href="https://cashier.alipay.com">
<link rel="dns-prefetch" href="https://financeprod.alipay.com">
<link rel="dns-prefetch" href="https://shenghuo.alipay.com">
<link type="text/css" rel="stylesheet" href="css/2ACTshL8Vh.css">
<link type="text/css" rel="stylesheet" href="css/lightpay.css">
<!-- CMS:全站公共 cms/tracker/tracker_time.vm结束:alipay/tracker/tracker_time.vm -->  <script>(function(D,W,codeUri){var sampling="5",maxNum=5,_st=+new Date(),ran=Math.floor(Math.random()*sampling);if(ran&gt;0||isNaN(ran)){return;}W.throwCasherError=W.onerror=function(err,file,line){if((--maxNum)&lt;=0){return;};var nick="",accountId=D.getElementById('J-accountId'),orderId=/orderId=([\w|\.]+)/.exec(location.search);if(accountId){nick+=accountId.innerHTML;}if(orderId){nick+=':'+orderId[1];}err='[t'+(new Date()-_st)+'][uhttps://cashier.alipay.com'+W.location.pathname+']'+err;var n = 'cashierFeImg_' + parseInt(Math.random()*10000000),img=W[n]=new Image();img.onload=img.onerror=function(){W[n]=null;};img.src="//gm.mmstat.com/jstracker.2?"+["type=9","id=jstracker","v=0.02","nick="+codeUri(nick),"msg="+codeUri(err||""),"file="+codeUri(file||""),"ua="+codeUri(navigator.userAgent),"line="+codeUri(line||""),"scrolltop=","screen=","t="+new Date().valueOf()].join("&amp;");};})(document, window, encodeURIComponent);</script>
<style>
@font-face {
  font-family: 'cashier';
  src: url("//at.alicdn.com/t/font_1434596335_6737535.eot"); /* IE9*/
  src: url("//at.alicdn.com/t/font_1434596335_6737535.eot?#iefix") format('embedded-opentype'), /* IE6-IE8 */
  url("//at.alicdn.com/t/font_1434596335_6737535.woff") format('woff'), /* chrome、firefox */
  url("//at.alicdn.com/t/font_1434596335_6737535.ttf") format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("//at.alicdn.com/t/font_1434596335_6737535.svg#cashier") format('svg'); /* iOS 4.1- */
}
.iconfont {
    font-family:"cashier" !important;
    font-style: normal;
    font-weight: normal;
    cursor: default;
    -webkit-font-smoothing: antialiased;
}
</style>  

<style>
  .icon-gray {
  filter: url("https://cashiersu18.alipay.com:443/filters.svg#grayscale");
  filter:gray\9;
  -webkit-filter: grayscale(90%);
}

/* 天猫点劵卡样式开始 */
.tmallPcardMargin {
  margin-right: 38px;
}

.account-item-grayMask {
  position: relative;
}

.account-item-grayMask .ui-grayMask {
  height: 38px;
}

/* 天猫点劵卡样式结束 */
.manage-list .morebank {
  _display: inline-block;
}

.moneyFundExplain {
  background-color: #f47b5a;
  color: white;
  padding: 2px 10px 2px 10px;
    line-height: 16px;
}
.mfe-tip-warp{
    width: 320px;
}
.mfe-tip-title{
    line-height: 20px;
}

.explaintext {
  display: none;
}


.manage-item .fn-green{
  color:#393;
}
/* 超限科学引导开始 */
.extra-item .ui-button-guide {
  color: #000;
  background-color: #fafafa;
  padding: 0 10px;
  font-size: 12px;
  font-weight: normal;
  margin-top: 6px;
  margin-bottom: 10px;
}
.extra-item .ui-tipbox-recommend {
  color: #fff;
  background-color: #d9524e;
  padding: 1px 4px 2px 4px;
  margin-right: 4px;
  border-radius: 2px;
}
/* 超限科学引导结束 */


/* 账户渠道开始*/
  .account-chls {
    margin-bottom: 20px;
    padding: 0 20px;
  }
  .account-chl {
    position: relative;
    height: 20px;
    margin-bottom: 1px;
    padding: 8px 20px 8px 18px;
  }
  .account-chl-used {
    background: #E9F0FE;
  }
  .account-chl-disabled {
    color: #999;
  }
  .account-chl .iconfont {
    font-size: 14px;
  }
  .account-chl em {
    font-weight: bold;
  }
  .account-amount {
    position: absolute;
    right: 39px;
    top: 9px;
    line-height:18px;
  }
  .account-amount em{
    font-size: 14px;
    color: #f60;
    font-weight:700;
  }
  /* 购物卡 */
  .account-card {
    margin-right: 4px;
    padding: 2px 4px;
    border: 1px dashed #bbcbef;
    background: #fff;
  }
  .account-card-used {
    padding: 1px 4px;
    border: 2px solid #ffac21;
  }
  .account-card-err {
    border-color: #f00;
  }
  .account-card em{
    font-weight: bold;
  }
  .account-card i {
    color: #999;
  }
/* 账户渠道结束*/

.limit-result-off{margin-left:8px;}
.limit-result-off{
  display:none
}

.ch-limiting .icon-limit-exceed{
  display:inline;
}
.action-rt-gray .limit-result-off{
  display:none
}

/* 分期用到 */
.ui-select-trigger-disabled {
    background-image: -moz-linear-gradient(center top , #FBFBFB, #F3F3F3);
    border-color: #CCCCCC;
    color: #B2B2B2;
    cursor: default;
}


/* 渠道加载 loading */
.ui-loading-wrap {
  position: relative;
  margin: 20px 0;
  height: 50px;
  line-height: 50px;
}

.ui-loading-wrap .ui-loading {
  position: absolute;
  top: 0;
  left: 0;
}
.ui-loading-wrap .ui-tipbox-content-simple {
  margin-left: 60px;
}

.action-rt {
  line-height: 14px;
  height: 14px;
  font-size: 12px !important;
  background-color: #FFFFFF !important;
  border: 1px solid #1E73C1;
  color: #1E73C1;
  margin-right: 2px;
  display: inline-block;
  zoom: 1;
}

.action-rt .action-rt-type {
  background-color: #1E73C1;
  display: inline-block;
  color: #ffffff;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
}

.action-rt .rt-discount {
  color: #1E73C1;
  padding: 0;
  background: none;
}
.action-rt-gray .action-rt {
  border: 0;
  background-color: #cccccc !important;
  color: #FFFFFF !important;
}
.action-rt-gray .action-rt-type,
.action-rt-gray .rt-discount {
  background-color: #cccccc !important;
  color: #FFFFFF !important;
}

.channel-label .ui-fm-error .ui-fm-explain {
  color: #FF5243;
  padding: 3px 0 0;
  padding: 5px 0 0 \9;
  _padding-top: 3px;
  _margin-left: 3px;
  font-size: 12px;
  padding-left: 20px;
  background: url(images/3JRI1gkfUX.png) no-repeat -138px -83px;
}
</style>
<link href="css/2ACTshL8Vh.css" rel="stylesheet" type="text/css">
<link href="css/alice.components.security-core-2.1-src.css" rel="stylesheet" type="text/css">
<link href="css/front-old.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=base%>/resources/shop/js/jquery.js"></script>
<script>
$(function(){
	$("#pwd-explain").hide();
});
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
	if(validatePWD()){
		$("#lightPayForm").submit();
	}else{
		$("#pwd-explain").show();
	}
}
</script>
</head>
<!-- CMS:收银台cms/common/combIconsStamp.vm结束:cashier/common/combIconsStamp.vm --></head>
<body>

    <div id="header">
    <div class="header-container fn-clear">
        <div class="header-title">
            <span class="logo">支付宝<s></s></span>
                        <span class="logo-title">我的收银台</span>
                    </div>
                            <div id="switchTemplate" class="ui-select fn-left switchTemplate">
	<a class="ui-select-text" href="#">
				<span>中国大陆版</span>
	</a>
	<ul class="ui-select-content">
		<li class="ui-select-item">
			<a seed="-CN" href="https://cashiersu18.alipay.com:443/standard/payment/cashier.htm?outBizNo=2015121921001004700046262864&amp;timeStamp=1450538805547&amp;bizIdentity=trade20001&amp;orderId=1219fad580d2e7f789cfb9erclou8702&amp;country=CN">中国大陆版</a>
		</li>
				<li class="ui-select-item">
			<a href="/standard/common/dispatch.htm?orderId=1219fad580d2e7f789cfb9erclou8702&amp;target=HKFOREIGNPAY">香港版</a>
		</li>
						<li class="ui-select-item">
			<a href="/standard/common/dispatch.htm?orderId=1219fad580d2e7f789cfb9erclou8702&amp;target=TWFOREIGNPAY">台湾版</a>
		</li>
						<li class="ui-select-item">
			<a href="/standard/common/dispatch.htm?orderId=1219fad580d2e7f789cfb9erclou8702&amp;target=FOREIGNPAY">海外其他地区版</a>
		</li>
			</ul>
</div>
                <ul class="header-right">
                      <li class="account-id">支付宝账户：<span id="J-accountId"><%=account %></span></li>
                      <li><a href="https://shenghuo.alipay.com/peerpaycore/prePeerPayApply.htm?biz_no=2015121921001004700046262864&amp;biz_type=TRADE" seed="pay-by-standard" target="_blank">找人代付</a></li>
                        <li>唯一热线：95188</li>
        </ul>
    </div>
</div>
<!-- fengdie: cashier/common/notice.vm 1450538825779 -->

  
    


<!--[if IE]>
<script src="https://a.alipayobjects.com/cashiers/1.1.9/ie.js"></script>
<![endif]-->
                        <div id="content">
  








<div data-config="{&quot;resultQueryStartDelay&quot;:&quot;&quot;,&quot;resultQueryPace&quot;:&quot;&quot;,&quot;payResultQueryMaxTimes&quot;:&quot;&quot;,&quot;codeInfo&quot;:&quot;&quot;,&quot;isNeedPollResult&quot;:&quot;&quot;,&quot;isNeedLongPoll&quot;:&quot;&quot;,&quot;orderId&quot;:&quot;1219fad580d2e7f789cfb9erclou8702&quot;,&quot;outBizNo&quot;:&quot;2015121921001004700046262864&quot;,&quot;pollingUrl&quot;:&quot;https://webpushgw.alipay.com/polling&quot;,&quot;barCodeSign&quot;:&quot;ed2b03300a55b9ad89a84d35fdc430c5&quot;,&quot;extraData&quot;:&quot;&quot;,&quot;longPollingQueryMaxTimes&quot;:&quot;&quot;,&quot;longPollingQueryPace&quot;:&quot;&quot;,&quot;size&quot;: 100 ,&quot;isNew&quot;:&quot;true&quot;}" class="order" id="J_Order">
    <div class="order-wrapper">
        
        <div class="order-title">
            
            
            
                        天购网订单-<%=orderNumber%>
                    </div>


                                    <div class="order-seller">
                                            收款方
                                        ：
                                            天购网
                                    </div>
                    
        <div class="order-amount">
            <div class="order-real-amount">
                                                <em class=""><%=orderAmount%></em>
                元
                            </div>

                                            </div>
       <!--  <a seed="order-detail-more" href="#" class="order-ext-trigger" id="J_OrderExtTrigger">
            <i title="记录" class="iconfont">?</i>
            订单详情
        </a> -->
        <p class="order-ext-loading fn-hide" id="J_OrderExtLoading">
            加载订单详情信息...
                            <a seed="refresh-account" href="http://cashiersu18.alipay.com/standard/lightpay/lightPayCashier.htm?orderId=1219fad580d2e7f789cfb9erclou8702&amp;bizIdentity=trade20001&amp;outBizNo=2015121921001004700046262864&amp;timeStamp=1450538805547&amp;country=CN&amp;enctraceid=zxTPTrgwOpxspyboaNontoOBbHrQ2sVkhd5kcJMk7kA,">刷新</a>
                    </p>
        <div data-url="https://cashiersu18.alipay.com:443/tile/service/standard:orderDetailAsyncProxy.tile?outBizNo=2015121921001004700046262864&amp;outRelationId=&amp;bizIdentity=trade20001&amp;signData=363912f02bf4e5ada3d2090990e5f1c9&amp;orderId=1219fad580d2e7f789cfb9erclou8702" class="order-ext fn-hide" id="J_OrderExt"></div>
    </div>
</div>

<!-- CMS:收银台cms/help/freezeOrderInfo.vm开始:help/freezeOrderInfo.vm --><div class="fn-hide" id="J_OrderTypeTipLittle">
银行卡金额支付并冻结在支付宝账户余额（不包含手续费）</div>

<div class="fn-hide" id="J_OrderTypeTipLittleMoneyFund">
本次付款金额先冻结，资金冻结期间继续享收益。</div>
<div id="J-payMethod" class="main-container">
        <div id="J-rcPaymentDisabled"></div>
        
    <form name="expressFastPayFrom" id="lightPayForm" action="<%=url %>" method="post">
      	<input type="hidden" name="_form_token" value="Aee4QxFC9rEjLgQbdjg6IO6UJAqABd51">
      
      
      
                  
            
  
    
  


      <div id="J-rcChannels" data-url="data.html"><div data-reactid=".0"><ul id="J_MarketinglList" data-reactid=".0.0"></ul><ul class="saved-card-list" id="J_SavecardList" data-reactid=".0.1"><li class="channel-bank row-container fn-clear row-container-focus" data-channeltype="DEBIT_EXPRESS" title="" data-reactid=".0.1.$ch0"><div class="row-basic fn-clear" data-reactid=".0.1.$ch0.0"><label class="channel-label" for="icbc906-0" data-reactid=".0.1.$ch0.0.0"><span class="pay-amount" data-reactid=".0.1.$ch0.0.0.0"><span class="amount" data-reactid=".0.1.$ch0.0.0.0.0:0"><span data-reactid=".0.1.$ch0.0.0.0.0:0.0">支付 </span><em class="amount-font-R16" title="<%=orderAmount%>" data-reactid=".0.1.$ch0.0.0.0.0:0.2"><%=orderAmount%></em><span data-reactid=".0.1.$ch0.0.0.0.0:0.3">元</span></span></span><span class="channel-tit channel-icon icon icon-cashier-ICBC_s" data-id="ICBC_s" data-reactid=".0.1.$ch0.0.0.2"></span><span class="channel-name" title="中国工商银行" data-reactid=".0.1.$ch0.0.0.3">中国工商银行</span><span class="card-number" data-reactid=".0.1.$ch0.0.0.4">**7427</span><span class="card-type" data-reactid=".0.1.$ch0.0.0.5">储蓄卡 | 快捷</span><span class="card-info" data-reactid=".0.1.$ch0.0.0.6"></span></label><input type="radio" checked="" class="channel-input" id="icbc906-0" name="apiCode" data-reactid=".0.1.$ch0.0.1"></div><div class="row-extra fn-hide" data-reactid=".0.1.$ch0.1"></div></li></ul></div></div>
    
            
              <div id="J-security" class="">
                    <input type="hidden" name="securityId" id="securityId" value="web|cashier_payment_3|2bff56af-87a8-488e-858d-04063268d72dRZ13">






    



   


  
    





      



    
<div class="ui-securitycore ui-securitycore-tip J-securitycoreTip " data-link-in-xbox="">

            
  <div class="ui-form-item ui-form-item-success">
    <div class="ui-form-explain">你在安全的环境中，请放心使用！</div>
              <div class="J-checkResult fn-hide" data-status="">你在安全的环境中，请放心使用！</div>
        </div>

</div>

<!-- Powered by Alipay Security -->  






<div class="ui-securitycore J-securitycoreMain" data-request="web|cashier_payment_3|2bff56af-87a8-488e-858d-04063268d72dRZ13" data-system="cashier" data-server="https://securitycore.alipay.com" data-status="false" data-extension="false">

    <input smartracker="on" seed="JSecuritycoreMain-ipt" style="display:none">
  <input type="password" smartracker="on" seed="JSecuritycoreMain-iptT1" style="display:none">

                                                      

<style type="text/css">
  .edit-section .edit-link a {
    line-height: 24px;
  }
</style>

                                    

    <div class="edit-section">
      <div class="ui-form-item">
        <label class="ui-label" for="payPassword">
                    支付宝支付密码：
        </label>

                <span>
<input type="password" seed="NewQr_tAccountInput" id="pwdINPUT" value="" class="mi-input mi-input-account" name="loginId" style="width:200px;height:30px">                    			           
<div id="pwd-explain" class="mi-form-explain">
    <p>
       	 请输入账户的 <span class="ft-red">6位支付密码</span>，不是登录密码。
    </p>
</div>

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

        

<input type="hidden" name="J_aliedit_using" value="true">
<input type="hidden" id="payPassword" name="payPassword" value="">
<input type="hidden" name="J_aliedit_key_hidn" value="payPassword">

<input type="hidden" name="J_aliedit_uid_hidn" value="alieditUid">
<input type="hidden" id="alieditUid" name="alieditUid" value="490ce25409194e271b9a195822de8d7d">

<input type="hidden" name="REMOTE_PCID_NAME" value="_seaside_gogo_pcid">
<input type="hidden" name="_seaside_gogo_pcid" value="">
<input type="hidden" name="_seaside_gogo_" value="">
<input type="hidden" name="_seaside_gogo_p" value="">

<input type="hidden" name="J_aliedit_prod_type" value="payment_password">

<input type="hidden" name="security_activeX_enabled" value="false">

<input type="hidden" name="J_aliedit_net_info" value="">

<input type="hidden" sensor="C2" render="R" id="edit_infor" value="">
</div>
    </div>

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
    background-image: url("https://t.alipayobjects.com/images/rmsweb/T1nYJhXalXXXXXXXXX.gif");
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
    background-image: url("https://t.alipayobjects.com/tfscom/T1sl0fXcBnXXXXXXXX.png");
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

  .ui-securitycore .ui-form-item-loading .ui-form-explain{
    background: url(https://t.alipayobjects.com/tfscom/T1hBFfXnRnXXXXXXXX.gif) 0 4px no-repeat !important;
  }
  .ui-securitycore .ui-form-item-error .ui-form-explain, .ui-securitycore .ui-form-item-warn .ui-form-explain, .ui-securitycore .ui-form-item-success .ui-form-explain, .ui-securitycore .ui-form-item-success .ui-form-text, .ui-securitycore-tip .ui-form-explain{
    background-image: url( https://t.alipayobjects.com/tfscom/T1dmlfXc0dXXXXXXXX.png) !important;
  }
  .ui-securitycore .ui-form-item .ui-form-explain{
    margin-top: 8px;
  }

</style>


                </div>
            
      <div id="J-rcSubmit"><div class="ui-fm-item ui-fm-action j-submit" data-reactid=".1"><input type="button" class="ui-button ui-button-lblue" id="J_authSubmit" value="确认付款" data-reactid=".1.0" onclick="submitForm();"><span class="ui-fm-status fn-hide" data-reactid=".1.1"> 正在提交中... </span></div></div>
    
  </div></form>

<!-- CMS:收银台cms/light_fast/creditExpressCharge.vm结束:light_fast/creditExpressCharge.vm -->  <!-- CMS:收银台cms/轻付快付/url配置开始:light_fast/urls.vm -->	<!-- CMS:收银台cms/轻付快付/url配置结束:light_fast/urls.vm -->    <!-- CMS:收银台cms/快速付款/余额渠道引导tips开始:fastpay/balanceExplain.vm -->
<!-- CMS:收银台cms/快速付款/余额渠道引导tips结束:fastpay/balanceExplain.vm -->  <!-- CMS:收银台cms/light_fast/balance.vm开始:light_fast/balance.vm -->	<!-- CMS:收银台cms/light_fast/balance.vm结束:light_fast/balance.vm -->        <!-- CMS:收银台cms/轻付快付/huabei开始:cashier/light_fast/huabei.vm -->	<!-- CMS:收银台cms/轻付快付/huabei结束:cashier/light_fast/huabei.vm -->  <div class="fn-hide" id="J-yueguangbao_agreement">
  <!-- CMS:收银台cms/help/huabeiUnsignedTips.vm开始:cashier/help/huabeiUnsignedTips.vm --><p class="ui-tipbox-desc">
你信用很好，花呗可帮你付该订单，下月按时还款即可（0费用） |你的花呗信用额度<span class="J-huabei-channel-limit"></span>元，支付宝自动还款<a data-width="200" data-target="J-error-huabei-signed-overlay" data-triggertype="hover" class="J_APop" href="javascript:void(0)">[?]</a>
<br>
我已阅读并同意<a seed="huabei-agreement-in-error-page" target="_blank" href="https://f.alipay.com/moonlight/contract.htm">《花呗服务协议》</a></p>

<div style="display: none;" id="J-error-huabei-signed-overlay">
每月还款日将从余额、余额宝、借记卡快捷自动扣款；或登录手机支付宝-财富-花呗进行还款。</div>
<!-- CMS:收银台cms/help/huabeiUnsignedTips.vm结束:cashier/help/huabeiUnsignedTips.vm -->  </div>
      <!-- CMS:收银台cms/快速付款/月光宝已签约tip开始:fastpay/yueguangbao_signed_tip.vm -->
<!-- CMS:收银台cms/快速付款/月光宝已签约tip结束:fastpay/yueguangbao_signed_tip.vm -->  </div><div id="footer">
    <!-- CMS:全站公共 cms/foot/copyright.vm开始:foot/copyright.vm --><style>
.copyright,.copyright a,.copyright a:hover{color:#808080;}
</style>
<div class="copyright">
      支付宝版权所有 2004-2015 <a target="_blank" href="http://fun.alipay.com/certificate/jyxkz.htm">ICP证：沪B2-20150087</a>
  </div>
<div id="ServerNum" class="server">
  cashiercloud-31-53 &nbsp; 0a37349814505388053458735
</div>
</div>

<div id="partner">
    <img src="images/2R3cKfrKqS.png">
  </div>



</div></body></html>
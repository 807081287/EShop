<%@ page language="java" import="java.util.*,java.math.*" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
	String base = request.getContextPath();
	String orderNumber = request.getParameter("orderNumber");
	String orderAmount = request.getParameter("orderAmount");
	String account = request.getParameter("account");
	/* BigDecimal bd =new BigDecimal(orderAmount); 
	orderAmount = bd.divide(new BigDecimal(100)).setScale(2).toString(); */
	String url=base+"/onlinepaysimulator/alipay/step2.jsp?orderAmount="+orderAmount+"&orderNumber="+orderNumber;
	
	String action=base+"/s-unionpay/notify/general/"+orderNumber
			+".jhtml?merId=eshop&orderCurrency=156&respCode=00&orderNumber="+orderNumber;
%>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=GBK">
    <title>支付宝 - 网上支付 安全快速！</title>
    <link rel="shortcut icon" href="https://i.alipayobjects.com/common/favicon/favicon.ico" type="image/x-icon" />
    <link charset="utf-8" rel="stylesheet" href="https://a.alipayobjects.com/cashierx/cashier/1.1.5/common.css" media="all" />    
<link type="text/css" rel="stylesheet" href="css/tp.css">
<link type="text/css" rel="stylesheet" href="css/common.css">
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
</style>	<!-- CMS:全站公共 cms/tracker/tracker_time.vm开始:alipay/tracker/tracker_time.vm --><meta name="ABTest" content="" />

<script type="text/javascript">
if (!window._to) {
  window._to = { start: new Date() };
}
</script>
<script charset="utf-8" crossorigin="crossorigin" src="https://a.alipayobjects.com/??static/ar/alipay.light.base-1.8.js,tracker-all/2.1.2/index.js,alipay/smartracker/2.0.0/smartracker.js"></script>
<!-- CMS:全站公共 cms/tracker/tracker_time.vm结束:alipay/tracker/tracker_time.vm -->    <meta name="description" content="中国最大的第三方电子支付服务提供商" />
    <meta name="keywords" content="网上购物-网上支付-安全支付-安全购物-购物，安全-支付-支付宝,在线-付款,收款-网上,贸易-网上贸易" />
        <link charset="utf-8" rel="stylesheet" href="https://a.alipayobjects.com/build/css/tp/frame/tp.css?t=20110706" media="all" />    
    <style>
                /**
         * 增加账户logo的样式
         * author 浩初2
         */
        .member {
          height: 16px;
          margin: 0 4px;
          width: 16px;
          display: block;
          background: url("images/1HGKCcZyuF.png") 999px 999px no-repeat;
        }

        .member-gold {
          background-position: -63px -383px;
        }

        .member-normal {
          background-position: -83px -383px;
        }

        .account-msg li {
          float: left;
        }

        #partner {
          background-color: #EEE;
          padding: 10px 0;
          text-align: center;
        }

        div#footer {
          width: 100%;
          margin-bottom: 0;
          background-color: #EEE;
          padding: 20px 0 0 0;
        }

        #header h1.logo span {
          background: none;
        }
    </style>
	<!-- CMS:统一收银台/公用CMS/收银台图标开始:cashier/common/icons.vm -->													<!-- CMS:统一收银台/公用CMS/收银台图标结束:cashier/common/icons.vm -->    <link href="https://a.alipayobjects.com" rel="dns-prefetch" />
<link href="https://app.alipay.com" rel="dns-prefetch" />
<link href="https://my.alipay.com" rel="dns-prefetch" />
<link href="https://lab.alipay.com" rel="dns-prefetch" />
<link href="https://cashier.alipay.com" rel="dns-prefetch" />
<link href="https://financeprod.alipay.com" rel="dns-prefetch" />
<link href="https://shenghuo.alipay.com" rel="dns-prefetch" />


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
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit"><!-- CMS:全站公共 cms/tracker/iconfont.vm结束:tracker/iconfont.vm -->
<link href="css/2ACTshL8Vh.css" rel="stylesheet" type="text/css">
<link href="css/alice.components.security-core-2.1-src.css" rel="stylesheet" type="text/css">
<link href="css/front-old.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="<%=base%>/resources/shop/js/jquery.js"></script>
<script>
$(function() {	
    jump(1);
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

  <div class="g_nav">
  <div class="g_nav-fixwidth">
    <ul>
            <li>
        支付宝账户：<span id="J-accountId"><%=account %></span>
      </li>
      <li class="g_nav-sep">|</li>
                          <li><a target="_blank" seed="pay-by-standard" href="https://shenghuo.alipay.com/peerpaycore/prePeerPayApply.htm?biz_no=2015122021001004700046437875&biz_type=TRADE">找人代付</a></li>
      <li class="g_nav-sep">|</li>
                        <li><a href="#faq" id="J-faq-trigger">常见问题</a></li>
      <li class="g_nav-sep">|</li>
            <li>唯一热线：95188</li>
    </ul>
  </div>
</div>

<div id="header">
    <div class="header-container fn-clear">
        <div class="header-title">
            <span class="logo">支付宝<s></s></span>
                        <span class="logo-title">我的收银台</span>
                    </div>
                    </div>
</div>

    <div id="container">






    <div id="main">
                                
                                                    <div class="content-main">
    <div class="notice n-success">    	   
    	            <h3>您已成功付款<%=orderAmount%> 元 ！</h3>
			<p class="n-explain">
        		<div class="Todo">
    				对方将立即收到您的付款。<br />
					如果您有未付款信息，<a href="https://www.alipay.com:443/trade/query_trade_list.htm" target="_blank">查看并继续付款</a>
    			</div>
        	</p>
          
    	<p class="n-other">
    	您可能需要：      
		<a href="https://www.alipay.com:443/user/user_info_console.htm">查看余额</a>
		| <a href="https://www.alipay.com:443/trade/query_trade_list.htm">消费记录</a>
    	| <a href="https://www.alipay.com:443/user/inpour_request.htm">我要充值</a>
    	</p>
		
		
	
	<div class="ad">	

				<!-- CMS:交易外部接口cms/结果页面/左侧主区域开始:result/resultAd.vm --><!--CMS大区域开始/收银台结果页面/结果页面广告/2010429resultAd-->
<style type="text/css"> 
.pane-title h3{
  width:695px;
}
.side .pane-s .pane-title {
  width:212px;
}
#footer {
  margin:20px auto 10px;
}
.n-success{padding-bottom:0;}
</style>
<div class="ad-main-left width710">
    <div class="pane pane-s">
      <div class="title pane-title">
        <h3>为您推荐</h3>
      </div>
      <div class="pane-content lifeHelper">
        <a href="https://shenghuo.alipay.com/jiaofei.htm?_ad=c&_adType=lifejf_sdm_paysuccess" hidefocus="ture">
  <img src="images/1P7V9wFwY9.png" alt="水电煤" />
</a>
<a href="https://lab.alipay.com/life/credit/index.htm?src=success_life_huankuan" hidefocus="ture">
  <img src="images/1P7PnJeIdZ.png" alt="还款" />
</a>
<a href="https://lab.alipay.com/life/payment/index.htm?_ad=c&_adType=success_life_mypay" class="noRightBorder" hidefocus="ture">
  <img src="images/1P7Qd1wYDN.png" alt="我要付款" />
</a>
        <a href="https://shenghuo.alipay.com/tongxun.htm?_ad=c&_adType=lifejf_txf_paysuccess" class="" hidefocus="ture">
  <img src="images/1P7YLTNSjV.png" alt="通讯费" />
</a>
<a href="https://lab.alipay.com/life/gathering/index.htm?_ad=c&_adType=success_life_myshou" class="" hidefocus="ture">
  <img src="images/1P7T9cSmgP.png" alt="我要收款" />
</a>
<a href="https://shenghuo.alipay.com/transfercore/fill.htm?_ad=c&_adType=success_life_tocard" class="noRightBorder" hidefocus="ture">
  <img src="images/1P7aCoRfT3.png" alt="转账到银行卡" />
</a>

        <a href="https://shenghuo.alipay.com/transfer/aaCollect/fill.htm" class="noBottomBorder" hidefocus="ture">
  <img src="images/2ZA62BpxMf.png" alt="AA收款" />
</a>
<a href="https://shenghuo.alipay.com/send/house/fill.htm" 
class="noBottomBorder" hidefocus="ture">
  <img src="images/2ZA7SSuEzZ.png" alt="交房租" />
</a>
<a href="https://me.alipay.com/" 
class="noRightBorder noBottomBorder" hidefocus="ture">
  <img src="images/2OOstCwtlp.png" alt="团体收款" />
</a>
      </div>  
  </div>
</div>

<div class="ad-banner">
 
</div>


<div id="p4pad" style="width:710px; margin:10px auto 0;"></div>


<style type="text/css">
.pane-title h3{
  width:auto;
}
.side .pane-s .pane-title {
   width:auto;
}
#footer {
   padding:20px 0 10px;
   clear:both;
}
.ad {
                overflow: hidden; 
                zoom: 1; 
                margin: 10px 0 0 0; 
            }
        
            .ad-main-left {
                margin: 0 0 10px 0;
            }
            .pane {
                border: 1px #D2D2D2 solid;
                border-top: none;
                margin: 10px 0 0;
                overflow: hidden;
            }


.expand #main {

    width: 710px!important;

}

.ad-main-left {

float: left;width: 350px;margin: 0 0 10px 0;

}

.ad-main-right {

float: right;width: 350px;margin: 0 0 10px 0;

}

.ad-main-banner-right {

    width: 160px; 

    text-align: center; 

}

.pane-s .title {

    margin-top: 0;

}

.pane-s .pane-title {

line-height:26px;

}

.pane-s .pane-content {

    padding: 10px; 

}

.pane .pane-content {

    overflow: hidden;

    zoom: 1; 

    min-height: 0;

}

.ad-main-right .li-pink-arrow {

    margin: 0 0 0 5px; 

}

.li-pink-arrow {

    padding: 5px 0 0 0; 

}

.li-pink-arrow li{

    font-family:Simsun;

    line-height:15px;

    padding-left:13px;

    margin-bottom:2px;

    background:url(images/1JzMl9STPR.png) no-repeat;

}

.ad-banner {

    clear: both;

}

div.tb-detail {

    width: 696px!important;

}

.expand #main {

    width: 710px; 

}

#main {

    overflow-x: hidden; 

}

.side {

    float: right; 

    overflow-x: hidden; 

    width: 230px; 

}

.side .pane-title h3{

    font-size: 12px; 

}

.side-pane .pane-content {

    padding: 0; 

}

.side-pane ul li {

    overflow: hidden; 

    height: 53px; 

}

.footer-link li {

    padding:0 2px 0 7px!important;

    border-right:none!important;

}

.fn-mt15
{
 margin-top:15px;
}

.fn-mb15 {
    margin-top: 15px;
}

.fn-mt0{

    margin-top:0;

}

.fn-pt10 {
    padding-top: 10px;
}
.fn-pb10 {
    padding-bottom: 10px;
}
.fn-pl10 {
    padding-left: 10px;
}
.fn-pr10 {
    padding-right: 10px;
}

.width710{

    width:710px;    

}

.width228{

    width:228px;

}

.imgborder{

    border:1px solid #E4E4E4;

}

.top-dot-border{

    padding-top:10px;

    margin-top:10px;

    background:url(images/1LALqCAIWD.jpg) repeat-x;

}

.aside-pics td{

    padding-left:10px;

}

.ft-center{

    text-align:center;

}

.righttop{

    margin-top:10px;

}

body .pane-s .lifeHelper{

    padding:0;

}

.lifeHelper a{

    width:223px;

    height:45px;

    padding:11px 1px 1px 11px;

    display:block;

    float:left;

    border-right:1px solid #e4e4e4;

    border-bottom:1px solid #e4e4e4;

    background:url(images/1LAMWORyWD.jpg) repeat-x 1px 1px;

}

.lifeHelper a.noRightBorder{

    border-right:none;

}

.lifeHelper a.noBottomBorder{

    border-bottom:none;

}

.lifeHelper a:hover{

    background:url(images/1LAMvRvsMn.jpg) no-repeat 1px 1px;

}

.tab-container{

    height:210px;

    _height:208px;

    margin-top:10px;

    background-color:#EAF4FE;

    border:1px solid #99C9FA;

    overflow:visible;

    padding:8px 13px 0;

    position:relative;

}

.tabTitle {

    color:#FF5500;

    font-size:14px;

    font-weight:bold;

    line-height:18px;

    padding-left:20px;

}

.apply {

    position:absolute;

    right:18px;

    top:10px;

    width:100px;

}

.apply a{

    color:#5A5A5A;

    text-decoration:underline;

}



.tab-container div.hot{

    background:url(images/1LANMtzzrZ.png) no-repeat transparent;

    height:41px;

    left:-1px;

    margin:0;

    overflow:hidden;

    padding:0;

    position:absolute;

    text-indent:-9999px;

    top:-1px;

    width:41px;

}

.tabList{

    width:682px;

    height:141px;

    display:block;

    padding:12px 0 0 8px;


}

.tabList li{

    width:82px;

    height:120px;

    float:left;

    padding-left:16px;

}

.tabList li a{

    color:#1E4BA6;

}

.tabList li.first{

    padding-left:0;

}

.itemTitle{

    margin-top:6px;

}

.price{

    text-align:center;

    }

.price strong{

    color:#FF6A04;

}


.list-bar li
{
    background:url("images/1LANrGnRaX.png") no-repeat scroll 0 -688px; transparent;
    display:inline;
    padding-left:6px
}
.list-bar li.bordernone
{
    background:none repeat scroll 0 0 transparent;
}
.content-main
{
    width:710px;
    float:left;
}
.content-main .Todo a
{
 margin-left:5px;
}
            .pane-title{
                background: url(images/1LAOLKoex3.png) 0 0 no-repeat;
            }
            .pane-s .pane-content {
                padding:10px;
            }
            .pane-title {
                height: 26px;
                line-height: 27px;
                background-position: 0 -140px;
                width:100%;
                padding-left:0!important;
                background-repeat: repeat-x;
                border-bottom: 1px #D2D2D2 solid;
                font-weight:bold;
            }
            .lifeHelper a{
                width:223px;
                height:45px;
                padding:11px 1px 1px 11px;
                display:block;
                float:left;
                border-right:1px solid #e4e4e4;
                border-bottom:1px solid #e4e4e4;
                background:url(images/1LAOxp2c0z.jpg) repeat-x 1px 1px;
            }
            .pane-s .pane-title h3 {
                font-size:12px;
                line-height:28px;
                padding-left:13px;
            }
</style>
<!--CMS大区域结束/收银台结果页面/结果页面广告/2010429resultAd-->  <!-- CMS:交易外部接口cms/结果页面/左侧主区域结束:result/resultAd.vm -->
	</div>
</div>


                                    </div>



</div>

  <div id="footer">
    <!-- CMS:全站公共 cms/foot/copyright.vm开始:foot/copyright.vm --><style>
.copyright,.copyright a,.copyright a:hover{color:#808080;}
</style>
<div class="copyright">
      支付宝版权所有 2004-2015 <a href="http://fun.alipay.com/certificate/jyxkz.htm" target="_blank">ICP证：沪B2-20150087</a>
  </div>
<div class="server" id="ServerNum">
  cashiercloud-31-52 &nbsp; 0a37348b14505775834742351_0
</div>
<!-- CMS:收银台cms/common/combIconsStamp.vm结束:cashier/common/combIconsStamp.vm -->    <noscript><img src="//kcart.alipay.com/web/bi.do?ref=https%3A%2F%2Fcashier.alipay.com%2F&pg=https%3A%2F%2Fcashier.alipay.com%2F%3Fseed%3Dsyslog-cashier%255Einfo%255Ejavascript.not.enabled&v=0.9.2&BIProfile=clk" alt="" width="1" height="1" /></noscript>
  </div>

  <div id="partner">
    <img src="images//2R3cKfrKqS.png" />
  </div>


</body>
</html>

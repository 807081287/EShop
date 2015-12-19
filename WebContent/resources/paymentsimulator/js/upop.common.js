$(function() {
    $(".installUPEditor").click(function() {
        "Win32" == navigator.platform || "Windows" == navigator.platform ? "msie" == $.browser.name ? ($(this).attr("href", UPOP.PATH_URL + UPEdit_IE32_EXE), $(this).attr("target", "_blank")) : $(this).attr("href", UPOP.PATH_URL + UPEdit_FF) : "Win64" == navigator.platform ? "msie" == $.browser.name ? ($(this).attr("href", UPOP.PATH_URL + UPEdit_IE64_EXE), $(this).attr("target", "_blank")) : $(this).attr("href", UPOP.PATH_URL + UPEdit_FF) : 0 < navigator.userAgent.indexOf("Linux") ? 0 < navigator.userAgent.indexOf("_64") ? $(this).attr("href", UPOP.PATH_URL + UPEdit_Linux64) : $(this).attr("href", UPOP.PATH_URL + UPEdit_Linux32) : 0 < navigator.userAgent.indexOf("Macintosh") && $(this).attr("href", UPOP.PATH_URL + UPEdit_MacOs)
    });
    0 < $("#erweima").length && ($(".up").show(), $(".order_detail").show());
    $(".down").click(function() {
        $(this).hide();
        $(".up").show();
        $(".order_detail").slideDown()
    });
    $(".up").click(function() {
        $(this).hide();
        $(".down").show();
        $(".order_detail").slideUp()
    });
    $("#fastRegisterDemo").click(function(b) {
        b.preventDefault();
        if ($("#_ocx_password1").length > 0 && $("#mockLoginPassword").length > 0) {
            $("#_ocx_password1").hide();
            $("#mockLoginPassword").removeClass("dn")
        }
        if ($("#_ocx_password2").length > 0 && $("#mockLoginPassword2").length > 0) {
            $("#_ocx_password2").hide();
            $("#mockLoginPassword2").removeClass("dn")
        }
        $(".flash_pop_card").modal({
            containerId: "simplemodal-container2",
            onClose: function() {
                $.modal.close();
                if ($("#_ocx_password1").length > 0 && $("#mockLoginPassword").length > 0) {
                    $("#_ocx_password1").show();
                    $("#mockLoginPassword").addClass("dn")
                }
                if ($("#_ocx_password2").length > 0 && $("#mockLoginPassword2").length > 0) {
                    $("#_ocx_password2").show();
                    $("#mockLoginPassword2").addClass("dn")
                }
            }
        });
        var b = (UPOPUtils.getWinWidth() - 600) / 2,
        a = (UPOPUtils.getWinHeight() - 400) / 2;
        $("#simplemodal-container2").css({
            width: "600px",
            height: "400px",
            left: b + "px",
            top: a + "px",
            padding: "0",
            overflow: "hidden",
            padding: "18px"
        });
        $("a.modalCloseImg").css({
            top: "5px",
            right: "2px"
        })
    });
    $(".pay_qa dt").toggle(function() {
        $(this).next("dd").is(":hidden") ? $(this).next("dd").fadeIn("fast") : $(this).next("dd").slideUp("fast")
    },
    function() {
        $(this).next("dd").is(":hidden") ? $(this).next("dd").fadeIn("fast") : $(this).next("dd").slideUp("fast")
    });
    $(".note_close").click(function() {
        $(".welcome_note").slideUp()
    });
    $(".learn_flash_login").click(function() {
        if ($(".flash_pop_login").length == 0) {
            var b = '<div class="flash_pop_login dn">                <div id="flashcontentlogin">                <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"                codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" height="400"                type="application/x-shockwave-flash" width="600">                    <param name="movie" value="' + UPOP.PATH_STATIC_I18 + '/images/help/login_flash.swf"/>                    <param name="quality" value="high"/>                    <embed height="400" pluginspage="https://www.macromedia.com/go/getflashplayer" quality="high"                    src="' + UPOP.PATH_STATIC_I18 + '/images/help/login_flash.swf"                    type="application/x-shockwave-flash" width="600"></embed>                </object>                </div>            </div>';
            $("body").append($(b))
        }
        if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
            $("#_ocx_password").hide();
            $("#mockLoginPassword").removeClass("dn")
        }
        $(".flash_pop_login").modal({
            containerId: "simplemodal-container2",
            onClose: function() {
                $.modal.close();
                if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
                    $("#_ocx_password").show();
                    $("#mockLoginPassword").addClass("dn")
                }
            }
        });
        var b = (UPOPUtils.getWinWidth() - 600) / 2,
        a = (UPOPUtils.getWinHeight() - 400) / 2;
        $("#simplemodal-container2").css({
            width: "600px",
            height: "400px",
            left: b + "px",
            top: a + "px",
            padding: "0",
            overflow: "hidden",
            padding: "18px"
        });
        $("a.modalCloseImg").css({
            top: "5px",
            right: "2px"
        })
    });
    $(".learn_flash_card").click(function() {
        if ($(".flash_pop_card").length == 0) {
            var b = '<div class="flash_pop_card dn">                <div id="flashcontentcard">                <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"                codebase="https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7" height="400"                type="application/x-shockwave-flash" width="600">                    <param name="movie" value="' + UPOP.PATH_STATIC_I18 + '/images/help/card_flash.swf"/>                    <param name="quality" value="high"/>                    <embed height="400" pluginspage="https://www.macromedia.com/go/getflashplayer" quality="high"                    src="' + UPOP.PATH_STATIC_I18 + '/images/help/card_flash.swf"                    type="application/x-shockwave-flash" width="600"></embed>                </object>                </div>            </div>';
            $("body").append($(b))
        }
        if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
            $("#_ocx_password").hide();
            $("#mockLoginPassword").removeClass("dn")
        }
        if ($("#_ocx_cvn2").length > 0 && $("#mockCVN2").length > 0) {
            $("#_ocx_cvn2").hide();
            $("#mockCVN2").removeClass("dn")
        }
        $(".flash_pop_card").modal({
            containerId: "simplemodal-container2",
            onClose: function() {
                $.modal.close();
                if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
                    $("#_ocx_password").show();
                    $("#mockLoginPassword").addClass("dn")
                }
                if ($("#_ocx_cvn2").length > 0 && $("#mockCVN2").length > 0) {
                    $("#_ocx_cvn2").show();
                    $("#mockCVN2").addClass("dn")
                }
            }
        });
        var b = (UPOPUtils.getWinWidth() - 600) / 2,
        a = (UPOPUtils.getWinHeight() - 400) / 2;
        $("#simplemodal-container2").css({
            width: "600px",
            height: "400px",
            left: b + "px",
            top: a + "px",
            padding: "0",
            overflow: "hidden",
            padding: "18px"
        });
        $("a.modalCloseImg").css({
            top: "5px",
            right: "2px"
        })
    });
    $("#scan_download").click(function(b) {
        b.preventDefault();
        if ($("#scan_download_pop").length == 0) {
            b = [];
            b.push('<div id="scan_download_pop" >');
            b.push('<iframe src="');
            b.push("https://wallet.95516.com/s/wl/web/ads/html/download.html");
            b.push('" frameborder="0" scrolling="no" width="689" height="375"></iframe>');
            b.push("</div>");
            $(b.join("")).appendTo("body")
        }
        if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
            $("#_ocx_password").hide();
            $("#mockLoginPassword").removeClass("dn")
        }
        if ($("#_ocx_cvn2").length > 0 && $("#mockCVN2").length > 0) {
            $("#_ocx_cvn2").hide();
            $("#mockCVN2").removeClass("dn")
        }
        $("#scan_download_pop").modal({
            containerId: "simplemodal-container-scan",
            onClose: function() {
                $.modal.close();
                if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
                    $("#_ocx_password").show();
                    $("#mockLoginPassword").addClass("dn")
                }
                if ($("#_ocx_cvn2").length > 0 && $("#mockCVN2").length > 0) {
                    $("#_ocx_cvn2").show();
                    $("#mockCVN2").addClass("dn")
                }
            }
        });
        var b = (UPOPUtils.getWinWidth() - 600) / 2,
        a = (UPOPUtils.getWinHeight() - 400) / 2;
        $("#simplemodal-container-scan").css({
            width: "689px",
            height: "375px",
            left: b + "px",
            top: a + "px",
            padding: "0",
            overflow: "hidden",
            padding: "18px"
        });
        $("a.modalCloseImg").css({
            top: "5px",
            right: "2px"
        })
    });
    $(".pop_reg").click(function() {
        UPOP.unionUserEnable ? window.open(UPOP.unionUserRegURL) : window.open("https://user.95516.com/pages/reg/index.html");
        if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
            $("#_ocx_password").hide();
            $("#mockLoginPassword").removeClass("dn")
        }
        if ($("#_ocx_cvn2").length > 0 && $("#mockCVN2").length > 0) {
            $("#_ocx_cvn2").hide();
            $("#mockCVN2").removeClass("dn")
        }
        $(".reg_pop").modal({
            containerId: "simplemodal-container2",
            onClose: function() {
                $.modal.close();
                if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
                    $("#_ocx_password").show();
                    $("#mockLoginPassword").addClass("dn")
                }
                if ($("#_ocx_cvn2").length > 0 && $("#mockCVN2").length > 0) {
                    $("#_ocx_cvn2").show();
                    $("#mockCVN2").addClass("dn")
                }
            }
        });
        var b = (UPOPUtils.getWinWidth() - 400) / 2,
        a = (UPOPUtils.getWinHeight() - 200) / 2;
        $("#simplemodal-container2").css({
            width: "400px",
            height: "200px",
            left: b + "px",
            top: a + "px",
            padding: "0",
            overflow: "hidden"
        });
        $("a.modalCloseImg").css("top", "14px")
    });
    $("#cardNumber").functionValidator({
        fun: function(b) {
            return "" == b.replace(/[ ]/g, "") ? false: true
        },
        onError: $.getI18Text("cardNumber_vali_must")
    }).functionValidator({
        fun: function(b) {
            return UPOP.VALIDATOR.REGEX.number.test(b.replace(/[ ]/g, "")) ? true: false
        },
        onError: $.getI18Text("cardNumber_vali_error")
    }).inputValidator({
        min: 15,
        onError: $.getI18Text("cardNumber_vali_short")
    }).functionValidator({
        fun: function(b) {
            return UPOP.VALIDATOR.REGEX.cardNumber.test(b.replace(/[ ]/g, "")) ? true: false
        },
        onError: $.getI18Text("cardNumber_vali_error")
    });
    $(".chk").click(UPOP.upointShow);
    var c = function() {
        var b = $(".order_money").html(),
        a = Math.round(parseFloat(b) * UPOP.currencyIndexMIN),
        c = Math.round($("#upoint_display").val() * UPOP.currencyIndexMIN);
        $.trim(c) == "" && (c = 0);
        var f = parseFloat(c / UPOP.currencyIndexMIN).toFixed(UPOP.currencyIndex);
        $("#discountAmount").val();
        if (Math.round(c) > parseInt($("#userPoint").val())) $(".order_u_info").addClass("txt_error").show().html($.getI18Text("upoint_uselimit_tips") + parseFloat($("#userPoint").val() / UPOP.currencyIndexMIN).toFixed(UPOP.currencyIndex) + $.getI18Text("paySuccess_fastReg_upoint"));
        else if (Math.round(c) >= a || window.PayDiscount && Math.round(c) >= window.PayDiscount.left(window.PayDiscount.TYPE_UPOINT)) $(".order_u_info").addClass("txt_error").show().html($.getI18Text("upoint_amount_limit_tips"));
        else {
            $(".order_u_info").removeClass("txt_error").hide();
            $(".order_u_d span").html(f);
            window.PayDiscount && window.PayDiscount.set(window.PayDiscount.TYPE_UPOINT, Math.round(c));
            a = parseFloat(window.PayDiscount.sum() / UPOP.currencyIndexMIN).toFixed(UPOP.currencyIndex);
            $(".order_u_pay span").html(calculateInstallment($(".order_u_pay span"), parseFloat(parseFloat(b) - a).toFixed(UPOP.currencyIndex)));
            c > 0 ? $(".order_u_d span").addClass("order_u_green") : $(".order_u_d span").removeClass("order_u_green")
        }
    };
    window.calculateInstallment = function(b, a) {
        $("#installment-pay-fenqi").length > 0 && $("#installment-pay-fenqi").attr("checked") && b.html() != a && UPInstallmentRender.refresh({
            bankNo: $("#bankNo").val(),
            amountChange: true
        });
        return a
    };
    $("#upoint_display").keyup(c).blur(function() {
        c();
        $(".order_u_info").hasClass("txt_error") && $(".order_u .txt").addClass("txterror");
        $("#upoint_display").val() == "" && $("#upoint_display").val("0");
        $(".order_u_pay span").html() == "NaN" && $(".order_u_info").addClass("txt_error").show().html($.getI18Text("upoint_legal_tips"));
        var b = Math.round($(this).val() * UPOP.currencyIndexMIN);
        Math.round(b) < $("#upointMinValue").val() && $(".order_u_info").addClass("txt_error").show().html($.getI18Text("upoint_onetimes_limit_tips") + $("#upointMinValue").val() + $.getI18Text("paySuccess_fastReg_upoint"));
        var a = new Date;
        a.setTime(a.getTime() + 18E5);
        $(".order_u_pay span").html() == "NaN" ? $.cookie("user_upoint_num", 0, {
            expires: a
        }) : $.cookie("user_upoint_num", Math.round($(this).val() * UPOP.currencyIndexMIN), {
            expires: a
        });
        b = Math.round(b);
        window.PayDiscount && window.PayDiscount.set(window.PayDiscount.TYPE_UPOINT, b)
    }).keypress(function(b) {
        var a = b.which;
        if (UPOP.currencyIndex > 0) {
            if ($("#upoint_display").val().split(".").length > 1 && $("#upoint_display").val().split(".")[1].length > UPOP.currencyIndex - 1) return false
        } else if (UPOP.currencyIndex == 0) {
            a = b.which;
            if (a == 46) return false
        }
    }).focusin(function() {
        $(".order_u .txt").removeClass("txterror");
        $.trim($("#upoint_display").val()) == "0" && $("#upoint_display").val("")
    });
    $("#upoint_display").upfloatable().focusin(function() {
        $(this).addClass("txtclick").removeClass("txterror")
    }).blur(function() {
        $(this).removeClass("txtclick")
    })
});
function UPQueryBankBase() {}
function UPQueryBank() {
    UPQueryBankBase.apply(this, arguments)
}
UPQueryBank.prototype = new UPQueryBankBase;
UPQueryBank.prototype.id = function(c) {
    this._id = c;
    return this
};
UPQueryBank.timeouter = null;
UPQueryBank.timeout_var = 0;
UPQueryBank.formID = "cardPayForm";
UPQueryBank.QUERY_CONSTANT = {
    timeout_total: 5E3,
    timeout_interval: 1E3,
    wait_interval: 1E3
};
UPQueryBank.PROCESSING_RESULT = {
    TimeOut: "smsTimeOut",
    OrderTimeOut: "6",
    Succeed: "0",
    Failed: "1",
    InProcess: "2",
    NoRecord: "3"
};
UPQueryBank.prototype.init = function() {};
UPQueryBank.redirectResult = function() {
    clearTimeout(this.timeouter);
    $("#queryBank_ajax_loading").hide();
    $("#btnNext").removeClass("btn_blue_dis").removeAttr("disabled");
    UPOP.queryBankAjax = !0;
    $("#" + UPQueryBank.formID).submit()
};
UPQueryBank.timeCountDown = function() {
    this.timeout_var + this.QUERY_CONSTANT.timeout_interval > this.QUERY_CONSTANT.timeout_total ? this.redirectResult({
        code: UPQueryBank.PROCESSING_RESULT.Failed,
        message: ""
    }) : (this.timeout_var += this.QUERY_CONSTANT.timeout_interval, this.timeouter = setTimeout("UPQueryBank.timeCountDown()", this.QUERY_CONSTANT.timeout_interval))
};
UPQueryBank.check = function() {
    UPQueryBank.timeout_var + UPQueryBank.QUERY_CONSTANT.timeout_interval > UPQueryBank.QUERY_CONSTANT.timeout_total ? UPQueryBank.redirectResult({
        code: UPQueryBank.PROCESSING_RESULT.Failed,
        message: ""
    }) : UPService.send(UPQueryBank._url, "text", {
        queryId: UPQueryBank._qid
    },
    {
        onSuccess: function(c) {
            try {
                var b = eval("(" + c + ")");
                b.code == UPQueryBank.PROCESSING_RESULT.InProcess ? setTimeout("UPQueryBank.check()", UPQueryBank.QUERY_CONSTANT.wait_interval) : UPQueryBank.redirectResult(b)
            } catch(a) {
                UPQueryBank.redirectResult({
                    code: UPQueryBank.PROCESSING_RESULT.Failed,
                    message: ""
                })
            }
        },
        onFail: function() {
            UPQueryBank.redirectResult({
                code: UPQueryBank.PROCESSING_RESULT.Failed,
                message: ""
            })
        }
    },
    !0)
};
UPQueryBank.prototype.exec = function(c, b, a) {
    UPQueryBank._qid = c;
    UPQueryBank._url = b;
    this.init();
    UPQueryBank.formID = a;
    UPQueryBank.timeCountDown();
    UPQueryBank.check()
};
function UPQueryBankBindCard() {
    UPQueryBank.apply(this, arguments);
    UPQueryBankBindCard.QUERY_CONSTANT = UPQueryBank.QUERY_CONSTANT;
    UPQueryBankBindCard.PROCESSING_RESULT = UPQueryBank.PROCESSING_RESULT
}
UPQueryBankBindCard.prototype = new UPQueryBank;
UPQueryBankBindCard.redirectResult = function(c) {
    clearTimeout(this.timeouter);
    try { ! 0 == c.success && "NORMAL" == c.code && "using" == UPQueryBankBindCard._param.type && (UPQueryBankBindCard._param.type = "expired4open", UPQueryBankBindCard._param.queryId = "", (new UPMicroRender).render(UPQueryBankBindCard._param))
    } catch(b) {}
};
UPQueryBankBindCard.timeCountDown = function() {
    this.timeout_var + this.QUERY_CONSTANT.timeout_interval > this.QUERY_CONSTANT.timeout_total ? this.redirectResult({
        code: UPQueryBankBindCard.PROCESSING_RESULT.Failed,
        message: ""
    }) : (this.timeout_var += this.QUERY_CONSTANT.timeout_interval, this.timeouter = setTimeout("UPQueryBankBindCard.timeCountDown()", this.QUERY_CONSTANT.timeout_interval))
};
UPQueryBankBindCard.check = function() {
    UPQueryBankBindCard.timeout_var + UPQueryBankBindCard.QUERY_CONSTANT.timeout_interval > UPQueryBankBindCard.QUERY_CONSTANT.timeout_total ? UPQueryBankBindCard.redirectResult({
        code: UPQueryBankBindCard.PROCESSING_RESULT.Failed,
        message: ""
    }) : UPService.send(UPQueryBankBindCard._url, "text", {
        queryId: UPQueryBankBindCard._qid
    },
    {
        onSuccess: function(c) {
            try {
                var b = eval("(" + c + ")");
                b.code == UPQueryBankBindCard.PROCESSING_RESULT.InProcess ? setTimeout("UPQueryBankBindCard.check()", UPQueryBankBindCard.QUERY_CONSTANT.wait_interval) : UPQueryBankBindCard.redirectResult(b)
            } catch(a) {
                UPQueryBankBindCard.redirectResult({
                    code: UPQueryBankBindCard.PROCESSING_RESULT.Failed,
                    message: ""
                })
            }
        },
        onFail: function() {
            UPQueryBankBindCard.redirectResult({
                code: UPQueryBankBindCard.PROCESSING_RESULT.Failed,
                message: ""
            })
        }
    },
    !0)
};
UPQueryBankBindCard.prototype.exec = function(c, b) {
    UPQueryBankBindCard._qid = c.queryId;
    UPQueryBankBindCard._url = b;
    UPQueryBankBindCard._param = c;
    this.init();
    UPQueryBankBindCard.timeCountDown();
    UPQueryBankBindCard.check()
}; (function() { ! Array.prototype.forEach && "function" !== typeof Array.prototype.forEach && (Array.prototype.forEach = function(c, b) {
        if ("[object Array]" === Object.prototype.toString.call(this)) {
            var a, e;
            a = 0;
            for (e = this.length; a < e && !("function" === typeof c && Object.prototype.hasOwnProperty.call(this, a) && !1 === c.call(b, this[a], a, this)); a++);
        }
    })
})(); (function() {
    var c = function(a) {
        return a.display ? this._display(a) : this._init(a)
    },
    b = {
        "DISCOUNT-DISPLAY-INFO": '        <div class="discount-display" id="discount-display">            <div class="line_h27px fl"><input name="discount-chk-u" type="checkbox"  class="discount-chk-u" id="discount-chk-u">                <label for="discount-chk-u">' + $.getI18Text("discount_activity") + '</label>            </div>            <div class="input_line fl">                <div class="select_ph" style="width:160px"><p class="select_ph_p" id="discount-display-info-check-li" discountId="{first_discountId}" discountAmount="{first_discountAmount}">{first_activityName}</p><a class="show_discountwrap"></a></div>                    <ul class="discount_list dn">                        {DISCOUNT-DISPLAY-INFO-UL}                    </ul>            </div>            <iframe id="discount-item-iframe" frameborder="0" src="' + (UPOP.PATH_STATIC + "/zh_CN/images/global/blank.gif") + '" class="inner-iframe"></iframe>            <div id="discount-display-pay-error" class="dn text_c CardMobileTextSmall text_c_height txt_error fl txt_error_location" >' + $.getI18Text("discount_amount_min") + '</div>            <div class="clear"></div>            <div class="discount-display-pay dn" id="discount-display-pay-info">' + $.getI18Text("discount_unpay") + "<span>{orderAmount}</span>{orderAmountType}</div>        </div>",
        "DISCOUNT-DISPLAY-INFO-UL": '<li discountId="{DISCOUNT-DISPLAY-INFO-UL-LI-discountId}" discountAmount="{DISCOUNT-DISPLAY-INFO-UL-LI-discountAmount}"><span>{DISCOUNT-DISPLAY-INFO-UL-LI}</span></li>'
    };
    c.prototype = {
        _display: function(a) {
            this.settings = $.extend({},
            a || {});
            var b = this;
            0 < a.discountList.length && (b._show(a)._bindEvent(), setTimeout(function() {
                b.settings.selectItem ? b._recheck(b.settings.selectItem) : b.discountList && b._recheck(b._getDefaultDiscountItem())
            },
            100));
            if ("cardPay" == $("#PageEname").val() || "foreignPay" == $("#PageEname").val()) a.discountCoupon ? window.UPOP.DisCountCoupon.getInstance({
                prePath: UPOP.contextPath,
                discountBizOpen: !0,
                transNumber: UPOP.transNumber
            })._remove()._show() : window.UPOP.DisCountCoupon.getInstance({
                prePath: UPOP.contextPath,
                discountBizOpen: !0,
                transNumber: UPOP.transNumber
            })._remove();
            return this
        },
        _init: function(a) {
            this.settings = $.extend({},
            a || {});
            var b = this;
            UPService.send(UPOP.contextPath + "/ajax/showDiscount.action?r=" + Math.random(), "text", {
                transNumber: UPOP.transNumber,
                bindId: $("#bindId").val(),
                payMethod: "icPay" == $("#PageEname").val() ? "ICPay": $("#PageEname").val(),
                sourceType: $("#sourceType").val(),
                cellPhoneNumber: 0 < $("#cellPhoneNumber").length ? $("#cellPhoneNumber").val().replace(/[ ]/g, "") : null,
                areaCode: 0 < $("#areaCode").length ? $("#areaCode").val().replace(/[ ]/g, "") : null
            },
            {
                onSuccess: function(a) {
                    try {
                        var c = $.parseJSON(a);
                        if (c.success) {
                            if (0 < c.discountList.length && b._show(c)._bindEvent(), "cardPay" == $("#PageEname").val() || "foreignPay" == $("#PageEname").val()) c.discountCoupon ? window.UPOP.DisCountCoupon.getInstance({
                                prePath: UPOP.contextPath,
                                discountBizOpen: !0,
                                transNumber: b.settings.transNumber
                            })._remove()._show() : window.UPOP.DisCountCoupon.getInstance({
                                prePath: UPOP.contextPath,
                                discountBizOpen: !0,
                                transNumber: b.settings.transNumber
                            })._remove(),
                            c.showTopPoint ? $(".query-top-point").show() : $(".query-top-point").hide()
                        } else this._showRetryError()
                    } catch(d) {
                        this._showRetryError()
                    }
                    "ICPay" == $("#PageEname").val() && $("#btnIcPay").removeClass("btn_blue_dis").addClass("btn_blue139p").removeAttr("disabled").val($.getI18Text("cardpay_ensurepay_name"))
                },
                onFail: function() {
                    this._showRetryError();
                    "ICPay" == $("#PageEname").val() && $("#btnIcPay").removeClass("btn_blue_dis").addClass("btn_blue139p").removeAttr("disabled").val($.getI18Text("cardpay_ensurepay_name"))
                },
                onComplete: function() {
                    b.settings.selectItem ? b._recheck(b.settings.selectItem) : b.discountList && b._recheck(b._getDefaultDiscountItem())
                },
                _showRetryError: function() {
                    $("#upoint_ajax_loading").hide();
                    $("#upoint_ajax_error").show()
                }
            },
            !0);
            return this
        },
        _getDefaultDiscountItem: function() {
            if (0 < this.discountList.length) for (var a in this.discountList) if ("00" == this.discountList[a].resultCode) return this.discountList[a];
            return null
        },
        _show: function(a) {
            var c = [],
            f = {};
            this.discountList = a.discountList;
            a.discountList.forEach(function(a, d) {
                0 == d && (f.first_discountId = a.discountId, f.first_activityName = a.activityName, f.first_discountAmount = a.discountAmount);
                c.push(UPOPUtils.tplParse(b["DISCOUNT-DISPLAY-INFO-UL"], {
                    "DISCOUNT-DISPLAY-INFO-UL-LI": a.activityName,
                    "DISCOUNT-DISPLAY-INFO-UL-LI-discountId": a.discountId,
                    "DISCOUNT-DISPLAY-INFO-UL-LI-discountAmount": a.discountAmount
                }))
            });
            $(UPOPUtils.tplParse(b["DISCOUNT-DISPLAY-INFO"], $.extend({
                "DISCOUNT-DISPLAY-INFO-UL": c.join(""),
                orderAmount: $("#orderAmount").val(),
                orderAmountType: $("#pay-currency-type").html()
            },
            f))).insertAfter($("#order-detail-info"));
            this._clear();
            return this
        },
        _checkInstallment: function() {
            var a = this;
            if ($("#installment-pay-fenqi").is(":checked")) {
                $("#discount-chk-u").attr("checked", !1);
                UPOP.hideUPEditor();
                _installment_u_pop = $(".installment_u_pop").modal({
                    containerId: "simplemodal-container2",
                    onClose: function() {
                        $.modal.close();
                        UPOP.showUPEditor()
                    }
                });
                var b = (UPOPUtils.getWinWidth() - ("en_US" == UPOP.localeStr ? 560 : 450)) / 2,
                c = (UPOPUtils.getWinHeight() - 170) / 2;
                $(".installment_u_pop .main_word").html($.getI18Text("discount_installment_tips"));
                $(".installment_u_pop .sub_word").html($.getI18Text("discount_installment_msg"));
                $("#simplemodal-container2").css({
                    width: ("en_US" == UPOP.localeStr ? "560": "450") + "px",
                    height: "170px",
                    left: b + "px",
                    top: c + "px",
                    padding: "0",
                    overflow: "hidden"
                });
                $("#installment_back").click(function() {
                    _installment_u_pop.close()
                });
                $("#installment_continuePay").unbind("click");
                $("#installment_continuePay").click(function() {
                    _installment_u_pop.close();
                    $("#installment-pay-fenqi").attr("checked", !1);
                    $("#installment-mask").show();
                    $("#useInstalment").val("false");
                    $("#discount-chk-u").attr("checked", !0);
                    a._checkDiscount()
                });
                return ! 1
            }
            return ! 0
        },
        _checkDiscount: function() {
            0 < $(".order_u").length ? $(".order_u_pay").slideDown("normal") : $("#discount-display-pay-info").slideDown("normal");
            $("#discount-display-pay-error").hide();
            $("#discountAmount").val($("#discount-display-info-check-li").attr("discountAmount"));
            $("#discountId").val($("#discount-display-info-check-li").attr("discountId"));
            $("#activityName").val($("#discount-display-info-check-li").html());
            UPointRelative.use(UPointRelative.TYPE_DISCOUNT);
            PayDiscount.set(PayDiscount.TYPE_DISCOUNT, Math.round($("#discountAmount").val()));
            this._valiAmount();
            return this
        },
        _recheck: function(a) {
            if (a && "true" != $("#useInstalment").val() && this.discountList && 0 < this.discountList.length) {
                for (var b = 0; this.discountList && b < this.discountList.length; b++) if (a.discountId == this.discountList[b].discountId) return $("#discount-display-info-check-li").attr("discountAmount", a.discountAmount),
                $("#discount-display-info-check-li").attr("discountId", a.discountId),
                $("#discount-display-info-check-li").html(a.activityName),
                $("#discount-chk-u").click(),
                this._discountCheck(),
                this;
                if (a = this._getDefaultDiscountItem()) $("#discount-display-info-check-li").attr("discountAmount", a.discountAmount),
                $("#discount-display-info-check-li").attr("discountId", a.discountId),
                $("#discount-display-info-check-li").html(a.activityName),
                $("#discount-chk-u").click(),
                this._discountCheck()
            }
            return this
        },
        _discountCheck: function() {
            $("#discount-chk-u").is(":checked") ? (window.UPOP.DisCountCoupon._instance && window.UPOP.DisCountCoupon && window.UPOP.DisCountCoupon.cancelDiscount(), "checked" == $("#chk_u_enable").attr("checked") && ($("#chk_u_enable").attr("checked", !1), UPOP.upointHide()), 0 < $("#top-point-bankinfo li").length && $("#top-point-bankinfo li").each(function() {
                $(this).find("a").attr("select") == "true" && $(this).find("a").trigger("click")
            }), this._checkDiscount()) : (0 < $(".order_u").length ? (!window.UPointRelative || !UPointRelative.hasUsed(UPointRelative.TYPE_UPOINT) && !UPointRelative.hasUsed(UPointRelative.TYPE_TOPPOINT)) && $(".order_u_d,.order_u_pay").slideUp("normal") : $("#discount-display-pay-info").slideUp("normal"), window.UPointRelative && (UPointRelative.unuse(UPointRelative.TYPE_DISCOUNT), PayDiscount.set(PayDiscount.TYPE_DISCOUNT, 0)), this._clear(), this._valiAmount(), $("#discount-display-pay-error").hide())
        },
        _bindEvent: function() {
            var a = this;
            $("#discount-chk-u").click(function() {
                a._discountCheck()
            });
            $(".show_discountwrap").hover(function() {
                $(".select_ph").addClass("blue_line");
                $(this).parents().next(".text_line").addClass("tx_focus")
            },
            function() {
                $(".select_ph").removeClass("blue_line");
                $(this).parents().next(".text_line").removeClass("tx_focus")
            }).click(function() {
                $(".discount_list").fadeIn("fast");
                $("#discount-item-iframe").width($(".discount_list").width()).show();
                $("#discount-item-iframe").height($(".discount_list").height() - 2)
            });
            $(".phone_wrap").hover(function() {},
            function() {
                $(".discount_list").hide()
            });
            $(".discount_list").hover(function() {},
            function() {
                $(".discount_list").fadeOut();
                $("#discount-item-iframe").hide()
            });
            $(".discount_list li").hover(function() {
                $(this).addClass("hover")
            },
            function() {
                $(this).removeClass("hover")
            }).click(function() {
                var b = $(this).find("span").html();
                $(".select_ph p").html(b);
                $(".discount_list").hide();
                $("#discount-item-iframe").hide();
                $("#discount-display-info-check-li").attr("discountAmount", $(this).attr("discountAmount"));
                $("#discount-display-info-check-li").attr("discountId", $(this).attr("discountId"));
                $("#discount-chk-u").is(":checked") && ($("#discountAmount").val($(this).attr("discountAmount")), $("#discountId").val($(this).attr("discountId")), $("#activityName").val($(this).find("span").html()), window.UPointRelative && (UPointRelative.use(UPointRelative.TYPE_DISCOUNT), PayDiscount.set(PayDiscount.TYPE_DISCOUNT, Math.round($("#discountAmount").val()))), a._valiAmount())
            });
            return this
        },
        _valiAmount: function() {
            var a = $(".order_money").html(),
            b = Math.round(parseFloat(a) * UPOP.currencyIndexMIN),
            c = $("#discountAmount").val();
            parseFloat(c / UPOP.currencyIndexMIN).toFixed(UPOP.currencyIndex);
            var g = parseFloat(window.PayDiscount.sum() / UPOP.currencyIndexMIN).toFixed(UPOP.currencyIndex);
            if (Math.round(c) >= b || window.PayDiscount && Math.round(c) >= window.PayDiscount.left(window.PayDiscount.TYPE_DISCOUNT)) $("#discount-display-pay-error").html($.getI18Text("discount_amount_min")),
            $("#discount-display-pay-error").show(),
            this._clear();
            else {
                var d;
                a: if (b = $("#discount-display-info-check-li").attr("discountid")) {
                    for (d in this.discountList) if (this.discountList[d].discountId == b) {
                        d = this.discountList[d];
                        break a
                    }
                    d = null
                } else d = b;
                d && "00" != d.resultCode ? ($("#discount-display-pay-error").html(d.resultMessage), $("#discount-display-pay-error").show(), this._clear()) : $("#discount-display-pay-error").hide();
                $("#discount-display-pay-info span").html(calculateInstallment($("#discount-display-pay-info span"), parseFloat(parseFloat(a) - g).toFixed(UPOP.currencyIndex)));
                0 < $(".order_u_pay span").length && $(".order_u_pay span").html(calculateInstallment($(".order_u_pay span"), parseFloat(parseFloat(a) - g).toFixed(UPOP.currencyIndex)))
            }
            return this
        },
        _clear: function() {
            $("#discountAmount").val(0);
            $("#discountId").val("");
            $("#activityName").val("");
            window.PayDiscount.remove(window.PayDiscount.TYPE_DISCOUNT);
            window.UPointRelative.unuse(window.UPointRelative.TYPE_DISCOUNT);
            return this
        },
        _showDetail: function() {},
        _hide: function() {},
        _hideDetail: function() {}
    };
    c.show = function(a) {
        c.options = a;
        if ("prePay" == $("#PageEname").val() || "prePay4ztyt" == $("#PageEname").val() || "cardPay" == $("#PageEname").val() || "ICPay" == $("#PageEname").val() || "foreignPay" == $("#PageEname").val()) return new c(a)
    };
    c.display = function(a) {
        a = $.extend(a, {});
        a.display = !0;
        if ("prePay" == $("#PageEname").val() || "prePay4ztyt" == $("#PageEname").val() || "cardPay" == $("#PageEname").val() || "ICPay" == $("#PageEname").val() || "foreignPay" == $("#PageEname").val()) return new c(a)
    };
    c.valiSubmit = function() {
        if (0 < $(".discount-display").length && $("#discount-chk-u").is(":checked") && 0 <= Math.round($("#discountAmount").val())) {
            if ($("#discount-display-pay-error").is(":hidden")) return ! 0;
            $("html,body").animate({
                scrollTop: $("#discount-display-pay-error").offset().top
            },
            500);
            return ! 1
        }
        return ! 0
    };
    c.reset = function(a) {
        c.options = a;
        $("#discount-display").remove();
        UPointRelative.hasUsed(UPointRelative.TYPE_DISCOUNT) && (UPointRelative.hasUsed(UPointRelative.TYPE_UPOINT) || $(".order_u_pay").slideUp("normal"));
        window.PayDiscount.remove(window.PayDiscount.TYPE_DISCOUNT);
        window.UPointRelative.unuse(window.UPointRelative.TYPE_DISCOUNT);
        return c.show(a)._clear()._valiAmount()
    };
    c.cancelDiscount = function() {
        if (0 < $("#discount-display").length || 0 < $("#order_u_coupon").length) UPointRelative.hasUsed(UPointRelative.TYPE_DISCOUNT) && (UPointRelative.hasUsed(UPointRelative.TYPE_UPOINT) || $(".order_u_pay").slideUp("normal")),
        $("#discount-display-pay-info").slideUp("normal"),
        window.PayDiscount.remove(window.PayDiscount.TYPE_DISCOUNT),
        window.UPointRelative.unuse(window.UPointRelative.TYPE_DISCOUNT),
        $("#discountAmount").val(0),
        $("#discountId").val(""),
        $("#activityName").val(""),
        $("#discount-chk-u").attr("checked", !1),
        $("#discount-display-pay-error").hide()
    };
    c.phoneRefresh = function(a, b) {
        if (0 < $("#discountBizOpen").length && "true" == $("#discountBizOpen").val() && ("prePay4ztyt" == $("#PageEname").val() || "cardPay" == $("#PageEname").val() || "foreignPay" == $("#PageEname").val()) && $(b).attr("originalPhoneNumber") != a.replace(/[ ]/g, "")) {
            var c = $.extend(window.UPOP.DisCount.options, {
                selectItem: null
            });
            0 < Math.round($("#discountAmount").val()) && (c = $.extend(c, {
                selectItem: {
                    discountAmount: $("#discount-display-info-check-li").attr("discountAmount"),
                    discountId: $("#discount-display-info-check-li").attr("discountId"),
                    activityName: $("#discount-display-info-check-li").html()
                }
            }));
            window.UPOP.DisCount && window.UPOP.DisCount.reset(c)
        }
        $(b).attr("originalPhoneNumber", a.replace(/[ ]/g, ""))
    };
    window.UPOP.DisCount = c
})(); (function() {
    var c = function() {
        c._instance || (c._instance = this._init.apply(this, arguments));
        return c._instance
    };
    c._instance = null;
    c.getInstance = function(a) {
        return new c(a)
    };
    c.cancelDiscount = function() {
        0 < $("#order_u_coupon").length && (UPointRelative.hasUsed(UPointRelative.TYPE_COUPON) && UPointRelative.hasUsed(UPointRelative.TYPE_UPOINT), $("#coupon-display-pay-info").slideUp("normal"), window.PayDiscount.remove(window.PayDiscount.TYPE_COUPON), window.UPointRelative.unuse(window.UPointRelative.TYPE_COUPON), $("#couponAmount").val(0), $("#couponCode").val(""), $("#chk_u_coupon").attr("checked", !1), $("#u_coupon_id").hide().val(""), $("#u_coupon_use").hide(), $("#u_coupon_error").hide(), $("#u_coupon_quan_info").hide(), $("#u_coupon_cancel").hide(), c._instance && c._instance._calculateRemainAmount())
    };
    var b = c,
    a, e = {
        discountCoupon: '            <div class="coupon-display" id="order_u_coupon">                <div class="order_u_coupon_ipt fl"><input name="chk_u_coupon" type="checkbox"  class="coupon-chk-u" id="chk_u_coupon">                <label for="chk_u_coupon">{discountCouponTitle}</label>                <input type="text" id="u_coupon_id" name="u_coupon_id" placeholder="{placeholderTips}" maxlength="32" class="txt txt_lijianquan dn" onkeyup="this.value=this.value.toUpperCase()" />                <input id="u_coupon_use" name="u_coupon_use" type="button" value="{discountCouponUse}" class="lijianquan_btn dn">                <span class="u_coupon_quan_num dn" id="u_coupon_quan_info">{discountCouponInfo}</span><a href="#" class="dn" id="u_coupon_cancel">{discountCouponCancel}</a>            </div>            <div class="txt_error fl txt_error_location dn" id="u_coupon_error">{discountCouponError}</div>            <div class="clear"></div>            <div class="coupon-display-pay dn" id="coupon-display-pay-info">' + $.getI18Text("discount_unpay") + "<span>{orderAmount}</span>{orderAmountType}</div>            </div>",
        discountCouponInfo: $.getI18Text("discountCouponInfo")
    };
    a = {
        _init: function(a) {
            this.settings = $.extend({},
            a || {});
            return this
        },
        _remove: function() {
            0 < $("#order_u_coupon").length && $("#order_u_coupon").remove();
            this._hideRemainAmount();
            return this
        },
        _show: function() {
            $("#couponAmount").val(0);
            $("#couponCode").val("");
            $(UPOPUtils.tplParse(e.discountCoupon, $.extend({
                discountCouponInfo: e.discountCouponInfo,
                discountCouponError: $.getI18Text("discountCouponError"),
                discountCouponTitle: $.getI18Text("discountCouponTitle"),
                discountCouponUse: $.getI18Text("discountCouponUse"),
                discountCouponCancel: $.getI18Text("discountCouponCancel"),
                placeholderTips: $.getI18Text("placeholderTips"),
                orderAmountType: $("#pay-currency-type").html()
            },
            {}))).insertAfter($("#order-detail-info"));
            this._bindEvent();
            return this
        },
        _uncheck: function() {
            $("#u_coupon_id").hide().val("");
            $("#u_coupon_use").hide();
            $("#u_coupon_error").hide();
            $("#u_coupon_quan_info").hide();
            $("#u_coupon_cancel").hide();
            this._hideRemainAmount();
            return this
        },
        _bindEvent: function() {
            var a = this;
            $("#chk_u_coupon").click(function() {
                $("#chk_u_coupon").is(":checked") ? (window.UPOP.DisCount && window.UPOP.DisCount.cancelDiscount(), "checked" == $("#chk_u_enable").attr("checked") && ($("#chk_u_enable").attr("checked", !1), UPOP.upointHide()), 0 < $("#top-point-bankinfo li").length && $("#top-point-bankinfo li").each(function() {
                    $(this).find("a").attr("select") == "true" && $(this).find("a").trigger("click")
                }), a._calculateRemainAmount(), $("#u_coupon_id").removeClass("txterror").show(), a._placeholder(document.getElementById("u_coupon_id")), $("#u_coupon_use").show()) : a._uncheck()
            });
            $("#u_coupon_id").focus(function() {
                $(this).addClass("txtclick").removeClass("txterror").show()
            }).blur(function() {
                $(this).removeClass("txtclick");
                a._valiCouponCode($(this).val())
            });
            $("#u_coupon_use").click(function() {
                a._valiCouponCode($("#u_coupon_id").val()) && a._useCoupon()
            });
            $("#u_coupon_cancel").click(function(b) {
                b.preventDefault();
                $("#u_coupon_id").show().val("");
                a._placeholder(document.getElementById("u_coupon_id"));
                $("#u_coupon_use").show();
                $("#u_coupon_error").hide();
                $("#u_coupon_quan_info").hide();
                $("#u_coupon_cancel").hide();
                a._hideRemainAmount()
            });
            this._placeholder(document.getElementById("u_coupon_id"));
            return this
        },
        _placeholder: function(a) {
            if (!this._supportPlaceholder) {
                var b = a.getAttribute("placeholder");
                "" == a.defaultValue && (a.value = b, a.style.color = "gray");
                a.onfocus = function() {
                    a.style.color = "";
                    if (a.value === b) this.value = ""
                };
                a.onblur = function() {
                    if (a.value === "") {
                        this.value = b;
                        this.style.color = "gray"
                    } else this.style.color = ""
                }
            }
            return this
        },
        _supportPlaceholder: "placeholder" in document.createElement("input"),
        _valiCouponCode: function(a) {
            var b = !!RegExp(/^[A-Za-z0-9]{8,32}$/).test(a);
            if (b) return $.getI18Text("discountCouponFormatError") == $("#u_coupon_error").html() && ($("#u_coupon_id").removeClass("txterror"), $("#u_coupon_error").hide()),
            b;
            b = document.getElementById("u_coupon_id");
            "" != $.trim(a) && "placeholder" in document.createElement("input") && this._showRetryError($.getI18Text("discountCouponFormatError")); ! ("placeholder" in document.createElement("input")) && a != b.getAttribute("placeholder") && this._showRetryError($.getI18Text("discountCouponFormatError"));
            return ! 1
        },
        _showRemainAmount: function() {
            0 < $(".order_u").length ? $(".order_u_pay").slideDown("normal") : 0 < $("#discount-display-pay-info").length ? $("#discount-display-pay-info").slideDown("normal") : 0 < $("#coupon-display-pay-info").length && $("#coupon-display-pay-info").slideDown("normal")
        },
        _hideRemainAmount: function() {
            window.PayDiscount.remove(window.PayDiscount.TYPE_COUPON);
            window.UPointRelative.unuse(window.UPointRelative.TYPE_COUPON);
            this._calculateRemainAmount();
            0 < $(".order_u").length ? (!window.UPointRelative || !UPointRelative.hasUsed(UPointRelative.TYPE_UPOINT) && !UPointRelative.hasUsed(UPointRelative.TYPE_TOPPOINT)) && $(".order_u_d,.order_u_pay").slideUp("normal") : 0 < $("#discount-display-pay-info").length ? $("#discount-display-pay-info").slideUp("normal") : 0 < $("#coupon-display-pay-info").length && $("#coupon-display-pay-info").slideUp("normal");
            $("#couponAmount").val(0);
            $("#couponCode").val("")
        },
        _showCoupon: function(a) {
            $("#u_coupon_id").hide();
            $("#u_coupon_use").hide();
            $("#u_coupon_error").hide();
            $("#u_coupon_quan_info").html(UPOPUtils.tplParse(e.discountCouponInfo, $.extend({
                orderAmountType: $("#pay-currency-type").html(),
                u_coupon_id: $("#u_coupon_id").val()
            },
            a))).show();
            $("#u_coupon_cancel").show();
            $("#couponAmount").val(a.couponAmount);
            $("#couponCode").val($("#u_coupon_id").val());
            return this
        },
        _showRetryError: function(a) {
            $("#u_coupon_id").addClass("txterror");
            $("#u_coupon_error").html(a).show();
            $("#couponAmount").val(0);
            $("#couponCode").val("");
            return this
        },
        _calculateRemainAmount: function() {
            var a = $(".order_money").html(),
            b = parseFloat(window.PayDiscount.sum() / UPOP.currencyIndexMIN).toFixed(UPOP.currencyIndex);
            $("#coupon-display-pay-info span").html(calculateInstallment($("#coupon-display-pay-info span"), parseFloat(parseFloat(a) - b).toFixed(UPOP.currencyIndex)));
            0 < $(".order_u_pay span").length && $(".order_u_pay span").html(calculateInstallment($(".order_u_pay span"), parseFloat(parseFloat(a) - b).toFixed(UPOP.currencyIndex)));
            0 < $("#discount-display-pay-info span").length && $("#discount-display-pay-info span").html(calculateInstallment($("#discount-display-pay-info span"), parseFloat(parseFloat(a) - b).toFixed(UPOP.currencyIndex)));
            return this
        },
        _valiCouponAmount: function(a) {
            var b = $(".order_money").html(),
            b = Math.round(parseFloat(b) * UPOP.currencyIndexMIN);
            if (Math.round(a) >= b || window.PayDiscount && Math.round(a) >= window.PayDiscount.left(window.PayDiscount.TYPE_COUPON)) return this._showRetryError($.getI18Text("discountCouponError")),
            !1;
            UPointRelative.use(UPointRelative.TYPE_COUPON);
            PayDiscount.set(PayDiscount.TYPE_COUPON, Math.round(a));
            this._calculateRemainAmount();
            this._showRemainAmount();
            return ! 0
        },
        _useCoupon: function() {
            var a = this;
            UPService.send(a.settings.prePath + "/ajax/getCouponAmount.action?r=" + Math.random(), "text", {
                transNumber: a.settings.transNumber,
                bindId: $("#bindId").val(),
                sourceType: $("#sourceType").val(),
                couponCode: $("#u_coupon_id").val(),
                cellPhoneNumber: 0 < $("#cellPhoneNumber").length ? $("#cellPhoneNumber").val().replace(/[ ]/g, "") : null
            },
            {
                onSuccess: function(b) {
                    try {
                        var c = $.parseJSON(b);
                        c.success ? a._valiCouponAmount(c.couponAmount) && a._showCoupon({
                            u_coupon_name: c.couponName,
                            u_coupon_num: parseFloat(c.couponAmount / UPOP.currencyIndexMIN).toFixed(UPOP.currencyIndex),
                            couponAmount: c.couponAmount
                        })._showRemainAmount() : a._showRetryError(c.respMsg)
                    } catch(e) {
                        a._showRetryError($.getI18Text("discountCouponNetError"))
                    }
                },
                onFail: function() {
                    a._showRetryError($.getI18Text("discountCouponNetError"))
                },
                onComplete: function() {}
            },
            !0);
            return this
        }
    };
    b.prototype = a;
    window.UPOP.DisCountCoupon = c
})(); (function() {
    var c = UPOP.contextPath + "/phoneRegister.action?transNumber=" + UPOP.transNumber;
    $('<style type="text/css">#simplemodal-overlay { background:#666; margin:0;}#simplemodal-container-register { width:600px; overflow-y:auto; border:4px solid #999; background:#FFF; height:500px;}#simplemodal-container-register a.modalCloseImg { width:16px; height:16px; display:inline; z-index:3200; position:absolute; top:11px; right:8px; cursor:pointer; background-position:0 -525px;}#simplemodal-container-register a.closeImg {background-position: 0 -562px; width:10px; height:10px;}#simplemodal-container-register a.closeImgBlack {background-position: 0 -543px; width:16px; height:16px;}</style>').appendTo($("head"));
    window.UPOP.upopRegister = {
        pop: function() {
            0 < $("#_ocx_password").length && 0 < $("#mockLoginPassword").length && ($("#_ocx_password").hide(), $("#mockLoginPassword").removeClass("dn"));
            $("#upop_register").remove();
            var b = [];
            b.push('<div id="upop_register" class="login_pop dn">');
            b.push('<iframe src="');
            b.push(c);
            b.push('" frameborder="0" scrolling="no" width="600" height="490"></iframe>');
            b.push("</div>");
            $(b.join("")).appendTo("body");
            try {
                $("#upop_register").modal({
                    containerId: "simplemodal-container-register",
                    onClose: function() {
                        $.modal.close();
                        if (UPOP.upopRegister.success == true) window.location.href = UPOP.contextPath + "/index.action?transNumber=" + UPOP.transNumber;
                        else if (UPOP.upopRegister.success == false) {
                            $("#userName").focus();
                            $("#userName").val(UPOP.upopRegister.userName)
                        }
                        if ($("#_ocx_password").length > 0 && $("#mockLoginPassword").length > 0) {
                            $("#_ocx_password").show();
                            $("#mockLoginPassword").addClass("dn")
                        }
                    }
                })
            } catch(a) {}
        },
        exec: function() {}
    }
})(); (function() {
    $(function() {
        0 < $("#secureKey_id").length && "" != $("#secureKey_id").val() && (window.upeditorMachineInfo = new $.upe({
            upePath: UPOP.PATH_URL,
            upeId: "_ocx_machineInfo",
            upeSk: $("#secureKey_id").val(),
            upeEdittype: 0,
            upeMode: "0010",
            upeMinlength: 3,
            upeMaxlength: 3,
            upePwdMode: 3,
            upeTabindex: 4,
            upeClass: "ocx_machineInfo",
            upeObjClass: "",
            upeInstallClass: "ocx_machineInfo_install",
            resp: "80",
            errMapping: {
                "00": "\u6b63\u5e38",
                "01": "\u63a7\u4ef6\u672a\u5b89\u88c5",
                "02": "\u914d\u7f6e\u9519\u8bef",
                "03": "\u521d\u59cb\u5316\u9519\u8bef",
                "04": "seed\u9519\u8bef",
                "05": "\u4e3a\u5fc5\u586b",
                "06": "\u4f4d\u6570\u8fc7\u77ed",
                "07": "\u8f93\u5165\u8fc7\u957f",
                "08": "\u975e\u6cd5\u5b57\u7b26",
                "09": "\u52a0\u5bc6\u51fa\u9519",
                10 : "\u8c03\u7528\u51fa\u9519"
            },
            upeFontName: "Arial Black",
            upeFontSize: 25,
            upeNextElementId: "",
            enterCallback: null,
            tabCallback: null
        }), up.UPEditInstall.bind(upeditorMachineInfo, {
            imagePath: UPOP.PATH_STATIC_I18 + "/images/global/"
        }), 0 < $("#upeditorMachineInfo_area").length && $("#upeditorMachineInfo_area").append(upeditorMachineInfo.load()), upeditorMachineInfo.checkInstall() || $(".ocx_machineInfo_install").hide())
    })
})(); (function() {
    UPEdit.setPWDStrength = function(c) {
        $("#_ocx_password1").parents().next(".note_info").removeClass("write_error");
        0 == c && (submit ? $("#_ocx_password1").parents().next(".note_info").addClass("write_error").removeClass("rank_short_password rank_mid_password rank_high_password").addClass("form_note_password").css("margin-left", "0px").css("line-height", "23px").html($.getI18Text("paySuccess_fastReg_newPassword_tips")) : $("#_ocx_password1").parents().next(".note_info").removeClass("write_error").removeClass("rank_short_password").addClass("form_note_password").html("&nbsp;"), UPEdit.isValidate = !1);
        1 == c && ($("#_ocx_password1").parents().next(".note_info").removeClass().css("line-height", "23px").addClass("note_info rank_short_password").html($.getI18Text("paySuccess_fastReg_password_tips")), UPEdit.isValidate = !1);
        2 == c && ($("#_ocx_password1").parents().next(".note_info").removeClass().addClass("note_info rank_low_password").removeClass("rank_mid_password").css("line-height", "23px").html($.getI18Text("paySuccess_fastReg_password_tips_less")), UPEdit.isValidate = !1);
        3 == c && ($("#_ocx_password1").parents().next(".note_info").removeClass().css("line-height", "23px").addClass("note_info rank_mid_password").html($.getI18Text("paySuccess_fastReg_password_tips_middle")), UPEdit.isValidate = !0);
        4 == c && ($("#_ocx_password1").parents().next(".note_info").removeClass().css("line-height", "23px").addClass("note_info rank_high_password").html($.getI18Text("paySuccess_fastReg_password_tips_strong")), UPEdit.isValidate = !0);
        5 == c && (UPEdit.isValidate = !1, $("#_ocx_password1").parents().next(".note_info").addClass("write_error").removeClass("rank_short_password rank_mid_password rank_high_password").addClass("form_note_password").css("margin-left", "0px").css("line-height", "23px").html($.getI18Text("paySuccess_fastReg_newPassword_error_tips")))
    }
})(); (function() {
    window.UPOP.erweima = function() {
        var c = new Date,
        b = '<h2 style="font-size: 14px;color:#666;text-align: left;margin: 5px 0px 5px 0px;line-height: 25px;">                <img src="' + window.UPOP.PATH_STATIC_I18 + '/images/icon/ss.gif" style="width: 16px;height: 16px;vertical-align: middle;margin-right: 5px;">                {icpay_scan_desc}                </h2>',
        a = null,
        e = function() {
            6E5 > new Date - c ? g(UPOP.qrcodeDomain + "/qrcode/isScanned.action?transNumber=" + UPOP.transNumber + "&r=" + Math.random() + "&callback=?",
            function() {
                clearInterval(a);
                a = setInterval(f, 2E3);
                $("#scan_header").empty().html(UPOPUtils.tplParse(b, {
                    icpay_scan_desc: $.getI18Text("icpay_scan_desc")
                }))
            }) : clearInterval(a)
        },
        f = function() {
            6E5 > new Date - c ? g(UPOP.qrcodeDomain + "/qrcode/isOrderDone.action?transNumber=" + UPOP.transNumber + "&orderTime=" + UPOP.orderTime + "&merId" + UPOP.merchantCode + "&orderNumber" + UPOP.orderNumber + "&r=" + Math.random() + "&callback=?",
            function() {
                clearInterval(a);
                $("#qrcodeForm").submit()
            }) : clearInterval(a)
        },
        g = function(a, b) {
            $.getJSON(a, {},
            function(a) {
                try { ! 0 == a && b()
                } catch(c) {}
            })
        };
        return {
            start: function() {
                c = new Date;
                a = setInterval(e, 2E3)
            }
        }
    }
})();
$(document).ready(function() {
    0 < $("#erweima").length && ((new QRCode(document.getElementById("erweima"), {
        width: 120,
        height: 120
    })).makeCode($("#erweimaData").val()), $("#erweima").attr("title", ""), window.UPOP.erweima().start())
});
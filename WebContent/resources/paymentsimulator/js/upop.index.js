(function(g) {
    function f() {
        return this._init.apply(this, arguments)
    }
    f.prototype = {
        _init: function(a) {
            this.settings = $.extend({},
            a || {});
            this._showLoginPassword();
            return this
        },
        _pageLoad: function() {
            var a = this;
            UPOP.queryBankAjax = !1;
            UPOP.transNumber = a.settings.transNumber;
            $(function() {
                UPOP.VALIDATOR.TIP_CSS = {
                    onShowTextClass: "ipt_txt CardDefault gray_12px",
                    onErrorShowTextClass: "ipt_txt CardDefault txterror gray_12px",
                    onShowClass: "ipt_txt CardDefault",
                    onFocusClass: "ipt_txt CardDefault txtclick",
                    onErrorClass: "ipt_txt CardDefault txterror",
                    onCorrectClass: "ipt_txt CardDefault"
                };
                UPOP.VALIDATOR.TIP_HTML = {
                    onShowHtml: "<div class='note_info user'>$data$</div>",
                    onFocusHtml: "<div class='note_info user'>$data$</div>",
                    onErrorHtml: "<div class='note_info user txt_error_index'>$data$</div>",
                    onCorrectHtml: "<div class='note_info user'>$data$</div>"
                };
                $.formValidator.initConfig({
                    formID: "loginForm",
                    mode: UPOP.VALIDATOR.TIP_MODE.FixTip,
                    validatorGroup: "1",
                    preSubmit: function() {
                        if ("pad" != UPOP.acpAgent && (10 == window.loginPassword.osBrowser || 11 == window.loginPassword.osBrowser)) window.loginPassword.keyName = $.trim($("#userName").val()).toLowerCase(),
                        window.loginPassword.callback = function() {
                            window.loginPwdResult = new $.upeResult(outs[window.loginPassword.settings.pgeWindowID].enstr, window.loginPassword.settings.errMapping);
                            window.loginPwdResultMachine = new $.upeResult(outs[window.loginPassword.settings.pgeWindowID].mac, window.loginPassword.settings.errMapping)
                        },
                        $.formValidator.getInitConfig("1").pageUPEditor = [window.loginPassword];
                        return ! 0
                    },
                    onError: function() {
                        try {
                            if ("pad" == UPOP.acpAgent) 0 == $("#padUserPassword").val().length ? ($.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("user_password_msg_05")), $("#padUserPassword").removeClass().addClass("ipt_txt CardDefault txterror")) : 6 > $("#padUserPassword").val().length ? ($.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("user_password_msg_06")), $("#padUserPassword").removeClass().addClass("ipt_txt CardDefault txterror")) : ($("#password").val(window.padPassword.userCvn2Encrypt($("#padUserPassword").val())), $.formValidator.setTipMsg($("#passwordTip").get(0), "onCorrect", "&nbsp;"));
                            else if (10 == window.loginPassword.osBrowser || 11 == window.loginPassword.osBrowser) loginPwdResult.isError() ? $.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("password") + loginPwdResult.errMsg()) : $.formValidator.setTipMsg($("#passwordTip").get(0), "onCorrect", "&nbsp;");
                            else {
                                var b = window.loginPassword.result($.trim($("#userName").val()).toLowerCase());
                                b.isError() ? $.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("password") + b.errMsg()) : $.formValidator.setTipMsg($("#passwordTip").get(0), "onCorrect", "&nbsp;")
                            }
                            return ! 1
                        } catch(a) {
                            return ! 1
                        }
                    },
                    onSuccess: function() {
                        if ("pad" == UPOP.acpAgent) {
                            if (0 == $("#padUserPassword").val().length) return $.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("user_password_msg_05")),
                            $("#padUserPassword").removeClass().addClass("ipt_txt CardDefault txterror"),
                            !1;
                            if (6 > $("#padUserPassword").val().length) return $.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("user_password_msg_06")),
                            $("#padUserPassword").removeClass().addClass("ipt_txt CardDefault txterror"),
                            !1;
                            $("#password").val(window.padPassword.userCvn2Encrypt($("#padUserPassword").val()));
                            $.formValidator.setTipMsg($("#passwordTip").get(0), "onCorrect", "&nbsp;")
                        } else if (10 == window.loginPassword.osBrowser || 11 == window.loginPassword.osBrowser) {
                            if (loginPwdResult.isError()) return $.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("password") + loginPwdResult.errMsg()),
                            _$("_ocx_password").focus(),
                            !1;
                            $("#password").val(loginPwdResult.cypher);
                            try {
                                $("#machineInfo_username").val(loginPwdResultMachine.cypher)
                            } catch(b) {}
                            console.log("initConfig.pageUPEditor######" + $.formValidator.getInitConfig("1").pageUPEditor);
                            $.formValidator.getInitConfig("1").pageUPEditor && ($("#loginForm").unbind(), $("#loginForm").submit())
                        } else {
                            var a = window.loginPassword.result($.trim($("#userName").val()).toLowerCase()),
                            c = window.loginPassword.machineInfo($.trim($("#userName").val()).toLowerCase());
                            if (a.isError()) return $.formValidator.setTipMsg($("#passwordTip").get(0), "onError", $.getI18Text("password") + a.errMsg()),
                            _$("_ocx_password").focus(),
                            !1;
                            $("#password").val(a.cypher);
                            try {
                                var d = $("#userName").val().replace(/[ ]/g, ""),
                                c = upeditorMachineInfo.machineInfo(d);
                                $("#machineInfo_username").val(c.cypher)
                            } catch(e) {}
                        }
                        return ! 0
                    }
                });
                var f = function() {
                    var b = $(this).val();
                    try {
                        var a = document.documentMode;
                        0 < b.length && !(10 == a || 11 == a) && b != $.getI18Text("userNameShowText") ? "msie" == $.browser.name && "9.0" == $.browser.version && 7 == a ? $(".close_val_username").hide() : $(".close_val_username").show() : $(".close_val_username").hide()
                    } catch(c) {}
                };
                $("#userName").formValidator({
                    onShowText: $.getI18Text("userNameShowText"),
                    onShow: "&nbsp;",
                    onFocus: "&nbsp;",
                    onError: " ",
                    onCorrect: "&nbsp;",
                    validatorGroup: "1",
                    valiCallback: function(b, c) {
                        c.isValid && UPService.send(a.settings.contextPath + "/ajax/checkLoginNameExist.action?r=" + Math.random(), "text", {
                            loginName: $("#userName").val()
                        },
                        {
                            onSuccess: function(a) {
                                "y" == a ? $("#btnSubmit").removeClass().addClass("btn_blue139p").attr("disabled", !1) : "" != $("#userName").val() && $("#userName").val() != $.getI18Text("userNameShowText") && ($.formValidator.setTipMsg($("#userNameTip").get(0), "onError", $.getI18Text("user_not_exist_login")), $("#btnSubmit").removeClass().addClass("btn_blue_dis").attr("disabled", !0))
                            },
                            onFail: function() {}
                        },
                        !0)
                    }
                }).functionValidator({
                    fun: function(a) {
                        return "" != a
                    },
                    onError: $.getI18Text("userName_vali_must")
                }).inputValidator({
                    min: 6,
                    max: 64,
                    onError: $.getI18Text("userName_vali_short")
                }).regexValidator({
                    regExp: UPOP.VALIDATOR.REGEX.username,
                    onError: $.getI18Text("userName_vali_error")
                }).keyup(f).blur(function() {
                    $(this).val() == $.getI18Text("userNameShowText") ? ($(this).css("font-weight", ""), $("#userName").css("font-size", "12px")) : $(this).css("font-weight", "bold");
                    f.call(this)
                });
                if ("" != $.trim($.cookie("username"))) {
                    var c = $.cookie("username");
                    /^".*"$/.test(c) ? $("#userName").val(c.slice(1, c.length - 1)) : $("#userName").val(c);
                    $("#userName").css("color", "black");
                    $("#userName").css("font-size", "14px")
                }
                $("#isCheckAgreement").formValidator({
                    onShowText: "",
                    onShow: "&nbsp;",
                    onFocus: "&nbsp;",
                    onError: $.getI18Text("agreement_onerror_tips"),
                    onCorrect: "&nbsp;",
                    validatorGroup: "1",
                    tipID: "isCheckAgreementTip"
                }).inputValidator({
                    min: 1,
                    max: 1,
                    onError: $.getI18Text("agreement_onerror_tips")
                }).click(function() {
                    "checked" != $(this).attr("checked") ? ($("#isCheckAgreement").val("unon"), $.formValidator.setTipMsg($("#isCheckAgreementTip").get(0), "onError", $.getI18Text("agreement_onerror_tips"))) : ($("#isCheckAgreement").val("on"), $.formValidator.setTipMsg($("#isCheckAgreementTip").get(0), "onCorrect", "&nbsp;"))
                }); ! 0 == a.settings.session.CAPTCHA_VISUALABLE ? ($("#loginCaptcha").upcaptchaValidate(), !0 == a.settings.requireAgreement ? ($("div.agr").show(), $("div.agr input").attr("disabled", !1), $(".box_content").css("height", "300px")) : $(".box_content").css("height", "265px"), $("#captchaImg").click(function() {
                    $(this).attr("src", a.settings.contextPath + "/checkcode.action?r=" + Math.random())
                })) : !0 == a.settings.requireAgreement ? ($("div.agr").show(), $("div.agr input").attr("disabled", !1), $(".box_content").css("height", "265px")) : $(".box_content").css("height", "230px");
                $.formValidator.initConfig({
                    formID: "cardPayForm",
                    mode: UPOP.VALIDATOR.TIP_MODE.FixTip,
                    validatorGroup: "2",
                    onError: function() {
                        return false
                    },
                    onSuccess: function() {
                        try {
                            var b = $("#cardNumber").val().replace(/[ ]/g, ""),
                            c = upeditorMachineInfo.machineInfo(b);
                            $("#machineInfo_bankcard").val(c.cypher)
                        } catch(f) {}
                        var d = "",
                        e;
                        if ( !! UPOP.queryBankAjax == false) {
                            UPService.send(a.settings.contextPath + "/cardValidate.action?r=" + Math.random(), "text", {
                                cardNumber: $("#cardNumber").val().replace(/[ ]/g, ""),
                                transNumber: a.settings.transNumber
                            },
                            {
                                onSuccess: function(a) {
                                    try {
                                        e = jQuery.parseJSON(a);
                                        if (e.success == true) if (e.actionType == null) d = e.success;
                                        else if (e.actionType == "query") d = "query";
                                        else if (e.actionType == "redirect") d = "redirect";
                                        else d = e.actionType = "foreign_query";
                                        else d = e.errorMsg
                                    } catch(b) {
                                        d = $.getI18Text("system_error")
                                    }
                                },
                                onFail: function(a) {
                                    d = a
                                }
                            },
                            false);
                            if (d == true) {
                                b = $("#cardNumber").val().replace(/[ ]/g, "");
                                $("#cardNumber").val(b);
                                return true
                            }
                            if (d == "query") {
                                $("#queryBank_ajax_loading").show();
                                $("#btnNext").addClass("btn_blue_dis btn_blue_dis_next_en").attr("disabled", true);
                                $("#cardNumber").attr("disabled", true); (new UPQueryBank).exec(e.param, a.settings.contextPath + "/queryBank.action?r=" + Math.random() + "&transNumber=" + a.settings.transNumber, "cardPayForm");
                                return false
                            }
                            if (d == "foreign_query") {
                                $("#queryBank_ajax_loading").show();
                                $("#btnNext").addClass("btn_blue_dis btn_blue_dis_next_en").attr("disabled", true);
                                $("#cardNumber").attr("disabled", true);
                                $("#cardPayForm").attr("action", a.settings.contextPath + "/foreignCard.action?transNumber=" + a.settings.transNumber); (new UPQueryBank).exec(e.param, a.settings.contextPath + "/queryBank.action?r=" + Math.random() + "&transNumber=" + a.settings.transNumber, "cardPayForm");
                                return false
                            }
                            if (d == "redirect") {
                                $("#cardPayForm").attr("action", a.settings.contextPath + "/card.action?transNumber=" + a.settings.transNumber);
                                b = $("#cardNumber").val().replace(/[ ]/g, "");
                                $("#cardNumber").val(b);
                                return true
                            }
                            if (d == "prePay") {
                                $("#cardPayForm").attr("action", a.settings.contextPath + "/prePay.action?transNumber=" + a.settings.transNumber);
                                b = $("#cardNumber").val().replace(/[ ]/g, "");
                                $("#cardNumber").val(b);
                                return true
                            }
                            if (d == "foreignCardPay") {
                                $("#cardPayForm").attr("action", a.settings.contextPath + "/foreignCard.action?transNumber=" + a.settings.transNumber);
                                b = $("#cardNumber").val().replace(/[ ]/g, "");
                                $("#cardNumber").val(b);
                                return true
                            }
                            $.formValidator.setTipState($("#cardNumber").get(0), "onError", d);
                            return false
                        }
                        $("#cardNumber").attr("disabled", false);
                        b = $("#cardNumber").val().replace(/[ ]/g, "");
                        $("#cardNumber").val(b);
                        return true
                    }
                });
                $("#cardNumber").upbankcard().formValidator({
                    onShowText: function() {
                        var b = "";
                        return b = a.settings.order.allowedCardType == "creditCard" ? $.getI18Text("cardNumberShowText_CreditSeparate") : a.settings.order.allowedCardType == "debitCard" ? $.getI18Text("cardNumberShowText_DebitSeparate") : $.getI18Text("cardNumberShowText")
                    } (),
                    onShow: " ",
                    onFocus: "\u3000",
                    onError: $.getI18Text("cardNumber_error"),
                    onCorrect: " ",
                    validatorGroup: "2"
                }).focus(function() {
                    $(this).css("font-weight", "bold");
                    $(this).css("font-size", "20px")
                }).blur(function() {
                    if (a.settings.order.allowedCardType == "creditCard" && $(this).val() == $.getI18Text("cardNumberShowText_CreditSeparate") || a.settings.order.allowedCardType == "debitCard" && $(this).val() == $.getI18Text("cardNumberShowText_DebitSeparate") || $(this).val() == $.getI18Text("cardNumberShowText")) {
                        $(this).css("font-weight", "");
                        $("#cardNumber").css("font-size", "14px")
                    } else {
                        $(this).css("font-weight", "bold");
                        $(this).css("font-size", "20px")
                    }
                }).keyup(function() {
                    var a = $(this).val(),
                    a = a.replace(/[ ]/g, "");
                    if (a.length > 19) {
                        a = a.substring(0, 19);
                        $(this).val(a.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 "))
                    }
                    try {
                        var c = document.documentMode;
                        a.length > 0 && !(c == 10 || c == 11) ? $.browser.name == "msie" && $.browser.version == "9.0" && c == 7 ? $(".close_val").hide() : $(".close_val").show() : $(".close_val").hide()
                    } catch(f) {}
                });
                $(".close_val").click(function() {
                    $("#cardNumber").val("");
                    $("#cardNumber").focus();
                    $("#cardNumber").css("font-weight", "bold");
                    $("#cardNumber").css("font-size", "20px");
                    $("#cardNumber").css("color", "black");
                    $(".close_val").hide()
                });
                $(".close_val_username").click(function() {
                    $("#userName").val("");
                    $("#userName").focus();
                    $(".close_val_username").hide()
                });
                $("#reg_pop_cancelbtn").click(function() {
                    $.modal.close()
                });
                $("#reg_pop_button").click(function() {
                    $.getJSON(a.settings.contextPath + "/login!obtain.action?callback=?", {},
                    function(b) {
                        b == "n" ? $.modal.close() : window.location.href = a.settings.contextPath + "/switchCard.action?transNumber=" + a.settings.transNumber
                    })
                });
                $("#loginDiv").keydown(function(a) {
                    a = a || window.event;
                    if ((a.keyCode || a.which || a.charCode) == 13) {
                        $("#userName").blur();
                        $("#loginForm").submit();
                        return false
                    }
                    return true
                });
                $("#upopFasterRegister").click(function(a) {
                    a.stopImmediatePropagation();
                    a.preventDefault();
                    UPOP.upopRegister.pop()
                });
                c = document.createElement("iframe");
                c.src = "02" == a.settings.order.transType ? a.settings.url_prex_static_https + "/page/morebank4preauth/" + a.settings.localeStr + "/531.html": a.settings.url_prex_static_https + "/page/morebank4pay/" + a.settings.localeStr + "/393.html";
                c.scrolling = "no";
                c.frameBorder = "0";
                c.width = "100%";
                c.height = "150px";
                document.getElementById("bankSupportList").appendChild(c)
            });
            return this
        },
        _showLoginPassword: function() {
            "pad" == UPOP.acpAgent ? $(document).ready(function() {
                $("#login_password").append(window.padPassword.getInstance({
                    type: "userPassword"
                }).render())
            }) : (window.loginPassword = new $.upe({
                upePath: UPOP.PATH_URL,
                upeId: "_ocx_password",
                upeSk: this.settings.loginPassword.upeSk,
                upeEdittype: 0,
                upeMode: "1111",
                upeMinlength: 6,
                upeMaxlength: 16,
                upePwdMode: 3,
                upeTabindex: 2,
                upeClass: "ocx_style",
                upeObjClass: "",
                upeInstallClass: "ocx_style",
                resp: "80",
                errMapping: this.settings.loginPassword.errMapping,
                upeFontName: "Arial Black",
                upeFontSize: 25,
                upeNextElementId: this.settings.loginPassword.upeNextElementId,
                upeNextElementId: !0 == this.settings.session.CAPTCHA_VISUALABLE ? "loginCaptcha": "btnSubmit",
                enterCallback: null,
                tabCallback: null,
                pgeWindowID: "password" + (new Date).getTime() + 1,
                pgeRZRandNum: this.settings.loginPassword.sKey,
                pgeRZDataB: this.settings.loginPassword.enStr
            }), window.pgeCtrl = window.loginPassword, up.UPEditInstall.bind(window.loginPassword, {
                imagePath: this.settings.loginPassword.imagePath
            }), $("#login_password").append(window.loginPassword.load()), $(document).ready(function() {
                window.loginPassword.refresh4IE()
            }));
            return this
        }
    };
    f.main = function(a) { (new f(a))._pageLoad()
    };
    window.UPOP.index = f;
    window.UPOP.index.main(g)
})(indexParam);
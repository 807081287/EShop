/*
 *
 *
 *
 */
package net.eshop.controller.admin;

import java.util.HashSet;

import javax.annotation.Resource;

import net.eshop.Message;
import net.eshop.Pageable;
import net.eshop.entity.Admin;
import net.eshop.entity.BaseEntity.Save;
import net.eshop.entity.Role;
import net.eshop.service.AdminService;
import net.eshop.service.RoleService;

import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;


/**
 * Controller - 班级
 *
 *
 *
 */
@Controller("adminClassController")
@RequestMapping("/admin/class")
public class ClassController extends BaseController
{

	@Resource(name = "adminServiceImpl")
	private AdminService adminService;
	@Resource(name = "roleServiceImpl")
	private RoleService roleService;

	/**
	 * 检查用户名是否存在
	 */
	@RequestMapping(value = "/check_username", method = RequestMethod.GET)
	public @ResponseBody boolean checkUsername(final String username)
	{
		if (StringUtils.isEmpty(username))
		{
			return false;
		}
		if (adminService.usernameExists(username))
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	/**
	 * 添加
	 */
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String add(final ModelMap model)
	{
		model.addAttribute("roles", roleService.findAll());
		return "/admin/admin/add";
	}

	/**
	 * 保存
	 */
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public String save(final Admin admin, final Long[] roleIds, final RedirectAttributes redirectAttributes)
	{
		admin.setRoles(new HashSet<Role>(roleService.findList(roleIds)));
		if (!isValid(admin, Save.class))
		{
			return ERROR_VIEW;
		}
		if (adminService.usernameExists(admin.getUsername()))
		{
			return ERROR_VIEW;
		}
		admin.setPassword(DigestUtils.md5Hex(admin.getPassword()));
		admin.setIsLocked(false);
		admin.setLoginFailureCount(0);
		admin.setLockedDate(null);
		admin.setLoginDate(null);
		admin.setLoginIp(null);
		admin.setOrders(null);
		adminService.save(admin);
		addFlashMessage(redirectAttributes, SUCCESS_MESSAGE);
		return "redirect:list.jhtml";
	}

	/**
	 * 编辑
	 */
	@RequestMapping(value = "/edit", method = RequestMethod.GET)
	public String edit(final Long id, final ModelMap model)
	{
		model.addAttribute("roles", roleService.findAll());
		model.addAttribute("admin", adminService.find(id));
		return "/admin/admin/edit";
	}

	/**
	 * 更新
	 */
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(final Admin admin, final Long[] roleIds, final RedirectAttributes redirectAttributes)
	{
		admin.setRoles(new HashSet<Role>(roleService.findList(roleIds)));
		if (!isValid(admin))
		{
			return ERROR_VIEW;
		}
		final Admin pAdmin = adminService.find(admin.getId());
		if (pAdmin == null)
		{
			return ERROR_VIEW;
		}
		if (StringUtils.isNotEmpty(admin.getPassword()))
		{
			admin.setPassword(DigestUtils.md5Hex(admin.getPassword()));
		}
		else
		{
			admin.setPassword(pAdmin.getPassword());
		}
		if (pAdmin.getIsLocked() && !admin.getIsLocked())
		{
			admin.setLoginFailureCount(0);
			admin.setLockedDate(null);
		}
		else
		{
			admin.setIsLocked(pAdmin.getIsLocked());
			admin.setLoginFailureCount(pAdmin.getLoginFailureCount());
			admin.setLockedDate(pAdmin.getLockedDate());
		}
		adminService.update(admin, "username", "loginDate", "loginIp", "orders");
		addFlashMessage(redirectAttributes, SUCCESS_MESSAGE);
		return "redirect:list.jhtml";
	}

	/**
	 * 列表
	 */
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(final Pageable pageable, final ModelMap model)
	{
		model.addAttribute("page", adminService.findPage(pageable));
		return "/admin/admin/list";
	}

	/**
	 * 删除
	 */
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	public @ResponseBody Message delete(final Long[] ids)
	{
		if (ids.length >= adminService.count())
		{
			return Message.error("admin.common.deleteAllNotAllowed");
		}
		adminService.delete(ids);
		return SUCCESS_MESSAGE;
	}

}
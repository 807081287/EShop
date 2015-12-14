/*
 *
 *
 *
 */
package net.eshop.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.PreRemove;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;


/**
 * Entity - 管理员
 *
 *
 *
 */
@Entity
@Table(name = "t_admin")
@SequenceGenerator(name = "sequenceGenerator", sequenceName = "t_admin_sequence")
public class Admin extends BaseEntity
{

	private static final long serialVersionUID = -7519486823153844426L;

	/** 用户名 */
	private String username;

	/** 密码 */
	private String password;

	/** E-mail */
	private String email;

	/** 姓名 */
	private String name;

	/** 部门 */
	private String department;

	/** 是否启用 */
	private Boolean isEnabled;

	/** 是否锁定 */
	private Boolean isLocked;

	/** 连续登录失败次数 */
	private Integer loginFailureCount;

	/** 锁定日期 */
	private Date lockedDate;

	/** 最后登录日期 */
	private Date loginDate;

	/** 最后登录IP */
	private String loginIp;

	/** 角色 */
	private Set<Role> roles = new HashSet<Role>();

	/** 订单 */
	private Set<Order> orders = new HashSet<Order>();


	private Admin teacher;

	private Set<Admin> students;

	/** 学生ID */
	private String sId;



	/**
	 * @return the teacher
	 */
	@ManyToOne(fetch = FetchType.LAZY)
	public Admin getTeacher()
	{
		return teacher;
	}

	/**
	 * @param teacher
	 *           the teacher to set
	 */
	public void setTeacher(final Admin teacher)
	{
		this.teacher = teacher;
	}

	/**
	 * @return the students
	 */
	@OneToMany(mappedBy = "teacher", fetch = FetchType.LAZY)
	@OrderBy("sId asc")
	public Set<Admin> getStudents()
	{
		return students;
	}

	/**
	 * @param students
	 *           the students to set
	 */
	public void setStudents(final Set<Admin> students)
	{
		this.students = students;
	}



	/**
	 * @return the sId
	 */
	@Length(min = 2, max = 50)
	@Column(unique = true, length = 50)
	public String getsId()
	{
		return sId;
	}

	/**
	 * @param sId
	 *           the sId to set
	 */
	public void setsId(final String sId)
	{
		this.sId = sId;
	}




	/**
	 * 获取用户名
	 *
	 * @return 用户名
	 */
	@NotEmpty(groups = Save.class)
	@Pattern(regexp = "^[0-9a-z_A-Z\\u4e00-\\u9fa5]+$")
	@Length(min = 2, max = 20)
	@Column(nullable = false, updatable = false, unique = true, length = 100)
	public String getUsername()
	{
		return username;
	}

	/**
	 * 设置用户名
	 *
	 * @param username
	 *           用户名
	 */
	public void setUsername(final String username)
	{
		this.username = username;
	}

	/**
	 * 获取密码
	 *
	 * @return 密码
	 */
	@NotEmpty(groups = Save.class)
	@Pattern(regexp = "^[^\\s&\"<>]+$")
	@Length(min = 4, max = 20)
	@Column(nullable = false)
	public String getPassword()
	{
		return password;
	}

	/**
	 * 设置密码
	 *
	 * @param password
	 *           密码
	 */
	public void setPassword(final String password)
	{
		this.password = password;
	}

	/**
	 * 获取E-mail
	 *
	 * @return E-mail
	 */
	@NotEmpty
	@Email
	@Length(max = 200)
	@Column(nullable = false)
	public String getEmail()
	{
		return email;
	}

	/**
	 * 设置E-mail
	 *
	 * @param email
	 *           E-mail
	 */
	public void setEmail(final String email)
	{
		this.email = email;
	}

	/**
	 * 获取姓名
	 *
	 * @return 姓名
	 */
	@Length(max = 200)
	public String getName()
	{
		return name;
	}

	/**
	 * 设置姓名
	 *
	 * @param name
	 *           姓名
	 */
	public void setName(final String name)
	{
		this.name = name;
	}

	/**
	 * 获取部门
	 *
	 * @return 部门
	 */
	@Length(max = 200)
	public String getDepartment()
	{
		return department;
	}

	/**
	 * 设置部门
	 *
	 * @param department
	 *           部门
	 */
	public void setDepartment(final String department)
	{
		this.department = department;
	}

	/**
	 * 获取是否启用
	 *
	 * @return 是否启用
	 */
	@NotNull
	@Column(nullable = false)
	public Boolean getIsEnabled()
	{
		return isEnabled;
	}

	/**
	 * 设置是否启用
	 *
	 * @param isEnabled
	 *           是否启用
	 */
	public void setIsEnabled(final Boolean isEnabled)
	{
		this.isEnabled = isEnabled;
	}

	/**
	 * 获取是否锁定
	 *
	 * @return 是否锁定
	 */
	@Column(nullable = false)
	public Boolean getIsLocked()
	{
		return isLocked;
	}

	/**
	 * 设置是否锁定
	 *
	 * @param isLocked
	 *           是否锁定
	 */
	public void setIsLocked(final Boolean isLocked)
	{
		this.isLocked = isLocked;
	}

	/**
	 * 获取连续登录失败次数
	 *
	 * @return 连续登录失败次数
	 */
	@Column(nullable = false)
	public Integer getLoginFailureCount()
	{
		return loginFailureCount;
	}

	/**
	 * 设置连续登录失败次数
	 *
	 * @param loginFailureCount
	 *           连续登录失败次数
	 */
	public void setLoginFailureCount(final Integer loginFailureCount)
	{
		this.loginFailureCount = loginFailureCount;
	}

	/**
	 * 获取锁定日期
	 *
	 * @return 锁定日期
	 */
	public Date getLockedDate()
	{
		return lockedDate;
	}

	/**
	 * 设置锁定日期
	 *
	 * @param lockedDate
	 *           锁定日期
	 */
	public void setLockedDate(final Date lockedDate)
	{
		this.lockedDate = lockedDate;
	}

	/**
	 * 获取最后登录日期
	 *
	 * @return 最后登录日期
	 */
	public Date getLoginDate()
	{
		return loginDate;
	}

	/**
	 * 设置最后登录日期
	 *
	 * @param loginDate
	 *           最后登录日期
	 */
	public void setLoginDate(final Date loginDate)
	{
		this.loginDate = loginDate;
	}

	/**
	 * 获取最后登录IP
	 *
	 * @return 最后登录IP
	 */
	public String getLoginIp()
	{
		return loginIp;
	}

	/**
	 * 设置最后登录IP
	 *
	 * @param loginIp
	 *           最后登录IP
	 */
	public void setLoginIp(final String loginIp)
	{
		this.loginIp = loginIp;
	}

	/**
	 * 获取角色
	 *
	 * @return 角色
	 */
	@NotEmpty
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "t_admin_role")
	public Set<Role> getRoles()
	{
		return roles;
	}

	/**
	 * 设置角色
	 *
	 * @param roles
	 *           角色
	 */
	public void setRoles(final Set<Role> roles)
	{
		this.roles = roles;
	}

	/**
	 * 获取订单
	 *
	 * @return 订单
	 */
	@OneToMany(mappedBy = "operator", fetch = FetchType.LAZY)
	public Set<Order> getOrders()
	{
		return orders;
	}

	/**
	 * 设置订单
	 *
	 * @param orders
	 *           订单
	 */
	public void setOrders(final Set<Order> orders)
	{
		this.orders = orders;
	}

	/**
	 * 删除前处理
	 */
	@PreRemove
	public void preRemove()
	{
		final Set<Order> orders = getOrders();
		if (orders != null)
		{
			for (final Order order : orders)
			{
				order.setLockExpire(null);
				order.setOperator(null);
			}
		}
	}

}
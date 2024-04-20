﻿using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Baim_API.Models.Authentication.SignUp;
public class RegisterUser
{
	[Required(ErrorMessage = "Id 1C is required")]
	public string Id1C { get; set; } 
	[Required(ErrorMessage = "User name is required")]
	public string Name { get; set; }
	[Required(ErrorMessage = "Last name is required")]
	public string LastName { get; set; }
	[Required(ErrorMessage = "Email is required")]
	public string Email { get; set; }
	[Required(ErrorMessage = "Role is required")]
	public string Role { get; set; } = "Client";
	[JsonIgnore]
	public string Password { get; set; }  = string.Empty;   
}
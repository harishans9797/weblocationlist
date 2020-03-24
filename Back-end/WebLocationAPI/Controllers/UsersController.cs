using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WebLocationAPI.Data;
using WebLocationAPI.Models;

namespace WebLocationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        private IConfiguration _config;

        public UsersController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _config = configuration;
        }


        // GET: api/Users
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Getusers()
        {
            return await _context.users.ToListAsync();
        }


        private bool UserExists(int id)
        {
            return _context.users.Any(e => e.id_User == id);
        }

        private string GenerateToken(User user)
        {

            var claims = new[]
              {

                new Claim("id_User", Convert.ToString(user.id_User))
          };

            var jwtConfig = _config.GetSection("Jwt");
            var secret = jwtConfig["Secret"];
            var symmetricKey = Convert.FromBase64String(secret);
            var tokenHandler = new JwtSecurityTokenHandler();
            var now = DateTime.UtcNow;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = now.AddMinutes(120),
                Issuer = jwtConfig["Issuer"],
                Audience = jwtConfig["Audience"],

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(symmetricKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var stoken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(stoken);

            return token;
        }
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<string> Login([FromBody] Login personForLogin)
        {

            var person = _context.users.FirstOrDefault(x => x.email_user == personForLogin.email);
            var password = _context.users.FirstOrDefault(x => x.password_user == personForLogin.password);

            await _context.users.ToListAsync();

            if (person == null)
            {
                return null;
            }
            else if (password == null)
            {
                return null;
            }


            return GenerateToken(person);
        }
    }
}

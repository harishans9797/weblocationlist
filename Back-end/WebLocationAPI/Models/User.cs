using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebLocationAPI.Models
{
    [Table("users")]
    public class User
    {
        [Key]
        public int id_User { get; set; }
        public string email_user { get; set; }
        public string password_user { get; set; }
    }
}

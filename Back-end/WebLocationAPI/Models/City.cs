using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebLocationAPI.Models
{
    [Table("city")]
    public class City
    {
        [Key]
        public int Id_City { get; set; }
        public string City_name { get; set; }

    }
}

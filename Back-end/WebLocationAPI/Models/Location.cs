using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebLocationAPI.Models
{
    [Table("location")]
    public class Location
    {
        [Key]
        public int Id_Location { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public float Longitude { get; set; }
        [Required]
        public float Latitude { get; set; }

        [Required]
        [ForeignKey(nameof(City))]
        public int Id_City { get; set; }
        
    }
}

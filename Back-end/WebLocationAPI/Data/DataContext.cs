using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebLocationAPI.Models;

namespace WebLocationAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {

        }
        public DbSet<User> users { get; set; }
        public DbSet<Location> locations { get; set; }
        public DbSet<City> cities { get; set; }


    }
}

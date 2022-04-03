#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FinComm.Model;

namespace FinComm.Data
{
    public class CommunityContext : DbContext
    {
        public CommunityContext (DbContextOptions<CommunityContext> options)
            : base(options)
        {
        }

        public DbSet<FinComm.Model.Community> Community { get; set; }
        public DbSet<FinComm.Model.ActivityData> ActivityData { get; set; }
    }
}

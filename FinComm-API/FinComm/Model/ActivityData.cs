using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FinComm.Model
{
    [Table("tblActivity")]
    public class ActivityData
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string avatar { get; set; }
        public string activityDesc { get; set; }
    }
}

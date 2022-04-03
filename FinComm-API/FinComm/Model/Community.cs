using System.ComponentModel.DataAnnotations;

namespace FinComm.Model
{
    public class Community
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public int status { get; set; }
        public int savings { get; set; }
        public int loan { get; set; }
        public int loanrequests { get; set; }
        public string startdate { get; set; }
        public int membercount { get; set; }
        public string avatar { get; set; }
    }
}

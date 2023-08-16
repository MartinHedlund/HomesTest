using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Model
{
    [Table("WaterMetr", Schema = "dbo")]
    public class WaterMeter
    {
        [Key]
        public int WaterMetrId { get; set; }
        public string? SerialNumber { get; set; }
        [ForeignKey(nameof(HomeId))]
        public int? HomeId { get; set; }
        //public Home? Home { get; set; }
    }
}

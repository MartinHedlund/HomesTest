namespace webapi.Model
{
    public class WaterMeter
    {
        public int Id { get; set; }
        public string SerialNumber { get; set; }
        public int Reading { get; set; }
        public Home Home { get; set; }
    }
}

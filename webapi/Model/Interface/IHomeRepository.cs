namespace webapi.Model.Interface
{
    public interface IHomeRepository
    {
        void RegisterWaterMeter(int homeId, WaterMeter waterMeter);
        Home? GetHomeWithMaxWaterConsumption();
        Home? GetHomeWithMinWaterConsumption();
        void SubmitWaterMeterReading(string serialNumber, int reading);
        void SubmitWaterMeterReading(int homeId, int reading);
    }
}

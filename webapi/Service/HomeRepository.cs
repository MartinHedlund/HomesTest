using Microsoft.EntityFrameworkCore;
using webapi.Model;
using webapi.Model.Interface;

namespace webapi.Service
{
    //public class HomeRepository : IHomeRepository, IRepository<Home>
    //{
    //    private readonly DbServise _dbContext;

    //    public HomeRepository(DbServise dbContext)
    //    {
    //        _dbContext = dbContext;
    //    }
    //    public void Add(Home item)
    //    {
    //        _dbContext.Homes.Add(item);
    //        _dbContext.SaveChanges();
    //    }

    //    public void Delete(Home item)
    //    {
    //        _dbContext.Homes.Remove(item);
    //        _dbContext.SaveChanges();
    //    }
    //    public void Update(Home item)
    //    {
    //        _dbContext.Homes.Update(item);
    //        _dbContext.SaveChanges();
    //    }
    //    public IEnumerable<Home> GetAll()
    //    {
    //        return _dbContext.Homes.Include(h => h.WaterMeter).ToList();
    //    }

    //    public Home? GetById(int id)
    //    {
    //       return _dbContext.Homes.Include(h => h.WaterMeter).FirstOrDefault(h => h.Id == id);
    //    }

        //public Home? GetHomeWithMaxWaterConsumption()
        //{
        //    return _dbContext.Homes.Include(i => i.WaterMeter).
        //        OrderByDescending(x => x.WaterMeter.Reading)
        //        .FirstOrDefault();
        //}

        //public Home? GetHomeWithMinWaterConsumption()
        //{
        //    return _dbContext.WaterMeters.Include(i => i.WaterMeter).
        //       OrderBy(x => x.WaterMeter.Reading)
        //       .FirstOrDefault();
        //}
        //// под вопросом метод мб изменить в зависимости от фронта
        //public void RegisterWaterMeter(int homeId, WaterMeter waterMeter)
        //{
        //    // подразумевается что дом уже зарегистрирован и в него добавляют счетчик
        //    var home = GetById(homeId);
        //    home!.WaterMeter = waterMeter;
        //    _dbContext.SaveChanges();
        //}

        //public void SubmitWaterMeterReading(string serialNumber, int reading)
        //{
        //    var waterMeter = _dbContext.WaterMeters.FirstOrDefault(wm => wm.SerialNumber == serialNumber);
        //    if (waterMeter != null)
        //    {
        //        waterMeter.Reading = reading;
        //        _dbContext.SaveChanges();
        //    }
        //}

        //public void SubmitWaterMeterReading(int homeId, int reading)
        //{
        //    var waterMeter = _dbContext.WaterMeters.FirstOrDefault(wm => wm.Id == homeId);
        //    if (waterMeter != null)
        //    {
        //        waterMeter.Reading = reading;
        //        _dbContext.SaveChanges();
        //    }
        //}

       
    //}
}

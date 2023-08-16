using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Model;
using webapi.Model.Interface;

namespace webapi.Service
{
    public class HomeRepository : IHomeRepository, IRepository<Home>
    {
       private readonly DbServise _dbContext;

       public HomeRepository(DbServise dbContext)
       {
           _dbContext = dbContext;
       }
       public Home? Add(Home item)
       {
           _dbContext.Homes.Add(item);
           _dbContext.SaveChanges();
            var addedItem = _dbContext.Entry(item).Entity;
            return addedItem;
       }

       public void Delete(Home item)
       {
           _dbContext.Homes.Remove(item);
           _dbContext.SaveChanges();
       }
       public void Update(Home item)
       {
           _dbContext.Homes.Update(item);
           _dbContext.SaveChanges();
       }
       public async Task<ActionResult<IEnumerable<Home>>> GetAll()
       {
           return await _dbContext.Homes.Include(x=>x.WaterMetrId).ToListAsync();
       }

       public async Task<Home?> GetById(int id)
       {
          return await _dbContext.Homes.Include(h => h.WaterMetrId).FirstOrDefaultAsync(h => h.Id == id);
       }

        public Home? GetHomeWithMaxWaterConsumption()
        {
            return null;
        }

        public Home? GetHomeWithMinWaterConsumption()
        {
            return null; 
        }
        // под вопросом метод мб изменить в зависимости от фронта
        public async void RegisterWaterMeter(int homeId, WaterMeter waterMeter)
        {
           // подразумевается что дом уже зарегистрирован и в него добавляют счетчик
           Home? home = await GetById(homeId);
           if (home == null) return;
           home.WaterMetrId = waterMeter;
           _dbContext.SaveChanges();
        }

        public void SubmitWaterMeterReading(string serialNumber, int reading)
        {
           //var waterMeter = _dbContext.WaterMeters.FirstOrDefault(wm => wm.SerialNumber == serialNumber);
           //if (waterMeter != null)
           //{
           //    waterMeter.Reading = reading;
           //    _dbContext.SaveChanges();
           //}
        }

        public void SubmitWaterMeterReading(int homeId, int reading)
        {
           //var waterMeter = _dbContext.WaterMeters.FirstOrDefault(wm => wm.Id == homeId);
           //if (waterMeter != null)
           //{
           //    waterMeter.Reading = reading;
           //    _dbContext.SaveChanges();
           //}
        }

       
    }
}

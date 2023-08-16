using Microsoft.AspNetCore.Mvc;

namespace webapi.Model.Interface
{
    public interface IRepository<T>
    {
        Task<ActionResult<IEnumerable<T>>> GetAll();
        Task<T?> GetById(int id);
        T? Add(T item);
        void Update(T item);
        void Delete(T item);
        // bool Checked (T item);
    }
}

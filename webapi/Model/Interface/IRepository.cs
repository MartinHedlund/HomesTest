namespace webapi.Model.Interface
{
    public interface IRepository<T>
    {
        IEnumerable<T> GetAll();
        T? GetById(int id);
        void Add(T item);
        void Update(T item);
        void Delete(T item);
       
    }
}

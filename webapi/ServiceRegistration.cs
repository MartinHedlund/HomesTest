using webapi.Service;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting.Server;

namespace webapi
{
    public static class ServiceRegistration
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // Регистрация сервисов здесь
            services.AddControllers();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            string constring = "Server = (localdb)\\MSSQLLocalDB; Database = Material; Trusted_Connection = True;";
            services.AddDbContext<DbServise>(options => options.UseSqlServer(constring));
            services.AddScoped<DbServise>();
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    policy =>
                    {
                        policy.WithOrigins("*").AllowAnyHeader()
                                              .AllowAnyMethod();
                    });
            });
            // Добавьте свои сервисы здесь
            // services.AddTransient<IMyService, MyService>();
            // services.AddScoped<IAnotherService, AnotherService>();
            // services.AddSingleton<ISingletonService, SingletonService>();
        }
    }
}

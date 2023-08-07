using webapi;

var builder = WebApplication.CreateBuilder(args);

// ����������� �������� ������
ServiceRegistration.RegisterServices(builder.Services);


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();
app.UseRouting();
 app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
        // Другие маршруты
    });
app.UseAuthorization();

app.MapControllers();
app.Run();

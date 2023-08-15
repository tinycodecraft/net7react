using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Threading;
using System.Threading.Tasks;

namespace GhostUI.Middleware
{
    public class TracerService : BackgroundService
    {
        private readonly ILogger _logger;
        public TracerService(ILogger<TracerService> logger) { 
            _logger = logger;
        }
        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            this._logger.LogInformation(new EventId(2000, "Trace"), "Start {ClassName}.{MethodName}...",
                      nameof(TracerService), nameof(this.ExecuteAsync));

            var sensorInput = new { Latitude = 25, Longitude = 134 };
            this._logger.LogInformation("Processing {@SensorInput}", sensorInput);

            return Task.CompletedTask;
        }
    }
}

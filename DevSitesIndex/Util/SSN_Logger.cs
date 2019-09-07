using System;
using DevSitesIndex.Util;
using Microsoft.ApplicationInsights;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// 09/06/2019 08:40 pm - SSN - [20190906-2040] - [001] - Logger


namespace DevSitesIndex.Util
{
    public interface ILogger_SSN : ILogger
    {
        void TrackPageView(string viewLabel);
        void TrackEvent(string eventLabel);
        void PostException(Exception ex, string customErrorCode, string customErrorMessage);
    }


    public class SSN_Logger : ILogger_SSN
    {
        static TelemetryClient telemetry = new TelemetryClient();


        private readonly string _name;
        private readonly SSN_LoggerProviderConfiguration _config;

        public SSN_Logger() : this("NotSet_20190907_0007", new SSN_LoggerProviderConfiguration())
        {

        }

        public SSN_Logger(string name, SSN_LoggerProviderConfiguration config)
        {
            _name = name;
            _config = config;
        }


        #region Interface default


        public IDisposable BeginScope<TState>(TState state)
        {
            return null;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
            return logLevel == _config.LogLevel;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }

            if (_config.EventId == 0 || _config.EventId == eventId.Id)
            {
                var color = Console.ForegroundColor;
                Console.ForegroundColor = _config.Color;
                Console.WriteLine();
                Console.WriteLine($"=-=-=-=-=-=-=-=-=-=-=-= {logLevel.ToString()} - {eventId.Id} - {_name}");
                Console.WriteLine($"{formatter(state, exception)}");
                Console.WriteLine();
                Console.ForegroundColor = color;
            }
        }


        #endregion Interface defaults



        #region Application Insights
        public void TrackPageView(string viewLabel)
        {
            telemetry.TrackPageView(viewLabel);
        }


        public void TrackEvent(string eventLabel)
        {
            telemetry.TrackEvent(eventLabel);
        }


        public void PostException(Exception ex, string customErrorCode, string customErrorMessage)
        {
            try
            {
                Dictionary<string, string> dic = new Dictionary<string, string>();
                dic.Add("ErrorCode", customErrorCode);
                dic.Add("ErrorMessage", customErrorMessage);

                telemetry.TrackException(ex, dic);
            }
            catch (Exception)
            {
                // Do nothing
            }
        }

        #endregion Application Insights

    }


    public class SSN_LoggerProviderConfiguration
    {
        public LogLevel LogLevel { get; set; } = LogLevel.Warning;
        public int EventId { get; set; } = 0;
        public ConsoleColor Color { get; set; } = ConsoleColor.Yellow;
    }

    public class SSN_LoggerProvider : ILoggerProvider
    {
        private readonly SSN_LoggerProviderConfiguration _config;
        private readonly ConcurrentDictionary<string, SSN_Logger> _loggers = new ConcurrentDictionary<string, SSN_Logger>();

        public SSN_LoggerProvider(SSN_LoggerProviderConfiguration config)
        {
            _config = config;
        }

        public ILogger CreateLogger(string categoryName)
        {
            return _loggers.GetOrAdd(categoryName, name => new SSN_Logger(name, _config));
        }

        public void Dispose()
        {
            _loggers.Clear();
        }
    }

}

namespace Microsoft.Extensions.Logging // System // Microsoft.AspNetCore.Hosting // 
{


    public static class SSN_LoggerExtensions
    {
        public static void AddSSN_Logger(this ILoggingBuilder loggerFactory, SSN_LoggerProviderConfiguration config)
        {
            loggerFactory.AddProvider(new SSN_LoggerProvider(config));
        }


        public static void AddSSN_Logger(this ILoggingBuilder loggerFactory)
        {
            var config = new SSN_LoggerProviderConfiguration();
            loggerFactory.AddSSN_Logger(config);
        }


        public static void AddSSN_Logger(this ILoggingBuilder loggerFactory, Action<SSN_LoggerProviderConfiguration> configure)
        {
            var config = new SSN_LoggerProviderConfiguration();
            configure(config);
            loggerFactory.AddSSN_Logger(config);
        }
    }




}

using DevSitesIndex.Util;
using Microsoft.ApplicationInsights;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

// 09/06/2019 08:40 pm - SSN - [20190906-2040] - [001] - Logger

// 09/27/2019 02:16 pm - SSN - [20190927-0634] - [021] - Testing
// 09/27/2019 02:16 pm - SSN - [20190927-0634] - [021] - Testing
// 09/27/2019 02:16 pm - SSN - [20190927-0634] - [021] - Testing
// 09/27/2019 02:16 pm - SSN - [20190927-0634] - [021] - Testing
// 09/27/2019 02:16 pm - SSN - [20190927-0634] - [021] - Testing
// Moving a copy to SSN_GenUtil_StandardLib 


namespace DevSitesIndex.Util
{
    public interface ILogger_SSN : ILogger
    {
        void TrackPageView(string viewLabel);
        void TrackEvent(string eventLabel);
        Task PostException(Exception ex, string customErrorCode, string customErrorMessage);
    }


    public class SSN_Logger : ILogger_SSN
    {
        static TelemetryClient telemetry = new TelemetryClient();


        private readonly string _name;
        private readonly SSN_LoggerProviderConfiguration_ov_01 _config;

        public SSN_Logger() : this("NotSet_20190907_0007", new SSN_LoggerProviderConfiguration_ov_01())
        {

        }

        public SSN_Logger(string name, SSN_LoggerProviderConfiguration_ov_01 config)
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
            // 09/16/2019 02:43 am - SSN - Added
            if (logLevel == LogLevel.Information) return false;

            return true;
            // return logLevel == _config.LogLevel;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }



            if (_config.EventId == 0 || _config.EventId == eventId.Id)
            {
                DateTime d = DateTime.Now;

                var color = Console.ForegroundColor;
                Console.ForegroundColor = _config.Color;
                Console.WriteLine();
                Console.WriteLine($"=-=-=-=-=-=-=-=-=-=-=-= {d:yyy-MM-dd hh:mm:ss:fff tt}: LogLevel: {logLevel.ToString()} - EventID: {eventId.Id} - {_name}");
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


        public async Task PostException(Exception ex, string customErrorCode, string customErrorMessage)
        {
            try
            {
                Dictionary<string, string> dic = new Dictionary<string, string>();
                dic.Add("ErrorCode", customErrorCode);
                dic.Add("ErrorMessage", customErrorMessage);

                telemetry.TrackException(ex, dic);

                await Util.ExceptionHandler_SSN.writeExcelptionToConsole(ex);

            }
            catch (Exception)
            {
                StringBuilder sb = new StringBuilder();
                sb.AppendLine($"SSN_Logger_20190915_1047: Exception while posting exception");

                // Do nothing
            }
        }


        #endregion Application Insights

    }


    public class SSN_LoggerProviderConfiguration_ov_01
    {
        public LogLevel LogLevel { get; set; } = LogLevel.Warning;
        public int EventId { get; set; } = 0;
        public ConsoleColor Color { get; set; } = ConsoleColor.Yellow;
    }

    public class SSN_LoggerProvider_ov_01 : ILoggerProvider
    {
        private readonly SSN_LoggerProviderConfiguration_ov_01 _config;
        private readonly ConcurrentDictionary<string, SSN_Logger> _loggers = new ConcurrentDictionary<string, SSN_Logger>();

        public SSN_LoggerProvider_ov_01(SSN_LoggerProviderConfiguration_ov_01 config)
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
        public static void AddSSN_Logger_ov_01(this ILoggingBuilder loggerFactory, SSN_LoggerProviderConfiguration_ov_01 config)
        {
            loggerFactory.AddProvider(new SSN_LoggerProvider_ov_01(config));
        }


        public static void AddSSN_Logger_ov_01(this ILoggingBuilder loggerFactory)
        {
            var config = new SSN_LoggerProviderConfiguration_ov_01();
            loggerFactory.AddSSN_Logger_ov_01(config);
        }


        public static void AddSSN_Logger_ov_01(this ILoggingBuilder loggerFactory, Action<SSN_LoggerProviderConfiguration_ov_01> configure)
        {
            var config = new SSN_LoggerProviderConfiguration_ov_01();
            configure(config);
            loggerFactory.AddSSN_Logger_ov_01(config);
        }
    }




}

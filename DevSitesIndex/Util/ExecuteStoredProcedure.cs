using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;

// 09/17/2019 12:40 pm - SSN - [20190917-0929] - [007] - Adding paging for angular lists
// Original idea from :
// https://www.sinclairinat0r.com/2017/05/06/entity-framework-core--mapping-stored-procedures,-fluently


namespace DevSitesIndex.Util
{
    public class ExecuteStoredProcedure : IDisposable
    {

        DbContext context = null;
        DbCommand cmd = null;
        DbDataReader reader = null;


        public ExecuteStoredProcedure(DbContext _context)
        {
            context = _context;
        }


        public DbCommand LoadStoredProc(string storedProcName)
        {

            cmd = context.Database.GetDbConnection().CreateCommand();
            cmd.CommandText = storedProcName;
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            return cmd;
        }


        public void WithSqlParam(string paramName, object paramValue)
        {
            if (string.IsNullOrEmpty(cmd.CommandText))
                throw new InvalidOperationException("Call LoadStoredProc before using this method");

            var param = cmd.CreateParameter();
            param.ParameterName = paramName;
            param.Value = paramValue;
            cmd.Parameters.Add(param);
        }


        private IList<T> MapToList<T>()
        {
            var objList = new List<T>();
            var props = typeof(T).GetProperties();


            var colMapping = reader.GetColumnSchema()
                .Where(x => props.Any(y => y.Name.ToLower() == x.ColumnName.ToLower()))
                .ToDictionary(key => key.ColumnName.ToLower());

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    T obj = Activator.CreateInstance<T>();
                    foreach (var prop in props)
                    {
                        if (colMapping.Any(r => r.Key.ToLower() == prop.Name.ToLower()))
                        {
                            var val = reader.GetValue(colMapping[prop.Name.ToLower()].ColumnOrdinal.Value);
                            prop.SetValue(obj, val == DBNull.Value ? null : val);
                        }
                    }
                    objList.Add(obj);
                }
            }
            return objList;
        }

        //public static IList<T> ExecuteStoredProc<T>(this DbCommand command)
        //{
        //    using (command)
        //    {
        //        if (command.Connection.State == System.Data.ConnectionState.Closed)
        //            command.Connection.Open();
        //        try
        //        {
        //            using (var reader = command.ExecuteReader())
        //            {
        //                return reader.MapToList<T>();
        //            }
        //        }
        //        finally
        //        {
        //            command.Connection.Close();
        //        }
        //    }
        //}


        public IList<T> GetResultSet<T>()
        {

            if (cmd.Connection.State == System.Data.ConnectionState.Closed)
                cmd.Connection.Open();


            if (reader == null)
                reader = cmd.ExecuteReader();
            else
                reader.NextResult();


            if (reader != null)
            {
                return MapToList<T>();

            }

            return null;
        }



        public void CloseConnection()
        {
            if (cmd.Connection.State != System.Data.ConnectionState.Closed)
                cmd.Connection.Close();

        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                    CloseConnection();
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~ExecuteStoredProcedure() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion


    }
}

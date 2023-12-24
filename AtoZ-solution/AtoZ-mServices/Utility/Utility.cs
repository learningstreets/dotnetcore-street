using System;
using System.Collections;
using System.Reflection;
using System.Data.SqlClient;

namespace AtoZ_mServices.Utility
{
    public static class Utility
    {
        public static TransactionData GetResponse(int _statusCode, string _message, object _data) {

            
            TransactionData transaction = new TransactionData();
            transaction.StatusCode = _statusCode;
            transaction.Message = _message;
            transaction.Result = _data;

            return transaction;
        }

        public static Hashtable GetHashTableOfClassProperties(Type _className)
        {
            PropertyInfo[] properties = _className.GetProperties();
            Hashtable hashtable = new Hashtable();

            foreach (PropertyInfo info in properties)
            {
                hashtable[info.Name.ToUpper()] = info;
            }

            return hashtable;
        }

        public static object GetValuesForModel(object _newobject, Hashtable _hashtable,  SqlDataReader _rdr)
        {
          
            for (int index = 0; index < _rdr.FieldCount; index++)
            {
                PropertyInfo info = (PropertyInfo)
                                    _hashtable[_rdr.GetName(index).ToUpper()];
                if ((info != null) && info.CanWrite)
                {
                    info.SetValue(_newobject, _rdr.GetValue(index), null);
                }
            }
            return _newobject;
        }


        public static SqlCommand  AddParametersInCmd(SqlCommand cmd, Type _className, object _data)
        {
            PropertyInfo[] properties = _className.GetProperties();
         
            foreach (PropertyInfo info in properties)
            {
                cmd.Parameters.AddWithValue("@" + info.Name, info.GetValue(_data));
            }

            return cmd;
        }

    }


    // Below class we will use for pass the json result
    public class TransactionData
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public object Result { get; set; }
    }


    public class DBConfiguration {
        public string ConnectionString { get; set; }
    } 
}

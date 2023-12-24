using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtoZ_mServices.Utility
{
    public  static class GlobalData
    {
            public static readonly string ConfigSection = "DBConfiguration";
            public static readonly string ConnectionString = "ConnectionString";
        public static readonly string MessageSuccess = "SUCCESS";
        public static readonly string MessageNotFound = "NOTFOUND";
        public static readonly string MessageInternalServerError = "INTERNALSERVERERROR";
        public static readonly string MessageBadRequest = "BADREQUEST";

    }
}

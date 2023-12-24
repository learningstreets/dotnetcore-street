using Associates.Model;
using System.Collections.Generic;


namespace Associates.Service
{
    public class AssociateService
    {
        private readonly AssociateDBService _associateDBService = new AssociateDBService();
        public List<AssociateViewModel> GetAllAssociateDetails(string _connectionString)
        {
            return _associateDBService.DBCall_GetAllAssociateDetails(_connectionString);
        }  

        public List<AssociateViewModel> GetAssociateDetails(string _id, string _connectionString)
        {
            return _associateDBService.DBCall_GetAssociateDetails(_id, _connectionString);
        }

        public List<AssociateViewModel> AuthenticateUser(string _id, string _pass, string _connectionString)
        {
            return _associateDBService.DBCall_AuthenticateUser(_id, _pass, _connectionString);
        }

        public int AddAssociateDetails(AssociateViewModel _associateViewModel, string _connectionString)
        {
            return _associateDBService.DBCall_AddAssociateDetails(_associateViewModel, _connectionString);
        }

        public int UpdateAssociateDetails(AssociateViewModel _associateViewModel, string _connectionString)
        {
            return _associateDBService.DBCall_UpdateAssociateDetails(_associateViewModel, _connectionString);
        }
    }
}

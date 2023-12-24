
using System.Collections.Generic;
using Projects.Model;
using Projects.Service;

namespace Projects.Service
{
    public class ProjectService
    {

        private readonly ProjectDBService _projectDBService = new ProjectDBService();
        public List<ProjectViewModel> GetAllProjectDetails(string _connectionString)
        {
            return _projectDBService.DBCall_GetAllProjectDetails(_connectionString);
        }

        public List<ProjectViewModel> GetProjectDetails(string _id, string _connectionString)
        {
            return _projectDBService.DBCall_GetProjectDetails(_id, _connectionString);
        }

        public List<ProjectViewModel> AuthenticateUser(string _id, string _pass, string _connectionString)
        {
            return _projectDBService.DBCall_AuthenticateUser(_id, _pass, _connectionString);
        }

        public int AddProjectDetails(ProjectViewModel _ProjectViewModel, string _connectionString)
        {
            return _projectDBService.DBCall_AddProjectDetails(_ProjectViewModel, _connectionString);
        }

        public int UpdateProjectDetails(ProjectViewModel _ProjectViewModel, string _connectionString)
        {
            return _projectDBService.DBCall_UpdateProjectDetails(_ProjectViewModel, _connectionString);
        }
    }
}

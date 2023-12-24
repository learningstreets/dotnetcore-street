using System;
using System.Collections.Generic;
using Projects.Model;
using AtoZ_mServices.Utility;
using System.Collections;
using System.Data;
using System.Data.SqlClient;

namespace Projects.Service
{
    public class ProjectDBService
    {


        public List<ProjectViewModel> DBCall_GetAllProjectDetails(string _connectionString)
        {
            List<ProjectViewModel> ProjectViewModelList = new List<ProjectViewModel>();
            Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(ProjectViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                string queryString = "SELECT *FROM VW_GetAllProjectDetails";
                SqlCommand cmd = new SqlCommand(queryString, con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    ProjectViewModel newObject = new ProjectViewModel();
                    newObject = Utility.GetValuesForModel(newObject, hashtable, rdr) as ProjectViewModel;
                    ProjectViewModelList.Add(newObject);
                }
                con.Close();
                return ProjectViewModelList;
            }
        }
        public List<ProjectViewModel> DBCall_GetProjectDetails(string _id, string _connectionString)
        {
            List<ProjectViewModel> ProjectViewModelList = new List<ProjectViewModel>();
            Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(ProjectViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {

                SqlCommand cmd = new SqlCommand("SP_GetProjectDetails", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Project_Id", _id);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    ProjectViewModel newObject = new ProjectViewModel();
                    newObject = Utility.GetValuesForModel(newObject, hashtable, rdr) as ProjectViewModel;
                    ProjectViewModelList.Add(newObject);
                }
                con.Close();
                var listData = ProjectViewModelList;
                return ProjectViewModelList;
            }
        }


        public List<ProjectViewModel> DBCall_AuthenticateUser(string _id, string _pass, string _connectionString)
        {
            List<ProjectViewModel> ProjectViewModelList = new List<ProjectViewModel>();
            Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(ProjectViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("SP_AuthenticateUser", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Project_Id", _id);
                cmd.Parameters.AddWithValue("@Project_Password", _pass);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    ProjectViewModel newObject = new ProjectViewModel();
                    newObject = Utility.GetValuesForModel(newObject, hashtable, rdr) as ProjectViewModel;
                    ProjectViewModelList.Add(newObject);
                }
                con.Close();
                var listData = ProjectViewModelList;
                return ProjectViewModelList;
            }

        }



        public int DBCall_AddProjectDetails(ProjectViewModel _ProjectViewModel, string _connectionString)
        {
            List<ProjectViewModel> ProjectViewModelList = new List<ProjectViewModel>(); 

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("SP_AddProjectDetails", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd = Utility.AddParametersInCmd(cmd, typeof(ProjectViewModel), _ProjectViewModel);
               // cmd.Parameters.AddWithValue("@Project_Password", "PWD12345"); // default password
                con.Open();

                int count = cmd.ExecuteNonQuery();

                if (count != 0)
                {
                }
                else
                {
                }

                con.Close();
                return count;
            }

        }

        public int DBCall_UpdateProjectDetails(ProjectViewModel _ProjectViewModel, string _connectionString)
        {
            List<ProjectViewModel> ProjectViewModelList = new List<ProjectViewModel>();
            //  Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(ProjectViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("SP_UpdateProjectDetails", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd = Utility.AddParametersInCmd(cmd, typeof(ProjectViewModel), _ProjectViewModel);
                con.Open();

                int count = cmd.ExecuteNonQuery();

                if (count != 0)
                {
                }
                else
                {
                }

                con.Close();
                return count;
            }

        }
    }
}

using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Associates.Model;
using AtoZ_mServices.Utility;

namespace Associates.Service
{
    public class AssociateDBService
    {

        public List<AssociateViewModel> DBCall_GetAllAssociateDetails(string _connectionString)
        {
            List<AssociateViewModel> associateViewModelList = new List<AssociateViewModel>();
            Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(AssociateViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                string queryString = "SELECT *FROM VW_GetAllAssociateDetails";
                SqlCommand cmd = new SqlCommand(queryString, con);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    AssociateViewModel newObject = new AssociateViewModel();
                    newObject = Utility.GetValuesForModel(newObject, hashtable, rdr) as AssociateViewModel;
                    associateViewModelList.Add(newObject);
                }
                con.Close();
                return associateViewModelList;
            }
        }
        public List<AssociateViewModel> DBCall_GetAssociateDetails(string _id, string _connectionString)
        {
            List<AssociateViewModel> associateViewModelList = new List<AssociateViewModel>();
            Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(AssociateViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            { 

                SqlCommand cmd = new SqlCommand("SP_GetAssociateDetails", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Associate_Id", _id);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    AssociateViewModel newObject = new AssociateViewModel();
                    newObject = Utility.GetValuesForModel(newObject, hashtable, rdr) as AssociateViewModel;
                    associateViewModelList.Add(newObject);
                }
                con.Close();
                var listData = associateViewModelList;
                return associateViewModelList;
            }
        }


        public List<AssociateViewModel> DBCall_AuthenticateUser(string _id, string _pass, string _connectionString)
        {
            List<AssociateViewModel> associateViewModelList = new List<AssociateViewModel>();
            Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(AssociateViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("SP_AuthenticateUser", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Associate_Id", _id);
                cmd.Parameters.AddWithValue("@Associate_Password", _pass);
                con.Open();
                SqlDataReader rdr = cmd.ExecuteReader();

                while (rdr.Read())
                {
                    AssociateViewModel newObject = new AssociateViewModel();
                    newObject = Utility.GetValuesForModel(newObject, hashtable, rdr) as AssociateViewModel;
                    associateViewModelList.Add(newObject);
                }
                con.Close();
                var listData = associateViewModelList;
                return associateViewModelList;
            }

        }



        public int DBCall_AddAssociateDetails(AssociateViewModel _associateViewModel, string _connectionString)
        {
            List<AssociateViewModel> associateViewModelList = new List<AssociateViewModel>();
          //  Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(AssociateViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("SP_AddAssociateDetails", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd = Utility.AddParametersInCmd(cmd, typeof(AssociateViewModel), _associateViewModel);
                cmd.Parameters.AddWithValue("@Associate_Password" , "PWD12345"); // default password
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

        public int DBCall_UpdateAssociateDetails(AssociateViewModel _associateViewModel, string _connectionString)
        {
            List<AssociateViewModel> associateViewModelList = new List<AssociateViewModel>();
            //  Hashtable hashtable = Utility.GetHashTableOfClassProperties(typeof(AssociateViewModel));

            using (SqlConnection con = new SqlConnection(_connectionString))
            {
                SqlCommand cmd = new SqlCommand("SP_UpdateAssociateDetails", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd = Utility.AddParametersInCmd(cmd, typeof(AssociateViewModel), _associateViewModel);
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


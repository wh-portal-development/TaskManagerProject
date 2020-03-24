using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace TaskManager.Models
{
    public class ProjectContext : Interfaces.IProjectContext
    {
        public string ConnectionString { get; set; } = "server=localhost;UserId=root;Password=12345;database=TaskManager;CharSet=utf8;Persist Security Info=True";

        public ProjectContext(string connectionString = "")
        {
            this.ConnectionString = "server=localhost;UserId=root;Password=12345;database=TaskManager;CharSet=utf8;Persist Security Info=True";
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public List<object> GetAll()
        {
            List<object> retrievedProjects = new List<object>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM TaskManager.Project", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        retrievedProjects.Add(new {
                            Id = Convert.ToInt32(reader["idProject"]),
                            Name = reader["Name"].ToString(),
                            TLA = reader["TLA"].ToString(),
                            Description = reader["Description"].ToString()
                        });
                    }
                }
            }
            return retrievedProjects;
        }
        
    }
}

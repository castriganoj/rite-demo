using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace spa {
    public class Program {
        public static void Main (string[] args) {
            var config = new ConfigurationBuilder ()
                .SetBasePath (Directory.GetCurrentDirectory ())
                .AddJsonFile ("appsettings.json")
                .Build ();

            BuildHost (config["serverBindingUrl"], args).Run ();
        }

        public static IWebHost BuildHost (string serverBindingUrl, string[] args) =>
            WebHost.CreateDefaultBuilder (args)
            .UseContentRoot (Directory.GetCurrentDirectory ())
            .UseUrls (serverBindingUrl)
            .UseStartup<Startup> ()
            .Build ();
    }
}
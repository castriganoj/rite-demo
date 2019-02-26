using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using spa.Utilities.Middleware;

namespace spa {
    public class Startup {
        public IHostingEnvironment CurrentEnvironment { get; protected set; }
        public IConfiguration configuration { get; }

        public Startup (IConfiguration configuration) {
            this.configuration = configuration;
        }
        public void ConfigureServices (IServiceCollection services) {
            services.AddMvc ();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseWebpackDevMiddleware (new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true,
                        ConfigFile = System.IO.Path.Combine (configuration["webClientPath"], "webpack.config.js")
                });

                app.UseDeveloperExceptionPage ();
            }

            app.UseSpaFallback (new SpaFallbackOptions () {
                RewritePath = "/"
            });

            app.UseDefaultFiles ();
            app.UseStaticFiles ();
            app.UseMvc ();
        }
    }
}
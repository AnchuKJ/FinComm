#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FinComm.Data;
using FinComm.Model;
using Azure.Storage.Blobs;

namespace FinComm.Controllers
{
    public class CommunitiesController : Controller
    {
        private readonly CommunityContext _context;
        private IConfiguration _configuration;

        public CommunitiesController(CommunityContext context, IConfiguration configuration)
        {
            _context = context;        
            _configuration = configuration;
        }

        // GET: Communities
        [HttpGet("communities")]
        public async Task<IActionResult> Index()
        {
            return new OkObjectResult((await _context.Community.ToListAsync()).OrderByDescending(x=>x.id).Take(3));
        }
       
        [HttpPost("createcommunity")]
        public async Task<IActionResult> Create([FromBody]Community community)
        {
            if (ModelState.IsValid)
            {
                _context.Add(community);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return new OkObjectResult(community);
        }

        [HttpGet("activities")]
        public async Task<IActionResult> GetActivities()
        {
            return new OkObjectResult((await _context.ActivityData.ToListAsync()).OrderByDescending(x=>x.id));
        }

        [HttpPost("createactivity")]
        public async Task<IActionResult> CreateActivity([FromBody] ActivityData activity)
        {
            if (ModelState.IsValid)
            {
                _context.Add(activity);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return new OkObjectResult(activity);
        }

        [HttpPost("uploadPicture")]
        public List<string> UploadPicture()
        {
            try
            {
                var httprequest = HttpContext.Request;
                var fileList = new List<string>();
                var postedfiles = httprequest.Form.Files;
                var filename = string.Empty;
               
                if(postedfiles != null)
                {
                    var connectionString = _configuration["AzureStorage:ConnectionString"];
                    var container = _configuration["AzureStorage:Container"];
                    var containerClient = new BlobContainerClient(connectionString, container);

                    foreach (var file in postedfiles)
                    {
                        filename = Guid.NewGuid().ToString() + Path.GetExtension(file.FileName);
                        var blobclient = containerClient.GetBlobClient(filename);
                        using(var filestream = file.OpenReadStream())
                        {
                            var blobResponse = blobclient.Upload(filestream);
                            if(blobResponse.GetRawResponse().Status == 201)
                            {
                                fileList.Add(filename);
                            }
                        }
                    }
                }
                return fileList;
            }
            catch{ }
            return null;
        }
    }
}

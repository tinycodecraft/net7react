using GhostUI.Abstraction;
using Microsoft.AspNetCore.Http;
using System;

namespace GhostUI.Services
{

    public class LanguageAccessorService : ILanguageService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;
        public LanguageAccessorService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            var lang = _httpContextAccessor.HttpContext?.Request.Headers["Accept-Language"].ToString();
            this.LanguageId = String.IsNullOrEmpty(lang) ? "en-US" : lang;
        }
        public string LanguageId { get; }
    }
}

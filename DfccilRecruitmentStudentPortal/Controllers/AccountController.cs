using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Net;
using System.Security.Claims;
using System.Text;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using DfccilRecruitmentStudentPortal.Models.Account;
using Microsoft.AspNetCore.Http;

namespace DfccilRecruitmentStudentPortal.Controllers
{
    public class AccountController : Controller
    {

        /// UAT CETPA Hosting Api Link
        //private string apiBaseUrlOrganization = "https://uatorganization.dfccil.com";
        //private string apiBaseUrlTourServices = "https://uat.tourservices.cetpainfotech.com";
        //private string apiBaseUrlServices = "https://uat.dfccilrecruitmentservices.cetpainfotech.com";

        /// UAT DFCCIL Hosting Api Link
        private string apiBaseUrlOrganization = "https://uatorganization.dfccil.com";
        private string apiBaseUrlTourServices = "https://uattourapi.dfccil.com";
        private string apiBaseUrlServices = "https://uatrecruitment.dfccil.com";

        /// PROD DFCCIL Hosting Api Link
        //private string apiBaseUrlOrganization = "https://orgsvc.dfccil.com";
        //private string apiBaseUrlTourServices = "https://toursvc.dfccil.com";
        //private string apiBaseUrlServices = "https://recruitmentsvc.dfccil.com";

        private readonly IHttpContextAccessor _httpContextAccessor;
        public AccountController(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult AccessDenied()
        {
            return View();
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Login()
        {
            return View();
        }
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login(LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                // then login
                HttpClient client = new HttpClient();
                StringContent content = new StringContent(JsonConvert.SerializeObject(loginModel.RollNumber), Encoding.UTF8, "application/json");

                client.BaseAddress = new Uri(apiBaseUrlServices + "/api/Account/StudentLogin/" + loginModel.RollNumber + "");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = client.PostAsync(client.BaseAddress, null).Result;
                if (response.IsSuccessStatusCode)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var responsedetails = JsonConvert.DeserializeObject<Root_SendOtp>(apiResponse);
                    if (responsedetails != null && responsedetails.statusCode == 200)
                    {
                        //EmployeeBasicDetailsModel.empId = responsedetails.data.empId;

                        HttpContext.Session.SetString("RollNumber", loginModel.RollNumber.ToString());
                        TempData["SentMessage"] = "OTP code send on email: " + responsedetails.data.sentEmail;
                        return RedirectToAction("VerifyOTP", "Account");
                    }
                    else
                    {
                        if (responsedetails != null)
                        {
                            TempData["Inivaliduser"] = responsedetails.message;
                            return View();
                        }
                        else
                        {
                            TempData["Inivaliduser"] = "Invalid user.";
                            return View();
                        }

                    }
                }

            }
            return View();
        }

        [AllowAnonymous]
        [HttpGet]
        public IActionResult VerifyOTP()
        {
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> VerifyOTP(VerifyOTPModel verifyOTP)
        {
            if (ModelState.IsValid)
            {
                string RollNumber = HttpContext.Session.GetString("RollNumber");
                string MacAddress = "NA";
                string IpAddress = string.Empty;
                IpAddress = _httpContextAccessor.HttpContext.Connection.RemoteIpAddress.ToString();
                string _otpCode = "";
                _otpCode = verifyOTP.OtpCode1 + verifyOTP.OtpCode2 + verifyOTP.OtpCode3 + verifyOTP.OtpCode4 + verifyOTP.OtpCode5 + verifyOTP.OtpCode6;

                VerifyOtpCodeRequest verifyOtpCodeRequest = new VerifyOtpCodeRequest()
                {
                    otpCode = _otpCode,
                    rollNumber = RollNumber,
                    ipAddress = IpAddress,
                    macAddress = MacAddress
                };

                HttpClient client = new HttpClient();
                StringContent content = new StringContent(JsonConvert.SerializeObject(verifyOtpCodeRequest), Encoding.UTF8, "application/json");

                client.BaseAddress = new Uri(apiBaseUrlServices + "/api/Account/VerifyOtpCode");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = client.PostAsync(client.BaseAddress, content).Result;
                if (response.IsSuccessStatusCode)
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    var responsedetails = JsonConvert.DeserializeObject<Root>(apiResponse);
                    if (responsedetails != null && responsedetails.statusCode == 200 && responsedetails.data != null)
                    {

                        var identity = new ClaimsIdentity(new[] {
                            new Claim(ClaimTypes.Name, responsedetails.data.candidateName.ToString()),

                            }, CookieAuthenticationDefaults.AuthenticationScheme);

                        HttpContext.Session.SetString("candidateName", responsedetails.data.candidateName);
                        HttpContext.Session.SetInt32("candidateId", responsedetails.data.candidateId);
                        HttpContext.Session.SetString("candidateRollNo", responsedetails.data.rollNo);
                        HttpContext.Session.SetString("candidateMobileNo", responsedetails.data.mobileNo);
                        HttpContext.Session.SetString("candidateEmailId", responsedetails.data.emailId);
                        HttpContext.Session.SetString("candidateApplicationSequenceNo", responsedetails.data.applicationSequenceNo);
                       

                        var principal = new ClaimsPrincipal(identity);
                        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, new AuthenticationProperties
                        {
                            ExpiresUtc = DateTimeOffset.Now.AddDays(365),
                            IsPersistent = true,
                            AllowRefresh = true,
                        });
                        return RedirectToAction("MyProfile", "Home");
                    }
                    else
                    {
                        TempData["InivalidOtpCode"] = "Invalid OTP Code.";
                        return View();
                    }
                }
                string apiResponse1 = await response.Content.ReadAsStringAsync();

            }
            return View();
        }

        partial class VerifyOtpCodeRequest
        {
            public string otpCode { get; set; }
            public string rollNumber { get; set; }
            public string ipAddress { get; set; }

            public string macAddress { get; set; }
        }

        public class Data_SendOtp
        {
            public int empId { get; set; }
            public string sentEmail { get; set; }
            public string role { get; set; }
        }
        public class Data
        {
            public string candidateName { get; set; }
            public int candidateId { get; set; }
            public string rollNo { get; set; }
            public string mobileNo { get; set; }
            public string emailId { get; set; }
            public string applicationSequenceNo { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> LogOut()
        {
            bool IsSSSOLogin = false;
            IsSSSOLogin = Convert.ToBoolean(HttpContext.Session.GetInt32("IsSSOLogin"));
            if (IsSSSOLogin)
            {
                return Redirect("https://it.dfccil.com/Home/Home");
            }
            else
            {
                await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            }


            return RedirectToAction("Index", "Home");
        }

        public class Root
        {
            public int statusCode { get; set; }
            public string message { get; set; }
            public Data data { get; set; }
            public int dataLength { get; set; }
            public bool error { get; set; }
            public object errorDetail { get; set; }
        }
        public class Root_SendOtp
        {
            public int statusCode { get; set; }
            public string message { get; set; }
            public Data_SendOtp data { get; set; }
            public int dataLength { get; set; }
            public bool error { get; set; }
            public object errorDetail { get; set; }
        }


        public class Employee
        {
            [JsonProperty("$id")]
            public string id { get; set; }
            public string EmployeeCode { get; set; }
            public string UserName { get; set; }
            public string Post { get; set; }
            public string PositionGrade { get; set; }
            public string Mobile { get; set; }
            public DateTime LoginDate { get; set; }
            public string Location { get; set; }
            public string Department { get; set; }
            public string UserType { get; set; }
            public string FNEmployeeCode { get; set; }
            public string FUserType { get; set; }
            public string EPEmployeeCode { get; set; }
            public string EPMEmployeeCode { get; set; }
            public string Token { get; set; }
        }


    }
}

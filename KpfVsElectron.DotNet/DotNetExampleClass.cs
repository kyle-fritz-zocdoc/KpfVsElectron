using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KpfVsElectron.DotNet
{
    public class DotNetExampleClass
    {
        // Method must be a Func<object,Task<object>>
        public async Task<object> GetMessage(object args)
        {
            return "Hello from .NET! The CLR version is " + Environment.Version.ToString() + ".";
        }
    }
}

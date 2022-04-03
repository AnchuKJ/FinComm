using Microsoft.AspNetCore.Mvc;
using Nethereum.Hex.HexTypes;
using Nethereum.Web3;

namespace FinComm.Controllers
{
    public class TransactionController : Controller
    {
        [HttpGet("Test")]
        public string Test()
        {
            return "testing";
        }

        [HttpPost("posttransaction")]
        public async Task<IActionResult> PostTransaction([FromBody] double amount)
        {
            try
            {
                var web3 = new Web3("HTTP://127.0.0.1:7545");

                var senderAddress = "0x881f4022F61012Ea5FE728eE2ADFe69A7bdAAAE8"; // put actual sender address
                var receiveAddress = "0xf524b8ef813fe667843EA8EB3513570df02A157B"; //put actual receiver address

                var txCount = await web3.Eth.Transactions.GetTransactionCount.SendRequestAsync(senderAddress);

                var amountInWei = Web3.Convert.ToWei(amount/1000);
                var balance = await web3.Eth.GetBalance.SendRequestAsync(senderAddress);
                Console.WriteLine(balance.Value);

                var sendAmount = new HexBigInteger(amountInWei);
                await web3.Eth.TransactionManager.SendTransactionAsync(senderAddress, receiveAddress, sendAmount);
            }
            catch (Exception ex)
            {

            }
            return new OkObjectResult(amount);
        }
    }
}

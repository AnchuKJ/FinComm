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

                var senderAddress = "0xc5951B31f031767b2cc6CAf9877cd67BFaa18A97"; // put actual sender address
                var receiveAddress = "0x48Fd3b652A642EF5ac6614340E8d4534CD90963F"; //put actual receiver address

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
